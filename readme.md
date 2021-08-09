# prepend-http

> Prepend `https://` to humanized URLs like `sindresorhus.com` and `localhost`

## Install

```
$ npm install prepend-http
```

## Usage

```js
import prependHttp from 'prepend-http';

prependHttp('sindresorhus.com');
//=> 'https://sindresorhus.com'

prependHttp('localhost', {https: false});
//=> 'http://localhost'

prependHttp('https://sindresorhus.com');
//=> 'https://sindresorhus.com'
```

## API

### prependHttp(url, options?)

#### url

Type: `string`

The URL to prepend `https://` to.

#### options

Type: `object`

##### https

Type: `boolean`\
Default: `true`

Prepend `https://` instead of `http://`.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-prepend-http?utm_source=npm-prepend-http&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
