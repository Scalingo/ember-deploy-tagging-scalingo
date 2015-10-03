/* jshint node: true */
'use strict';

var envScalingo = require('./lib/env-scalingo');

module.exports = {
  name: 'ember-deploy-tagging-scalingo',
  type: 'ember-deploy-addon',
  adapters: {
    tagging: {
      'env-scalingo': envScalingo
    }
  }
};
