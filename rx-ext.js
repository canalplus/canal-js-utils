var Promise_ = require("es6-promise").Promise;
var { Observable, config } = require("rx/dist/rx.lite.js");
var { fromEvent, merge } = Observable;
var _ = require("./misc");

config.useNativeEvents = true;
config.Promise = Promise_;

var observableProto = Observable.prototype;

if (__DEV__) {
  observableProto.log = function(ns, fn) {
    if (!ns) ns = "";
    return this.do(
      x  => console.log(ns, "next",  (fn || _.identity)(x)),
      e  => console.log(ns, "error", e),
      () => console.log(ns, "completed")
    );
  };
} else {
  observableProto.log = function() { return this; };
}

observableProto.each = function(onNext) {
  return this.subscribe(onNext, _.noop);
};

var simpleEquals = (a, b) => a === b;
observableProto.changes = function(keySelector) {
  return this.distinctUntilChanged(keySelector, simpleEquals);
};

module.exports = {
  on(elt, evts) {
    if (_.isArray(evts)) {
      return merge(_.map(evts, evt => fromEvent(elt, evt)));
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
