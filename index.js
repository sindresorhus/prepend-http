export default function prependHttp(url, {https = true} = {}) {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof url}\``);
	}

	url = url.trim();

	if (/^\.*\/|^(?!localhost)\w+?:/.test(url)) {
		return url;
	}

	return url.replace(/^(?!(?:\w+?:)?\/\/)/, https ? 'https://' : 'http://');
}
