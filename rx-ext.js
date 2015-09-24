var { Observable } = require("./rx-lite.js");
var { fromEvent, merge, timer } = Observable;
var { getBackedoffDelay } = require("./backoff");
var { identity, isArray, map, noop } = require("./misc");
var log = require("./log");
var debounce = require("./debounce");

var observableProto = Observable.prototype;

observableProto.each = function(onNext) {
  return this.subscribe(onNext, noop);
};

observableProto.pluck = function(key) {
  return this.map(v => v[key]);
};

var simpleEquals = (a, b) => a === b;
observableProto.changes = function() {
  return this.distinctUntilChanged(simpleEquals);
};

observableProto.customDebounce = function(time, debounceOptions) {
  var source = this;
  return Observable.create(observer => {
    var debounced = debounce(val => observer.next(val), time, debounceOptions);
    var subscribe = source.subscribe(
      debounced,
      e  => observer.error(e),
      () => observer.complete()
    );
    return () => {
      debounced.dispose();
      subscribe.unsubscribe();
    };
  });
};

observableProto.log = function(ns, fn) {
  if (!ns) ns = "";
  return this.do(
    x  => log.debug(ns, "next",  (fn || identity)(x)),
    e  => log.debug(ns, "error", e),
    () => log.debug(ns, "completed")
  );
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

function on(elt, evts) {
  if (isArray(evts)) {
    return merge.apply(null, map(evts, evt => fromEvent(elt, evt)));
  } else {
    return fromEvent(elt, evts);
  }
}

function first(obs) {
  return obs.take(1);
}

function only(x) {
  return Observable.never().startWith(x);
}

module.exports = {
  on,
  first,
  only,
  retryWithBackoff,
};
