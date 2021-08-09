import test from 'ava';
import prependHttp from './index.js';

test('prepend http', t => {
	t.is(prependHttp('sindresorhus.com', {https: false}), 'http://sindresorhus.com');
	t.is(prependHttp('http://sindresorhus.com', {https: false}), 'http://sindresorhus.com');
	t.is(prependHttp('https://sindresorhus.com', {https: false}), 'https://sindresorhus.com');
	t.is(prependHttp('//sindresorhus.com', {https: false}), '//sindresorhus.com');
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
	t.is(prependHttp('sindresorhus.com', {https: true}), 'https://sindresorhus.com');
	t.is(prependHttp('//sindresorhus.com', {https: true}), '//sindresorhus.com');
	t.is(prependHttp('localhost:8000', {https: true}), 'https://localhost:8000');
});
