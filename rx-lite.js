// Rx v5.0 06fc12019bbf5029b6f835a9949f3c7232f42cb9

var Rx =
/******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};

/******/  // The require function
/******/  function __webpack_require__(moduleId) {

/******/    // Check if module is in cache
/******/    if(installedModules[moduleId])
/******/      return installedModules[moduleId].exports;

/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      exports: {},
/******/      id: moduleId,
/******/      loaded: false
/******/    };

/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/    // Flag the module as loaded
/******/    module.loaded = true;

/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }


/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;

/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;

/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";

/******/  // Load entry module and return exports
/******/  return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  var Observable_1 = __webpack_require__(1);
  exports.Observable = Observable_1.default;
  // operators
  var combineLatest_static_1 = __webpack_require__(10);
  Observable_1.default.combineLatest = combineLatest_static_1.default;
  var concat_static_1 = __webpack_require__(21);
  Observable_1.default.concat = concat_static_1.default;
  var DeferObservable_1 = __webpack_require__(26);
  Observable_1.default.defer = DeferObservable_1.default.create;
  var EmptyObservable_1 = __webpack_require__(13);
  Observable_1.default.empty = EmptyObservable_1.default.create;
  var ForkJoinObservable_1 = __webpack_require__(27);
  Observable_1.default.forkJoin = ForkJoinObservable_1.default.create;
  var FromObservable_1 = __webpack_require__(28);
  Observable_1.default.from = FromObservable_1.default.create;
  var ArrayObservable_1 = __webpack_require__(11);
  Observable_1.default.fromArray = ArrayObservable_1.default.create;
  var FromEventObservable_1 = __webpack_require__(33);
  Observable_1.default.fromEvent = FromEventObservable_1.default.create;
  var FromEventPatternObservable_1 = __webpack_require__(34);
  Observable_1.default.fromEventPattern = FromEventPatternObservable_1.default.create;
  var PromiseObservable_1 = __webpack_require__(29);
  Observable_1.default.fromPromise = PromiseObservable_1.default.create;
  var IntervalObservable_1 = __webpack_require__(35);
  Observable_1.default.interval = IntervalObservable_1.default.create;
  var merge_static_1 = __webpack_require__(43);
  Observable_1.default.merge = merge_static_1.default;
  var InfiniteObservable_1 = __webpack_require__(45);
  Observable_1.default.never = InfiniteObservable_1.default.create;
  Observable_1.default.of = ArrayObservable_1.default.of;
  var RangeObservable_1 = __webpack_require__(46);
  Observable_1.default.range = RangeObservable_1.default.create;
  var ErrorObservable_1 = __webpack_require__(47);
  Observable_1.default.throw = ErrorObservable_1.default.create;
  var TimerObservable_1 = __webpack_require__(48);
  Observable_1.default.timer = TimerObservable_1.default.create;
  var zip_static_1 = __webpack_require__(49);
  Observable_1.default.zip = zip_static_1.default;
  var observableProto = Observable_1.default.prototype;
  var buffer_1 = __webpack_require__(51);
  observableProto.buffer = buffer_1.default;
  var bufferCount_1 = __webpack_require__(52);
  observableProto.bufferCount = bufferCount_1.default;
  var bufferTime_1 = __webpack_require__(53);
  observableProto.bufferTime = bufferTime_1.default;
  var bufferToggle_1 = __webpack_require__(54);
  observableProto.bufferToggle = bufferToggle_1.default;
  var bufferWhen_1 = __webpack_require__(55);
  observableProto.bufferWhen = bufferWhen_1.default;
  var catch_1 = __webpack_require__(56);
  observableProto.catch = catch_1.default;
  var combineAll_1 = __webpack_require__(57);
  observableProto.combineAll = combineAll_1.default;
  var combineLatest_1 = __webpack_require__(58);
  observableProto.combineLatest = combineLatest_1.default;
  var concat_1 = __webpack_require__(59);
  observableProto.concat = concat_1.default;
  var concatAll_1 = __webpack_require__(60);
  observableProto.concatAll = concatAll_1.default;
  var concatMap_1 = __webpack_require__(61);
  observableProto.concatMap = concatMap_1.default;
  var concatMapTo_1 = __webpack_require__(63);
  observableProto.concatMapTo = concatMapTo_1.default;
  var count_1 = __webpack_require__(65);
  observableProto.count = count_1.default;
  var dematerialize_1 = __webpack_require__(67);
  observableProto.dematerialize = dematerialize_1.default;
  var debounce_1 = __webpack_require__(68);
  observableProto.debounce = debounce_1.default;
  var debounceTime_1 = __webpack_require__(69);
  observableProto.debounceTime = debounceTime_1.default;
  var defaultIfEmpty_1 = __webpack_require__(70);
  observableProto.defaultIfEmpty = defaultIfEmpty_1.default;
  var delay_1 = __webpack_require__(71);
  observableProto.delay = delay_1.default;
  var distinctUntilChanged_1 = __webpack_require__(72);
  observableProto.distinctUntilChanged = distinctUntilChanged_1.default;
  var do_1 = __webpack_require__(73);
  observableProto.do = do_1.default;
  var expand_1 = __webpack_require__(74);
  observableProto.expand = expand_1.default;
  var filter_1 = __webpack_require__(76);
  observableProto.filter = filter_1.default;
  var finally_1 = __webpack_require__(77);
  observableProto.finally = finally_1.default;
  var first_1 = __webpack_require__(78);
  observableProto.first = first_1.default;
  var groupBy_1 = __webpack_require__(80);
  observableProto.groupBy = groupBy_1.groupBy;
  var ignoreElements_1 = __webpack_require__(86);
  observableProto.ignoreElements = ignoreElements_1.default;
  var every_1 = __webpack_require__(87);
  observableProto.every = every_1.default;
  var last_1 = __webpack_require__(88);
  observableProto.last = last_1.default;
  var map_1 = __webpack_require__(89);
  observableProto.map = map_1.default;
  var mapTo_1 = __webpack_require__(90);
  observableProto.mapTo = mapTo_1.default;
  var materialize_1 = __webpack_require__(91);
  observableProto.materialize = materialize_1.default;
  var merge_1 = __webpack_require__(92);
  observableProto.merge = merge_1.default;
  var mergeAll_1 = __webpack_require__(93);
  observableProto.mergeAll = mergeAll_1.default;
  var mergeMap_1 = __webpack_require__(94);
  observableProto.mergeMap = mergeMap_1.default;
  observableProto.flatMap = mergeMap_1.default;
  var mergeMapTo_1 = __webpack_require__(95);
  observableProto.mergeMapTo = mergeMapTo_1.default;
  observableProto.flatMapTo = mergeMapTo_1.default;
  var multicast_1 = __webpack_require__(96);
  observableProto.multicast = multicast_1.default;
  var observeOn_1 = __webpack_require__(98);
  observableProto.observeOn = observeOn_1.default;
  var partition_1 = __webpack_require__(99);
  observableProto.partition = partition_1.default;
  var publish_1 = __webpack_require__(101);
  observableProto.publish = publish_1.default;
  var publishBehavior_1 = __webpack_require__(102);
  observableProto.publishBehavior = publishBehavior_1.default;
  var publishReplay_1 = __webpack_require__(104);
  observableProto.publishReplay = publishReplay_1.default;
  var reduce_1 = __webpack_require__(106);
  observableProto.reduce = reduce_1.default;
  var repeat_1 = __webpack_require__(107);
  observableProto.repeat = repeat_1.default;
  var retry_1 = __webpack_require__(108);
  observableProto.retry = retry_1.default;
  var retryWhen_1 = __webpack_require__(109);
  observableProto.retryWhen = retryWhen_1.default;
  var sample_1 = __webpack_require__(110);
  observableProto.sample = sample_1.default;
  var sampleTime_1 = __webpack_require__(111);
  observableProto.sampleTime = sampleTime_1.default;
  var scan_1 = __webpack_require__(112);
  observableProto.scan = scan_1.default;
  var share_1 = __webpack_require__(113);
  observableProto.share = share_1.default;
  var shareReplay_1 = __webpack_require__(114);
  observableProto.shareReplay = shareReplay_1.default;
  var single_1 = __webpack_require__(115);
  observableProto.single = single_1.default;
  var skip_1 = __webpack_require__(116);
  observableProto.skip = skip_1.default;
  var skipUntil_1 = __webpack_require__(117);
  observableProto.skipUntil = skipUntil_1.default;
  var startWith_1 = __webpack_require__(118);
  observableProto.startWith = startWith_1.default;
  var subscribeOn_1 = __webpack_require__(119);
  observableProto.subscribeOn = subscribeOn_1.default;
  var switch_1 = __webpack_require__(121);
  observableProto.switch = switch_1.default;
  var switchMap_1 = __webpack_require__(122);
  observableProto.switchMap = switchMap_1.default;
  var switchMapTo_1 = __webpack_require__(123);
  observableProto.switchMapTo = switchMapTo_1.default;
  var take_1 = __webpack_require__(124);
  observableProto.take = take_1.default;
  var takeUntil_1 = __webpack_require__(125);
  observableProto.takeUntil = takeUntil_1.default;
  var throttle_1 = __webpack_require__(126);
  observableProto.throttle = throttle_1.default;
  var timeout_1 = __webpack_require__(127);
  observableProto.timeout = timeout_1.default;
  var timeoutWith_1 = __webpack_require__(129);
  observableProto.timeoutWith = timeoutWith_1.default;
  var toArray_1 = __webpack_require__(130);
  observableProto.toArray = toArray_1.default;
  var toPromise_1 = __webpack_require__(131);
  observableProto.toPromise = toPromise_1.default;
  var window_1 = __webpack_require__(132);
  observableProto.window = window_1.default;
  var windowCount_1 = __webpack_require__(133);
  observableProto.windowCount = windowCount_1.default;
  var windowTime_1 = __webpack_require__(134);
  observableProto.windowTime = windowTime_1.default;
  var windowToggle_1 = __webpack_require__(135);
  observableProto.windowToggle = windowToggle_1.default;
  var windowWhen_1 = __webpack_require__(136);
  observableProto.windowWhen = windowWhen_1.default;
  var withLatestFrom_1 = __webpack_require__(137);
  observableProto.withLatestFrom = withLatestFrom_1.default;
  var zip_1 = __webpack_require__(138);
  observableProto.zip = zip_1.default;
  var zipAll_1 = __webpack_require__(139);
  observableProto.zipAll = zipAll_1.default;
  var Subject_1 = __webpack_require__(81);
  exports.Subject = Subject_1.default;
  var Subscription_1 = __webpack_require__(6);
  exports.Subscription = Subscription_1.default;
  var Subscriber_1 = __webpack_require__(2);
  exports.Subscriber = Subscriber_1.default;
  var ReplaySubject_1 = __webpack_require__(105);
  exports.ReplaySubject = ReplaySubject_1.default;
  var BehaviorSubject_1 = __webpack_require__(103);
  exports.BehaviorSubject = BehaviorSubject_1.default;
  var ConnectableObservable_1 = __webpack_require__(97);
  exports.ConnectableObservable = ConnectableObservable_1.default;
  var Notification_1 = __webpack_require__(32);
  exports.Notification = Notification_1.default;
  var EmptyError_1 = __webpack_require__(79);
  exports.EmptyError = EmptyError_1.default;
  var ArgumentOutOfRangeError_1 = __webpack_require__(140);
  exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.default;
  var nextTick_1 = __webpack_require__(37);
  var immediate_1 = __webpack_require__(22);
  var Scheduler = {
      nextTick: nextTick_1.default,
      immediate: immediate_1.default
  };
  exports.Scheduler = Scheduler;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  var Subscriber_1 = __webpack_require__(2);
  var root_1 = __webpack_require__(7);
  var Symbol_observable_1 = __webpack_require__(9);
  /**
   * A representation of any set of values over any amount of time. This the most basic building block
   * of RxJS.
   *
   * @class Observable<T>
   */
  var Observable = (function () {
      /**
       * @constructor
       * @param {Function} subscribe the function that is
       * called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values
       * can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify
       * of a successful completion.
       */
      function Observable(subscribe) {
          this._isScalar = false;
          if (subscribe) {
              this._subscribe = subscribe;
          }
      }
      /**
       * @method lift
       * @param {Operator} operator the operator defining the operation to take on the observable
       * @returns {Observable} a new observable with the Operator applied
       * @description creates a new Observable, with this Observable as the source, and the passed
       * operator defined as the new observable's operator.
       */
      Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
      };
      /**
       * @method Symbol.observable
       * @returns {Observable} this instance of the observable
       * @description an interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
       */
      Observable.prototype[Symbol_observable_1.default] = function () {
          return this;
      };
      /**
       * @method subscribe
       * @param {Observer|Function} observerOrNext (optional) either an observer defining all functions to be called,
       *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
       * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
       *  the error will be thrown as unhandled
       * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
       * @returns {Subscription} a subscription reference to the registered handlers
       * @description registers handlers for handling emitted values, error and completions from the observable, and
       *  executes the observable's subscriber function, which will take action to set up the underlying data stream
       */
      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var subscriber;
          if (observerOrNext && typeof observerOrNext === "object") {
              if (observerOrNext instanceof Subscriber_1.default) {
                  subscriber = observerOrNext;
              }
              else {
                  subscriber = new Subscriber_1.default(observerOrNext);
              }
          }
          else {
              var next = observerOrNext;
              subscriber = Subscriber_1.default.create(next, error, complete);
          }
          subscriber.add(this._subscribe(subscriber));
          return subscriber;
      };
      /**
       * @method forEach
       * @param {Function} next a handler for each value emitted by the observable
       * @param {PromiseConstructor} PromiseCtor? a constructor function used to instantiate the Promise
       * @returns {Promise} a promise that either resolves on observable completion or
       *  rejects with the handled error
       */
      Observable.prototype.forEach = function (next, PromiseCtor) {
          var _this = this;
          if (!PromiseCtor) {
              if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                  PromiseCtor = root_1.root.Rx.config.Promise;
              }
              else if (root_1.root.Promise) {
                  PromiseCtor = root_1.root.Promise;
              }
          }
          if (!PromiseCtor) {
              throw new Error('no Promise impl found');
          }
          return new PromiseCtor(function (resolve, reject) {
              _this.subscribe(next, reject, resolve);
          });
      };
      Observable.prototype._subscribe = function (subscriber) {
          return this.source._subscribe(this.operator.call(subscriber));
      };
      // HACK: Since TypeScript inherits static properties too, we have to
      // fight against TypeScript here so Subject can have a different static create signature
      /**
       * @static
       * @method create
       * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
       * @returns {Observable} a new cold observable
       * @description creates a new cold Observable by calling the Observable constructor
       */
      Observable.create = function (subscribe) {
          return new Observable(subscribe);
      };
      return Observable;
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = Observable;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var noop_1 = __webpack_require__(3);
  var throwError_1 = __webpack_require__(4);
  var tryOrOnError_1 = __webpack_require__(5);
  var Subscription_1 = __webpack_require__(6);
  var Subscriber = (function (_super) {
      __extends(Subscriber, _super);
      function Subscriber(destination) {
          _super.call(this);
          this._isUnsubscribed = false;
          this.destination = destination;
          if (!destination) {
              return;
          }
          var subscription = destination._subscription;
          if (subscription) {
              this._subscription = subscription;
          }
          else if (destination instanceof Subscriber) {
              this._subscription = destination;
          }
      }
      Subscriber.create = function (next, error, complete) {
          var subscriber = new Subscriber();
          subscriber._next = (typeof next === "function") && tryOrOnError_1.default(next) || noop_1.default;
          subscriber._error = (typeof error === "function") && error || throwError_1.default;
          subscriber._complete = (typeof complete === "function") && complete || noop_1.default;
          return subscriber;
      };
      Subscriber.prototype._next = function (value) {
          this.destination.next(value);
      };
      Subscriber.prototype._error = function (err) {
          this.destination.error(err);
      };
      Subscriber.prototype._complete = function () {
          this.destination.complete();
      };
      Object.defineProperty(Subscriber.prototype, "isUnsubscribed", {
          get: function () {
              var subscription = this._subscription;
              if (subscription) {
                  // route to the shared Subscription if it exists
                  return this._isUnsubscribed || subscription.isUnsubscribed;
              }
              else {
                  return this._isUnsubscribed;
              }
          },
          set: function (value) {
              var subscription = this._subscription;
              if (subscription) {
                  // route to the shared Subscription if it exists
                  subscription.isUnsubscribed = Boolean(value);
              }
              else {
                  this._isUnsubscribed = Boolean(value);
              }
          },
          enumerable: true,
          configurable: true
      });
      Subscriber.prototype.add = function (sub) {
          // route add to the shared Subscription if it exists
          var _subscription = this._subscription;
          if (_subscription) {
              _subscription.add(sub);
          }
          else {
              _super.prototype.add.call(this, sub);
          }
      };
      Subscriber.prototype.remove = function (sub) {
          // route remove to the shared Subscription if it exists
          if (this._subscription) {
              this._subscription.remove(sub);
          }
          else {
              _super.prototype.remove.call(this, sub);
          }
      };
      Subscriber.prototype.unsubscribe = function () {
          if (this._isUnsubscribed) {
              return;
          }
          else if (this._subscription) {
              this._isUnsubscribed = true;
          }
          else {
              _super.prototype.unsubscribe.call(this);
          }
      };
      Subscriber.prototype.next = function (value) {
          if (!this.isUnsubscribed) {
              this._next(value);
          }
      };
      Subscriber.prototype.error = function (error) {
          if (!this.isUnsubscribed) {
              this._error(error);
              this.unsubscribe();
          }
      };
      Subscriber.prototype.complete = function () {
          if (!this.isUnsubscribed) {
              this._complete();
              this.unsubscribe();
          }
      };
      return Subscriber;
  })(Subscription_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = Subscriber;


/***/ },
/* 3 */
/***/ function(module, exports) {

  function noop() { }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = noop;


/***/ },
/* 4 */
/***/ function(module, exports) {

  function throwError(e) { throw e; }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = throwError;


/***/ },
/* 5 */
/***/ function(module, exports) {

  function tryOrOnError(target) {
      function tryCatcher() {
          try {
              tryCatcher.target.apply(this, arguments);
          }
          catch (e) {
              this.error(e);
          }
      }
      tryCatcher.target = target;
      return tryCatcher;
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = tryOrOnError;


/***/ },
/* 6 */
/***/ function(module, exports) {

  var Subscription = (function () {
      function Subscription(_unsubscribe) {
          this.isUnsubscribed = false;
          if (_unsubscribe) {
              this._unsubscribe = _unsubscribe;
          }
      }
      Subscription.prototype._unsubscribe = function () {
      };
      Subscription.prototype.unsubscribe = function () {
          if (this.isUnsubscribed) {
              return;
          }
          this.isUnsubscribed = true;
          var unsubscribe = this._unsubscribe;
          var subscriptions = this._subscriptions;
          this._subscriptions = void 0;
          if (unsubscribe) {
              unsubscribe.call(this);
          }
          if (subscriptions != null) {
              var index = -1;
              var len = subscriptions.length;
              while (++index < len) {
                  subscriptions[index].unsubscribe();
              }
          }
      };
      Subscription.prototype.add = function (subscription) {
          // return early if:
          //  1. the subscription is null
          //  2. we're attempting to add our this
          //  3. we're attempting to add the static `empty` Subscription
          if (!subscription || (subscription === this) || (subscription === Subscription.EMPTY)) {
              return;
          }
          var sub = subscription;
          switch (typeof subscription) {
              case "function":
                  sub = new Subscription(subscription);
              case "object":
                  if (sub.isUnsubscribed || typeof sub.unsubscribe !== "function") {
                      break;
                  }
                  else if (this.isUnsubscribed) {
                      sub.unsubscribe();
                  }
                  else {
                      var subscriptions = this._subscriptions || (this._subscriptions = []);
                      subscriptions.push(sub);
                  }
                  break;
              default:
                  throw new Error('Unrecognized subscription ' + subscription + ' added to Subscription.');
          }
      };
      Subscription.prototype.remove = function (subscription) {
          // return early if:
          //  1. the subscription is null
          //  2. we're attempting to remove ourthis
          //  3. we're attempting to remove the static `empty` Subscription
          if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
              return;
          }
          var subscriptions = this._subscriptions;
          if (subscriptions) {
              var subscriptionIndex = subscriptions.indexOf(subscription);
              if (subscriptionIndex !== -1) {
                  subscriptions.splice(subscriptionIndex, 1);
              }
          }
      };
      Subscription.EMPTY = (function (empty) {
          empty.isUnsubscribed = true;
          return empty;
      }(new Subscription()));
      return Subscription;
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = Subscription;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(module, global) {var objectTypes = {
      'boolean': false,
      'function': true,
      'object': true,
      'number': false,
      'string': false,
      'undefined': false
  };
  exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
      exports.root = freeGlobal;
  }

  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module), (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = function(module) {
    if(!module.webpackPolyfill) {
      module.deprecate = function() {};
      module.paths = [];
      // module.parent = undefined by default
      module.children = [];
      module.webpackPolyfill = 1;
    }
    return module;
  }


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  var root_1 = __webpack_require__(7);
  if (!root_1.root.Symbol) {
      root_1.root.Symbol = {};
  }
  if (!root_1.root.Symbol.observable) {
      if (typeof root_1.root.Symbol.for === 'function') {
          root_1.root.Symbol.observable = root_1.root.Symbol.for('observable');
      }
      else {
          root_1.root.Symbol.observable = '@@observable';
      }
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = root_1.root.Symbol.observable;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  var ArrayObservable_1 = __webpack_require__(11);
  var combineLatest_support_1 = __webpack_require__(14);
  function combineLatest() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
      }
      var project, scheduler;
      if (typeof observables[observables.length - 1].schedule === 'function') {
          scheduler = observables.pop();
      }
      if (typeof observables[observables.length - 1] === 'function') {
          project = observables.pop();
      }
      return new ArrayObservable_1.default(observables, scheduler).lift(new combineLatest_support_1.CombineLatestOperator(project));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = combineLatest;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var ScalarObservable_1 = __webpack_require__(12);
  var EmptyObservable_1 = __webpack_require__(13);
  var ArrayObservable = (function (_super) {
      __extends(ArrayObservable, _super);
      function ArrayObservable(array, scheduler) {
          _super.call(this);
          this.array = array;
          this.scheduler = scheduler;
          if (!scheduler && array.length === 1) {
              this._isScalar = true;
              this.value = array[0];
          }
      }
      ArrayObservable.create = function (array, scheduler) {
          return new ArrayObservable(array, scheduler);
      };
      ArrayObservable.of = function () {
          var array = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              array[_i - 0] = arguments[_i];
          }
          var scheduler = array[array.length - 1];
          if (scheduler && typeof scheduler.schedule === 'function') {
              array.pop();
          }
          else {
              scheduler = void 0;
          }
          var len = array.length;
          if (len > 1) {
              return new ArrayObservable(array, scheduler);
          }
          else if (len === 1) {
              return new ScalarObservable_1.default(array[0], scheduler);
          }
          else {
              return new EmptyObservable_1.default(scheduler);
          }
      };
      ArrayObservable.dispatch = function (state) {
          var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
          if (index >= count) {
              subscriber.complete();
              return;
          }
          subscriber.next(array[index]);
          if (subscriber.isUnsubscribed) {
              return;
          }
          state.index = index + 1;
          this.schedule(state);
      };
      ArrayObservable.prototype._subscribe = function (subscriber) {
          var index = 0;
          var array = this.array;
          var count = array.length;
          var scheduler = this.scheduler;
          if (scheduler) {
              subscriber.add(scheduler.schedule(ArrayObservable.dispatch, 0, {
                  array: array, index: index, count: count, subscriber: subscriber
              }));
          }
          else {
              for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
                  subscriber.next(array[i]);
              }
              subscriber.complete();
          }
      };
      return ArrayObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ArrayObservable;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var ScalarObservable = (function (_super) {
      __extends(ScalarObservable, _super);
      function ScalarObservable(value, scheduler) {
          _super.call(this);
          this.value = value;
          this.scheduler = scheduler;
          this._isScalar = true;
      }
      ScalarObservable.create = function (value, scheduler) {
          return new ScalarObservable(value, scheduler);
      };
      ScalarObservable.dispatch = function (state) {
          var done = state.done, value = state.value, subscriber = state.subscriber;
          if (done) {
              subscriber.complete();
              return;
          }
          subscriber.next(value);
          if (subscriber.isUnsubscribed) {
              return;
          }
          state.done = true;
          this.schedule(state);
      };
      ScalarObservable.prototype._subscribe = function (subscriber) {
          var value = this.value;
          var scheduler = this.scheduler;
          if (scheduler) {
              subscriber.add(scheduler.schedule(ScalarObservable.dispatch, 0, {
                  done: false, value: value, subscriber: subscriber
              }));
          }
          else {
              subscriber.next(value);
              if (!subscriber.isUnsubscribed) {
                  subscriber.complete();
              }
          }
      };
      return ScalarObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ScalarObservable;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var EmptyObservable = (function (_super) {
      __extends(EmptyObservable, _super);
      function EmptyObservable(scheduler) {
          _super.call(this);
          this.scheduler = scheduler;
      }
      EmptyObservable.create = function (scheduler) {
          return new EmptyObservable(scheduler);
      };
      EmptyObservable.dispatch = function (_a) {
          var subscriber = _a.subscriber;
          subscriber.complete();
      };
      EmptyObservable.prototype._subscribe = function (subscriber) {
          var scheduler = this.scheduler;
          if (scheduler) {
              subscriber.add(scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber }));
          }
          else {
              subscriber.complete();
          }
      };
      return EmptyObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = EmptyObservable;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var OuterSubscriber_1 = __webpack_require__(17);
  var subscribeToResult_1 = __webpack_require__(18);
  var CombineLatestOperator = (function () {
      function CombineLatestOperator(project) {
          this.project = project;
      }
      CombineLatestOperator.prototype.call = function (subscriber) {
          return new CombineLatestSubscriber(subscriber, this.project);
      };
      return CombineLatestOperator;
  })();
  exports.CombineLatestOperator = CombineLatestOperator;
  var CombineLatestSubscriber = (function (_super) {
      __extends(CombineLatestSubscriber, _super);
      function CombineLatestSubscriber(destination, project) {
          _super.call(this, destination);
          this.project = project;
          this.active = 0;
          this.values = [];
          this.observables = [];
          this.toRespond = [];
      }
      CombineLatestSubscriber.prototype._next = function (observable) {
          var toRespond = this.toRespond;
          toRespond.push(toRespond.length);
          this.observables.push(observable);
      };
      CombineLatestSubscriber.prototype._complete = function () {
          var observables = this.observables;
          var len = observables.length;
          if (len === 0) {
              this.destination.complete();
          }
          else {
              this.active = len;
              for (var i = 0; i < len; i++) {
                  var observable = observables[i];
                  this.add(subscribeToResult_1.default(this, observable, observable, i));
              }
          }
      };
      CombineLatestSubscriber.prototype.notifyComplete = function (innerSubscriber) {
          if ((this.active -= 1) === 0) {
              this.destination.complete();
          }
      };
      CombineLatestSubscriber.prototype.notifyNext = function (observable, value, outerIndex, innerIndex) {
          var values = this.values;
          values[outerIndex] = value;
          var toRespond = this.toRespond;
          if (toRespond.length > 0) {
              var found = toRespond.indexOf(outerIndex);
              if (found !== -1) {
                  toRespond.splice(found, 1);
              }
          }
          if (toRespond.length === 0) {
              var project = this.project;
              var destination = this.destination;
              if (project) {
                  var result = tryCatch_1.default(project).apply(this, values);
                  if (result === errorObject_1.errorObject) {
                      destination.error(errorObject_1.errorObject.e);
                  }
                  else {
                      destination.next(result);
                  }
              }
              else {
                  destination.next(values);
              }
          }
      };
      return CombineLatestSubscriber;
  })(OuterSubscriber_1.default);
  exports.CombineLatestSubscriber = CombineLatestSubscriber;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  var errorObject_1 = __webpack_require__(16);
  var tryCatchTarget;
  function tryCatcher() {
      try {
          return tryCatchTarget.apply(this, arguments);
      }
      catch (e) {
          errorObject_1.errorObject.e = e;
          return errorObject_1.errorObject;
      }
  }
  function tryCatch(fn) {
      tryCatchTarget = fn;
      return tryCatcher;
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = tryCatch;
  ;


/***/ },
/* 16 */
/***/ function(module, exports) {

  exports.errorObject = { e: {} };


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var OuterSubscriber = (function (_super) {
      __extends(OuterSubscriber, _super);
      function OuterSubscriber() {
          _super.apply(this, arguments);
      }
      OuterSubscriber.prototype.notifyComplete = function (inner) {
          this.destination.complete();
      };
      OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
          this.destination.next(innerValue);
      };
      OuterSubscriber.prototype.notifyError = function (error, inner) {
          this.destination.error(error);
      };
      return OuterSubscriber;
  })(Subscriber_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = OuterSubscriber;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  var Observable_1 = __webpack_require__(1);
  var Symbol_iterator_1 = __webpack_require__(19);
  var Symbol_observable_1 = __webpack_require__(9);
  var InnerSubscriber_1 = __webpack_require__(20);
  var isArray = Array.isArray;
  function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
      var destination = new InnerSubscriber_1.default(outerSubscriber, outerValue, outerIndex);
      if (destination.isUnsubscribed) {
          return;
      }
      if (result instanceof Observable_1.default) {
          if (result._isScalar) {
              destination.next(result.value);
              destination.complete();
              return;
          }
          else {
              return result.subscribe(destination);
          }
      }
      if (isArray(result)) {
          for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
              destination.next(result[i]);
          }
          if (!destination.isUnsubscribed) {
              destination.complete();
          }
      }
      else if (typeof result.then === 'function') {
          result.then(function (x) {
              if (!destination.isUnsubscribed) {
                  destination.next(x);
                  destination.complete();
              }
          }, function (err) { return destination.error(err); })
              .then(null, function (err) {
              // Escaping the Promise trap: globally throw unhandled errors
              setTimeout(function () { throw err; });
          });
          return destination;
      }
      else if (typeof result[Symbol_iterator_1.default] === 'function') {
          for (var _i = 0; _i < result.length; _i++) {
              var item = result[_i];
              destination.next(item);
              if (destination.isUnsubscribed) {
                  break;
              }
          }
          if (!destination.isUnsubscribed) {
              destination.complete();
          }
      }
      else if (typeof result[Symbol_observable_1.default] === 'function') {
          var obs = result[Symbol_observable_1.default]();
          if (typeof obs.subscribe !== 'function') {
              destination.error('invalid observable');
          }
          else {
              return obs.subscribe(new InnerSubscriber_1.default(outerSubscriber, outerValue, outerIndex));
          }
      }
      else {
          destination.error(new TypeError('unknown type returned'));
      }
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = subscribeToResult;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  var root_1 = __webpack_require__(7);
  if (!root_1.root.Symbol) {
      root_1.root.Symbol = {};
  }
  if (!root_1.root.Symbol.iterator) {
      if (typeof root_1.root.Symbol.for === 'function') {
          root_1.root.Symbol.iterator = root_1.root.Symbol.for('iterator');
      }
      else if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
          // Bug for mozilla version
          root_1.root.Symbol.iterator = '@@iterator';
      }
      else {
          root_1.root.Symbol.iterator = '_es6shim_iterator_';
      }
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = root_1.root.Symbol.iterator;
  // // Shim in iterator support
  // export var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) || '_es6shim_iterator_';
  // // Bug for mozilla version
  // if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
  //     $iterator$ = '@@iterator';
  // }


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var InnerSubscriber = (function (_super) {
      __extends(InnerSubscriber, _super);
      function InnerSubscriber(parent, outerValue, outerIndex) {
          _super.call(this);
          this.parent = parent;
          this.outerValue = outerValue;
          this.outerIndex = outerIndex;
          this.index = 0;
      }
      InnerSubscriber.prototype._next = function (value) {
          var index = this.index++;
          this.parent.notifyNext(this.outerValue, value, this.outerIndex, index);
      };
      InnerSubscriber.prototype._error = function (error) {
          this.parent.notifyError(error, this);
      };
      InnerSubscriber.prototype._complete = function () {
          this.parent.notifyComplete(this);
      };
      return InnerSubscriber;
  })(Subscriber_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = InnerSubscriber;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  var Observable_1 = __webpack_require__(1);
  var immediate_1 = __webpack_require__(22);
  function concat() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
      }
      var scheduler = immediate_1.default;
      var args = observables;
      var len = args.length;
      if (typeof (args[observables.length - 1]).schedule === 'function') {
          scheduler = args.pop();
          args.push(1, scheduler);
      }
      return Observable_1.default.fromArray(observables).mergeAll(1);
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = concat;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  var ImmediateScheduler_1 = __webpack_require__(23);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = new ImmediateScheduler_1.default();


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  var ImmediateAction_1 = __webpack_require__(24);
  var FutureAction_1 = __webpack_require__(25);
  var ImmediateScheduler = (function () {
      function ImmediateScheduler() {
          this.actions = [];
          this.active = false;
          this.scheduled = false;
      }
      ImmediateScheduler.prototype.now = function () {
          return Date.now();
      };
      ImmediateScheduler.prototype.flush = function () {
          if (this.active || this.scheduled) {
              return;
          }
          this.active = true;
          var actions = this.actions;
          for (var action = void 0; action = actions.shift();) {
              action.execute();
          }
          this.active = false;
      };
      ImmediateScheduler.prototype.schedule = function (work, delay, state) {
          if (delay === void 0) { delay = 0; }
          return (delay <= 0) ?
              this.scheduleNow(work, state) :
              this.scheduleLater(work, delay, state);
      };
      ImmediateScheduler.prototype.scheduleNow = function (work, state) {
          return new ImmediateAction_1.default(this, work).schedule(state);
      };
      ImmediateScheduler.prototype.scheduleLater = function (work, delay, state) {
          return new FutureAction_1.default(this, work).schedule(state, delay);
      };
      return ImmediateScheduler;
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ImmediateScheduler;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = __webpack_require__(6);
  var ImmediateAction = (function (_super) {
      __extends(ImmediateAction, _super);
      function ImmediateAction(scheduler, work) {
          _super.call(this);
          this.scheduler = scheduler;
          this.work = work;
      }
      ImmediateAction.prototype.schedule = function (state) {
          if (this.isUnsubscribed) {
              return this;
          }
          this.state = state;
          var scheduler = this.scheduler;
          scheduler.actions.push(this);
          scheduler.flush();
          return this;
      };
      ImmediateAction.prototype.execute = function () {
          if (this.isUnsubscribed) {
              throw new Error('How did did we execute a canceled Action?');
          }
          this.work(this.state);
      };
      ImmediateAction.prototype.unsubscribe = function () {
          var scheduler = this.scheduler;
          var actions = scheduler.actions;
          var index = actions.indexOf(this);
          this.work = void 0;
          this.state = void 0;
          this.scheduler = void 0;
          if (index !== -1) {
              actions.splice(index, 1);
          }
          _super.prototype.unsubscribe.call(this);
      };
      return ImmediateAction;
  })(Subscription_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ImmediateAction;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ImmediateAction_1 = __webpack_require__(24);
  var FutureAction = (function (_super) {
      __extends(FutureAction, _super);
      function FutureAction(scheduler, work) {
          _super.call(this, scheduler, work);
          this.scheduler = scheduler;
          this.work = work;
      }
      FutureAction.prototype.schedule = function (state, delay) {
          var _this = this;
          if (delay === void 0) { delay = 0; }
          if (this.isUnsubscribed) {
              return this;
          }
          this.delay = delay;
          this.state = state;
          var id = this.id;
          if (id != null) {
              this.id = undefined;
              clearTimeout(id);
          }
          var scheduler = this.scheduler;
          this.id = setTimeout(function () {
              _this.id = void 0;
              scheduler.actions.push(_this);
              scheduler.flush();
          }, this.delay);
          return this;
      };
      FutureAction.prototype.unsubscribe = function () {
          var id = this.id;
          if (id != null) {
              this.id = void 0;
              clearTimeout(id);
          }
          _super.prototype.unsubscribe.call(this);
      };
      return FutureAction;
  })(ImmediateAction_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = FutureAction;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var DeferObservable = (function (_super) {
      __extends(DeferObservable, _super);
      function DeferObservable(observableFactory) {
          _super.call(this);
          this.observableFactory = observableFactory;
      }
      DeferObservable.create = function (observableFactory) {
          return new DeferObservable(observableFactory);
      };
      DeferObservable.prototype._subscribe = function (subscriber) {
          var result = tryCatch_1.default(this.observableFactory)();
          if (result === errorObject_1.errorObject) {
              subscriber.error(errorObject_1.errorObject.e);
          }
          else {
              result.subscribe(subscriber);
          }
      };
      return DeferObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = DeferObservable;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var Subscriber_1 = __webpack_require__(2);
  var ForkJoinObservable = (function (_super) {
      __extends(ForkJoinObservable, _super);
      function ForkJoinObservable(observables) {
          _super.call(this);
          this.observables = observables;
      }
      ForkJoinObservable.create = function () {
          var observables = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              observables[_i - 0] = arguments[_i];
          }
          return new ForkJoinObservable(observables);
      };
      ForkJoinObservable.prototype._subscribe = function (subscriber) {
          var observables = this.observables;
          var len = observables.length;
          var context = { complete: 0, total: len, values: emptyArray(len) };
          for (var i = 0; i < len; i++) {
              observables[i].subscribe(new AllSubscriber(subscriber, this, i, context));
          }
      };
      return ForkJoinObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ForkJoinObservable;
  var AllSubscriber = (function (_super) {
      __extends(AllSubscriber, _super);
      function AllSubscriber(destination, parent, index, context) {
          _super.call(this, destination);
          this.parent = parent;
          this.index = index;
          this.context = context;
      }
      AllSubscriber.prototype._next = function (value) {
          this._value = value;
      };
      AllSubscriber.prototype._complete = function () {
          var context = this.context;
          context.values[this.index] = this._value;
          if (context.values.every(hasValue)) {
              this.destination.next(context.values);
              this.destination.complete();
          }
      };
      return AllSubscriber;
  })(Subscriber_1.default);
  function hasValue(x) {
      return x !== null;
  }
  function emptyArray(len) {
      var arr = [];
      for (var i = 0; i < len; i++) {
          arr.push(null);
      }
      return arr;
  }


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var PromiseObservable_1 = __webpack_require__(29);
  var IteratorObservable_1 = __webpack_require__(30);
  var ArrayObservable_1 = __webpack_require__(11);
  var Symbol_observable_1 = __webpack_require__(9);
  var Symbol_iterator_1 = __webpack_require__(19);
  var Observable_1 = __webpack_require__(1);
  var observeOn_support_1 = __webpack_require__(31);
  var immediate_1 = __webpack_require__(22);
  var isArray = Array.isArray;
  var FromObservable = (function (_super) {
      __extends(FromObservable, _super);
      function FromObservable(ish, scheduler) {
          _super.call(this, null);
          this.ish = ish;
          this.scheduler = scheduler;
      }
      FromObservable.create = function (ish, scheduler) {
          if (scheduler === void 0) { scheduler = immediate_1.default; }
          if (ish) {
              if (isArray(ish)) {
                  return new ArrayObservable_1.default(ish, scheduler);
              }
              else if (typeof ish.then === 'function') {
                  return new PromiseObservable_1.default(ish, scheduler);
              }
              else if (typeof ish[Symbol_observable_1.default] === 'function') {
                  if (ish instanceof Observable_1.default) {
                      return ish;
                  }
                  return new FromObservable(ish, scheduler);
              }
              else if (typeof ish[Symbol_iterator_1.default] === 'function') {
                  return new IteratorObservable_1.default(ish, null, null, scheduler);
              }
          }
          throw new TypeError((typeof ish) + ' is not observable');
      };
      FromObservable.prototype._subscribe = function (subscriber) {
          var ish = this.ish;
          var scheduler = this.scheduler;
          if (scheduler === immediate_1.default) {
              return this.ish[Symbol_observable_1.default]().subscribe(subscriber);
          }
          else {
              return this.ish[Symbol_observable_1.default]().subscribe(new observeOn_support_1.ObserveOnSubscriber(subscriber, scheduler, 0));
          }
      };
      return FromObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = FromObservable;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var Subscription_1 = __webpack_require__(6);
  var immediate_1 = __webpack_require__(22);
  var PromiseObservable = (function (_super) {
      __extends(PromiseObservable, _super);
      function PromiseObservable(promise, scheduler) {
          _super.call(this);
          this.promise = promise;
          this.scheduler = scheduler;
          this._isScalar = false;
      }
      PromiseObservable.create = function (promise, scheduler) {
          if (scheduler === void 0) { scheduler = immediate_1.default; }
          return new PromiseObservable(promise, scheduler);
      };
      PromiseObservable.prototype._subscribe = function (subscriber) {
          var _this = this;
          var scheduler = this.scheduler;
          var promise = this.promise;
          if (scheduler === immediate_1.default) {
              if (this._isScalar) {
                  subscriber.next(this.value);
                  subscriber.complete();
              }
              else {
                  promise.then(function (value) {
                      _this._isScalar = true;
                      _this.value = value;
                      subscriber.next(value);
                      subscriber.complete();
                  }, function (err) { return subscriber.error(err); })
                      .then(null, function (err) {
                      // escape the promise trap, throw unhandled errors
                      setTimeout(function () { throw err; });
                  });
              }
          }
          else {
              var subscription = new Subscription_1.default();
              if (this._isScalar) {
                  var value = this.value;
                  subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
              }
              else {
                  promise.then(function (value) {
                      _this._isScalar = true;
                      _this.value = value;
                      subscription.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                  }, function (err) { return subscription.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber })); })
                      .then(null, function (err) {
                      // escape the promise trap, throw unhandled errors
                      scheduler.schedule(function () { throw err; });
                  });
              }
              return subscription;
          }
      };
      return PromiseObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = PromiseObservable;
  function dispatchNext(_a) {
      var value = _a.value, subscriber = _a.subscriber;
      subscriber.next(value);
      subscriber.complete();
  }
  function dispatchError(_a) {
      var err = _a.err, subscriber = _a.subscriber;
      subscriber.error(err);
  }


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var root_1 = __webpack_require__(7);
  var Symbol_iterator_1 = __webpack_require__(19);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var IteratorObservable = (function (_super) {
      __extends(IteratorObservable, _super);
      function IteratorObservable(iterator, project, thisArg, scheduler) {
          _super.call(this);
          this.iterator = iterator;
          this.project = project;
          this.thisArg = thisArg;
          this.scheduler = scheduler;
      }
      IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
          if (iterator == null) {
              throw new Error('iterator cannot be null.');
          }
          if (project && typeof project !== 'function') {
              throw new Error('When provided, `project` must be a function.');
          }
          return new IteratorObservable(iterator, project, thisArg, scheduler);
      };
      IteratorObservable.dispatch = function (state) {
          var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
          if (hasError) {
              subscriber.error(state.error);
              return;
          }
          var result = iterator.next();
          if (result.done) {
              subscriber.complete();
              return;
          }
          if (project) {
              result = tryCatch_1.default(project).call(thisArg, result.value, index);
              if (result === errorObject_1.errorObject) {
                  state.error = errorObject_1.errorObject.e;
                  state.hasError = true;
              }
              else {
                  subscriber.next(result);
                  state.index = index + 1;
              }
          }
          else {
              subscriber.next(result.value);
              state.index = index + 1;
          }
          if (subscriber.isUnsubscribed) {
              return;
          }
          this.schedule(state);
      };
      IteratorObservable.prototype._subscribe = function (subscriber) {
          var index = 0;
          var project = this.project;
          var thisArg = this.thisArg;
          var iterator = getIterator(Object(this.iterator));
          var scheduler = this.scheduler;
          if (scheduler) {
              subscriber.add(scheduler.schedule(IteratorObservable.dispatch, 0, {
                  index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
              }));
          }
          else {
              do {
                  var result = iterator.next();
                  if (result.done) {
                      subscriber.complete();
                      break;
                  }
                  else if (project) {
                      result = tryCatch_1.default(project).call(thisArg, result.value, index++);
                      if (result === errorObject_1.errorObject) {
                          subscriber.error(errorObject_1.errorObject.e);
                          break;
                      }
                      subscriber.next(result);
                  }
                  else {
                      subscriber.next(result.value);
                  }
                  if (subscriber.isUnsubscribed) {
                      break;
                  }
              } while (true);
          }
      };
      return IteratorObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = IteratorObservable;
  var maxSafeInteger = Math.pow(2, 53) - 1;
  var StringIterator = (function () {
      function StringIterator(str, idx, len) {
          if (idx === void 0) { idx = 0; }
          if (len === void 0) { len = str.length; }
          this.str = str;
          this.idx = idx;
          this.len = len;
      }
      StringIterator.prototype[Symbol_iterator_1.default] = function () { return (this); };
      StringIterator.prototype.next = function () {
          return this.idx < this.len ? {
              done: false,
              value: this.str.charAt(this.idx++)
          } : {
              done: true,
              value: undefined
          };
      };
      return StringIterator;
  })();
  var ArrayIterator = (function () {
      function ArrayIterator(arr, idx, len) {
          if (idx === void 0) { idx = 0; }
          if (len === void 0) { len = toLength(arr); }
          this.arr = arr;
          this.idx = idx;
          this.len = len;
      }
      ArrayIterator.prototype[Symbol_iterator_1.default] = function () { return this; };
      ArrayIterator.prototype.next = function () {
          return this.idx < this.len ? {
              done: false,
              value: this.arr[this.idx++]
          } : {
              done: true,
              value: undefined
          };
      };
      return ArrayIterator;
  })();
  function getIterator(o) {
      var i = o[Symbol_iterator_1.default];
      if (!i && typeof o === 'string') {
          return new StringIterator(o);
      }
      if (!i && o.length !== undefined) {
          return new ArrayIterator(o);
      }
      if (!i) {
          throw new TypeError('Object is not iterable');
      }
      return o[Symbol_iterator_1.default]();
  }
  function toLength(o) {
      var len = +o.length;
      if (isNaN(len)) {
          return 0;
      }
      if (len === 0 || !numberIsFinite(len)) {
          return len;
      }
      len = sign(len) * Math.floor(Math.abs(len));
      if (len <= 0) {
          return 0;
      }
      if (len > maxSafeInteger) {
          return maxSafeInteger;
      }
      return len;
  }
  function numberIsFinite(value) {
      return typeof value === 'number' && root_1.root.isFinite(value);
  }
  function isNan(n) {
      return n !== n;
  }
  function sign(value) {
      var valueAsNumber = +value;
      if (valueAsNumber === 0) {
          return valueAsNumber;
      }
      if (isNaN(valueAsNumber)) {
          return valueAsNumber;
      }
      return valueAsNumber < 0 ? -1 : 1;
  }


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Notification_1 = __webpack_require__(32);
  var ObserveOnOperator = (function () {
      function ObserveOnOperator(scheduler, delay) {
          if (delay === void 0) { delay = 0; }
          this.delay = delay;
          this.scheduler = scheduler;
      }
      ObserveOnOperator.prototype.call = function (subscriber) {
          return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
      };
      return ObserveOnOperator;
  })();
  exports.ObserveOnOperator = ObserveOnOperator;
  var ObserveOnSubscriber = (function (_super) {
      __extends(ObserveOnSubscriber, _super);
      function ObserveOnSubscriber(destination, scheduler, delay) {
          if (delay === void 0) { delay = 0; }
          _super.call(this, destination);
          this.delay = delay;
          this.scheduler = scheduler;
      }
      ObserveOnSubscriber.dispatch = function (_a) {
          var notification = _a.notification, destination = _a.destination;
          notification.observe(destination);
      };
      ObserveOnSubscriber.prototype._next = function (x) {
          this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification_1.default.createNext(x), this.destination)));
      };
      ObserveOnSubscriber.prototype._error = function (e) {
          this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification_1.default.createError(e), this.destination)));
      };
      ObserveOnSubscriber.prototype._complete = function () {
          this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(Notification_1.default.createComplete(), this.destination)));
      };
      return ObserveOnSubscriber;
  })(Subscriber_1.default);
  exports.ObserveOnSubscriber = ObserveOnSubscriber;
  var ObserveOnMessage = (function () {
      function ObserveOnMessage(notification, destination) {
          this.notification = notification;
          this.destination = destination;
      }
      return ObserveOnMessage;
  })();


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  var Observable_1 = __webpack_require__(1);
  var Notification = (function () {
      function Notification(kind, value, exception) {
          this.kind = kind;
          this.value = value;
          this.exception = exception;
          this.hasValue = kind === 'N';
      }
      Notification.prototype.observe = function (observer) {
          switch (this.kind) {
              case 'N':
                  return observer.next(this.value);
              case 'E':
                  return observer.error(this.exception);
              case 'C':
                  return observer.complete();
          }
      };
      Notification.prototype.do = function (next, error, complete) {
          var kind = this.kind;
          switch (kind) {
              case 'N':
                  return next(this.value);
              case 'E':
                  return error(this.exception);
              case 'C':
                  return complete();
          }
      };
      Notification.prototype.accept = function (nextOrObserver, error, complete) {
          if (nextOrObserver && typeof nextOrObserver.next === 'function') {
              return this.observe(nextOrObserver);
          }
          else {
              return this.do(nextOrObserver, error, complete);
          }
      };
      Notification.prototype.toObservable = function () {
          var kind = this.kind;
          var value = this.value;
          switch (kind) {
              case 'N':
                  return Observable_1.default.of(value);
              case 'E':
                  return Observable_1.default.throw(value);
              case 'C':
                  return Observable_1.default.empty();
          }
      };
      Notification.createNext = function (value) {
          if (typeof value !== 'undefined') {
              return new Notification('N', value);
          }
          return this.undefinedValueNotification;
      };
      Notification.createError = function (err) {
          return new Notification('E', undefined, err);
      };
      Notification.createComplete = function () {
          return this.completeNotification;
      };
      Notification.completeNotification = new Notification('C');
      Notification.undefinedValueNotification = new Notification('N', undefined);
      return Notification;
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = Notification;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var Subscription_1 = __webpack_require__(6);
  var FromEventObservable = (function (_super) {
      __extends(FromEventObservable, _super);
      function FromEventObservable(sourceObj, eventName, selector) {
          _super.call(this);
          this.sourceObj = sourceObj;
          this.eventName = eventName;
          this.selector = selector;
      }
      FromEventObservable.create = function (sourceObj, eventName, selector) {
          return new FromEventObservable(sourceObj, eventName, selector);
      };
      FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
          var unsubscribe;
          var tag = sourceObj.toString();
          if (tag === '[object NodeList]' || tag === '[object HTMLCollection]') {
              for (var i = 0, len = sourceObj.length; i < len; i++) {
                  FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
              }
          }
          else if (typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function') {
              sourceObj.addEventListener(eventName, handler);
              unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
          }
          else if (typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function') {
              sourceObj.on(eventName, handler);
              unsubscribe = function () { return sourceObj.off(eventName, handler); };
          }
          else if (typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function') {
              sourceObj.addListener(eventName, handler);
              unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
          }
          subscriber.add(new Subscription_1.default(unsubscribe));
      };
      FromEventObservable.prototype._subscribe = function (subscriber) {
          var sourceObj = this.sourceObj;
          var eventName = this.eventName;
          var selector = this.selector;
          var handler = selector ? function (e) {
              var result = tryCatch_1.default(selector)(e);
              if (result === errorObject_1.errorObject) {
                  subscriber.error(result.e);
              }
              else {
                  subscriber.next(result);
              }
          } : function (e) { return subscriber.next(e); };
          FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
      };
      return FromEventObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = FromEventObservable;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var Subscription_1 = __webpack_require__(6);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var FromEventPatternObservable = (function (_super) {
      __extends(FromEventPatternObservable, _super);
      function FromEventPatternObservable(addHandler, removeHandler, selector) {
          _super.call(this);
          this.addHandler = addHandler;
          this.removeHandler = removeHandler;
          this.selector = selector;
      }
      FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
          return new FromEventPatternObservable(addHandler, removeHandler, selector);
      };
      FromEventPatternObservable.prototype._subscribe = function (subscriber) {
          var addHandler = this.addHandler;
          var removeHandler = this.removeHandler;
          var selector = this.selector;
          var handler = selector ? function (e) {
              var result = tryCatch_1.default(selector).apply(null, arguments);
              if (result === errorObject_1.errorObject) {
                  subscriber.error(result.e);
              }
              else {
                  subscriber.next(result);
              }
          } : function (e) { subscriber.next(e); };
          var result = tryCatch_1.default(addHandler)(handler);
          if (result === errorObject_1.errorObject) {
              subscriber.error(result.e);
          }
          subscriber.add(new Subscription_1.default(function () {
              //TODO: determine whether or not to forward to error handler
              removeHandler(handler);
          }));
      };
      return FromEventPatternObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = FromEventPatternObservable;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = __webpack_require__(36);
  var Observable_1 = __webpack_require__(1);
  var nextTick_1 = __webpack_require__(37);
  var IntervalObservable = (function (_super) {
      __extends(IntervalObservable, _super);
      function IntervalObservable(period, scheduler) {
          if (period === void 0) { period = 0; }
          if (scheduler === void 0) { scheduler = nextTick_1.default; }
          _super.call(this);
          this.period = period;
          this.scheduler = scheduler;
          if (!isNumeric_1.default(period) || period < 0) {
              this.period = 0;
          }
          if (!scheduler || typeof scheduler.schedule !== 'function') {
              this.scheduler = nextTick_1.default;
          }
      }
      IntervalObservable.create = function (period, scheduler) {
          if (period === void 0) { period = 0; }
          if (scheduler === void 0) { scheduler = nextTick_1.default; }
          return new IntervalObservable(period, scheduler);
      };
      IntervalObservable.dispatch = function (state) {
          var index = state.index, subscriber = state.subscriber, period = state.period;
          subscriber.next(index);
          if (subscriber.isUnsubscribed) {
              return;
          }
          state.index += 1;
          this.schedule(state, period);
      };
      IntervalObservable.prototype._subscribe = function (subscriber) {
          var index = 0;
          var period = this.period;
          var scheduler = this.scheduler;
          subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
              index: index, subscriber: subscriber, period: period
          }));
      };
      return IntervalObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = IntervalObservable;


/***/ },
/* 36 */
/***/ function(module, exports) {

  var is_array = Array.isArray;
  function isNumeric(val) {
      // parseFloat NaNs numeric-cast false positives (null|true|false|"")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      // adding 1 corrects loss of precision from parseFloat (#15100)
      return !is_array(val) && (val - parseFloat(val) + 1) >= 0;
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = isNumeric;
  ;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  var NextTickScheduler_1 = __webpack_require__(38);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = new NextTickScheduler_1.default();


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ImmediateScheduler_1 = __webpack_require__(23);
  var NextTickAction_1 = __webpack_require__(39);
  var ImmediateAction_1 = __webpack_require__(24);
  var NextTickScheduler = (function (_super) {
      __extends(NextTickScheduler, _super);
      function NextTickScheduler() {
          _super.apply(this, arguments);
      }
      NextTickScheduler.prototype.scheduleNow = function (work, state) {
          return (this.scheduled ?
              new ImmediateAction_1.default(this, work) :
              new NextTickAction_1.default(this, work)).schedule(state);
      };
      return NextTickScheduler;
  })(ImmediateScheduler_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = NextTickScheduler;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Immediate_1 = __webpack_require__(40);
  var ImmediateAction_1 = __webpack_require__(24);
  var NextTickAction = (function (_super) {
      __extends(NextTickAction, _super);
      function NextTickAction() {
          _super.apply(this, arguments);
      }
      NextTickAction.prototype.schedule = function (state) {
          var _this = this;
          if (this.isUnsubscribed) {
              return this;
          }
          this.state = state;
          var scheduler = this.scheduler;
          scheduler.actions.push(this);
          if (!scheduler.scheduled) {
              scheduler.scheduled = true;
              this.id = Immediate_1.Immediate.setImmediate(function () {
                  _this.id = void 0;
                  _this.scheduler.scheduled = false;
                  _this.scheduler.flush();
              });
          }
          return this;
      };
      NextTickAction.prototype.unsubscribe = function () {
          var id = this.id;
          var scheduler = this.scheduler;
          _super.prototype.unsubscribe.call(this);
          if (scheduler.actions.length === 0) {
              scheduler.active = false;
              scheduler.scheduled = false;
              if (id) {
                  this.id = void 0;
                  Immediate_1.Immediate.clearImmediate(id);
              }
          }
      };
      return NextTickAction;
  })(ImmediateAction_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = NextTickAction;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(clearImmediate) {/**
  All credit for this helper goes to http://github.com/YuzuJS/setImmediate
  */
  var root_1 = __webpack_require__(7);
  exports.Immediate = {
      setImmediate: function (x) { return 0; },
      clearImmediate: function (id) { }
  };
  if (root_1.root && root_1.root.setImmediate) {
      exports.Immediate.setImmediate = root_1.root.setImmediate;
      exports.Immediate.clearImmediate = root_1.root.clearImmediate;
  }
  else {
      exports.Immediate = (function (global, Immediate) {
          var nextHandle = 1, // Spec says greater than zero
          tasksByHandle = {}, currentlyRunningATask = false, doc = global.document, setImmediate;
          // Don't get fooled by e.g. browserify environments.
          if ({}.toString.call(global.process) === '[object process]') {
              // For Node.js before 0.9
              setImmediate = installNextTickImplementation();
          }
          else if (canUsePostMessage()) {
              // For non-IE10 modern browsers
              setImmediate = installPostMessageImplementation();
          }
          else if (global.MessageChannel) {
              // For web workers, where supported
              setImmediate = installMessageChannelImplementation();
          }
          else if (doc && 'onreadystatechange' in doc.createElement('script')) {
              // For IE 6–8
              setImmediate = installReadyStateChangeImplementation();
          }
          else {
              // For older browsers
              setImmediate = installSetTimeoutImplementation();
          }
          Immediate.setImmediate = setImmediate;
          Immediate.clearImmediate = clearImmediate;
          return Immediate;
          function clearImmediate(handle) {
              delete tasksByHandle[handle];
          }
          function addFromSetImmediateArguments(args) {
              tasksByHandle[nextHandle] = partiallyApplied.apply(undefined, args);
              return nextHandle++;
          }
          // This function accepts the same arguments as setImmediate, but
          // returns a function that requires no arguments.
          function partiallyApplied(handler) {
              var args = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                  args[_i - 1] = arguments[_i];
              }
              return function () {
                  if (typeof handler === 'function') {
                      handler.apply(undefined, args);
                  }
                  else {
                      (new Function('' + handler))();
                  }
              };
          }
          function runIfPresent(handle) {
              // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
              // So if we're currently running a task, we'll need to delay this invocation.
              if (currentlyRunningATask) {
                  // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                  // 'too much recursion' error.
                  setTimeout(partiallyApplied(runIfPresent, handle), 0);
              }
              else {
                  var task = tasksByHandle[handle];
                  if (task) {
                      currentlyRunningATask = true;
                      try {
                          task();
                      }
                      finally {
                          clearImmediate(handle);
                          currentlyRunningATask = false;
                      }
                  }
              }
          }
          function installNextTickImplementation() {
              return function setImmediate() {
                  var handle = addFromSetImmediateArguments(arguments);
                  global.process.nextTick(partiallyApplied(runIfPresent, handle));
                  return handle;
              };
          }
          function canUsePostMessage() {
              // The test against `importScripts` prevents this implementation from being installed inside a web worker,
              // where `global.postMessage` means something completely different and can't be used for this purpose.
              if (global.postMessage && !global.importScripts) {
                  var postMessageIsAsynchronous = true;
                  var oldOnMessage = global.onmessage;
                  global.onmessage = function () {
                      postMessageIsAsynchronous = false;
                  };
                  global.postMessage('', '*');
                  global.onmessage = oldOnMessage;
                  return postMessageIsAsynchronous;
              }
          }
          function installPostMessageImplementation() {
              // Installs an event handler on `global` for the `message` event: see
              // * https://developer.mozilla.org/en/DOM/window.postMessage
              // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
              var messagePrefix = 'setImmediate$' + Math.random() + '$';
              var onGlobalMessage = function (event) {
                  if (event.source === global &&
                      typeof event.data === 'string' &&
                      event.data.indexOf(messagePrefix) === 0) {
                      runIfPresent(+event.data.slice(messagePrefix.length));
                  }
              };
              if (global.addEventListener) {
                  global.addEventListener('message', onGlobalMessage, false);
              }
              else {
                  global.attachEvent('onmessage', onGlobalMessage);
              }
              return function setImmediate() {
                  var handle = addFromSetImmediateArguments(arguments);
                  global.postMessage(messagePrefix + handle, '*');
                  return handle;
              };
          }
          function installMessageChannelImplementation() {
              var channel = new MessageChannel();
              channel.port1.onmessage = function (event) {
                  var handle = event.data;
                  runIfPresent(handle);
              };
              return function setImmediate() {
                  var handle = addFromSetImmediateArguments(arguments);
                  channel.port2.postMessage(handle);
                  return handle;
              };
          }
          function installReadyStateChangeImplementation() {
              var html = doc.documentElement;
              return function setImmediate() {
                  var handle = addFromSetImmediateArguments(arguments);
                  // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                  // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                  var script = doc.createElement('script');
                  script.onreadystatechange = function () {
                      runIfPresent(handle);
                      script.onreadystatechange = null;
                      html.removeChild(script);
                      script = null;
                  };
                  html.appendChild(script);
                  return handle;
              };
          }
          function installSetTimeoutImplementation() {
              return function setImmediate() {
                  var handle = addFromSetImmediateArguments(arguments);
                  setTimeout(partiallyApplied(runIfPresent, handle), 0);
                  return handle;
              };
          }
      }(root_1.root, exports.Immediate));
  }

  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41).clearImmediate))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(42).nextTick;
  var apply = Function.prototype.apply;
  var slice = Array.prototype.slice;
  var immediateIds = {};
  var nextImmediateId = 0;

  // DOM APIs, for completeness

  exports.setTimeout = function() {
    return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
  };
  exports.setInterval = function() {
    return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
  };
  exports.clearTimeout =
  exports.clearInterval = function(timeout) { timeout.close(); };

  function Timeout(id, clearFn) {
    this._id = id;
    this._clearFn = clearFn;
  }
  Timeout.prototype.unref = Timeout.prototype.ref = function() {};
  Timeout.prototype.close = function() {
    this._clearFn.call(window, this._id);
  };

  // Does not start the time, just sets up the members needed.
  exports.enroll = function(item, msecs) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = msecs;
  };

  exports.unenroll = function(item) {
    clearTimeout(item._idleTimeoutId);
    item._idleTimeout = -1;
  };

  exports._unrefActive = exports.active = function(item) {
    clearTimeout(item._idleTimeoutId);

    var msecs = item._idleTimeout;
    if (msecs >= 0) {
      item._idleTimeoutId = setTimeout(function onTimeout() {
        if (item._onTimeout)
          item._onTimeout();
      }, msecs);
    }
  };

  // That's not how node.js implements it but the exposed api is the same.
  exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
    var id = nextImmediateId++;
    var args = arguments.length < 2 ? false : slice.call(arguments, 1);

    immediateIds[id] = true;

    nextTick(function onNextTick() {
      if (immediateIds[id]) {
        // fn.call() is faster so we optimize for the common use-case
        // @see http://jsperf.com/call-apply-segu
        if (args) {
          fn.apply(null, args);
        } else {
          fn.call(null);
        }
        // Prevent ids from leaking
        exports.clearImmediate(id);
      }
    });

    return id;
  };

  exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
    delete immediateIds[id];
  };
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41).setImmediate, __webpack_require__(41).clearImmediate))

/***/ },
/* 42 */
/***/ function(module, exports) {

  // shim for using process in browser

  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = setTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              currentQueue[queueIndex].run();
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      clearTimeout(timeout);
  }

  process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          setTimeout(drainQueue, 0);
      }
  };

  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  process.versions = {};

  function noop() {}

  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;

  process.binding = function (name) {
      throw new Error('process.binding is not supported');
  };

  // TODO(shtylman)
  process.cwd = function () { return '/' };
  process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
  };
  process.umask = function() { return 0; };


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  var ArrayObservable_1 = __webpack_require__(11);
  var mergeAll_support_1 = __webpack_require__(44);
  var immediate_1 = __webpack_require__(22);
  function merge() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
      }
      var concurrent = Number.POSITIVE_INFINITY;
      var scheduler = immediate_1.default;
      var last = observables[observables.length - 1];
      if (typeof last.schedule === 'function') {
          scheduler = observables.pop();
          if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
              concurrent = observables.pop();
          }
      }
      else if (typeof last === 'number') {
          concurrent = observables.pop();
      }
      if (observables.length === 1) {
          return observables[0];
      }
      return new ArrayObservable_1.default(observables, scheduler).lift(new mergeAll_support_1.MergeAllOperator(concurrent));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = merge;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = __webpack_require__(17);
  var subscribeToResult_1 = __webpack_require__(18);
  var MergeAllOperator = (function () {
      function MergeAllOperator(concurrent) {
          this.concurrent = concurrent;
      }
      MergeAllOperator.prototype.call = function (observer) {
          return new MergeAllSubscriber(observer, this.concurrent);
      };
      return MergeAllOperator;
  })();
  exports.MergeAllOperator = MergeAllOperator;
  var MergeAllSubscriber = (function (_super) {
      __extends(MergeAllSubscriber, _super);
      function MergeAllSubscriber(destination, concurrent) {
          _super.call(this, destination);
          this.concurrent = concurrent;
          this.hasCompleted = false;
          this.buffer = [];
          this.active = 0;
      }
      MergeAllSubscriber.prototype._next = function (observable) {
          if (this.active < this.concurrent) {
              if (observable._isScalar) {
                  this.destination.next(observable.value);
              }
              else {
                  this.active++;
                  this.add(subscribeToResult_1.default(this, observable));
              }
          }
          else {
              this.buffer.push(observable);
          }
      };
      MergeAllSubscriber.prototype._complete = function () {
          this.hasCompleted = true;
          if (this.active === 0 && this.buffer.length === 0) {
              this.destination.complete();
          }
      };
      MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
          var buffer = this.buffer;
          this.remove(innerSub);
          this.active--;
          if (buffer.length > 0) {
              this._next(buffer.shift());
          }
          else if (this.active === 0 && this.hasCompleted) {
              this.destination.complete();
          }
      };
      return MergeAllSubscriber;
  })(OuterSubscriber_1.default);
  exports.MergeAllSubscriber = MergeAllSubscriber;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var InfiniteObservable = (function (_super) {
      __extends(InfiniteObservable, _super);
      function InfiniteObservable() {
          _super.call(this);
      }
      InfiniteObservable.create = function () {
          return new InfiniteObservable();
      };
      InfiniteObservable.prototype._subscribe = function (subscriber) {
      };
      return InfiniteObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = InfiniteObservable;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var RangeObservable = (function (_super) {
      __extends(RangeObservable, _super);
      function RangeObservable(start, end, scheduler) {
          _super.call(this);
          this.start = start;
          this.end = end;
          this.scheduler = scheduler;
      }
      RangeObservable.create = function (start, end, scheduler) {
          if (start === void 0) { start = 0; }
          if (end === void 0) { end = 0; }
          return new RangeObservable(start, end, scheduler);
      };
      RangeObservable.dispatch = function (state) {
          var start = state.start, index = state.index, end = state.end, subscriber = state.subscriber;
          if (index >= end) {
              subscriber.complete();
              return;
          }
          subscriber.next(start);
          if (subscriber.isUnsubscribed) {
              return;
          }
          state.index = index + 1;
          state.start = start + 1;
          this.schedule(state);
      };
      RangeObservable.prototype._subscribe = function (subscriber) {
          var index = 0;
          var start = this.start;
          var end = this.end;
          var scheduler = this.scheduler;
          if (scheduler) {
              subscriber.add(scheduler.schedule(RangeObservable.dispatch, 0, {
                  index: index, end: end, start: start, subscriber: subscriber
              }));
          }
          else {
              do {
                  if (index++ >= end) {
                      subscriber.complete();
                      break;
                  }
                  subscriber.next(start++);
                  if (subscriber.isUnsubscribed) {
                      break;
                  }
              } while (true);
          }
      };
      return RangeObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = RangeObservable;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var ErrorObservable = (function (_super) {
      __extends(ErrorObservable, _super);
      function ErrorObservable(error, scheduler) {
          _super.call(this);
          this.error = error;
          this.scheduler = scheduler;
      }
      ErrorObservable.create = function (error, scheduler) {
          return new ErrorObservable(error, scheduler);
      };
      ErrorObservable.dispatch = function (_a) {
          var error = _a.error, subscriber = _a.subscriber;
          subscriber.error(error);
      };
      ErrorObservable.prototype._subscribe = function (subscriber) {
          var error = this.error;
          var scheduler = this.scheduler;
          if (scheduler) {
              subscriber.add(scheduler.schedule(ErrorObservable.dispatch, 0, {
                  error: error, subscriber: subscriber
              }));
          }
          else {
              subscriber.error(error);
          }
      };
      return ErrorObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ErrorObservable;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = __webpack_require__(36);
  var Observable_1 = __webpack_require__(1);
  var nextTick_1 = __webpack_require__(37);
  var TimerObservable = (function (_super) {
      __extends(TimerObservable, _super);
      function TimerObservable(dueTime, period, scheduler) {
          if (dueTime === void 0) { dueTime = 0; }
          _super.call(this);
          this.dueTime = dueTime;
          this.period = period;
          this.scheduler = scheduler;
          if (isNumeric_1.default(period)) {
              this._period = Number(period) < 1 && 1 || Number(period);
          }
          else if (period && typeof period.schedule === 'function') {
              scheduler = period;
          }
          if (!scheduler || typeof scheduler.schedule !== 'function') {
              scheduler = nextTick_1.default;
          }
          this.scheduler = scheduler;
      }
      TimerObservable.create = function (dueTime, period, scheduler) {
          if (dueTime === void 0) { dueTime = 0; }
          return new TimerObservable(dueTime, period, scheduler);
      };
      TimerObservable.dispatch = function (state) {
          var index = state.index, period = state.period, subscriber = state.subscriber;
          var action = this;
          subscriber.next(index);
          if (typeof period === 'undefined') {
              subscriber.complete();
              return;
          }
          else if (subscriber.isUnsubscribed) {
              return;
          }
          if (typeof action.delay === 'undefined') {
              action.add(action.scheduler.schedule(TimerObservable.dispatch, period, {
                  index: index + 1, period: period, subscriber: subscriber
              }));
          }
          else {
              state.index = index + 1;
              action.schedule(state, period);
          }
      };
      TimerObservable.prototype._subscribe = function (subscriber) {
          var index = 0;
          var period = this._period;
          var dueTime = this.dueTime;
          var scheduler = this.scheduler;
          subscriber.add(scheduler.schedule(TimerObservable.dispatch, dueTime, { index: index, period: period, subscriber: subscriber }));
      };
      return TimerObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = TimerObservable;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  var ArrayObservable_1 = __webpack_require__(11);
  var zip_support_1 = __webpack_require__(50);
  function zip() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
      }
      var project = observables[observables.length - 1];
      if (typeof project === 'function') {
          observables.pop();
      }
      return new ArrayObservable_1.default(observables).lift(new zip_support_1.ZipOperator(project));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = zip;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var OuterSubscriber_1 = __webpack_require__(17);
  var subscribeToResult_1 = __webpack_require__(18);
  var Symbol_iterator_1 = __webpack_require__(19);
  var isArray = Array.isArray;
  var ZipOperator = (function () {
      function ZipOperator(project) {
          this.project = project;
      }
      ZipOperator.prototype.call = function (subscriber) {
          return new ZipSubscriber(subscriber, this.project);
      };
      return ZipOperator;
  })();
  exports.ZipOperator = ZipOperator;
  var ZipSubscriber = (function (_super) {
      __extends(ZipSubscriber, _super);
      function ZipSubscriber(destination, project, values) {
          if (values === void 0) { values = Object.create(null); }
          _super.call(this, destination);
          this.index = 0;
          this.iterators = [];
          this.active = 0;
          this.project = (typeof project === 'function') ? project : null;
          this.values = values;
      }
      ZipSubscriber.prototype._next = function (value) {
          var iterators = this.iterators;
          var index = this.index++;
          if (isArray(value)) {
              iterators.push(new StaticArrayIterator(value));
          }
          else if (typeof value[Symbol_iterator_1.default] === 'function') {
              iterators.push(new StaticIterator(value[Symbol_iterator_1.default]()));
          }
          else {
              iterators.push(new ZipBufferIterator(this.destination, this, value, index));
          }
      };
      ZipSubscriber.prototype._complete = function () {
          var values = this.values;
          var iterators = this.iterators;
          var len = iterators.length;
          this.active = len;
          for (var i = 0; i < len; i++) {
              var iterator = iterators[i];
              if (iterator.stillUnsubscribed) {
                  iterator.subscribe(iterator, i);
              }
              else {
                  this.active--; // not an observable
              }
          }
      };
      ZipSubscriber.prototype.notifyInactive = function () {
          this.active--;
          if (this.active === 0) {
              this.destination.complete();
          }
      };
      ZipSubscriber.prototype.checkIterators = function () {
          var iterators = this.iterators;
          var len = iterators.length;
          var destination = this.destination;
          // abort if not all of them have values
          for (var i = 0; i < len; i++) {
              var iterator = iterators[i];
              if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                  return;
              }
          }
          var shouldComplete = false;
          var args = [];
          for (var i = 0; i < len; i++) {
              var iterator = iterators[i];
              var result = iterator.next();
              // check to see if it's completed now that you've gotten
              // the next value.
              if (iterator.hasCompleted()) {
                  shouldComplete = true;
              }
              if (result.done) {
                  destination.complete();
                  return;
              }
              args.push(result.value);
          }
          var project = this.project;
          if (project) {
              var result = tryCatch_1.default(project).apply(this, args);
              if (result === errorObject_1.errorObject) {
                  destination.error(errorObject_1.errorObject.e);
              }
              else {
                  destination.next(result);
              }
          }
          else {
              destination.next(args);
          }
          if (shouldComplete) {
              destination.complete();
          }
      };
      return ZipSubscriber;
  })(Subscriber_1.default);
  exports.ZipSubscriber = ZipSubscriber;
  var StaticIterator = (function () {
      function StaticIterator(iterator) {
          this.iterator = iterator;
          this.nextResult = iterator.next();
      }
      StaticIterator.prototype.hasValue = function () {
          return true;
      };
      StaticIterator.prototype.next = function () {
          var result = this.nextResult;
          this.nextResult = this.iterator.next();
          return result;
      };
      StaticIterator.prototype.hasCompleted = function () {
          var nextResult = this.nextResult;
          return nextResult && nextResult.done;
      };
      return StaticIterator;
  })();
  var StaticArrayIterator = (function () {
      function StaticArrayIterator(array) {
          this.array = array;
          this.index = 0;
          this.length = 0;
          this.length = array.length;
      }
      StaticArrayIterator.prototype[Symbol_iterator_1.default] = function () {
          return this;
      };
      StaticArrayIterator.prototype.next = function (value) {
          var i = this.index++;
          var array = this.array;
          return i < this.length ? { value: array[i], done: false } : { done: true };
      };
      StaticArrayIterator.prototype.hasValue = function () {
          return this.array.length > this.index;
      };
      StaticArrayIterator.prototype.hasCompleted = function () {
          return this.array.length === this.index;
      };
      return StaticArrayIterator;
  })();
  var ZipBufferIterator = (function (_super) {
      __extends(ZipBufferIterator, _super);
      function ZipBufferIterator(destination, parent, observable, index) {
          _super.call(this, destination);
          this.parent = parent;
          this.observable = observable;
          this.index = index;
          this.stillUnsubscribed = true;
          this.buffer = [];
          this.isComplete = false;
      }
      ZipBufferIterator.prototype[Symbol_iterator_1.default] = function () {
          return this;
      };
      // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
      //    this is legit because `next()` will never be called by a subscription in this case.
      ZipBufferIterator.prototype.next = function () {
          var buffer = this.buffer;
          if (buffer.length === 0 && this.isComplete) {
              return { done: true };
          }
          else {
              return { value: buffer.shift(), done: false };
          }
      };
      ZipBufferIterator.prototype.hasValue = function () {
          return this.buffer.length > 0;
      };
      ZipBufferIterator.prototype.hasCompleted = function () {
          return this.buffer.length === 0 && this.isComplete;
      };
      ZipBufferIterator.prototype.notifyComplete = function () {
          if (this.buffer.length > 0) {
              this.isComplete = true;
              this.parent.notifyInactive();
          }
          else {
              this.destination.complete();
          }
      };
      ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
          this.buffer.push(innerValue);
          this.parent.checkIterators();
      };
      ZipBufferIterator.prototype.subscribe = function (value, index) {
          this.add(subscribeToResult_1.default(this, this.observable, this, index));
      };
      return ZipBufferIterator;
  })(OuterSubscriber_1.default);


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  /**
   * buffers the incoming observable values until the passed `closingNotifier` emits a value, at which point
   * it emits the buffer on the returned observable and starts a new buffer internally, awaiting the
   * next time `closingNotifier` emits
   *
   * @param {Observable<any>} closingNotifier an observable, that signals the buffer to be emitted from the returned observable
   * @returns {Observable<T[]>} an observable of buffers, which are arrays of values
   */
  function buffer(closingNotifier) {
      return this.lift(new BufferOperator(closingNotifier));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = buffer;
  var BufferOperator = (function () {
      function BufferOperator(closingNotifier) {
          this.closingNotifier = closingNotifier;
      }
      BufferOperator.prototype.call = function (subscriber) {
          return new BufferSubscriber(subscriber, this.closingNotifier);
      };
      return BufferOperator;
  })();
  var BufferSubscriber = (function (_super) {
      __extends(BufferSubscriber, _super);
      function BufferSubscriber(destination, closingNotifier) {
          _super.call(this, destination);
          this.buffer = [];
          this.add(closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this)));
      }
      BufferSubscriber.prototype._next = function (value) {
          this.buffer.push(value);
      };
      BufferSubscriber.prototype._error = function (err) {
          this.destination.error(err);
      };
      BufferSubscriber.prototype._complete = function () {
          this.destination.complete();
      };
      BufferSubscriber.prototype.flushBuffer = function () {
          var buffer = this.buffer;
          this.buffer = [];
          this.destination.next(buffer);
      };
      return BufferSubscriber;
  })(Subscriber_1.default);
  var BufferClosingNotifierSubscriber = (function (_super) {
      __extends(BufferClosingNotifierSubscriber, _super);
      function BufferClosingNotifierSubscriber(parent) {
          _super.call(this, null);
          this.parent = parent;
      }
      BufferClosingNotifierSubscriber.prototype._next = function (value) {
          this.parent.flushBuffer();
      };
      BufferClosingNotifierSubscriber.prototype._error = function (err) {
          this.parent.error(err);
      };
      BufferClosingNotifierSubscriber.prototype._complete = function () {
          this.parent.complete();
      };
      return BufferClosingNotifierSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function bufferCount(bufferSize, startBufferEvery) {
      if (startBufferEvery === void 0) { startBufferEvery = null; }
      return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = bufferCount;
  var BufferCountOperator = (function () {
      function BufferCountOperator(bufferSize, startBufferEvery) {
          this.bufferSize = bufferSize;
          this.startBufferEvery = startBufferEvery;
      }
      BufferCountOperator.prototype.call = function (subscriber) {
          return new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery);
      };
      return BufferCountOperator;
  })();
  var BufferCountSubscriber = (function (_super) {
      __extends(BufferCountSubscriber, _super);
      function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
          _super.call(this, destination);
          this.bufferSize = bufferSize;
          this.startBufferEvery = startBufferEvery;
          this.buffers = [[]];
          this.count = 0;
      }
      BufferCountSubscriber.prototype._next = function (value) {
          var count = (this.count += 1);
          var destination = this.destination;
          var bufferSize = this.bufferSize;
          var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
          var buffers = this.buffers;
          var len = buffers.length;
          var remove = -1;
          if (count % startBufferEvery === 0) {
              buffers.push([]);
          }
          for (var i = 0; i < len; i++) {
              var buffer = buffers[i];
              buffer.push(value);
              if (buffer.length === bufferSize) {
                  remove = i;
                  this.destination.next(buffer);
              }
          }
          if (remove !== -1) {
              buffers.splice(remove, 1);
          }
      };
      BufferCountSubscriber.prototype._error = function (err) {
          this.destination.error(err);
      };
      BufferCountSubscriber.prototype._complete = function () {
          var destination = this.destination;
          var buffers = this.buffers;
          while (buffers.length > 0) {
              var buffer = buffers.shift();
              if (buffer.length > 0) {
                  destination.next(buffer);
              }
          }
          destination.complete();
      };
      return BufferCountSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var nextTick_1 = __webpack_require__(37);
  function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
      if (bufferCreationInterval === void 0) { bufferCreationInterval = null; }
      if (scheduler === void 0) { scheduler = nextTick_1.default; }
      return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = bufferTime;
  var BufferTimeOperator = (function () {
      function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
          this.bufferTimeSpan = bufferTimeSpan;
          this.bufferCreationInterval = bufferCreationInterval;
          this.scheduler = scheduler;
      }
      BufferTimeOperator.prototype.call = function (subscriber) {
          return new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler);
      };
      return BufferTimeOperator;
  })();
  var BufferTimeSubscriber = (function (_super) {
      __extends(BufferTimeSubscriber, _super);
      function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
          _super.call(this, destination);
          this.bufferTimeSpan = bufferTimeSpan;
          this.bufferCreationInterval = bufferCreationInterval;
          this.scheduler = scheduler;
          this.buffers = [];
          var buffer = this.openBuffer();
          if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
              var closeState = { subscriber: this, buffer: buffer };
              var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
              this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
              this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
          }
          else {
              var timeSpanOnlyState = { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan };
              this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
          }
      }
      BufferTimeSubscriber.prototype._next = function (value) {
          var buffers = this.buffers;
          var len = buffers.length;
          for (var i = 0; i < len; i++) {
              buffers[i].push(value);
          }
      };
      BufferTimeSubscriber.prototype._error = function (err) {
          this.buffers.length = 0;
          this.destination.error(err);
      };
      BufferTimeSubscriber.prototype._complete = function () {
          var buffers = this.buffers;
          while (buffers.length > 0) {
              this.destination.next(buffers.shift());
          }
          this.destination.complete();
      };
      BufferTimeSubscriber.prototype.openBuffer = function () {
          var buffer = [];
          this.buffers.push(buffer);
          return buffer;
      };
      BufferTimeSubscriber.prototype.closeBuffer = function (buffer) {
          this.destination.next(buffer);
          var buffers = this.buffers;
          buffers.splice(buffers.indexOf(buffer), 1);
      };
      return BufferTimeSubscriber;
  })(Subscriber_1.default);
  function dispatchBufferTimeSpanOnly(state) {
      var subscriber = state.subscriber;
      var prevBuffer = state.buffer;
      if (prevBuffer) {
          subscriber.closeBuffer(prevBuffer);
      }
      state.buffer = subscriber.openBuffer();
      if (!subscriber.isUnsubscribed) {
          this.schedule(state, state.bufferTimeSpan);
      }
  }
  function dispatchBufferCreation(state) {
      var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
      var buffer = subscriber.openBuffer();
      var action = this;
      if (!subscriber.isUnsubscribed) {
          action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
          action.schedule(state, bufferCreationInterval);
      }
  }
  function dispatchBufferClose(_a) {
      var subscriber = _a.subscriber, buffer = _a.buffer;
      subscriber.closeBuffer(buffer);
  }


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Subscription_1 = __webpack_require__(6);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function bufferToggle(openings, closingSelector) {
      return this.lift(new BufferToggleOperator(openings, closingSelector));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = bufferToggle;
  var BufferToggleOperator = (function () {
      function BufferToggleOperator(openings, closingSelector) {
          this.openings = openings;
          this.closingSelector = closingSelector;
      }
      BufferToggleOperator.prototype.call = function (subscriber) {
          return new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector);
      };
      return BufferToggleOperator;
  })();
  var BufferToggleSubscriber = (function (_super) {
      __extends(BufferToggleSubscriber, _super);
      function BufferToggleSubscriber(destination, openings, closingSelector) {
          _super.call(this, destination);
          this.openings = openings;
          this.closingSelector = closingSelector;
          this.buffers = [];
          this.add(this.openings._subscribe(new BufferToggleOpeningsSubscriber(this)));
      }
      BufferToggleSubscriber.prototype._next = function (value) {
          var buffers = this.buffers;
          var len = buffers.length;
          for (var i = 0; i < len; i++) {
              buffers[i].push(value);
          }
      };
      BufferToggleSubscriber.prototype._error = function (err) {
          this.buffers = null;
          this.destination.error(err);
      };
      BufferToggleSubscriber.prototype._complete = function () {
          var buffers = this.buffers;
          while (buffers.length > 0) {
              this.destination.next(buffers.shift());
          }
          this.destination.complete();
      };
      BufferToggleSubscriber.prototype.openBuffer = function (value) {
          var closingSelector = this.closingSelector;
          var buffers = this.buffers;
          var closingNotifier = tryCatch_1.default(closingSelector)(value);
          if (closingNotifier === errorObject_1.errorObject) {
              var err = closingNotifier.e;
              this.buffers = null;
              this.destination.error(err);
          }
          else {
              var buffer = [];
              var context = {
                  buffer: buffer,
                  subscription: new Subscription_1.default()
              };
              buffers.push(buffer);
              var subscriber = new BufferClosingNotifierSubscriber(this, context);
              var subscription = closingNotifier._subscribe(subscriber);
              this.add(context.subscription.add(subscription));
          }
      };
      BufferToggleSubscriber.prototype.closeBuffer = function (context) {
          var buffer = context.buffer, subscription = context.subscription;
          var buffers = this.buffers;
          this.destination.next(buffer);
          buffers.splice(buffers.indexOf(buffer), 1);
          this.remove(subscription);
          subscription.unsubscribe();
      };
      return BufferToggleSubscriber;
  })(Subscriber_1.default);
  var BufferClosingNotifierSubscriber = (function (_super) {
      __extends(BufferClosingNotifierSubscriber, _super);
      function BufferClosingNotifierSubscriber(parent, context) {
          _super.call(this, null);
          this.parent = parent;
          this.context = context;
      }
      BufferClosingNotifierSubscriber.prototype._next = function () {
          this.parent.closeBuffer(this.context);
      };
      BufferClosingNotifierSubscriber.prototype._error = function (err) {
          this.parent.error(err);
      };
      BufferClosingNotifierSubscriber.prototype._complete = function () {
          // noop
      };
      return BufferClosingNotifierSubscriber;
  })(Subscriber_1.default);
  var BufferToggleOpeningsSubscriber = (function (_super) {
      __extends(BufferToggleOpeningsSubscriber, _super);
      function BufferToggleOpeningsSubscriber(parent) {
          _super.call(this, null);
          this.parent = parent;
      }
      BufferToggleOpeningsSubscriber.prototype._next = function (value) {
          this.parent.openBuffer(value);
      };
      BufferToggleOpeningsSubscriber.prototype._error = function (err) {
          this.parent.error(err);
      };
      BufferToggleOpeningsSubscriber.prototype._complete = function () {
          // noop
      };
      return BufferToggleOpeningsSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function bufferWhen(closingSelector) {
      return this.lift(new BufferWhenOperator(closingSelector));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = bufferWhen;
  var BufferWhenOperator = (function () {
      function BufferWhenOperator(closingSelector) {
          this.closingSelector = closingSelector;
      }
      BufferWhenOperator.prototype.call = function (subscriber) {
          return new BufferWhenSubscriber(subscriber, this.closingSelector);
      };
      return BufferWhenOperator;
  })();
  var BufferWhenSubscriber = (function (_super) {
      __extends(BufferWhenSubscriber, _super);
      function BufferWhenSubscriber(destination, closingSelector) {
          _super.call(this, destination);
          this.closingSelector = closingSelector;
          this.openBuffer();
      }
      BufferWhenSubscriber.prototype._next = function (value) {
          this.buffer.push(value);
      };
      BufferWhenSubscriber.prototype._error = function (err) {
          this.buffer = null;
          this.destination.error(err);
      };
      BufferWhenSubscriber.prototype._complete = function () {
          var buffer = this.buffer;
          this.destination.next(buffer);
          this.buffer = null;
          this.destination.complete();
      };
      BufferWhenSubscriber.prototype.openBuffer = function () {
          var prevClosingNotification = this.closingNotification;
          if (prevClosingNotification) {
              this.remove(prevClosingNotification);
              prevClosingNotification.unsubscribe();
          }
          var buffer = this.buffer;
          if (buffer) {
              this.destination.next(buffer);
          }
          this.buffer = [];
          var closingNotifier = tryCatch_1.default(this.closingSelector)();
          if (closingNotifier === errorObject_1.errorObject) {
              var err = closingNotifier.e;
              this.buffer = null;
              this.destination.error(err);
          }
          else {
              this.add(this.closingNotification = closingNotifier._subscribe(new BufferClosingNotifierSubscriber(this)));
          }
      };
      return BufferWhenSubscriber;
  })(Subscriber_1.default);
  var BufferClosingNotifierSubscriber = (function (_super) {
      __extends(BufferClosingNotifierSubscriber, _super);
      function BufferClosingNotifierSubscriber(parent) {
          _super.call(this, null);
          this.parent = parent;
      }
      BufferClosingNotifierSubscriber.prototype._next = function () {
          this.parent.openBuffer();
      };
      BufferClosingNotifierSubscriber.prototype._error = function (err) {
          this.parent.error(err);
      };
      BufferClosingNotifierSubscriber.prototype._complete = function () {
          // noop
      };
      return BufferClosingNotifierSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function _catch(selector) {
      var catchOperator = new CatchOperator(selector);
      var caught = this.lift(catchOperator);
      catchOperator.caught = caught;
      return caught;
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = _catch;
  var CatchOperator = (function () {
      function CatchOperator(selector) {
          this.selector = selector;
      }
      CatchOperator.prototype.call = function (subscriber) {
          return new CatchSubscriber(subscriber, this.selector, this.caught);
      };
      return CatchOperator;
  })();
  var CatchSubscriber = (function (_super) {
      __extends(CatchSubscriber, _super);
      function CatchSubscriber(destination, selector, caught) {
          _super.call(this, destination);
          this.selector = selector;
          this.caught = caught;
      }
      CatchSubscriber.prototype._error = function (err) {
          var result = tryCatch_1.default(this.selector)(err, this.caught);
          if (result === errorObject_1.errorObject) {
              this.destination.error(errorObject_1.errorObject.e);
          }
          else {
              this.add(result.subscribe(this.destination));
          }
      };
      return CatchSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  var combineLatest_support_1 = __webpack_require__(14);
  function combineAll(project) {
      return this.lift(new combineLatest_support_1.CombineLatestOperator(project));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = combineAll;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  var ArrayObservable_1 = __webpack_require__(11);
  var combineLatest_support_1 = __webpack_require__(14);
  function combineLatest() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
      }
      observables.unshift(this);
      var project;
      if (typeof observables[observables.length - 1] === 'function') {
          project = observables.pop();
      }
      return new ArrayObservable_1.default(observables).lift(new combineLatest_support_1.CombineLatestOperator(project));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = combineLatest;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  var Observable_1 = __webpack_require__(1);
  function concatProto() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
      }
      var args = observables;
      args.unshift(this);
      if (args.length > 1 && typeof args[args.length - 1].schedule === 'function') {
          args.splice(args.length - 2, 0, 1);
      }
      return Observable_1.default.fromArray(args).mergeAll(1);
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = concatProto;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  var mergeAll_support_1 = __webpack_require__(44);
  function concatAll() {
      return this.lift(new mergeAll_support_1.MergeAllOperator(1));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = concatAll;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  var mergeMap_support_1 = __webpack_require__(62);
  function concatMap(project, projectResult) {
      return this.lift(new mergeMap_support_1.MergeMapOperator(project, projectResult, 1));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = concatMap;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var subscribeToResult_1 = __webpack_require__(18);
  var OuterSubscriber_1 = __webpack_require__(17);
  var MergeMapOperator = (function () {
      function MergeMapOperator(project, resultSelector, concurrent) {
          if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
          this.project = project;
          this.resultSelector = resultSelector;
          this.concurrent = concurrent;
      }
      MergeMapOperator.prototype.call = function (observer) {
          return new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent);
      };
      return MergeMapOperator;
  })();
  exports.MergeMapOperator = MergeMapOperator;
  var MergeMapSubscriber = (function (_super) {
      __extends(MergeMapSubscriber, _super);
      function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
          if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
          _super.call(this, destination);
          this.project = project;
          this.resultSelector = resultSelector;
          this.concurrent = concurrent;
          this.hasCompleted = false;
          this.buffer = [];
          this.active = 0;
          this.index = 0;
      }
      MergeMapSubscriber.prototype._next = function (value) {
          if (this.active < this.concurrent) {
              var resultSelector = this.resultSelector;
              var index = this.index++;
              var ish = tryCatch_1.default(this.project)(value, index);
              var destination = this.destination;
              if (ish === errorObject_1.errorObject) {
                  destination.error(ish.e);
              }
              else {
                  this.active++;
                  this._innerSub(ish, value, index);
              }
          }
          else {
              this.buffer.push(value);
          }
      };
      MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
          this.add(subscribeToResult_1.default(this, ish, value, index));
      };
      MergeMapSubscriber.prototype._complete = function () {
          this.hasCompleted = true;
          if (this.active === 0 && this.buffer.length === 0) {
              this.destination.complete();
          }
      };
      MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
          var _a = this, destination = _a.destination, resultSelector = _a.resultSelector;
          if (resultSelector) {
              var result = tryCatch_1.default(resultSelector)(outerValue, innerValue, outerIndex, innerIndex);
              if (result === errorObject_1.errorObject) {
                  destination.error(errorObject_1.errorObject.e);
              }
              else {
                  destination.next(result);
              }
          }
          else {
              destination.next(innerValue);
          }
      };
      MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
          var buffer = this.buffer;
          this.remove(innerSub);
          this.active--;
          if (buffer.length > 0) {
              this._next(buffer.shift());
          }
          else if (this.active === 0 && this.hasCompleted) {
              this.destination.complete();
          }
      };
      return MergeMapSubscriber;
  })(OuterSubscriber_1.default);
  exports.MergeMapSubscriber = MergeMapSubscriber;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  var mergeMapTo_support_1 = __webpack_require__(64);
  function concatMapTo(observable, projectResult) {
      return this.lift(new mergeMapTo_support_1.MergeMapToOperator(observable, projectResult, 1));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = concatMapTo;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var OuterSubscriber_1 = __webpack_require__(17);
  var subscribeToResult_1 = __webpack_require__(18);
  var MergeMapToOperator = (function () {
      function MergeMapToOperator(ish, resultSelector, concurrent) {
          if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
          this.ish = ish;
          this.resultSelector = resultSelector;
          this.concurrent = concurrent;
      }
      MergeMapToOperator.prototype.call = function (observer) {
          return new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent);
      };
      return MergeMapToOperator;
  })();
  exports.MergeMapToOperator = MergeMapToOperator;
  var MergeMapToSubscriber = (function (_super) {
      __extends(MergeMapToSubscriber, _super);
      function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
          if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
          _super.call(this, destination);
          this.ish = ish;
          this.resultSelector = resultSelector;
          this.concurrent = concurrent;
          this.hasCompleted = false;
          this.buffer = [];
          this.active = 0;
          this.index = 0;
      }
      MergeMapToSubscriber.prototype._next = function (value) {
          if (this.active < this.concurrent) {
              var resultSelector = this.resultSelector;
              var index = this.index++;
              var ish = this.ish;
              var destination = this.destination;
              if (ish === errorObject_1.errorObject) {
                  destination.error(ish.e);
              }
              else {
                  this.active--;
                  this._innerSub(ish, destination, resultSelector, value, index);
              }
          }
          else {
              this.buffer.push(value);
          }
      };
      MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
          this.add(subscribeToResult_1.default(this, ish, value, index));
      };
      MergeMapToSubscriber.prototype._complete = function () {
          this.hasCompleted = true;
          if (this.active === 0 && this.buffer.length === 0) {
              this.destination.complete();
          }
      };
      MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
          var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
          if (resultSelector) {
              var result = tryCatch_1.default(resultSelector)(outerValue, innerValue, outerIndex, innerIndex);
              if (result === errorObject_1.errorObject) {
                  destination.error(errorObject_1.errorObject.e);
              }
              else {
                  destination.next(result);
              }
          }
          else {
              destination.next(innerValue);
          }
      };
      MergeMapToSubscriber.prototype.notifyError = function (err) {
          this.destination.error(err);
      };
      MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
          var buffer = this.buffer;
          this.remove(innerSub);
          this.active--;
          if (buffer.length > 0) {
              this._next(buffer.shift());
          }
          else if (this.active === 0 && this.hasCompleted) {
              this.destination.complete();
          }
      };
      return MergeMapToSubscriber;
  })(OuterSubscriber_1.default);
  exports.MergeMapToSubscriber = MergeMapToSubscriber;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var bindCallback_1 = __webpack_require__(66);
  function count(predicate, thisArg) {
      return this.lift(new CountOperator(predicate, thisArg, this));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = count;
  var CountOperator = (function () {
      function CountOperator(predicate, thisArg, source) {
          this.predicate = predicate;
          this.thisArg = thisArg;
          this.source = source;
      }
      CountOperator.prototype.call = function (subscriber) {
          return new CountSubscriber(subscriber, this.predicate, this.thisArg, this.source);
      };
      return CountOperator;
  })();
  var CountSubscriber = (function (_super) {
      __extends(CountSubscriber, _super);
      function CountSubscriber(destination, predicate, thisArg, source) {
          _super.call(this, destination);
          this.thisArg = thisArg;
          this.source = source;
          this.count = 0;
          this.index = 0;
          if (typeof predicate === 'function') {
              this.predicate = bindCallback_1.default(predicate, thisArg, 3);
          }
      }
      CountSubscriber.prototype._next = function (value) {
          var predicate = this.predicate;
          var passed = true;
          if (predicate) {
              passed = tryCatch_1.default(predicate)(value, this.index++, this.source);
              if (passed === errorObject_1.errorObject) {
                  this.destination.error(passed.e);
                  return;
              }
          }
          if (passed) {
              this.count += 1;
          }
      };
      CountSubscriber.prototype._complete = function () {
          this.destination.next(this.count);
          this.destination.complete();
      };
      return CountSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 66 */
/***/ function(module, exports) {

  function bindCallback(func, thisArg, argCount) {
      if (typeof thisArg === 'undefined') {
          return func;
      }
      switch (argCount) {
          case 0:
              return function () {
                  return func.call(thisArg);
              };
          case 1:
              return function (arg) {
                  return func.call(thisArg, arg);
              };
          case 2:
              return function (value, index) {
                  return func.call(thisArg, value, index);
              };
          case 3:
              return function (value, index, collection) {
                  return func.call(thisArg, value, index, collection);
              };
      }
      return function () {
          return func.apply(thisArg, arguments);
      };
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = bindCallback;
  ;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function dematerialize() {
      return this.lift(new DeMaterializeOperator());
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = dematerialize;
  var DeMaterializeOperator = (function () {
      function DeMaterializeOperator() {
      }
      DeMaterializeOperator.prototype.call = function (subscriber) {
          return new DeMaterializeSubscriber(subscriber);
      };
      return DeMaterializeOperator;
  })();
  var DeMaterializeSubscriber = (function (_super) {
      __extends(DeMaterializeSubscriber, _super);
      function DeMaterializeSubscriber(destination) {
          _super.call(this, destination);
      }
      DeMaterializeSubscriber.prototype._next = function (value) {
          value.observe(this.destination);
      };
      return DeMaterializeSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var PromiseObservable_1 = __webpack_require__(29);
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function debounce(durationSelector) {
      return this.lift(new DebounceOperator(durationSelector));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = debounce;
  var DebounceOperator = (function () {
      function DebounceOperator(durationSelector) {
          this.durationSelector = durationSelector;
      }
      DebounceOperator.prototype.call = function (observer) {
          return new DebounceSubscriber(observer, this.durationSelector);
      };
      return DebounceOperator;
  })();
  var DebounceSubscriber = (function (_super) {
      __extends(DebounceSubscriber, _super);
      function DebounceSubscriber(destination, durationSelector) {
          _super.call(this, destination);
          this.durationSelector = durationSelector;
          this.debouncedSubscription = null;
          this.lastValue = null;
          this._index = 0;
      }
      Object.defineProperty(DebounceSubscriber.prototype, "index", {
          get: function () {
              return this._index;
          },
          enumerable: true,
          configurable: true
      });
      DebounceSubscriber.prototype._next = function (value) {
          var destination = this.destination;
          var currentIndex = ++this._index;
          var debounce = tryCatch_1.default(this.durationSelector)(value);
          if (debounce === errorObject_1.errorObject) {
              destination.error(errorObject_1.errorObject.e);
          }
          else {
              if (typeof debounce.subscribe !== 'function'
                  && typeof debounce.then === 'function') {
                  debounce = PromiseObservable_1.default.create(debounce);
              }
              this.lastValue = value;
              this.add(this.debouncedSubscription = debounce._subscribe(new DurationSelectorSubscriber(this, currentIndex)));
          }
      };
      DebounceSubscriber.prototype._complete = function () {
          this.debouncedNext();
          this.destination.complete();
      };
      DebounceSubscriber.prototype.debouncedNext = function () {
          this.clearDebounce();
          if (this.lastValue != null) {
              this.destination.next(this.lastValue);
              this.lastValue = null;
          }
      };
      DebounceSubscriber.prototype.clearDebounce = function () {
          var debouncedSubscription = this.debouncedSubscription;
          if (debouncedSubscription !== null) {
              this.remove(debouncedSubscription);
              this.debouncedSubscription = null;
          }
      };
      return DebounceSubscriber;
  })(Subscriber_1.default);
  var DurationSelectorSubscriber = (function (_super) {
      __extends(DurationSelectorSubscriber, _super);
      function DurationSelectorSubscriber(parent, currentIndex) {
          _super.call(this, null);
          this.parent = parent;
          this.currentIndex = currentIndex;
      }
      DurationSelectorSubscriber.prototype.debounceNext = function () {
          var parent = this.parent;
          if (this.currentIndex === parent.index) {
              parent.debouncedNext();
              if (!this.isUnsubscribed) {
                  this.unsubscribe();
              }
          }
      };
      DurationSelectorSubscriber.prototype._next = function (unused) {
          this.debounceNext();
      };
      DurationSelectorSubscriber.prototype._error = function (err) {
          this.parent.error(err);
      };
      DurationSelectorSubscriber.prototype._complete = function () {
          this.debounceNext();
      };
      return DurationSelectorSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var nextTick_1 = __webpack_require__(37);
  function debounceTime(dueTime, scheduler) {
      if (scheduler === void 0) { scheduler = nextTick_1.default; }
      return this.lift(new DebounceTimeOperator(dueTime, scheduler));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = debounceTime;
  var DebounceTimeOperator = (function () {
      function DebounceTimeOperator(dueTime, scheduler) {
          this.dueTime = dueTime;
          this.scheduler = scheduler;
      }
      DebounceTimeOperator.prototype.call = function (subscriber) {
          return new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler);
      };
      return DebounceTimeOperator;
  })();
  var DebounceTimeSubscriber = (function (_super) {
      __extends(DebounceTimeSubscriber, _super);
      function DebounceTimeSubscriber(destination, dueTime, scheduler) {
          _super.call(this, destination);
          this.dueTime = dueTime;
          this.scheduler = scheduler;
          this.debouncedSubscription = null;
          this.lastValue = null;
      }
      DebounceTimeSubscriber.prototype._next = function (value) {
          this.clearDebounce();
          this.lastValue = value;
          this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
      };
      DebounceTimeSubscriber.prototype._complete = function () {
          this.debouncedNext();
          this.destination.complete();
      };
      DebounceTimeSubscriber.prototype.debouncedNext = function () {
          this.clearDebounce();
          if (this.lastValue != null) {
              this.destination.next(this.lastValue);
              this.lastValue = null;
          }
      };
      DebounceTimeSubscriber.prototype.clearDebounce = function () {
          var debouncedSubscription = this.debouncedSubscription;
          if (debouncedSubscription !== null) {
              this.remove(debouncedSubscription);
              debouncedSubscription.unsubscribe();
              this.debouncedSubscription = null;
          }
      };
      return DebounceTimeSubscriber;
  })(Subscriber_1.default);
  function dispatchNext(subscriber) {
      subscriber.debouncedNext();
  }


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function defaultIfEmpty(defaultValue) {
      if (defaultValue === void 0) { defaultValue = null; }
      return this.lift(new DefaultIfEmptyOperator(defaultValue));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = defaultIfEmpty;
  var DefaultIfEmptyOperator = (function () {
      function DefaultIfEmptyOperator(defaultValue) {
          this.defaultValue = defaultValue;
      }
      DefaultIfEmptyOperator.prototype.call = function (subscriber) {
          return new DefaultIfEmptySubscriber(subscriber, this.defaultValue);
      };
      return DefaultIfEmptyOperator;
  })();
  var DefaultIfEmptySubscriber = (function (_super) {
      __extends(DefaultIfEmptySubscriber, _super);
      function DefaultIfEmptySubscriber(destination, defaultValue) {
          _super.call(this, destination);
          this.defaultValue = defaultValue;
          this.isEmpty = true;
      }
      DefaultIfEmptySubscriber.prototype._next = function (x) {
          this.isEmpty = false;
          this.destination.next(x);
      };
      DefaultIfEmptySubscriber.prototype._complete = function () {
          if (this.isEmpty) {
              this.destination.next(this.defaultValue);
          }
          this.destination.complete();
      };
      return DefaultIfEmptySubscriber;
  })(Subscriber_1.default);


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Notification_1 = __webpack_require__(32);
  var immediate_1 = __webpack_require__(22);
  function delay(delay, scheduler) {
      if (scheduler === void 0) { scheduler = immediate_1.default; }
      return this.lift(new DelayOperator(delay, scheduler));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = delay;
  var DelayOperator = (function () {
      function DelayOperator(delay, scheduler) {
          this.delay = delay;
          this.scheduler = scheduler;
      }
      DelayOperator.prototype.call = function (subscriber) {
          return new DelaySubscriber(subscriber, this.delay, this.scheduler);
      };
      return DelayOperator;
  })();
  var DelaySubscriber = (function (_super) {
      __extends(DelaySubscriber, _super);
      function DelaySubscriber(destination, delay, scheduler) {
          _super.call(this, destination);
          this.queue = [];
          this.active = false;
          this.errored = false;
          this.delay = delay;
          this.scheduler = scheduler;
      }
      DelaySubscriber.dispatch = function (state) {
          var source = state.source;
          var queue = source.queue;
          var scheduler = state.scheduler;
          var destination = state.destination;
          while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
              queue.shift().notification.observe(destination);
          }
          if (queue.length > 0) {
              var delay_1 = Math.max(0, queue[0].time - scheduler.now());
              this.schedule(state, delay_1);
          }
          else {
              source.active = false;
          }
      };
      DelaySubscriber.prototype._next = function (x) {
          if (this.errored) {
              return;
          }
          var scheduler = this.scheduler;
          this.queue.push(new DelayMessage(scheduler.now() + this.delay, Notification_1.default.createNext(x)));
          if (this.active === false) {
              this._schedule(scheduler);
          }
      };
      DelaySubscriber.prototype._error = function (e) {
          var scheduler = this.scheduler;
          this.errored = true;
          this.queue = [new DelayMessage(scheduler.now() + this.delay, Notification_1.default.createError(e))];
          if (this.active === false) {
              this._schedule(scheduler);
          }
      };
      DelaySubscriber.prototype._complete = function () {
          if (this.errored) {
              return;
          }
          var scheduler = this.scheduler;
          this.queue.push(new DelayMessage(scheduler.now() + this.delay, Notification_1.default.createComplete()));
          if (this.active === false) {
              this._schedule(scheduler);
          }
      };
      DelaySubscriber.prototype._schedule = function (scheduler) {
          this.active = true;
          this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
              source: this, destination: this.destination, scheduler: scheduler
          }));
      };
      return DelaySubscriber;
  })(Subscriber_1.default);
  var DelayMessage = (function () {
      function DelayMessage(time, notification) {
          this.time = time;
          this.notification = notification;
      }
      return DelayMessage;
  })();


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var bindCallback_1 = __webpack_require__(66);
  function distinctUntilChanged(compare, thisArg) {
      return this.lift(new DistinctUntilChangedOperator(thisArg ?
          bindCallback_1.default(compare, thisArg, 2) :
          compare));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = distinctUntilChanged;
  var DistinctUntilChangedOperator = (function () {
      function DistinctUntilChangedOperator(compare) {
          this.compare = compare;
      }
      DistinctUntilChangedOperator.prototype.call = function (subscriber) {
          return new DistinctUntilChangedSubscriber(subscriber, this.compare);
      };
      return DistinctUntilChangedOperator;
  })();
  var DistinctUntilChangedSubscriber = (function (_super) {
      __extends(DistinctUntilChangedSubscriber, _super);
      function DistinctUntilChangedSubscriber(destination, compare) {
          _super.call(this, destination);
          this.hasValue = false;
          if (typeof compare === 'function') {
              this.compare = compare;
          }
      }
      DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
          return x === y;
      };
      DistinctUntilChangedSubscriber.prototype._next = function (x) {
          var result = false;
          if (this.hasValue) {
              result = tryCatch_1.default(this.compare)(this.value, x);
              if (result === errorObject_1.errorObject) {
                  this.destination.error(errorObject_1.errorObject.e);
                  return;
              }
          }
          else {
              this.hasValue = true;
          }
          if (Boolean(result) === false) {
              this.value = x;
              this.destination.next(x);
          }
      };
      return DistinctUntilChangedSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var noop_1 = __webpack_require__(3);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function _do(nextOrObserver, error, complete) {
      var next;
      if (nextOrObserver && typeof nextOrObserver === 'object') {
          next = nextOrObserver.next;
          error = nextOrObserver.error;
          complete = nextOrObserver.complete;
      }
      else {
          next = nextOrObserver;
      }
      return this.lift(new DoOperator(next || noop_1.default, error || noop_1.default, complete || noop_1.default));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = _do;
  var DoOperator = (function () {
      function DoOperator(next, error, complete) {
          this.next = next;
          this.error = error;
          this.complete = complete;
      }
      DoOperator.prototype.call = function (subscriber) {
          return new DoSubscriber(subscriber, this.next, this.error, this.complete);
      };
      return DoOperator;
  })();
  var DoSubscriber = (function (_super) {
      __extends(DoSubscriber, _super);
      function DoSubscriber(destination, next, error, complete) {
          _super.call(this, destination);
          this.__next = next;
          this.__error = error;
          this.__complete = complete;
      }
      DoSubscriber.prototype._next = function (x) {
          var result = tryCatch_1.default(this.__next)(x);
          if (result === errorObject_1.errorObject) {
              this.destination.error(errorObject_1.errorObject.e);
          }
          else {
              this.destination.next(x);
          }
      };
      DoSubscriber.prototype._error = function (e) {
          var result = tryCatch_1.default(this.__error)(e);
          if (result === errorObject_1.errorObject) {
              this.destination.error(errorObject_1.errorObject.e);
          }
          else {
              this.destination.error(e);
          }
      };
      DoSubscriber.prototype._complete = function () {
          var result = tryCatch_1.default(this.__complete)();
          if (result === errorObject_1.errorObject) {
              this.destination.error(errorObject_1.errorObject.e);
          }
          else {
              this.destination.complete();
          }
      };
      return DoSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  var expand_support_1 = __webpack_require__(75);
  function expand(project, concurrent) {
      if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
      return this.lift(new expand_support_1.ExpandOperator(project, concurrent));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = expand;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var OuterSubscriber_1 = __webpack_require__(17);
  var subscribeToResult_1 = __webpack_require__(18);
  var ExpandOperator = (function () {
      function ExpandOperator(project, concurrent) {
          if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
          this.project = project;
          this.concurrent = concurrent;
      }
      ExpandOperator.prototype.call = function (subscriber) {
          return new ExpandSubscriber(subscriber, this.project, this.concurrent);
      };
      return ExpandOperator;
  })();
  exports.ExpandOperator = ExpandOperator;
  var ExpandSubscriber = (function (_super) {
      __extends(ExpandSubscriber, _super);
      function ExpandSubscriber(destination, project, concurrent) {
          if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
          _super.call(this, destination);
          this.project = project;
          this.concurrent = concurrent;
          this.index = 0;
          this.active = 0;
          this.hasCompleted = false;
          if (concurrent < Number.POSITIVE_INFINITY) {
              this.buffer = [];
          }
      }
      ExpandSubscriber.prototype._next = function (value) {
          var index = this.index++;
          this.destination.next(value);
          if (this.active < this.concurrent) {
              var result = tryCatch_1.default(this.project)(value, index);
              if (result === errorObject_1.errorObject) {
                  this.destination.error(result.e);
              }
              else {
                  if (result._isScalar) {
                      this._next(result.value);
                  }
                  else {
                      this.active++;
                      this.add(subscribeToResult_1.default(this, result, value, index));
                  }
              }
          }
          else {
              this.buffer.push(value);
          }
      };
      ExpandSubscriber.prototype._complete = function () {
          this.hasCompleted = true;
          if (this.hasCompleted && this.active === 0) {
              this.destination.complete();
          }
      };
      ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
          var buffer = this.buffer;
          this.remove(innerSub);
          this.active--;
          if (buffer && buffer.length > 0) {
              this._next(buffer.shift());
          }
          if (this.hasCompleted && this.active === 0) {
              this.destination.complete();
          }
      };
      ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
          this._next(innerValue);
      };
      return ExpandSubscriber;
  })(OuterSubscriber_1.default);
  exports.ExpandSubscriber = ExpandSubscriber;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var bindCallback_1 = __webpack_require__(66);
  /**
   * Similar to the well-known `Array.prototype.filter` method, this operator filters values down to a set
   * allowed by a `select` function
   *
   * @param {Function} select a function that is used to select the resulting values
   *  if it returns `true`, the value is emitted, if `false` the value is not passed to the resulting observable
   * @param {any} [thisArg] an optional argument to determine the value of `this` in the `select` function
   * @returns {Observable} an observable of values allowed by the select function
   */
  function filter(select, thisArg) {
      return this.lift(new FilterOperator(select, thisArg));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = filter;
  var FilterOperator = (function () {
      function FilterOperator(select, thisArg) {
          this.select = bindCallback_1.default(select, thisArg, 2);
      }
      FilterOperator.prototype.call = function (subscriber) {
          return new FilterSubscriber(subscriber, this.select);
      };
      return FilterOperator;
  })();
  var FilterSubscriber = (function (_super) {
      __extends(FilterSubscriber, _super);
      function FilterSubscriber(destination, select) {
          _super.call(this, destination);
          this.count = 0;
          this.select = select;
      }
      FilterSubscriber.prototype._next = function (x) {
          var result = tryCatch_1.default(this.select)(x, this.count++);
          if (result === errorObject_1.errorObject) {
              this.destination.error(errorObject_1.errorObject.e);
          }
          else if (Boolean(result)) {
              this.destination.next(x);
          }
      };
      return FilterSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Subscription_1 = __webpack_require__(6);
  var bindCallback_1 = __webpack_require__(66);
  function _finally(finallySelector, thisArg) {
      return this.lift(new FinallyOperator(thisArg ?
          bindCallback_1.default(finallySelector, thisArg, 2) :
          finallySelector));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = _finally;
  var FinallyOperator = (function () {
      function FinallyOperator(finallySelector) {
          this.finallySelector = finallySelector;
      }
      FinallyOperator.prototype.call = function (subscriber) {
          return new FinallySubscriber(subscriber, this.finallySelector);
      };
      return FinallyOperator;
  })();
  var FinallySubscriber = (function (_super) {
      __extends(FinallySubscriber, _super);
      function FinallySubscriber(destination, finallySelector) {
          _super.call(this, destination);
          this.add(new Subscription_1.default(finallySelector));
      }
      return FinallySubscriber;
  })(Subscriber_1.default);


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var EmptyError_1 = __webpack_require__(79);
  function first(predicate, resultSelector, defaultValue) {
      return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = first;
  var FirstOperator = (function () {
      function FirstOperator(predicate, resultSelector, defaultValue, source) {
          this.predicate = predicate;
          this.resultSelector = resultSelector;
          this.defaultValue = defaultValue;
          this.source = source;
      }
      FirstOperator.prototype.call = function (observer) {
          return new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
      };
      return FirstOperator;
  })();
  var FirstSubscriber = (function (_super) {
      __extends(FirstSubscriber, _super);
      function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
          _super.call(this, destination);
          this.predicate = predicate;
          this.resultSelector = resultSelector;
          this.defaultValue = defaultValue;
          this.source = source;
          this.index = 0;
          this.hasCompleted = false;
      }
      FirstSubscriber.prototype._next = function (value) {
          var _a = this, destination = _a.destination, predicate = _a.predicate, resultSelector = _a.resultSelector;
          var index = this.index++;
          var passed = true;
          if (predicate) {
              passed = tryCatch_1.default(predicate)(value, index, this.source);
              if (passed === errorObject_1.errorObject) {
                  destination.error(errorObject_1.errorObject.e);
                  return;
              }
          }
          if (passed) {
              if (resultSelector) {
                  value = tryCatch_1.default(resultSelector)(value, index);
                  if (value === errorObject_1.errorObject) {
                      destination.error(errorObject_1.errorObject.e);
                      return;
                  }
              }
              destination.next(value);
              destination.complete();
              this.hasCompleted = true;
          }
      };
      FirstSubscriber.prototype._complete = function () {
          var destination = this.destination;
          if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
              destination.next(this.defaultValue);
              destination.complete();
          }
          else if (!this.hasCompleted) {
              destination.error(new EmptyError_1.default);
          }
      };
      return FirstSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 79 */
/***/ function(module, exports) {

  var EmptyError = (function () {
      function EmptyError() {
          this.name = 'EmptyError';
          this.message = 'no elements in sequence';
      }
      return EmptyError;
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = EmptyError;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Observable_1 = __webpack_require__(1);
  var Subject_1 = __webpack_require__(81);
  var Map_1 = __webpack_require__(83);
  var FastMap_1 = __webpack_require__(84);
  var groupBy_support_1 = __webpack_require__(85);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function groupBy(keySelector, elementSelector, durationSelector) {
      return new GroupByObservable(this, keySelector, elementSelector, durationSelector);
  }
  exports.groupBy = groupBy;
  var GroupByObservable = (function (_super) {
      __extends(GroupByObservable, _super);
      function GroupByObservable(source, keySelector, elementSelector, durationSelector) {
          _super.call(this);
          this.source = source;
          this.keySelector = keySelector;
          this.elementSelector = elementSelector;
          this.durationSelector = durationSelector;
      }
      GroupByObservable.prototype._subscribe = function (subscriber) {
          var refCountSubscription = new groupBy_support_1.RefCountSubscription();
          var groupBySubscriber = new GroupBySubscriber(subscriber, refCountSubscription, this.keySelector, this.elementSelector, this.durationSelector);
          refCountSubscription.setPrimary(this.source.subscribe(groupBySubscriber));
          return refCountSubscription;
      };
      return GroupByObservable;
  })(Observable_1.default);
  exports.GroupByObservable = GroupByObservable;
  var GroupBySubscriber = (function (_super) {
      __extends(GroupBySubscriber, _super);
      function GroupBySubscriber(destination, refCountSubscription, keySelector, elementSelector, durationSelector) {
          _super.call(this);
          this.refCountSubscription = refCountSubscription;
          this.keySelector = keySelector;
          this.elementSelector = elementSelector;
          this.durationSelector = durationSelector;
          this.groups = null;
          this.destination = destination;
          this.add(destination);
      }
      GroupBySubscriber.prototype._next = function (x) {
          var key = tryCatch_1.default(this.keySelector)(x);
          if (key === errorObject_1.errorObject) {
              this.error(key.e);
          }
          else {
              var groups = this.groups;
              var elementSelector = this.elementSelector;
              var durationSelector = this.durationSelector;
              if (!groups) {
                  groups = this.groups = typeof key === 'string' ? new FastMap_1.default() : new Map_1.default();
              }
              var group = groups.get(key);
              if (!group) {
                  groups.set(key, group = new Subject_1.default());
                  var groupedObservable = new groupBy_support_1.GroupedObservable(key, group, this.refCountSubscription);
                  if (durationSelector) {
                      var duration = tryCatch_1.default(durationSelector)(new groupBy_support_1.GroupedObservable(key, group));
                      if (duration === errorObject_1.errorObject) {
                          this.error(duration.e);
                      }
                      else {
                          this.add(duration._subscribe(new GroupDurationSubscriber(key, group, this)));
                      }
                  }
                  this.destination.next(groupedObservable);
              }
              if (elementSelector) {
                  var value = tryCatch_1.default(elementSelector)(x);
                  if (value === errorObject_1.errorObject) {
                      this.error(value.e);
                  }
                  else {
                      group.next(value);
                  }
              }
              else {
                  group.next(x);
              }
          }
      };
      GroupBySubscriber.prototype._error = function (err) {
          var _this = this;
          var groups = this.groups;
          if (groups) {
              groups.forEach(function (group, key) {
                  group.error(err);
                  _this.removeGroup(key);
              });
          }
          this.destination.error(err);
      };
      GroupBySubscriber.prototype._complete = function () {
          var _this = this;
          var groups = this.groups;
          if (groups) {
              groups.forEach(function (group, key) {
                  group.complete();
                  _this.removeGroup(group);
              });
          }
          this.destination.complete();
      };
      GroupBySubscriber.prototype.removeGroup = function (key) {
          this.groups.delete(key);
      };
      return GroupBySubscriber;
  })(Subscriber_1.default);
  var GroupDurationSubscriber = (function (_super) {
      __extends(GroupDurationSubscriber, _super);
      function GroupDurationSubscriber(key, group, parent) {
          _super.call(this, null);
          this.key = key;
          this.group = group;
          this.parent = parent;
      }
      GroupDurationSubscriber.prototype._next = function (value) {
          this.group.complete();
          this.parent.removeGroup(this.key);
      };
      GroupDurationSubscriber.prototype._error = function (err) {
          this.group.error(err);
          this.parent.removeGroup(this.key);
      };
      GroupDurationSubscriber.prototype._complete = function () {
          this.group.complete();
          this.parent.removeGroup(this.key);
      };
      return GroupDurationSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var Subscriber_1 = __webpack_require__(2);
  var Subscription_1 = __webpack_require__(6);
  var SubjectSubscription_1 = __webpack_require__(82);
  var subscriptionAdd = Subscription_1.default.prototype.add;
  var subscriptionRemove = Subscription_1.default.prototype.remove;
  var subscriptionUnsubscribe = Subscription_1.default.prototype.unsubscribe;
  var subscriberNext = Subscriber_1.default.prototype.next;
  var subscriberError = Subscriber_1.default.prototype.error;
  var subscriberComplete = Subscriber_1.default.prototype.complete;
  var _subscriberNext = Subscriber_1.default.prototype._next;
  var _subscriberError = Subscriber_1.default.prototype._error;
  var _subscriberComplete = Subscriber_1.default.prototype._complete;
  var Subject = (function (_super) {
      __extends(Subject, _super);
      function Subject() {
          _super.apply(this, arguments);
          this.observers = [];
          this.isUnsubscribed = false;
          this.dispatching = false;
          this.errorSignal = false;
          this.completeSignal = false;
      }
      Subject.create = function (source, destination) {
          return new BidirectionalSubject(source, destination);
      };
      Subject.prototype.lift = function (operator) {
          var subject = new BidirectionalSubject(this, this.destination || this);
          subject.operator = operator;
          return subject;
      };
      Subject.prototype._subscribe = function (subscriber) {
          if (subscriber.isUnsubscribed) {
              return;
          }
          else if (this.errorSignal) {
              subscriber.error(this.errorInstance);
              return;
          }
          else if (this.completeSignal) {
              subscriber.complete();
              return;
          }
          else if (this.isUnsubscribed) {
              throw new Error("Cannot subscribe to a disposed Subject.");
          }
          this.observers.push(subscriber);
          return new SubjectSubscription_1.default(this, subscriber);
      };
      Subject.prototype.add = function (subscription) {
          subscriptionAdd.call(this, subscription);
      };
      Subject.prototype.remove = function (subscription) {
          subscriptionRemove.call(this, subscription);
      };
      Subject.prototype.unsubscribe = function () {
          this.observers = void 0;
          subscriptionUnsubscribe.call(this);
      };
      Subject.prototype.next = function (value) {
          if (this.isUnsubscribed) {
              return;
          }
          this.dispatching = true;
          this._next(value);
          this.dispatching = false;
          if (this.errorSignal) {
              this.error(this.errorInstance);
          }
          else if (this.completeSignal) {
              this.complete();
          }
      };
      Subject.prototype.error = function (error) {
          if (this.isUnsubscribed || this.completeSignal) {
              return;
          }
          this.errorSignal = true;
          this.errorInstance = error;
          if (this.dispatching) {
              return;
          }
          this._error(error);
          this.unsubscribe();
      };
      Subject.prototype.complete = function () {
          if (this.isUnsubscribed || this.errorSignal) {
              return;
          }
          this.completeSignal = true;
          if (this.dispatching) {
              return;
          }
          this._complete();
          this.unsubscribe();
      };
      Subject.prototype._next = function (value) {
          var index = -1;
          var observers = this.observers.slice(0);
          var len = observers.length;
          while (++index < len) {
              observers[index].next(value);
          }
      };
      Subject.prototype._error = function (error) {
          var index = -1;
          var observers = this.observers;
          var len = observers.length;
          // optimization -- block next, complete, and unsubscribe while dispatching
          this.observers = void 0;
          this.isUnsubscribed = true;
          while (++index < len) {
              observers[index].error(error);
          }
          this.isUnsubscribed = false;
      };
      Subject.prototype._complete = function () {
          var index = -1;
          var observers = this.observers;
          var len = observers.length;
          // optimization -- block next, complete, and unsubscribe while dispatching
          this.observers = void 0; // optimization
          this.isUnsubscribed = true;
          while (++index < len) {
              observers[index].complete();
          }
          this.isUnsubscribed = false;
      };
      return Subject;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = Subject;
  var BidirectionalSubject = (function (_super) {
      __extends(BidirectionalSubject, _super);
      function BidirectionalSubject(source, destination) {
          _super.call(this);
          this.source = source;
          this.destination = destination;
      }
      BidirectionalSubject.prototype._subscribe = function (subscriber) {
          var operator = this.operator;
          return this.source._subscribe.call(this.source, operator ? operator.call(subscriber) : subscriber);
      };
      BidirectionalSubject.prototype.next = function (x) {
          subscriberNext.call(this, x);
      };
      BidirectionalSubject.prototype.error = function (e) {
          subscriberError.call(this, e);
      };
      BidirectionalSubject.prototype.complete = function () {
          subscriberComplete.call(this);
      };
      BidirectionalSubject.prototype._next = function (x) {
          _subscriberNext.call(this, x);
      };
      BidirectionalSubject.prototype._error = function (e) {
          _subscriberError.call(this, e);
      };
      BidirectionalSubject.prototype._complete = function () {
          _subscriberComplete.call(this);
      };
      return BidirectionalSubject;
  })(Subject);


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = __webpack_require__(6);
  var SubjectSubscription = (function (_super) {
      __extends(SubjectSubscription, _super);
      function SubjectSubscription(subject, observer) {
          _super.call(this);
          this.subject = subject;
          this.observer = observer;
          this.isUnsubscribed = false;
      }
      SubjectSubscription.prototype.unsubscribe = function () {
          if (this.isUnsubscribed) {
              return;
          }
          this.isUnsubscribed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = void 0;
          if (!observers || observers.length === 0 || subject.isUnsubscribed) {
              return;
          }
          var subscriberIndex = observers.indexOf(this.observer);
          if (subscriberIndex !== -1) {
              observers.splice(subscriberIndex, 1);
          }
      };
      return SubjectSubscription;
  })(Subscription_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = SubjectSubscription;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  var root_1 = __webpack_require__(7);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = root_1.root.Map || (function () {
      function Map() {
          this.size = 0;
          this._values = [];
          this._keys = [];
      }
      Map.prototype['delete'] = function (key) {
          var i = this._keys.indexOf(key);
          if (i === -1) {
              return false;
          }
          this._values.splice(i, 1);
          this._keys.splice(i, 1);
          this.size--;
          return true;
      };
      Map.prototype.get = function (key) {
          var i = this._keys.indexOf(key);
          return i === -1 ? undefined : this._values[i];
      };
      Map.prototype.set = function (key, value) {
          var i = this._keys.indexOf(key);
          if (i === -1) {
              this._keys.push(key);
              this._values.push(value);
              this.size++;
          }
          else {
              this._values[i] = value;
          }
          return this;
      };
      Map.prototype.forEach = function (cb, thisArg) {
          for (var i = 0; i < this.size; i++) {
              cb.call(thisArg, this._values[i], this._keys[i]);
          }
      };
      return Map;
  }());


/***/ },
/* 84 */
/***/ function(module, exports) {

  var FastMap = (function () {
      function FastMap() {
          this.size = 0;
          this._values = {};
      }
      FastMap.prototype.delete = function (key) {
          this._values[key] = null;
          return true;
      };
      FastMap.prototype.set = function (key, value) {
          this._values[key] = value;
          return this;
      };
      FastMap.prototype.get = function (key) {
          return this._values[key];
      };
      FastMap.prototype.forEach = function (cb, thisArg) {
          var values = this._values;
          for (var key in values) {
              if (values.hasOwnProperty(key) && values[key] !== null) {
                  cb.call(thisArg, values[key], key);
              }
          }
      };
      FastMap.prototype.clear = function () {
          this._values = {};
      };
      return FastMap;
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = FastMap;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = __webpack_require__(6);
  var Observable_1 = __webpack_require__(1);
  var RefCountSubscription = (function (_super) {
      __extends(RefCountSubscription, _super);
      function RefCountSubscription() {
          _super.call(this);
          this.attemptedToUnsubscribePrimary = false;
          this.count = 0;
      }
      RefCountSubscription.prototype.setPrimary = function (subscription) {
          this.primary = subscription;
      };
      RefCountSubscription.prototype.unsubscribe = function () {
          if (!this.isUnsubscribed && !this.attemptedToUnsubscribePrimary) {
              this.attemptedToUnsubscribePrimary = true;
              if (this.count === 0) {
                  _super.prototype.unsubscribe.call(this);
                  this.primary.unsubscribe();
              }
          }
      };
      return RefCountSubscription;
  })(Subscription_1.default);
  exports.RefCountSubscription = RefCountSubscription;
  var GroupedObservable = (function (_super) {
      __extends(GroupedObservable, _super);
      function GroupedObservable(key, groupSubject, refCountSubscription) {
          _super.call(this);
          this.key = key;
          this.groupSubject = groupSubject;
          this.refCountSubscription = refCountSubscription;
      }
      GroupedObservable.prototype._subscribe = function (subscriber) {
          var subscription = new Subscription_1.default();
          if (this.refCountSubscription && !this.refCountSubscription.isUnsubscribed) {
              subscription.add(new InnerRefCountSubscription(this.refCountSubscription));
          }
          subscription.add(this.groupSubject.subscribe(subscriber));
          return subscription;
      };
      return GroupedObservable;
  })(Observable_1.default);
  exports.GroupedObservable = GroupedObservable;
  var InnerRefCountSubscription = (function (_super) {
      __extends(InnerRefCountSubscription, _super);
      function InnerRefCountSubscription(parent) {
          _super.call(this);
          this.parent = parent;
          parent.count++;
      }
      InnerRefCountSubscription.prototype.unsubscribe = function () {
          if (!this.parent.isUnsubscribed && !this.isUnsubscribed) {
              _super.prototype.unsubscribe.call(this);
              this.parent.count--;
              if (this.parent.count === 0 && this.parent.attemptedToUnsubscribePrimary) {
                  this.parent.unsubscribe();
                  this.parent.primary.unsubscribe();
              }
          }
      };
      return InnerRefCountSubscription;
  })(Subscription_1.default);
  exports.InnerRefCountSubscription = InnerRefCountSubscription;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function ignoreElements() {
      return this.lift(new IgnoreElementsOperator());
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ignoreElements;
  ;
  var IgnoreElementsOperator = (function () {
      function IgnoreElementsOperator() {
      }
      IgnoreElementsOperator.prototype.call = function (subscriber) {
          return new IgnoreElementsSubscriber(subscriber);
      };
      return IgnoreElementsOperator;
  })();
  var IgnoreElementsSubscriber = (function (_super) {
      __extends(IgnoreElementsSubscriber, _super);
      function IgnoreElementsSubscriber() {
          _super.apply(this, arguments);
      }
      IgnoreElementsSubscriber.prototype._next = function () { };
      return IgnoreElementsSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ScalarObservable_1 = __webpack_require__(12);
  var ArrayObservable_1 = __webpack_require__(11);
  var ErrorObservable_1 = __webpack_require__(47);
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var bindCallback_1 = __webpack_require__(66);
  function every(predicate, thisArg) {
      var source = this;
      var result;
      if (source._isScalar) {
          result = tryCatch_1.default(predicate)(source.value, 0, source);
          if (result === errorObject_1.errorObject) {
              return new ErrorObservable_1.default(errorObject_1.errorObject.e, source.scheduler);
          }
          else {
              return new ScalarObservable_1.default(result, source.scheduler);
          }
      }
      if (source instanceof ArrayObservable_1.default) {
          var array = source.array;
          var result_1 = tryCatch_1.default(function (array, predicate) { return array.every(predicate); })(array, predicate);
          if (result_1 === errorObject_1.errorObject) {
              return new ErrorObservable_1.default(errorObject_1.errorObject.e, source.scheduler);
          }
          else {
              return new ScalarObservable_1.default(result_1, source.scheduler);
          }
      }
      return source.lift(new EveryOperator(predicate, thisArg, source));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = every;
  var EveryOperator = (function () {
      function EveryOperator(predicate, thisArg, source) {
          this.predicate = predicate;
          this.thisArg = thisArg;
          this.source = source;
      }
      EveryOperator.prototype.call = function (observer) {
          return new EverySubscriber(observer, this.predicate, this.thisArg, this.source);
      };
      return EveryOperator;
  })();
  var EverySubscriber = (function (_super) {
      __extends(EverySubscriber, _super);
      function EverySubscriber(destination, predicate, thisArg, source) {
          _super.call(this, destination);
          this.thisArg = thisArg;
          this.source = source;
          this.predicate = undefined;
          this.index = 0;
          if (typeof predicate === 'function') {
              this.predicate = bindCallback_1.default(predicate, thisArg, 3);
          }
      }
      EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
          this.destination.next(everyValueMatch);
          this.destination.complete();
      };
      EverySubscriber.prototype._next = function (value) {
          var predicate = this.predicate;
          if (predicate === undefined) {
              this.destination.error(new TypeError('predicate must be a function'));
          }
          var result = tryCatch_1.default(predicate)(value, this.index++, this.source);
          if (result === errorObject_1.errorObject) {
              this.destination.error(result.e);
          }
          else if (!result) {
              this.notifyComplete(false);
          }
      };
      EverySubscriber.prototype._complete = function () {
          this.notifyComplete(true);
      };
      return EverySubscriber;
  })(Subscriber_1.default);


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var EmptyError_1 = __webpack_require__(79);
  function last(predicate, resultSelector, defaultValue) {
      return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = last;
  var LastOperator = (function () {
      function LastOperator(predicate, resultSelector, defaultValue, source) {
          this.predicate = predicate;
          this.resultSelector = resultSelector;
          this.defaultValue = defaultValue;
          this.source = source;
      }
      LastOperator.prototype.call = function (observer) {
          return new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
      };
      return LastOperator;
  })();
  var LastSubscriber = (function (_super) {
      __extends(LastSubscriber, _super);
      function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
          _super.call(this, destination);
          this.predicate = predicate;
          this.resultSelector = resultSelector;
          this.defaultValue = defaultValue;
          this.source = source;
          this.hasValue = false;
          this.index = 0;
          if (typeof defaultValue !== 'undefined') {
              this.lastValue = defaultValue;
              this.hasValue = true;
          }
      }
      LastSubscriber.prototype._next = function (value) {
          var _a = this, predicate = _a.predicate, resultSelector = _a.resultSelector, destination = _a.destination;
          var index = this.index++;
          if (predicate) {
              var found = tryCatch_1.default(predicate)(value, index, this.source);
              if (found === errorObject_1.errorObject) {
                  destination.error(errorObject_1.errorObject.e);
                  return;
              }
              if (found) {
                  if (resultSelector) {
                      value = tryCatch_1.default(resultSelector)(value, index);
                      if (value === errorObject_1.errorObject) {
                          destination.error(errorObject_1.errorObject.e);
                          return;
                      }
                  }
                  this.lastValue = value;
                  this.hasValue = true;
              }
          }
          else {
              this.lastValue = value;
              this.hasValue = true;
          }
      };
      LastSubscriber.prototype._complete = function () {
          var destination = this.destination;
          if (this.hasValue) {
              destination.next(this.lastValue);
              destination.complete();
          }
          else {
              destination.error(new EmptyError_1.default);
          }
      };
      return LastSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var bindCallback_1 = __webpack_require__(66);
  /**
   * Similar to the well known `Array.prototype.map` function, this operator
   * applies a projection to each value and emits that projection in the returned observable
   *
   * @param {Function} project the function to create projection
   * @param {any} [thisArg] an optional argument to define what `this` is in the project function
   * @returns {Observable} a observable of projected values
   */
  function map(project, thisArg) {
      return this.lift(new MapOperator(project, thisArg));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = map;
  var MapOperator = (function () {
      function MapOperator(project, thisArg) {
          this.project = bindCallback_1.default(project, thisArg, 2);
      }
      MapOperator.prototype.call = function (subscriber) {
          return new MapSubscriber(subscriber, this.project);
      };
      return MapOperator;
  })();
  var MapSubscriber = (function (_super) {
      __extends(MapSubscriber, _super);
      function MapSubscriber(destination, project) {
          _super.call(this, destination);
          this.count = 0;
          this.project = project;
      }
      MapSubscriber.prototype._next = function (x) {
          var result = tryCatch_1.default(this.project)(x, this.count++);
          if (result === errorObject_1.errorObject) {
              this.error(errorObject_1.errorObject.e);
          }
          else {
              this.destination.next(result);
          }
      };
      return MapSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  /**
   * Maps every value to the same value every time.
   * @param {any} value the value to map each incoming value to
   * @returns {Observable} an observable of the passed value that emits everytime the source does
   */
  function mapTo(value) {
      return this.lift(new MapToOperator(value));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = mapTo;
  var MapToOperator = (function () {
      function MapToOperator(value) {
          this.value = value;
      }
      MapToOperator.prototype.call = function (subscriber) {
          return new MapToSubscriber(subscriber, this.value);
      };
      return MapToOperator;
  })();
  var MapToSubscriber = (function (_super) {
      __extends(MapToSubscriber, _super);
      function MapToSubscriber(destination, value) {
          _super.call(this, destination);
          this.value = value;
      }
      MapToSubscriber.prototype._next = function (x) {
          this.destination.next(this.value);
      };
      return MapToSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Notification_1 = __webpack_require__(32);
  function materialize() {
      return this.lift(new MaterializeOperator());
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = materialize;
  var MaterializeOperator = (function () {
      function MaterializeOperator() {
      }
      MaterializeOperator.prototype.call = function (subscriber) {
          return new MaterializeSubscriber(subscriber);
      };
      return MaterializeOperator;
  })();
  var MaterializeSubscriber = (function (_super) {
      __extends(MaterializeSubscriber, _super);
      function MaterializeSubscriber(destination) {
          _super.call(this, destination);
      }
      MaterializeSubscriber.prototype._next = function (value) {
          this.destination.next(Notification_1.default.createNext(value));
      };
      MaterializeSubscriber.prototype._error = function (err) {
          var destination = this.destination;
          destination.next(Notification_1.default.createError(err));
          destination.complete();
      };
      MaterializeSubscriber.prototype._complete = function () {
          var destination = this.destination;
          destination.next(Notification_1.default.createComplete());
          destination.complete();
      };
      return MaterializeSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  var merge_static_1 = __webpack_require__(43);
  function merge() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
      }
      observables.unshift(this);
      return merge_static_1.default.apply(this, observables);
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = merge;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  var mergeAll_support_1 = __webpack_require__(44);
  function mergeAll(concurrent) {
      if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
      return this.lift(new mergeAll_support_1.MergeAllOperator(concurrent));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = mergeAll;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

  var mergeMap_support_1 = __webpack_require__(62);
  function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
      return this.lift(new mergeMap_support_1.MergeMapOperator(project, resultSelector, concurrent));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = mergeMap;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  var mergeMapTo_support_1 = __webpack_require__(64);
  function mergeMapTo(observable, resultSelector, concurrent) {
      if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
      return this.lift(new mergeMapTo_support_1.MergeMapToOperator(observable, resultSelector, concurrent));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = mergeMapTo;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  var ConnectableObservable_1 = __webpack_require__(97);
  function multicast(subjectFactory) {
      return new ConnectableObservable_1.default(this, subjectFactory);
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = multicast;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var Subscription_1 = __webpack_require__(6);
  var ConnectableObservable = (function (_super) {
      __extends(ConnectableObservable, _super);
      function ConnectableObservable(source, subjectFactory) {
          _super.call(this);
          this.source = source;
          this.subjectFactory = subjectFactory;
      }
      ConnectableObservable.prototype._subscribe = function (subscriber) {
          return this._getSubject().subscribe(subscriber);
      };
      ConnectableObservable.prototype._getSubject = function () {
          var subject = this.subject;
          if (subject && !subject.isUnsubscribed) {
              return subject;
          }
          return (this.subject = this.subjectFactory());
      };
      ConnectableObservable.prototype.connect = function () {
          var source = this.source;
          var subscription = this.subscription;
          if (subscription && !subscription.isUnsubscribed) {
              return subscription;
          }
          subscription = source.subscribe(this._getSubject());
          subscription.add(new ConnectableSubscription(this));
          return (this.subscription = subscription);
      };
      ConnectableObservable.prototype.refCount = function () {
          return new RefCountObservable(this);
      };
      return ConnectableObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ConnectableObservable;
  var ConnectableSubscription = (function (_super) {
      __extends(ConnectableSubscription, _super);
      function ConnectableSubscription(connectable) {
          _super.call(this);
          this.connectable = connectable;
      }
      ConnectableSubscription.prototype._unsubscribe = function () {
          var connectable = this.connectable;
          connectable.subject = void 0;
          connectable.subscription = void 0;
          this.connectable = void 0;
      };
      return ConnectableSubscription;
  })(Subscription_1.default);
  var RefCountObservable = (function (_super) {
      __extends(RefCountObservable, _super);
      function RefCountObservable(connectable, refCount) {
          if (refCount === void 0) { refCount = 0; }
          _super.call(this);
          this.connectable = connectable;
          this.refCount = refCount;
      }
      RefCountObservable.prototype._subscribe = function (subscriber) {
          var connectable = this.connectable;
          var subscription = connectable.subscribe(subscriber);
          if (++this.refCount === 1) {
              this.connection = connectable.connect();
          }
          subscription.add(new RefCountSubscription(this));
          return subscription;
      };
      return RefCountObservable;
  })(Observable_1.default);
  var RefCountSubscription = (function (_super) {
      __extends(RefCountSubscription, _super);
      function RefCountSubscription(refCountObservable) {
          _super.call(this);
          this.refCountObservable = refCountObservable;
      }
      RefCountSubscription.prototype._unsubscribe = function () {
          var observable = this.refCountObservable;
          if (--observable.refCount === 0) {
              observable.connection.unsubscribe();
              observable.connection = void 0;
          }
      };
      return RefCountSubscription;
  })(Subscription_1.default);


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  var observeOn_support_1 = __webpack_require__(31);
  function observeOn(scheduler, delay) {
      if (delay === void 0) { delay = 0; }
      return this.lift(new observeOn_support_1.ObserveOnOperator(scheduler, delay));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = observeOn;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  var not_1 = __webpack_require__(100);
  var filter_1 = __webpack_require__(76);
  function partition(predicate, thisArg) {
      return [
          filter_1.default.call(this, predicate),
          filter_1.default.call(this, not_1.default(predicate, thisArg))
      ];
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = partition;


/***/ },
/* 100 */
/***/ function(module, exports) {

  function not(pred, thisArg) {
      function notPred() {
          return !(notPred.pred.apply(notPred.thisArg, arguments));
      }
      notPred.pred = pred;
      notPred.thisArg = thisArg;
      return notPred;
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = not;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  var Subject_1 = __webpack_require__(81);
  var multicast_1 = __webpack_require__(96);
  function subjectFactory() {
      return new Subject_1.default();
  }
  function publish() {
      return multicast_1.default.call(this, subjectFactory);
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = publish;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

  var BehaviorSubject_1 = __webpack_require__(103);
  var multicast_1 = __webpack_require__(96);
  function publishBehavior(value) {
      return multicast_1.default.call(this, function () { return new BehaviorSubject_1.default(value); });
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = publishBehavior;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = __webpack_require__(81);
  var BehaviorSubject = (function (_super) {
      __extends(BehaviorSubject, _super);
      function BehaviorSubject(value) {
          _super.call(this);
          this.value = value;
      }
      BehaviorSubject.prototype._subscribe = function (subscriber) {
          var subscription = _super.prototype._subscribe.call(this, subscriber);
          if (!subscription) {
              return;
          }
          else if (!subscription.isUnsubscribed) {
              subscriber.next(this.value);
          }
          return subscription;
      };
      BehaviorSubject.prototype._next = function (value) {
          _super.prototype._next.call(this, this.value = value);
      };
      return BehaviorSubject;
  })(Subject_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = BehaviorSubject;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

  var ReplaySubject_1 = __webpack_require__(105);
  var multicast_1 = __webpack_require__(96);
  function publishReplay(bufferSize, windowTime, scheduler) {
      if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
      if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
      return multicast_1.default.call(this, function () { return new ReplaySubject_1.default(bufferSize, windowTime, scheduler); });
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = publishReplay;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = __webpack_require__(81);
  var immediate_1 = __webpack_require__(22);
  var ReplaySubject = (function (_super) {
      __extends(ReplaySubject, _super);
      function ReplaySubject(bufferSize, _windowTime, scheduler) {
          if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
          if (_windowTime === void 0) { _windowTime = Number.POSITIVE_INFINITY; }
          _super.call(this);
          this.events = [];
          this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
          this._windowTime = _windowTime < 1 ? 1 : _windowTime;
          this.scheduler = scheduler;
      }
      ReplaySubject.prototype._next = function (value) {
          var now = this._getNow();
          this.events.push(new ReplayEvent(now, value));
          _super.prototype._next.call(this, value);
      };
      ReplaySubject.prototype._subscribe = function (subscriber) {
          var events = this._getEvents(this._getNow());
          var index = -1;
          var len = events.length;
          while (!subscriber.isUnsubscribed && ++index < len) {
              subscriber.next(events[index].value);
          }
          return _super.prototype._subscribe.call(this, subscriber);
      };
      ReplaySubject.prototype._getNow = function () {
          return (this.scheduler || immediate_1.default).now();
      };
      ReplaySubject.prototype._getEvents = function (now) {
          var bufferSize = this.bufferSize;
          var _windowTime = this._windowTime;
          var events = this.events;
          var eventsCount = events.length;
          var spliceCount = 0;
          // Trim events that fall out of the time window.
          // Start at the front of the list. Break early once
          // we encounter an event that falls within the window.
          while (spliceCount < eventsCount) {
              if ((now - events[spliceCount].time) < _windowTime) {
                  break;
              }
              spliceCount += 1;
          }
          if (eventsCount > bufferSize) {
              spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
          }
          if (spliceCount > 0) {
              events.splice(0, spliceCount);
          }
          return events;
      };
      return ReplaySubject;
  })(Subject_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ReplaySubject;
  var ReplayEvent = (function () {
      function ReplayEvent(time, value) {
          this.time = time;
          this.value = value;
      }
      return ReplayEvent;
  })();


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function reduce(project, acc) {
      return this.lift(new ReduceOperator(project, acc));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = reduce;
  var ReduceOperator = (function () {
      function ReduceOperator(project, acc) {
          this.acc = acc;
          this.project = project;
      }
      ReduceOperator.prototype.call = function (subscriber) {
          return new ReduceSubscriber(subscriber, this.project, this.acc);
      };
      return ReduceOperator;
  })();
  var ReduceSubscriber = (function (_super) {
      __extends(ReduceSubscriber, _super);
      function ReduceSubscriber(destination, project, acc) {
          _super.call(this, destination);
          this.hasValue = false;
          this.acc = acc;
          this.project = project;
          this.hasSeed = typeof acc !== 'undefined';
      }
      ReduceSubscriber.prototype._next = function (x) {
          if (this.hasValue || (this.hasValue = this.hasSeed)) {
              var result = tryCatch_1.default(this.project).call(this, this.acc, x);
              if (result === errorObject_1.errorObject) {
                  this.destination.error(errorObject_1.errorObject.e);
              }
              else {
                  this.acc = result;
              }
          }
          else {
              this.acc = x;
              this.hasValue = true;
          }
      };
      ReduceSubscriber.prototype._complete = function () {
          if (this.hasValue || this.hasSeed) {
              this.destination.next(this.acc);
          }
          this.destination.complete();
      };
      return ReduceSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function repeat(count) {
      return this.lift(new RepeatOperator(count, this));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = repeat;
  var RepeatOperator = (function () {
      function RepeatOperator(count, original) {
          this.count = count;
          this.original = original;
      }
      RepeatOperator.prototype.call = function (subscriber) {
          return new RepeatSubscriber(subscriber, this.count, this.original);
      };
      return RepeatOperator;
  })();
  var RepeatSubscriber = (function (_super) {
      __extends(RepeatSubscriber, _super);
      function RepeatSubscriber(destination, count, original) {
          _super.call(this, destination);
          this.count = count;
          this.original = original;
          this.repeated = 0;
      }
      RepeatSubscriber.prototype._complete = function () {
          if (this.count === (this.repeated += 1)) {
              this.destination.complete();
          }
          else {
              this.resubscribe();
          }
      };
      RepeatSubscriber.prototype.resubscribe = function () {
          this.original.subscribe(this);
      };
      return RepeatSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function retry(count) {
      if (count === void 0) { count = 0; }
      return this.lift(new RetryOperator(count, this));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = retry;
  var RetryOperator = (function () {
      function RetryOperator(count, original) {
          this.count = count;
          this.original = original;
      }
      RetryOperator.prototype.call = function (subscriber) {
          return new RetrySubscriber(subscriber, this.count, this.original);
      };
      return RetryOperator;
  })();
  var RetrySubscriber = (function (_super) {
      __extends(RetrySubscriber, _super);
      function RetrySubscriber(destination, count, original) {
          _super.call(this, destination);
          this.count = count;
          this.original = original;
          this.retries = 0;
      }
      RetrySubscriber.prototype._error = function (err) {
          var count = this.count;
          if (count && count === (this.retries += 1)) {
              this.destination.error(err);
          }
          else {
              this.resubscribe();
          }
      };
      RetrySubscriber.prototype.resubscribe = function () {
          this.original.subscribe(this);
      };
      return RetrySubscriber;
  })(Subscriber_1.default);


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Subject_1 = __webpack_require__(81);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function retryWhen(notifier) {
      return this.lift(new RetryWhenOperator(notifier, this));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = retryWhen;
  var RetryWhenOperator = (function () {
      function RetryWhenOperator(notifier, original) {
          this.notifier = notifier;
          this.original = original;
      }
      RetryWhenOperator.prototype.call = function (subscriber) {
          return new RetryWhenSubscriber(subscriber, this.notifier, this.original);
      };
      return RetryWhenOperator;
  })();
  var RetryWhenSubscriber = (function (_super) {
      __extends(RetryWhenSubscriber, _super);
      function RetryWhenSubscriber(destination, notifier, original) {
          _super.call(this, destination);
          this.notifier = notifier;
          this.original = original;
      }
      RetryWhenSubscriber.prototype._error = function (err) {
          if (!this.retryNotifications) {
              this.errors = new Subject_1.default();
              var notifications = tryCatch_1.default(this.notifier).call(this, this.errors);
              if (notifications === errorObject_1.errorObject) {
                  this.destination.error(errorObject_1.errorObject.e);
              }
              else {
                  this.retryNotifications = notifications;
                  this.add(notifications._subscribe(new RetryNotificationSubscriber(this)));
              }
          }
          this.errors.next(err);
      };
      RetryWhenSubscriber.prototype.finalError = function (err) {
          this.destination.error(err);
      };
      RetryWhenSubscriber.prototype.resubscribe = function () {
          this.original.subscribe(this);
      };
      return RetryWhenSubscriber;
  })(Subscriber_1.default);
  var RetryNotificationSubscriber = (function (_super) {
      __extends(RetryNotificationSubscriber, _super);
      function RetryNotificationSubscriber(parent) {
          _super.call(this, null);
          this.parent = parent;
      }
      RetryNotificationSubscriber.prototype._next = function (value) {
          this.parent.resubscribe();
      };
      RetryNotificationSubscriber.prototype._error = function (err) {
          this.parent.finalError(err);
      };
      RetryNotificationSubscriber.prototype._complete = function () {
          this.parent.complete();
      };
      return RetryNotificationSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function sample(notifier) {
      return this.lift(new SampleOperator(notifier));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = sample;
  var SampleOperator = (function () {
      function SampleOperator(notifier) {
          this.notifier = notifier;
      }
      SampleOperator.prototype.call = function (subscriber) {
          return new SampleSubscriber(subscriber, this.notifier);
      };
      return SampleOperator;
  })();
  var SampleSubscriber = (function (_super) {
      __extends(SampleSubscriber, _super);
      function SampleSubscriber(destination, notifier) {
          _super.call(this, destination);
          this.notifier = notifier;
          this.hasValue = false;
          this.add(notifier._subscribe(new SampleNoficationSubscriber(this)));
      }
      SampleSubscriber.prototype._next = function (value) {
          this.lastValue = value;
          this.hasValue = true;
      };
      SampleSubscriber.prototype.notifyNext = function () {
          if (this.hasValue) {
              this.destination.next(this.lastValue);
          }
      };
      return SampleSubscriber;
  })(Subscriber_1.default);
  var SampleNoficationSubscriber = (function (_super) {
      __extends(SampleNoficationSubscriber, _super);
      function SampleNoficationSubscriber(parent) {
          _super.call(this, null);
          this.parent = parent;
      }
      SampleNoficationSubscriber.prototype._next = function () {
          this.parent.notifyNext();
      };
      SampleNoficationSubscriber.prototype._error = function (err) {
          this.parent.error(err);
      };
      SampleNoficationSubscriber.prototype._complete = function () {
          //noop
      };
      return SampleNoficationSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var nextTick_1 = __webpack_require__(37);
  function sampleTime(delay, scheduler) {
      if (scheduler === void 0) { scheduler = nextTick_1.default; }
      return this.lift(new SampleTimeOperator(delay, scheduler));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = sampleTime;
  var SampleTimeOperator = (function () {
      function SampleTimeOperator(delay, scheduler) {
          this.delay = delay;
          this.scheduler = scheduler;
      }
      SampleTimeOperator.prototype.call = function (subscriber) {
          return new SampleTimeSubscriber(subscriber, this.delay, this.scheduler);
      };
      return SampleTimeOperator;
  })();
  var SampleTimeSubscriber = (function (_super) {
      __extends(SampleTimeSubscriber, _super);
      function SampleTimeSubscriber(destination, delay, scheduler) {
          _super.call(this, destination);
          this.delay = delay;
          this.scheduler = scheduler;
          this.hasValue = false;
          this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay: delay }));
      }
      SampleTimeSubscriber.prototype._next = function (value) {
          this.lastValue = value;
          this.hasValue = true;
      };
      SampleTimeSubscriber.prototype.notifyNext = function () {
          if (this.hasValue) {
              this.destination.next(this.lastValue);
          }
      };
      return SampleTimeSubscriber;
  })(Subscriber_1.default);
  function dispatchNotification(state) {
      var subscriber = state.subscriber, delay = state.delay;
      subscriber.notifyNext();
      this.schedule(state, delay);
  }


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function scan(project, acc) {
      return this.lift(new ScanOperator(project));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = scan;
  var ScanOperator = (function () {
      function ScanOperator(project, acc) {
          this.acc = acc;
          this.project = project;
      }
      ScanOperator.prototype.call = function (subscriber) {
          return new ScanSubscriber(subscriber, this.project, this.acc);
      };
      return ScanOperator;
  })();
  var ScanSubscriber = (function (_super) {
      __extends(ScanSubscriber, _super);
      function ScanSubscriber(destination, project, acc) {
          _super.call(this, destination);
          this.hasValue = false;
          this.acc = acc;
          this.project = project;
          this.hasSeed = typeof acc !== 'undefined';
      }
      ScanSubscriber.prototype._next = function (x) {
          if (this.hasValue || (this.hasValue = this.hasSeed)) {
              var result = tryCatch_1.default(this.project).call(this, this.acc, x);
              if (result === errorObject_1.errorObject) {
                  this.destination.error(errorObject_1.errorObject.e);
              }
              else {
                  this.destination.next(this.acc = result);
              }
          }
          else {
              return this.destination.next((this.hasValue = true) && (this.acc = x));
          }
      };
      ScanSubscriber.prototype._complete = function () {
          if (!this.hasValue && this.hasSeed) {
              this.destination.next(this.acc);
          }
          this.destination.complete();
      };
      return ScanSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

  var publish_1 = __webpack_require__(101);
  function share() {
      return publish_1.default.call(this).refCount();
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = share;
  ;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

  var publishReplay_1 = __webpack_require__(104);
  function shareReplay(bufferSize, windowTime, scheduler) {
      if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
      if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
      return publishReplay_1.default.call(this, bufferSize, windowTime, scheduler).refCount();
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = shareReplay;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var bindCallback_1 = __webpack_require__(66);
  var EmptyError_1 = __webpack_require__(79);
  function single(predicate, thisArg) {
      return this.lift(new SingleOperator(predicate, thisArg, this));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = single;
  var SingleOperator = (function () {
      function SingleOperator(predicate, thisArg, source) {
          this.predicate = predicate;
          this.thisArg = thisArg;
          this.source = source;
      }
      SingleOperator.prototype.call = function (subscriber) {
          return new SingleSubscriber(subscriber, this.predicate, this.thisArg, this.source);
      };
      return SingleOperator;
  })();
  var SingleSubscriber = (function (_super) {
      __extends(SingleSubscriber, _super);
      function SingleSubscriber(destination, predicate, thisArg, source) {
          _super.call(this, destination);
          this.thisArg = thisArg;
          this.source = source;
          this.seenValue = false;
          this.index = 0;
          if (typeof predicate === 'function') {
              this.predicate = bindCallback_1.default(predicate, thisArg, 3);
          }
      }
      SingleSubscriber.prototype.applySingleValue = function (value) {
          if (this.seenValue) {
              this.destination.error('Sequence contains more than one element');
          }
          else {
              this.seenValue = true;
              this.singleValue = value;
          }
      };
      SingleSubscriber.prototype._next = function (value) {
          var predicate = this.predicate;
          var currentIndex = this.index++;
          if (predicate) {
              var result = tryCatch_1.default(predicate)(value, currentIndex, this.source);
              if (result === errorObject_1.errorObject) {
                  this.destination.error(result.e);
              }
              else if (result) {
                  this.applySingleValue(value);
              }
          }
          else {
              this.applySingleValue(value);
          }
      };
      SingleSubscriber.prototype._complete = function () {
          var destination = this.destination;
          if (this.index > 0) {
              destination.next(this.seenValue ? this.singleValue : undefined);
              destination.complete();
          }
          else {
              destination.error(new EmptyError_1.default);
          }
      };
      return SingleSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function skip(total) {
      return this.lift(new SkipOperator(total));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = skip;
  var SkipOperator = (function () {
      function SkipOperator(total) {
          this.total = total;
      }
      SkipOperator.prototype.call = function (subscriber) {
          return new SkipSubscriber(subscriber, this.total);
      };
      return SkipOperator;
  })();
  var SkipSubscriber = (function (_super) {
      __extends(SkipSubscriber, _super);
      function SkipSubscriber(destination, total) {
          _super.call(this, destination);
          this.count = 0;
          this.total = total;
      }
      SkipSubscriber.prototype._next = function (x) {
          if (++this.count > this.total) {
              this.destination.next(x);
          }
      };
      return SkipSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function skipUntil(total) {
      return this.lift(new SkipUntilOperator(total));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = skipUntil;
  var SkipUntilOperator = (function () {
      function SkipUntilOperator(notifier) {
          this.notifier = notifier;
      }
      SkipUntilOperator.prototype.call = function (subscriber) {
          return new SkipUntilSubscriber(subscriber, this.notifier);
      };
      return SkipUntilOperator;
  })();
  var SkipUntilSubscriber = (function (_super) {
      __extends(SkipUntilSubscriber, _super);
      function SkipUntilSubscriber(destination, notifier) {
          _super.call(this, destination);
          this.notifier = notifier;
          this.notificationSubscriber = new NotificationSubscriber();
          this.add(this.notifier.subscribe(this.notificationSubscriber));
      }
      SkipUntilSubscriber.prototype._next = function (x) {
          if (this.notificationSubscriber.hasNotified) {
              this.destination.next(x);
          }
      };
      return SkipUntilSubscriber;
  })(Subscriber_1.default);
  var NotificationSubscriber = (function (_super) {
      __extends(NotificationSubscriber, _super);
      function NotificationSubscriber() {
          _super.call(this, null);
          this.hasNotified = false;
      }
      NotificationSubscriber.prototype._next = function () {
          this.hasNotified = true;
          this.unsubscribe();
      };
      return NotificationSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  var ArrayObservable_1 = __webpack_require__(11);
  var ScalarObservable_1 = __webpack_require__(12);
  var EmptyObservable_1 = __webpack_require__(13);
  var concat_static_1 = __webpack_require__(21);
  function startWith() {
      var array = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          array[_i - 0] = arguments[_i];
      }
      var scheduler = array[array.length - 1];
      if (scheduler && typeof scheduler.schedule === 'function') {
          array.pop();
      }
      else {
          scheduler = void 0;
      }
      var len = array.length;
      if (len === 1) {
          return concat_static_1.default(new ScalarObservable_1.default(array[0], scheduler), this);
      }
      else if (len > 1) {
          return concat_static_1.default(new ArrayObservable_1.default(array, scheduler), this);
      }
      else {
          return concat_static_1.default(new EmptyObservable_1.default(scheduler), this);
      }
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = startWith;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  var SubscribeOnObservable_1 = __webpack_require__(120);
  function subscribeOn(scheduler, delay) {
      if (delay === void 0) { delay = 0; }
      return new SubscribeOnObservable_1.default(this, delay, scheduler);
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = subscribeOn;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = __webpack_require__(1);
  var nextTick_1 = __webpack_require__(37);
  var SubscribeOnObservable = (function (_super) {
      __extends(SubscribeOnObservable, _super);
      function SubscribeOnObservable(source, delay, scheduler) {
          if (delay === void 0) { delay = 0; }
          if (scheduler === void 0) { scheduler = nextTick_1.default; }
          _super.call(this);
          this.source = source;
          this.delayTime = delay;
          this.scheduler = scheduler;
      }
      SubscribeOnObservable.create = function (source, delay, scheduler) {
          if (delay === void 0) { delay = 0; }
          if (scheduler === void 0) { scheduler = nextTick_1.default; }
          return new SubscribeOnObservable(source, delay, scheduler);
      };
      SubscribeOnObservable.dispatch = function (_a) {
          var source = _a.source, subscriber = _a.subscriber;
          return source.subscribe(subscriber);
      };
      SubscribeOnObservable.prototype._subscribe = function (subscriber) {
          var delay = this.delayTime;
          var source = this.source;
          var scheduler = this.scheduler;
          subscriber.add(scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
              source: source, subscriber: subscriber
          }));
      };
      return SubscribeOnObservable;
  })(Observable_1.default);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = SubscribeOnObservable;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = __webpack_require__(17);
  var subscribeToResult_1 = __webpack_require__(18);
  function _switch() {
      return this.lift(new SwitchOperator());
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = _switch;
  var SwitchOperator = (function () {
      function SwitchOperator() {
      }
      SwitchOperator.prototype.call = function (subscriber) {
          return new SwitchSubscriber(subscriber);
      };
      return SwitchOperator;
  })();
  var SwitchSubscriber = (function (_super) {
      __extends(SwitchSubscriber, _super);
      function SwitchSubscriber(destination) {
          _super.call(this, destination);
          this.active = 0;
          this.hasCompleted = false;
      }
      SwitchSubscriber.prototype._next = function (value) {
          this.unsubscribeInner();
          this.active++;
          this.add(this.innerSubscription = subscribeToResult_1.default(this, value));
      };
      SwitchSubscriber.prototype._complete = function () {
          this.hasCompleted = true;
          if (this.active === 0) {
              this.destination.complete();
          }
      };
      SwitchSubscriber.prototype.unsubscribeInner = function () {
          this.active = this.active > 0 ? this.active - 1 : 0;
          var innerSubscription = this.innerSubscription;
          if (innerSubscription) {
              innerSubscription.unsubscribe();
              this.remove(innerSubscription);
          }
      };
      SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue) {
          this.destination.next(innerValue);
      };
      SwitchSubscriber.prototype.notifyError = function (err) {
          this.destination.error(err);
      };
      SwitchSubscriber.prototype.notifyComplete = function () {
          this.unsubscribeInner();
          if (this.hasCompleted && this.active === 0) {
              this.destination.complete();
          }
      };
      return SwitchSubscriber;
  })(OuterSubscriber_1.default);


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var OuterSubscriber_1 = __webpack_require__(17);
  var subscribeToResult_1 = __webpack_require__(18);
  function switchMap(project, resultSelector) {
      return this.lift(new SwitchMapOperator(project, resultSelector));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = switchMap;
  var SwitchMapOperator = (function () {
      function SwitchMapOperator(project, resultSelector) {
          this.project = project;
          this.resultSelector = resultSelector;
      }
      SwitchMapOperator.prototype.call = function (subscriber) {
          return new SwitchMapSubscriber(subscriber, this.project, this.resultSelector);
      };
      return SwitchMapOperator;
  })();
  var SwitchMapSubscriber = (function (_super) {
      __extends(SwitchMapSubscriber, _super);
      function SwitchMapSubscriber(destination, project, resultSelector) {
          _super.call(this, destination);
          this.project = project;
          this.resultSelector = resultSelector;
          this.hasCompleted = false;
          this.index = 0;
      }
      SwitchMapSubscriber.prototype._next = function (value) {
          var index = this.index++;
          var destination = this.destination;
          var result = tryCatch_1.default(this.project)(value, index);
          if (result === errorObject_1.errorObject) {
              destination.error(result.e);
          }
          else {
              var innerSubscription = this.innerSubscription;
              if (innerSubscription) {
                  innerSubscription.unsubscribe();
              }
              this.add(this.innerSubscription = subscribeToResult_1.default(this, result, value, index));
          }
      };
      SwitchMapSubscriber.prototype._complete = function () {
          var innerSubscription = this.innerSubscription;
          this.hasCompleted = true;
          if (!innerSubscription || innerSubscription.isUnsubscribed) {
              this.destination.complete();
          }
      };
      SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
          this.remove(innerSub);
          var prevSubscription = this.innerSubscription;
          if (prevSubscription) {
              prevSubscription.unsubscribe();
          }
          this.innerSubscription = null;
          if (this.hasCompleted) {
              this.destination.complete();
          }
      };
      SwitchMapSubscriber.prototype.notifyError = function (err) {
          this.destination.error(err);
      };
      SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
          var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
          if (resultSelector) {
              var result = tryCatch_1.default(resultSelector)(outerValue, innerValue, outerIndex, innerIndex);
              if (result === errorObject_1.errorObject) {
                  destination.error(errorObject_1.errorObject.e);
              }
              else {
                  destination.next(result);
              }
          }
          else {
              destination.next(innerValue);
          }
      };
      return SwitchMapSubscriber;
  })(OuterSubscriber_1.default);


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var mergeMapTo_support_1 = __webpack_require__(64);
  function switchMapTo(observable, projectResult) {
      return this.lift(new SwitchMapToOperator(observable, projectResult));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = switchMapTo;
  var SwitchMapToOperator = (function () {
      function SwitchMapToOperator(observable, resultSelector) {
          this.observable = observable;
          this.resultSelector = resultSelector;
      }
      SwitchMapToOperator.prototype.call = function (subscriber) {
          return new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector);
      };
      return SwitchMapToOperator;
  })();
  var SwitchMapToSubscriber = (function (_super) {
      __extends(SwitchMapToSubscriber, _super);
      function SwitchMapToSubscriber(destination, observable, resultSelector) {
          _super.call(this, destination, observable, resultSelector, 1);
      }
      return SwitchMapToSubscriber;
  })(mergeMapTo_support_1.MergeMapToSubscriber);


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function take(total) {
      return this.lift(new TakeOperator(total));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = take;
  var TakeOperator = (function () {
      function TakeOperator(total) {
          this.total = total;
      }
      TakeOperator.prototype.call = function (subscriber) {
          return new TakeSubscriber(subscriber, this.total);
      };
      return TakeOperator;
  })();
  var TakeSubscriber = (function (_super) {
      __extends(TakeSubscriber, _super);
      function TakeSubscriber(destination, total) {
          _super.call(this, destination);
          this.count = 0;
          this.total = total;
      }
      TakeSubscriber.prototype._next = function (x) {
          var total = this.total;
          if (++this.count <= total) {
              this.destination.next(x);
              if (this.count === total) {
                  this.destination.complete();
              }
          }
      };
      return TakeSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function takeUntil(observable) {
      return this.lift(new TakeUntilOperator(observable));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = takeUntil;
  var TakeUntilOperator = (function () {
      function TakeUntilOperator(observable) {
          this.observable = observable;
      }
      TakeUntilOperator.prototype.call = function (subscriber) {
          return new TakeUntilSubscriber(subscriber, this.observable);
      };
      return TakeUntilOperator;
  })();
  var TakeUntilSubscriber = (function (_super) {
      __extends(TakeUntilSubscriber, _super);
      function TakeUntilSubscriber(destination, observable) {
          _super.call(this, destination);
          this.add(observable._subscribe(new TakeUntilInnerSubscriber(destination)));
      }
      return TakeUntilSubscriber;
  })(Subscriber_1.default);
  var TakeUntilInnerSubscriber = (function (_super) {
      __extends(TakeUntilInnerSubscriber, _super);
      function TakeUntilInnerSubscriber(destination) {
          _super.call(this, destination);
      }
      TakeUntilInnerSubscriber.prototype._next = function () {
          this.destination.complete();
      };
      TakeUntilInnerSubscriber.prototype._error = function (e) {
          this.destination.error(e);
      };
      TakeUntilInnerSubscriber.prototype._complete = function () {
      };
      return TakeUntilInnerSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var nextTick_1 = __webpack_require__(37);
  function throttle(delay, scheduler) {
      if (scheduler === void 0) { scheduler = nextTick_1.default; }
      return this.lift(new ThrottleOperator(delay, scheduler));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = throttle;
  var ThrottleOperator = (function () {
      function ThrottleOperator(delay, scheduler) {
          this.delay = delay;
          this.scheduler = scheduler;
      }
      ThrottleOperator.prototype.call = function (subscriber) {
          return new ThrottleSubscriber(subscriber, this.delay, this.scheduler);
      };
      return ThrottleOperator;
  })();
  var ThrottleSubscriber = (function (_super) {
      __extends(ThrottleSubscriber, _super);
      function ThrottleSubscriber(destination, delay, scheduler) {
          _super.call(this, destination);
          this.delay = delay;
          this.scheduler = scheduler;
      }
      ThrottleSubscriber.prototype._next = function (value) {
          if (!this.throttled) {
              this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { value: value, subscriber: this }));
          }
      };
      ThrottleSubscriber.prototype.throttledNext = function (value) {
          this.clearThrottle();
          this.destination.next(value);
      };
      ThrottleSubscriber.prototype.clearThrottle = function () {
          var throttled = this.throttled;
          if (throttled) {
              throttled.unsubscribe();
              this.remove(throttled);
          }
      };
      return ThrottleSubscriber;
  })(Subscriber_1.default);
  function dispatchNext(_a) {
      var value = _a.value, subscriber = _a.subscriber;
      subscriber.throttledNext(value);
  }


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var immediate_1 = __webpack_require__(22);
  var isDate_1 = __webpack_require__(128);
  function timeout(due, errorToSend, scheduler) {
      if (errorToSend === void 0) { errorToSend = null; }
      if (scheduler === void 0) { scheduler = immediate_1.default; }
      var absoluteTimeout = isDate_1.default(due);
      var waitFor = absoluteTimeout ? (+due - scheduler.now()) : due;
      return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = timeout;
  var TimeoutOperator = (function () {
      function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
          this.waitFor = waitFor;
          this.absoluteTimeout = absoluteTimeout;
          this.errorToSend = errorToSend;
          this.scheduler = scheduler;
      }
      TimeoutOperator.prototype.call = function (subscriber) {
          return new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler);
      };
      return TimeoutOperator;
  })();
  var TimeoutSubscriber = (function (_super) {
      __extends(TimeoutSubscriber, _super);
      function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
          _super.call(this, destination);
          this.absoluteTimeout = absoluteTimeout;
          this.waitFor = waitFor;
          this.errorToSend = errorToSend;
          this.scheduler = scheduler;
          this.index = 0;
          this._previousIndex = 0;
          this._hasCompleted = false;
          this.scheduleTimeout();
      }
      Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
          get: function () {
              return this._previousIndex;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
          get: function () {
              return this._hasCompleted;
          },
          enumerable: true,
          configurable: true
      });
      TimeoutSubscriber.dispatchTimeout = function (state) {
          var source = state.subscriber;
          var currentIndex = state.index;
          if (!source.hasCompleted && source.previousIndex === currentIndex) {
              source.notifyTimeout();
          }
      };
      TimeoutSubscriber.prototype.scheduleTimeout = function () {
          var currentIndex = this.index;
          this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
          this.index++;
          this._previousIndex = currentIndex;
      };
      TimeoutSubscriber.prototype._next = function (value) {
          this.destination.next(value);
          if (!this.absoluteTimeout) {
              this.scheduleTimeout();
          }
      };
      TimeoutSubscriber.prototype._error = function (err) {
          this.destination.error(err);
          this._hasCompleted = true;
      };
      TimeoutSubscriber.prototype._complete = function () {
          this.destination.complete();
          this._hasCompleted = true;
      };
      TimeoutSubscriber.prototype.notifyTimeout = function () {
          this.error(this.errorToSend || new Error('timeout'));
      };
      return TimeoutSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 128 */
/***/ function(module, exports) {

  function isDate(value) {
      return value instanceof Date && !isNaN(+value);
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = isDate;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var immediate_1 = __webpack_require__(22);
  var isDate_1 = __webpack_require__(128);
  var OuterSubscriber_1 = __webpack_require__(17);
  var subscribeToResult_1 = __webpack_require__(18);
  function timeoutWith(due, withObservable, scheduler) {
      if (scheduler === void 0) { scheduler = immediate_1.default; }
      var absoluteTimeout = isDate_1.default(due);
      var waitFor = absoluteTimeout ? (+due - scheduler.now()) : due;
      return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = timeoutWith;
  var TimeoutWithOperator = (function () {
      function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
          this.waitFor = waitFor;
          this.absoluteTimeout = absoluteTimeout;
          this.withObservable = withObservable;
          this.scheduler = scheduler;
      }
      TimeoutWithOperator.prototype.call = function (subscriber) {
          return new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler);
      };
      return TimeoutWithOperator;
  })();
  var TimeoutWithSubscriber = (function (_super) {
      __extends(TimeoutWithSubscriber, _super);
      function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
          _super.call(this, destination);
          this.absoluteTimeout = absoluteTimeout;
          this.waitFor = waitFor;
          this.withObservable = withObservable;
          this.scheduler = scheduler;
          this.timeoutSubscription = undefined;
          this.timedOut = false;
          this.index = 0;
          this._previousIndex = 0;
          this._hasCompleted = false;
          this.scheduleTimeout();
      }
      Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
          get: function () {
              return this._previousIndex;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
          get: function () {
              return this._hasCompleted;
          },
          enumerable: true,
          configurable: true
      });
      TimeoutWithSubscriber.dispatchTimeout = function (state) {
          var source = state.subscriber;
          var currentIndex = state.index;
          if (!source.hasCompleted && source.previousIndex === currentIndex) {
              source.handleTimeout();
          }
      };
      TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
          var currentIndex = this.index;
          var timeoutState = { subscriber: this, index: currentIndex };
          this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
          this.index++;
          this._previousIndex = currentIndex;
      };
      TimeoutWithSubscriber.prototype._next = function (value) {
          if (!this.timedOut) {
              this.destination.next(value);
              if (!this.absoluteTimeout) {
                  this.scheduleTimeout();
              }
          }
      };
      TimeoutWithSubscriber.prototype._error = function (err) {
          if (!this.timedOut) {
              this.destination.error(err);
              this._hasCompleted = true;
          }
      };
      TimeoutWithSubscriber.prototype._complete = function () {
          if (!this.timedOut) {
              this.destination.complete();
              this._hasCompleted = true;
          }
      };
      TimeoutWithSubscriber.prototype.handleTimeout = function () {
          var withObservable = this.withObservable;
          this.timedOut = true;
          this.add(this.timeoutSubscription = subscribeToResult_1.default(this, withObservable));
      };
      return TimeoutWithSubscriber;
  })(OuterSubscriber_1.default);


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  function toArray() {
      return this.lift(new ToArrayOperator());
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = toArray;
  var ToArrayOperator = (function () {
      function ToArrayOperator() {
      }
      ToArrayOperator.prototype.call = function (subscriber) {
          return new ToArraySubscriber(subscriber);
      };
      return ToArrayOperator;
  })();
  var ToArraySubscriber = (function (_super) {
      __extends(ToArraySubscriber, _super);
      function ToArraySubscriber(destination) {
          _super.call(this, destination);
          this.array = [];
      }
      ToArraySubscriber.prototype._next = function (x) {
          this.array.push(x);
      };
      ToArraySubscriber.prototype._complete = function () {
          this.destination.next(this.array);
          this.destination.complete();
      };
      return ToArraySubscriber;
  })(Subscriber_1.default);


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

  var root_1 = __webpack_require__(7);
  function toPromise(PromiseCtor) {
      var _this = this;
      if (!PromiseCtor) {
          if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
              PromiseCtor = root_1.root.Rx.config.Promise;
          }
          else if (root_1.root.Promise) {
              PromiseCtor = root_1.root.Promise;
          }
      }
      if (!PromiseCtor) {
          throw new Error('no Promise impl found');
      }
      return new PromiseCtor(function (resolve, reject) {
          var value;
          _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
      });
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = toPromise;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Subject_1 = __webpack_require__(81);
  function window(closingNotifier) {
      return this.lift(new WindowOperator(closingNotifier));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = window;
  var WindowOperator = (function () {
      function WindowOperator(closingNotifier) {
          this.closingNotifier = closingNotifier;
      }
      WindowOperator.prototype.call = function (subscriber) {
          return new WindowSubscriber(subscriber, this.closingNotifier);
      };
      return WindowOperator;
  })();
  var WindowSubscriber = (function (_super) {
      __extends(WindowSubscriber, _super);
      function WindowSubscriber(destination, closingNotifier) {
          _super.call(this, destination);
          this.closingNotifier = closingNotifier;
          this.window = new Subject_1.default();
          this.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this)));
          this.openWindow();
      }
      WindowSubscriber.prototype._next = function (value) {
          this.window.next(value);
      };
      WindowSubscriber.prototype._error = function (err) {
          this.window.error(err);
          this.destination.error(err);
      };
      WindowSubscriber.prototype._complete = function () {
          this.window.complete();
          this.destination.complete();
      };
      WindowSubscriber.prototype.openWindow = function () {
          var prevWindow = this.window;
          if (prevWindow) {
              prevWindow.complete();
          }
          this.destination.next(this.window = new Subject_1.default());
      };
      return WindowSubscriber;
  })(Subscriber_1.default);
  var WindowClosingNotifierSubscriber = (function (_super) {
      __extends(WindowClosingNotifierSubscriber, _super);
      function WindowClosingNotifierSubscriber(parent) {
          _super.call(this, null);
          this.parent = parent;
      }
      WindowClosingNotifierSubscriber.prototype._next = function () {
          this.parent.openWindow();
      };
      WindowClosingNotifierSubscriber.prototype._error = function (err) {
          this.parent._error(err);
      };
      WindowClosingNotifierSubscriber.prototype._complete = function () {
          this.parent._complete();
      };
      return WindowClosingNotifierSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Subject_1 = __webpack_require__(81);
  function windowCount(windowSize, startWindowEvery) {
      if (startWindowEvery === void 0) { startWindowEvery = 0; }
      return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = windowCount;
  var WindowCountOperator = (function () {
      function WindowCountOperator(windowSize, startWindowEvery) {
          this.windowSize = windowSize;
          this.startWindowEvery = startWindowEvery;
      }
      WindowCountOperator.prototype.call = function (subscriber) {
          return new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery);
      };
      return WindowCountOperator;
  })();
  var WindowCountSubscriber = (function (_super) {
      __extends(WindowCountSubscriber, _super);
      function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
          _super.call(this, destination);
          this.windowSize = windowSize;
          this.startWindowEvery = startWindowEvery;
          this.windows = [new Subject_1.default()];
          this.count = 0;
          destination.next(this.windows[0]);
      }
      WindowCountSubscriber.prototype._next = function (value) {
          var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
          var windowSize = this.windowSize;
          var windows = this.windows;
          var len = windows.length;
          for (var i = 0; i < len; i++) {
              windows[i].next(value);
          }
          var c = this.count - windowSize + 1;
          if (c >= 0 && c % startWindowEvery === 0) {
              windows.shift().complete();
          }
          if (++this.count % startWindowEvery === 0) {
              var window_1 = new Subject_1.default();
              windows.push(window_1);
              this.destination.next(window_1);
          }
      };
      WindowCountSubscriber.prototype._error = function (err) {
          var windows = this.windows;
          while (windows.length > 0) {
              windows.shift().error(err);
          }
          this.destination.error(err);
      };
      WindowCountSubscriber.prototype._complete = function () {
          var windows = this.windows;
          while (windows.length > 0) {
              windows.shift().complete();
          }
          this.destination.complete();
      };
      return WindowCountSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Subject_1 = __webpack_require__(81);
  var nextTick_1 = __webpack_require__(37);
  function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
      if (windowCreationInterval === void 0) { windowCreationInterval = null; }
      if (scheduler === void 0) { scheduler = nextTick_1.default; }
      return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = windowTime;
  var WindowTimeOperator = (function () {
      function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
          this.windowTimeSpan = windowTimeSpan;
          this.windowCreationInterval = windowCreationInterval;
          this.scheduler = scheduler;
      }
      WindowTimeOperator.prototype.call = function (subscriber) {
          return new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler);
      };
      return WindowTimeOperator;
  })();
  var WindowTimeSubscriber = (function (_super) {
      __extends(WindowTimeSubscriber, _super);
      function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
          _super.call(this, destination);
          this.windowTimeSpan = windowTimeSpan;
          this.windowCreationInterval = windowCreationInterval;
          this.scheduler = scheduler;
          this.windows = [];
          if (windowCreationInterval !== null && windowCreationInterval >= 0) {
              var window_1 = this.openWindow();
              var closeState = { subscriber: this, window: window_1, context: null };
              var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
              this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
              this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
          }
          else {
              var window_2 = this.openWindow();
              var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
              this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
          }
      }
      WindowTimeSubscriber.prototype._next = function (value) {
          var windows = this.windows;
          var len = windows.length;
          for (var i = 0; i < len; i++) {
              windows[i].next(value);
          }
      };
      WindowTimeSubscriber.prototype._error = function (err) {
          var windows = this.windows;
          while (windows.length > 0) {
              windows.shift().error(err);
          }
          this.destination.error(err);
      };
      WindowTimeSubscriber.prototype._complete = function () {
          var windows = this.windows;
          while (windows.length > 0) {
              windows.shift().complete();
          }
          this.destination.complete();
      };
      WindowTimeSubscriber.prototype.openWindow = function () {
          var window = new Subject_1.default();
          this.windows.push(window);
          this.destination.next(window);
          return window;
      };
      WindowTimeSubscriber.prototype.closeWindow = function (window) {
          window.complete();
          var windows = this.windows;
          windows.splice(windows.indexOf(window), 1);
      };
      return WindowTimeSubscriber;
  })(Subscriber_1.default);
  function dispatchWindowTimeSpanOnly(state) {
      var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
      if (window) {
          window.complete();
      }
      state.window = subscriber.openWindow();
      this.schedule(state, windowTimeSpan);
  }
  function dispatchWindowCreation(state) {
      var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
      var window = subscriber.openWindow();
      var action = this;
      var context = { action: action, subscription: null };
      var timeSpanState = { subscriber: subscriber, window: window, context: context };
      context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
      action.add(context.subscription);
      action.schedule(state, windowCreationInterval);
  }
  function dispatchWindowClose(_a) {
      var subscriber = _a.subscriber, window = _a.window, context = _a.context;
      if (context && context.action && context.subscription) {
          context.action.remove(context.subscription);
      }
      subscriber.closeWindow(window);
  }


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Subject_1 = __webpack_require__(81);
  var Subscription_1 = __webpack_require__(6);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function windowToggle(openings, closingSelector) {
      return this.lift(new WindowToggleOperator(openings, closingSelector));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = windowToggle;
  var WindowToggleOperator = (function () {
      function WindowToggleOperator(openings, closingSelector) {
          this.openings = openings;
          this.closingSelector = closingSelector;
      }
      WindowToggleOperator.prototype.call = function (subscriber) {
          return new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector);
      };
      return WindowToggleOperator;
  })();
  var WindowToggleSubscriber = (function (_super) {
      __extends(WindowToggleSubscriber, _super);
      function WindowToggleSubscriber(destination, openings, closingSelector) {
          _super.call(this, destination);
          this.openings = openings;
          this.closingSelector = closingSelector;
          this.windows = [];
          this.add(this.openings._subscribe(new WindowToggleOpeningsSubscriber(this)));
      }
      WindowToggleSubscriber.prototype._next = function (value) {
          var windows = this.windows;
          var len = windows.length;
          for (var i = 0; i < len; i++) {
              windows[i].next(value);
          }
      };
      WindowToggleSubscriber.prototype._error = function (err) {
          var windows = this.windows;
          while (windows.length > 0) {
              windows.shift().error(err);
          }
          this.destination.error(err);
      };
      WindowToggleSubscriber.prototype._complete = function () {
          var windows = this.windows;
          while (windows.length > 0) {
              windows.shift().complete();
          }
          this.destination.complete();
      };
      WindowToggleSubscriber.prototype.openWindow = function (value) {
          var window = new Subject_1.default();
          this.windows.push(window);
          this.destination.next(window);
          var windowContext = {
              window: window,
              subscription: new Subscription_1.default()
          };
          var closingSelector = this.closingSelector;
          var closingNotifier = tryCatch_1.default(closingSelector)(value);
          if (closingNotifier === errorObject_1.errorObject) {
              this.error(closingNotifier.e);
          }
          else {
              var subscriber = new WindowClosingNotifierSubscriber(this, windowContext);
              var subscription = closingNotifier._subscribe(subscriber);
              this.add(windowContext.subscription.add(subscription));
          }
      };
      WindowToggleSubscriber.prototype.closeWindow = function (windowContext) {
          var window = windowContext.window, subscription = windowContext.subscription;
          var windows = this.windows;
          windows.splice(windows.indexOf(window), 1);
          window.complete();
          this.remove(subscription);
      };
      return WindowToggleSubscriber;
  })(Subscriber_1.default);
  var WindowClosingNotifierSubscriber = (function (_super) {
      __extends(WindowClosingNotifierSubscriber, _super);
      function WindowClosingNotifierSubscriber(parent, windowContext) {
          _super.call(this, null);
          this.parent = parent;
          this.windowContext = windowContext;
      }
      WindowClosingNotifierSubscriber.prototype._next = function () {
          this.parent.closeWindow(this.windowContext);
      };
      WindowClosingNotifierSubscriber.prototype._error = function (err) {
          this.parent.error(err);
      };
      WindowClosingNotifierSubscriber.prototype._complete = function () {
          // noop
      };
      return WindowClosingNotifierSubscriber;
  })(Subscriber_1.default);
  var WindowToggleOpeningsSubscriber = (function (_super) {
      __extends(WindowToggleOpeningsSubscriber, _super);
      function WindowToggleOpeningsSubscriber(parent) {
          _super.call(this);
          this.parent = parent;
      }
      WindowToggleOpeningsSubscriber.prototype._next = function (value) {
          this.parent.openWindow(value);
      };
      WindowToggleOpeningsSubscriber.prototype._error = function (err) {
          this.parent.error(err);
      };
      WindowToggleOpeningsSubscriber.prototype._complete = function () {
          // noop
      };
      return WindowToggleOpeningsSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = __webpack_require__(2);
  var Subject_1 = __webpack_require__(81);
  var Subscription_1 = __webpack_require__(6);
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  function window(closingSelector) {
      return this.lift(new WindowOperator(closingSelector));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = window;
  var WindowOperator = (function () {
      function WindowOperator(closingSelector) {
          this.closingSelector = closingSelector;
      }
      WindowOperator.prototype.call = function (subscriber) {
          return new WindowSubscriber(subscriber, this.closingSelector);
      };
      return WindowOperator;
  })();
  var WindowSubscriber = (function (_super) {
      __extends(WindowSubscriber, _super);
      function WindowSubscriber(destination, closingSelector) {
          _super.call(this, destination);
          this.closingSelector = closingSelector;
          this.window = new Subject_1.default();
          this.openWindow();
      }
      WindowSubscriber.prototype._next = function (value) {
          this.window.next(value);
      };
      WindowSubscriber.prototype._error = function (err) {
          this.window.error(err);
          this.destination.error(err);
      };
      WindowSubscriber.prototype._complete = function () {
          this.window.complete();
          this.destination.complete();
      };
      WindowSubscriber.prototype.openWindow = function () {
          var prevClosingNotification = this.closingNotification;
          if (prevClosingNotification) {
              this.remove(prevClosingNotification);
              prevClosingNotification.unsubscribe();
          }
          var prevWindow = this.window;
          if (prevWindow) {
              prevWindow.complete();
          }
          this.destination.next(this.window = new Subject_1.default());
          var closingNotifier = tryCatch_1.default(this.closingSelector)();
          if (closingNotifier === errorObject_1.errorObject) {
              var err = closingNotifier.e;
              this.destination.error(err);
              this.window.error(err);
          }
          else {
              var closingNotification = this.closingNotification = new Subscription_1.default();
              this.add(closingNotification.add(closingNotifier._subscribe(new WindowClosingNotifierSubscriber(this))));
          }
      };
      return WindowSubscriber;
  })(Subscriber_1.default);
  var WindowClosingNotifierSubscriber = (function (_super) {
      __extends(WindowClosingNotifierSubscriber, _super);
      function WindowClosingNotifierSubscriber(parent) {
          _super.call(this, null);
          this.parent = parent;
      }
      WindowClosingNotifierSubscriber.prototype._next = function () {
          this.parent.openWindow();
      };
      WindowClosingNotifierSubscriber.prototype._error = function (err) {
          this.parent.error(err);
      };
      WindowClosingNotifierSubscriber.prototype._complete = function () {
          // noop
      };
      return WindowClosingNotifierSubscriber;
  })(Subscriber_1.default);


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = __webpack_require__(15);
  var errorObject_1 = __webpack_require__(16);
  var OuterSubscriber_1 = __webpack_require__(17);
  var subscribeToResult_1 = __webpack_require__(18);
  /**
   * @param {Observable} observables the observables to get the latest values from.
   * @param {Function} [project] optional projection function for merging values together. Receives all values in order
   *  of observables passed. (e.g. `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not passed, arrays
   *  will be returned.
   * @description merges each value from an observable with the latest values from the other passed observables.
   * All observables must emit at least one value before the resulting observable will emit
   *
   * #### example
   * ```
   * A.withLatestFrom(B, C)
   *
   *  A:     ----a-----------------b---------------c-----------|
   *  B:     ---d----------------e--------------f---------|
   *  C:     --x----------------y-------------z-------------|
   * result: ---([a,d,x])---------([b,e,y])--------([c,f,z])---|
   * ```
   */
  function withLatestFrom() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
      }
      var project;
      if (typeof args[args.length - 1] === 'function') {
          project = args.pop();
      }
      var observables = args;
      return this.lift(new WithLatestFromOperator(observables, project));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = withLatestFrom;
  var WithLatestFromOperator = (function () {
      function WithLatestFromOperator(observables, project) {
          this.observables = observables;
          this.project = project;
      }
      WithLatestFromOperator.prototype.call = function (subscriber) {
          return new WithLatestFromSubscriber(subscriber, this.observables, this.project);
      };
      return WithLatestFromOperator;
  })();
  var WithLatestFromSubscriber = (function (_super) {
      __extends(WithLatestFromSubscriber, _super);
      function WithLatestFromSubscriber(destination, observables, project) {
          _super.call(this, destination);
          this.observables = observables;
          this.project = project;
          this.toRespond = [];
          var len = observables.length;
          this.values = new Array(len);
          for (var i = 0; i < len; i++) {
              this.toRespond.push(i);
          }
          for (var i = 0; i < len; i++) {
              var observable = observables[i];
              this.add(subscribeToResult_1.default(this, observable, observable, i));
          }
      }
      WithLatestFromSubscriber.prototype.notifyNext = function (observable, value, observableIndex, index) {
          this.values[observableIndex] = value;
          var toRespond = this.toRespond;
          if (toRespond.length > 0) {
              var found = toRespond.indexOf(observableIndex);
              if (found !== -1) {
                  toRespond.splice(found, 1);
              }
          }
      };
      WithLatestFromSubscriber.prototype.notifyComplete = function () {
          // noop
      };
      WithLatestFromSubscriber.prototype._next = function (value) {
          if (this.toRespond.length === 0) {
              var values = this.values;
              var destination = this.destination;
              var project = this.project;
              var args = [value].concat(values);
              if (project) {
                  var result = tryCatch_1.default(this.project).apply(this, args);
                  if (result === errorObject_1.errorObject) {
                      destination.error(result.e);
                  }
                  else {
                      destination.next(result);
                  }
              }
              else {
                  destination.next(args);
              }
          }
      };
      return WithLatestFromSubscriber;
  })(OuterSubscriber_1.default);


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  var zip_static_1 = __webpack_require__(49);
  function zipProto() {
      var observables = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          observables[_i - 0] = arguments[_i];
      }
      observables.unshift(this);
      return zip_static_1.default.apply(this, observables);
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = zipProto;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

  var zip_support_1 = __webpack_require__(50);
  function zipAll(project) {
      return this.lift(new zip_support_1.ZipOperator(project));
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = zipAll;


/***/ },
/* 140 */
/***/ function(module, exports) {

  var ArgumentOutOfRangeError = (function () {
      function ArgumentOutOfRangeError() {
          this.name = 'ArgumentOutOfRangeError';
          this.message = 'argument out of range';
      }
      return ArgumentOutOfRangeError;
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = ArgumentOutOfRangeError;


/***/ }
/******/ ]);

var { Observable, BehaviorSubject } = Rx;

Observable.just = Observable.of;

var observableProto = Observable.prototype;
observableProto.tap = observableProto.do;
observableProto.flatMapLatest = observableProto.switchMap;

var memMap = observableProto.map;
var memMapTo = observableProto.mapTo;
observableProto.map = function(project, thisArg) {
  if (typeof project != "function") {
    return memMapTo.call(this, project, thisArg);
  } else {
    return memMap.call(this, project, thisArg);
  }
};

if (!observableProto.publishValue) {
  observableProto.publishValue = function(val) {
    return this.multicast(() => new BehaviorSubject(val));
  };
} else {
  console.warn("remove publishValue");
}

if (!observableProto.shareValue) {
  observableProto.shareValue = function(val) {
    return this.publishValue(val).refCount();
  };
} else {
  console.warn("remove shareValue");
}

module.exports = Rx;
