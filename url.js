var _ = require("./misc");

var schemeRe = /:\/\//;
var uniqSchemeRe = /:\//;
var selfDirRe = /\/\.\//g;
var prevDirRe = /\/\.\.\//;
var rmPrevDirRe = /[^\/]*\/+\.\.\//;
var slashesRe = /\/+/g;

function _joinUrl(base, part) {
  if (part.length === 0) return base;
  if (schemeRe.test(part)) {
    return part;
  } else {
    return base + "/" + part;
  }
}

function _normalizeUrl(str) {
  // remove ./ parts
  if (selfDirRe.test(str))
    str = str.replace(selfDirRe, "/");

  // remove foo/../ parts
  while(prevDirRe.test(str))
    str = str.replace(rmPrevDirRe, "/");

  // join multiple / except the scheme one
  return str
    .replace(slashesRe, "/")
    .replace(uniqSchemeRe, "://");
}

function resolveURL() {
  var args = _.compact(arguments);
  var len = args.length;
  if (len === 0)
    return "";
  else
    return _normalizeUrl(_.reduce(args, _joinUrl, ""));
}

function parseBaseURL(url) {
  var slash = url.lastIndexOf("/");
  if (slash >= 0) {
    return url.substring(0, slash + 1);
  } else {
    return url;
  }
}

module.exports = { resolveURL, parseBaseURL };
