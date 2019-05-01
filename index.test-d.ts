import {expectType} from 'tsd';
import prependHttp = require('.');

const options: prependHttp.Options = {};

expectType<string>(prependHttp('sindresorhus.com'));
expectType<string>(prependHttp('sindresorhus.com', {https: false}));
