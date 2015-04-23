var Promise_ = require("es6-promise").Promise;
var { Observable, SingleAssignmentDisposable, config } = require("rx/dist/rx.lite.js");
var { fromEvent, merge, timer } = Observable;
var { getBackedoffDelay } = require("./backoff");
var { identity, isArray, map, noop } = require("./misc");
var debounce = require("./debounce");

config.useNativeEvents = true;
config.Promise = Promise_;

var observableProto = Observable.prototype;

if (__DEV__) {
  observableProto.log = function(ns, fn) {
    if (!ns) ns = "";
    return this.do(
      x  => console.log(ns, "next",  (fn || identity)(x)),
      e  => console.log(ns, "error", e),
      () => console.log(ns, "completed")
    );
  };
} else {
  observableProto.log = function() { return this; };
}

observableProto.each = function(onNext) {
  return this.subscribe(onNext, noop);
};

var simpleEquals = (a, b) => a === b;
observableProto.changes = function(keySelector) {
  return this.distinctUntilChanged(keySelector, simpleEquals);
};

observableProto.customDebounce = function(time, debounceOptions) {
  var source = this;
  return Observable.create(observer => {
    var debounced = debounce(val => observer.onNext(val), time, debounceOptions);
    var subscribe = source.subscribe(
      debounced,
      e  => observer.onError(e),
      () => observer.onCompleted()
    );
    return () => {
      debounced.dispose();
      subscribe.dispose();
    };
  });
};

observableProto.simpleTimeout = function(time, errMessage="timeout") {
  var source = this;
  return Observable.create(observer => {
    var sad = new SingleAssignmentDisposable();
    var timer = setTimeout(() => observer.onError(new Error(errMessage)), time);

    sad.setDisposable(
      source.subscribe(
        x => {
          clearTimeout(timer);
          observer.onNext(x);
        },
        e => observer.onError(e),
        _ => observer.onCompleted()));

    return () => {
      clearTimeout(timer);
      sad.dispose();
    };
  });
};

function retryWithBackoff(fn, { retryDelay, totalRetry, shouldRetry, resetDelay }) {
  var retryCount = 0;
  var debounceRetryCount;
  if (resetDelay > 0) {
    debounceRetryCount = debounce(() => retryCount = 0, resetDelay);
  } else {
    debounceRetryCount = noop;
  }

  return function doRetry() {
    // do not leak arguments
    for (var i = 0, l = arguments.length, args = Array(l); i < l; i++)
      args[i] = arguments[i];

    return fn.apply(null, args).catch(err => {
      var wantRetry = !shouldRetry || shouldRetry(err, retryCount);
      if (!wantRetry || retryCount++ >= totalRetry) {
        throw err;
      }

      var fuzzedDelay = getBackedoffDelay(retryDelay, retryCount);
      return timer(fuzzedDelay).flatMap(() => {
        debounceRetryCount();
        return doRetry.apply(null, args);
      });
    });
  };
}

observableProto.flatMapMaxConcurrent = function(selector, maxConcurrent) {
  var source = this;
  return Observable.create(observer => {
    var max = 0;
    var active = [];
    var queue = [];

    function launchQueuedSources(m) {
      var activeCount = active.length;
      if (activeCount < m) {
        var newSources = queue.splice(0, m - activeCount);
        for (var i = 0; i < newSources.length; i++)
          handleNewSource(newSources[i]);
      }
    }

    function onNewMax(oldMax, newMax) {
      if (newMax > oldMax)
        launchQueuedSources(newMax);
    }

    function handleNewSource(src) {
      var sad = new SingleAssignmentDisposable();
      active.push(sad);
      sad.setDisposable(src.subscribe(
        (val) => observer.onNext(val),
        (err) => observer.onError(err),
        () => handleCompletion(sad)
      ));
    }

    function handleCompletion(subscription) {
      var index = active.indexOf(subscription);
      if (index >= 0)
        active.splice(index, 1);

      launchQueuedSources(max);
    }

    var maxSub = maxConcurrent
      .subscribe(
        (newMax) => {
          var oldMax = max;
          max = newMax;
          onNewMax(oldMax, newMax);
        },
        (err) => observer.onError(err)
      );

    var srcSub = source.subscribe(
      (src) => {
        try {
          src = selector(src);
        } catch(e) {
          return observer.onError(e);
        }
        queue.push(src);
        launchQueuedSources(max);
      },
      (err) => observer.onError(err),
      () => observer.onCompleted()
    );

    return () => {
      maxSub.dispose();
      srcSub.dispose();
      queue.length = 0;
      for (var i = 0; i < active.length; i++)
        active[i].dispose();
      active.length = 0;
    };
  });
};

module.exports = {
  on(elt, evts) {
    if (isArray(evts)) {
      return merge(map(evts, evt => fromEvent(elt, evt)));
    } else {
      return fromEvent(elt, evts);
    }
  },
  first(obs) {
    return obs.take(1);
  },
  only(x) {
    return Observable.never().startWith(x);
  },
  retryWithBackoff,
};
