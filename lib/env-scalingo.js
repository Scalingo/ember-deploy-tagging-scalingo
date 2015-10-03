var CoreObject   = require('core-object');

module.exports = CoreObject.extend({
  init: function(options) {
    this._super(options);
  },

  createTag: function() {
    return this.manifest + ':' + process.env.DEPLOY_GIT_REF.slice(0,7);
  }
});
