'use strict';
module.exports = (url) => {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof url}`);
	}

	url = url.trim();

	if (/^\.*\/|^(?!localhost)\w+:/.test(url)) {
		return url;
	}

	return url.replace(/^(?!(?:\w+:)?\/\/)/, 'http://');
};
