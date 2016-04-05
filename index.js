/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-hoverintent',

  included: function (app) {
    this._super.included.apply(this, arguments);

    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import(app.bowerDirectory + '/hoverintentjs/dist/hoverintent.min.js');
    app.import('vendor/shims/hoverintent.js');
  }
};
