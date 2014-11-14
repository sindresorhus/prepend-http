'use strict';
var test = require('ava');
var prependHttp = require('./');

test(function (t) {
	t.assert(prependHttp('todomvc.com') === 'http://todomvc.com');
	t.assert(prependHttp('http://todomvc.com') === 'http://todomvc.com');
	t.assert(prependHttp('https://todomvc.com') === 'https://todomvc.com');
	t.assert(prependHttp('//todomvc.com') === '//todomvc.com');
	t.assert(prependHttp('localhost') === 'http://localhost');
	t.assert(prependHttp('localhost:8000') === 'http://localhost:8000');
	t.assert(prependHttp('localhost:8000  ') === 'http://localhost:8000');
	t.end();
});
