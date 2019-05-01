import {expectType} from 'tsd';
import prependHttp = require('.');

const options: prependHttp.Options = {};

expectType<string>(prependHttp('todomvc.com'));
expectType<string>(prependHttp('todomvc.com', {https: true}));
