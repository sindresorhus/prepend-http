# prepend-http

> Prepend `https://` to humanized URLs like `sindresorhus.com` and `localhost`

## Install

```sh
npm install prepend-http
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

## Notes

URLs with authentication information (e.g., `login:password@site.com`) are returned unchanged as basic auth in URLs is deprecated and to avoid conflicting with custom schemes.
