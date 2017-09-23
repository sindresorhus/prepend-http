import test from 'ava';
import m from '.';

test('prepend http', t => {
	t.is(m('todomvc.com'), 'http://todomvc.com');
	t.is(m('http://todomvc.com'), 'http://todomvc.com');
	t.is(m('https://todomvc.com'), 'https://todomvc.com');
	t.is(m('//todomvc.com'), '//todomvc.com');
	t.is(m('localhost'), 'http://localhost');
	t.is(m('localhost:8000'), 'http://localhost:8000');
	t.is(m('localhost:8000  '), 'http://localhost:8000');
	t.is(m('./relative'), './relative');
	t.is(m('../relative'), '../relative');
	t.is(m('/relative'), '/relative');
	t.is(m('mailto:info@site.com'), 'mailto:info@site.com');
	t.is(m('mailto:someone@example.com?Subject=Hello%20again'), 'mailto:someone@example.com?Subject=Hello%20again');
	t.is(m('tel:1234567890'), 'tel:1234567890');
	t.is(m('login:password@site.com'), 'http://login:password@site.com');
	t.is(m('login:password@site.com:1234'), 'http://login:password@site.com:1234');
	t.is(m('login:password@site.com/path/name'), 'http://login:password@site.com/path/name');
});

test('https option', t => {
	t.is(m('todomvc.com', {https: true}), 'https://todomvc.com');
	t.is(m('//todomvc.com', {https: true}), '//todomvc.com');
	t.is(m('localhost:8000', {https: true}), 'https://localhost:8000');
});
