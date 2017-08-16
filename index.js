'use strict';
module.exports = url => {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof url}\``);
	}

	url = url.trim();

	if (/^\.*\/|^(?!localhost)(?!(?!mailto:)\S+(:\S*)?@)\w+:/.test(url)) {
		return url;
	}

	return url.replace(/^(?!(?:\w+:)?\/\/)/, 'http://');
};
