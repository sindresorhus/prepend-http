export interface Options {
	/**
	Prepend `https://` instead of `http://`.

	@default true
	*/
	readonly https?: boolean;
}

/**
Prepend `https://` to humanized URLs like `sindresorhus.com` and `localhost`.

@param url - The URL to prepend `https://` to.

@example
```
import prependHttp from 'prepend-http';

prependHttp('sindresorhus.com');
//=> 'https://sindresorhus.com'

prependHttp('localhost', {https: false});
//=> 'http://localhost'

prependHttp('https://sindresorhus.com');
//=> 'https://sindresorhus.com'
```
*/
export default function prependHttp(url: string, options?: Options): string;
