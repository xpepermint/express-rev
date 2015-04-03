var _ = require('lodash');
var defaults = require('./defaults');

module.exports = function(config) {

  config = _.merge(defaults, config);

  return require('./lib/helpers')(config);
};
