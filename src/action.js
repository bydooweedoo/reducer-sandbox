'use strict';

const R = require('ramda');

const is = R.both(
    R.is(Object),
    R.pipe(R.prop('type'), R.is(String))
);

const isNot = R.compose(R.not, is);

const isInit = R.both(is, R.pipe(
    R.prop('type'),
    R.pipe(R.indexOf('@@'), R.equals(0))
));

const isNotInit = R.compose(R.not, isInit);

module.exports = {
    is,
    isInit,
    isNot,
    isNotInit,
};
