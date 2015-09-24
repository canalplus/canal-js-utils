require("rxjs/add/operator/startWith");
require("rxjs/add/operator/take");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/mergeMap");

var { Observable } = require("rxjs/Observable");
var { mergeStatic } = require("rxjs/operator/merge");
var fromEvent = require("rxjs/observable/FromEventObservable").FromEventObservable.create;
var timer = require("rxjs/observable/TimerObservable").TimerObservable.create;
var never = require("rxjs/observable/NeverObservable").NeverObservable.create;
var { getBackedoffDelay } = require("./backoff");
var log = require("./log");
var debounce = require("./debounce");

var observableProto = Observable.prototype;

observableProto.log = function(ns, fn) {
  if (!ns) ns = "";
  return this.do(
    x  => log.debug(ns, "next",  (fn ? fn(x) : x)),
    e  => log.debug(ns, "error", e),
    () => log.debug(ns, "completed")
  );
};

function retryWithBackoff(fn, { retryDelay, totalRetry, shouldRetry, resetDelay }) {
  var retryCount = 0;
  var debounceRetryCount;
  if (resetDelay > 0) {
    debounceRetryCount = debounce(() => retryCount = 0, resetDelay);
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
        debounceRetryCount && debounceRetryCount();
        return doRetry.apply(null, args);
      });
    });
  };
}

function on(elt, evts) {
  if (Array.isArray(evts)) {
    return mergeStatic.apply(null, evts.map((evt) => fromEvent(elt, evt)));
  } else {
    return fromEvent(elt, evts);
  }
}

function first(obs) {
  return obs.take(1);
}

function only(x) {
  return never().startWith(x);
}

module.exports = {
  on,
  first,
  only,
  retryWithBackoff,
};
