import test from 'ava';
import m from './';

test(t => {
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
	t.is(m('tel:1234567890'), 'tel:1234567890');
});
