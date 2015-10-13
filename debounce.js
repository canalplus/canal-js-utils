module.exports = function(fn, wait, debounceOptions) {
  var timer = null;
  var stamp = 0;
  var args = [];

  var leading = !!(debounceOptions && debounceOptions.leading);
  var calledOnce = false;

  function onCall() {
    var dt = stamp - Date.now();
    if (dt > 0) {
      timer = setTimeout(onCall, dt);
    } else {
      timer = null;
      switch (args.length) {
      case 0:  return fn();
      case 1:  return fn(args[0]);
      case 2:  return fn(args[0], args[1]);
      case 3:  return fn(args[0], args[1], args[2]);
      default: return fn.apply(null, args);
      }
    }
  }

  function debounced() {
    // do not leak arguments object to prevent de-optimizations
    var l = arguments.length, i = 0;
    args = Array(l);
    for (; i < l; i++) args[i] = arguments[i];

    if (leading && !calledOnce) {
      calledOnce = true;
      stamp = Date.now();
      return onCall();
    }

    var t = stamp;
    stamp = Date.now() + wait;

    if (!timer || stamp < t) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(onCall, wait);
    }

    return debounced;
  }

  debounced.isWaiting = function() {
    return !!timer;
  };

  debounced.dispose = function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return debounced;
};
