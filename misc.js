var objectProto = Object.prototype;
var toString = objectProto.toString;
var ownProperty = objectProto.hasOwnProperty;
var isArray = Array.isArray;
var push = Array.prototype.push;

var keys = Object.keys || function(obj) {
  var k = [];
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      k.push(obj[attr]);
    }
  }
  return k;
};

function indexOf(arr, value) {
  var i = -1;
  var l = arr ? arr.length : 0;
  while (++i < l) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function groupBy(arr, prop) {
  var fn;
  if (isFunction(prop))
    fn = prop;
  else
    fn = (v) => v[prop];

  return reduce(arr, (result, val) => {
    var key = fn(val);
    (isArray(result[key])
      ? result[key]
      : result[key] = []).push(val);
    return result;
  }, {});
}

function sortedIndex(arr, value, fn) {
  var low = 0;
  var high = arr ? arr.length : low;

  value = fn(value);

  while (low < high) {
    var mid = (low + high) >>> 1;
    if (fn(arr[mid]) < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

function find(arr, fn) {
  var i = -1;
  var l = arr ? arr.length : 0;
  while (++i < l) {
    if (fn(arr[i], i)) return arr[i];
  }
}

function findLast(arr, fn) {
  var i = arr ? arr.length : 0;
  while (--i >= 0) {
    if (fn(arr[i], i)) return arr[i];
  }
}

function baseFlatten(arr, fromIndex) {
  var i = (fromIndex || 0) - 1;
  var l = arr ? arr.length : 0;
  var n = [];
  while (++i < l) {
    var value = arr[i];
    if (value && typeof value == "object" && typeof value.length == "number") {
      var valIndex = -1,
          valLength = value.length,
          resIndex = n.length;

      n.length += valLength;
      while (++valIndex < valLength) {
        n[resIndex++] = value[valIndex];
      }
    } else {
      n.push(value);
    }
  }
  return n;
}

function flatten(arr, fn) {
  return baseFlatten(fn ? map(arr, fn) : arr, 0);
}

function isDate(value) {
  return value && typeof value == "object" && toString.call(value) == "[object Date]" || false;
}

function isFunction(value) {
  return value && typeof value == "function" || false;
}

function isNumber(value) {
  return typeof value == "number";
}

function isObject(value) {
  return value && typeof value == "object" || false;
}

function isString(value) {
  return typeof value == "string";
}

function identity(x) {
  return x;
}

function noop() {
  return;
}

function last(arr) {
  return arr[arr.length - 1];
}

var uniqueId = (function() {
  var __id = 0;
  return (prefix) => {
    if (!prefix) prefix = "";
    return (""+prefix) + (__id++);
  };
})();

function contains(arr, value) {
  return indexOf(arr, value) > -1;
}

function extend(dst) {
  var args = arguments;
  for (var i = 1; i < args.length; i++) {
    var src = args[i];
    if (!isObject(src))
      continue;

    var ks = keys(src);
    for (var j = 0, l = ks.length; j < l; j++) {
      dst[ks[j]] = src[ks[j]];
    }
  }
  return dst;
}

function defaults(obj, def) {
  for (var attr in def) {
    if (typeof obj[attr] == "undefined") {
      obj[attr] = def[attr];
    }
  }
  return obj;
}

function cloneObject(obj) {
  return extend({}, obj);
}

function cloneArray(arr) {
  var l = arr ? arr.length : 0;
  var i = -1;
  var n = Array(l);
  while (++i < l) n[i] = arr[i];
  return n;
}

function map(arr, fn) {
  var l = arr ? arr.length : 0;
  var i = -1;
  var n = Array(l);
  while (++i < l) n[i] = fn(arr[i], i);
  return n;
}

function reduce(arr, fn, init) {
  var l = arr ? arr.length : 0;
  var i = -1;
  var n = init;
  while(++i < l) n = fn(n, arr[i], i);
  return n;
}

function each(arr, fn) {
  var l = arr ? arr.length : 0;
  var i = -1;
  while (++i < l) fn(arr[i], i);
}

function values(object) {
  var props = keys(object);
  var i = -1;
  var l = props.length;
  var n = Array(l);
  while (++i < l)  n[i] = object[props[i]];
  return n;
}

function filter(arr, fn) {
  var l = arr ? arr.length : 0;
  var i = -1;
  var n = [];
  while (++i < l) {
    if (fn(arr[i], i)) n.push(arr[i]);
  }
  return n;
}

function compact(arr) {
  return filter(arr, i => i != null);
}

function memoize(fn, resolver) {
  var memoized = function() {
    var cache = memoized.cache;
    var key = resolver ? resolver.apply(this, arguments) : arguments[0];
    return ownProperty.call(cache, key)
      ? (cache[key])
      : (cache[key] = fn.apply(this, arguments));
  };
  memoized.cache = {};
  return memoized;
}

function pick(object, vals) {
  return reduce(vals, (result, key) => {
    if (key in object) result[key] = object[key];
    return result;
  }, {});
}

function pluck(arr, key) {
  return map(arr, o => o[key]);
}

function tryCatch(fn) {
  try {
    return fn();
  }
  catch(e) {
    return e;
  }
}

function simpleMerge(source, dist) {
  for (var attr in source) {
    if (!dist.hasOwnProperty(attr)) continue;
    var src = source[attr];
    var dst = dist[attr];
    if (isString(src) || isNumber(src) || isDate(src)) {
      source[attr] = dst;
    }
    else if (isArray(src)) {
      src.length = 0;
      push.apply(src, dst);
    }
    else {
      source[attr] = simpleMerge(src, dst);
    }
  }
  return source;
}

function chunk(arr, size) {
  var r = [];
  var c = 0;
  var i = -1;
  var l = arr ? arr.length : 0;
  while(++i<l) {
    if (!r[c]) { r[c] = [arr[i]]; }
    else {
      if (r[c].length === size) { r[++c] = [arr[i]]; }
      else { r[c].push(arr[i]); }
    }
  }
  return r;
}

module.exports = {
  chunk,
  compact,
  contains,
  cloneArray,
  cloneObject,
  defaults,
  each,
  extend,
  values,
  filter,
  find,
  findLast,
  flatten,
  groupBy,
  identity,
  indexOf,
  isArray,
  isDate,
  isFunction,
  isNumber,
  isObject,
  isString,
  keys,
  last,
  map,
  memoize,
  noop,
  pick,
  pluck,
  reduce,
  simpleMerge,
  sortedIndex,
  tryCatch,
  uniqueId,
};
