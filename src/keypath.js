'use strict';

const R = require('ramda');

const create = R.compose(R.lensPath, R.split('.'));

const setTo = R.curry((path, value, obj) => R.set(create(path), value, obj));

const getFrom = R.curry((path, obj) => R.view(create(path), obj));

module.exports = {
    create,
    setTo,
    getFrom,
};
