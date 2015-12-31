import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('todomvc.com'), 'http://todomvc.com');
	t.is(fn('http://todomvc.com'), 'http://todomvc.com');
	t.is(fn('https://todomvc.com'), 'https://todomvc.com');
	t.is(fn('//todomvc.com'), '//todomvc.com');
	t.is(fn('localhost'), 'http://localhost');
	t.is(fn('localhost:8000'), 'http://localhost:8000');
	t.is(fn('localhost:8000  '), 'http://localhost:8000');
	t.is(fn('./relative'), './relative');
	t.is(fn('../relative'), '../relative');
	t.is(fn('/relative'), '/relative');
});
