(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['hoverintent'] };
  }

  define('hoverintent', [], vendorModule);
})();
