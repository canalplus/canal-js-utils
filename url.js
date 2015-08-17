var _ = require("./misc");
var URIjs = require("URIjs");

function _joinUrl(baseUri, part) {
  if (part.length === 0)
    return baseUri;

  var partUri = new URIjs(part);
  if (partUri.is("relative")) {
    return partUri.absoluteTo(baseUri);
  } else {
    return partUri;
  }
}

function resolveURL() {
  var args = _.compact(arguments);
  var len = args.length;
  if (len === 0)
    return "";
  else {
    return URIjs.decode(_.reduce(args, _joinUrl, new URIjs("")));
  }
}

function parseBaseURL(url) {
  return URIjs.commonPath(url, url);
}

module.exports = { resolveURL, parseBaseURL };
