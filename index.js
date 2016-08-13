/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-hoverintent',

  treeForVendor: function () {
    var Funnel = require('broccoli-funnel');
    var hoverintentPath = path.join(path.dirname(require.resolve('hoverintent')), '..');

    return new Funnel(this.treeGenerator(hoverintentPath), {
      destDir: 'hoverintent'
    });
  },

  included: function (app) {
    this._super.included.apply(this, arguments);

    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/hoverintent/dist/hoverintent.min.js');
    app.import('vendor/shims/hoverintent.js');
  }
};
