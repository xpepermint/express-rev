var path = require('path');

module.exports = function(config) {

  var manifest;
  try {
    manifest = require(path.resolve(process.cwd(), config.manifest));
  } catch(e) {
    manifest = {};
  }

  return function(req, res, next) {

    res.locals.rev = function(path) {
      return config.prepend.toString() + '/' + (manifest[path] || path);
    };

    next();
  };
};
