var reTemplate = /{([\s\S]+?)}/g;

module.exports = function(str, templateContext) {
  return str.replace(reTemplate, (match, submatch) => templateContext[submatch]);
};
