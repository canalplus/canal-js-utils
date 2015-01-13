var Promise_ = require("es6-promise").Promise;
var { Observable, config } = require("rx");
var { fromEvent, merge } = Observable;
var _ = require("./misc");

config.useNativeEvents = true;
config.Promise = Promise_;

if (__DEV__) {
  Observable.prototype.log = function(ns, fn) {
    if (!ns) ns = "";
    return this.do(
      x  => console.log(ns, "next",  (fn || _.identity)(x)),
      e  => console.log(ns, "error", e),
      () => console.log(ns, "completed")
    );
  };
} else {
  Observable.prototype.log = function() { return this; };
}

Observable.prototype.each = function(onNext) {
  return this.subscribe(onNext, _.noop);
};

var simpleEquals = (a, b) => a === b;
Observable.prototype.changes = function(keySelector) {
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
