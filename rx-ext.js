var { Observable, SingleAssignmentDisposable, config } = require("./rx-lite.js");
var { fromEvent, merge, timer } = Observable;
var { getBackedoffDelay } = require("./backoff");
var { identity, isArray, map, noop } = require("./misc");
var debounce = require("./debounce");

config.useNativeEvents = true;

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
