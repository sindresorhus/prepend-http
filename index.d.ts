declare namespace prependHttp {
	interface Options {
		/**
		Prepend `https://` instead of `http://`.

		@default false
		*/
		readonly https?: boolean;
	}
}

/**
Prepend `http://` to humanized URLs like `todomvc.com` and `localhost`.

@param url - URL to prepend `http://` to.

@example
```
import prependHttp = require('prepend-http');

prependHttp('todomvc.com');
//=> 'http://todomvc.com'

prependHttp('localhost');
//=> 'http://localhost'

prependHttp('http://todomvc.com');
//=> 'http://todomvc.com'

prependHttp('todomvc.com', {https: true});
//=> 'https://todomvc.com'
```
*/
declare function prependHttp(url: string, options?: prependHttp.Options): string;

export = prependHttp;
