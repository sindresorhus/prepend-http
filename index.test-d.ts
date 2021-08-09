import {expectType} from 'tsd';
import prependHttp from './index.js';

expectType<string>(prependHttp('sindresorhus.com'));
expectType<string>(prependHttp('sindresorhus.com', {https: false}));
