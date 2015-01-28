var Promise_ = require("es6-promise").Promise;
var { Observable, config } = require("rx/dist/rx.lite.js");
var { fromEvent, merge } = Observable;
var { debounce, identity, isArray, map, noop } = require("./misc");

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
};
