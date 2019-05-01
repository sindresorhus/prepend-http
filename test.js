import test from 'ava';
import prependHttp from '.';

test('prepend http', t => {
	t.is(prependHttp('todomvc.com', {https: false}), 'http://todomvc.com');
	t.is(prependHttp('http://todomvc.com', {https: false}), 'http://todomvc.com');
	t.is(prependHttp('https://todomvc.com', {https: false}), 'https://todomvc.com');
	t.is(prependHttp('//todomvc.com', {https: false}), '//todomvc.com');
	t.is(prependHttp('localhost', {https: false}), 'http://localhost');
	t.is(prependHttp('localhost:8000', {https: false}), 'http://localhost:8000');
	t.is(prependHttp('localhost:8000  ', {https: false}), 'http://localhost:8000');
	t.is(prependHttp('./relative'), './relative');
	t.is(prependHttp('../relative'), '../relative');
	t.is(prependHttp('/relative'), '/relative');
	t.is(prependHttp('mailto:info@site.com'), 'mailto:info@site.com');
	t.is(prependHttp('tel:1234567890'), 'tel:1234567890');
});

test('https option', t => {
	t.is(prependHttp('todomvc.com', {https: true}), 'https://todomvc.com');
	t.is(prependHttp('//todomvc.com', {https: true}), '//todomvc.com');
	t.is(prependHttp('localhost:8000', {https: true}), 'https://localhost:8000');
});
