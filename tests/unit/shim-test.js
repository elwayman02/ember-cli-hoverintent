import { module } from 'qunit';
import { test } from 'ember-qunit';
import hoverintent from 'hoverintent';

module('Ember-CLI-hoverintent shim');

test('it exports vendor shim', function (assert) {
  assert.equal(typeof(hoverintent), 'function', 'function is imported from vendor shim');
});
