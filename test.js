'use strict';
var assert = require('assert');
var isLinux = require('./index');

it('should be on Linux', function () {
	assert.strictEqual(isLinux(), true);
});
