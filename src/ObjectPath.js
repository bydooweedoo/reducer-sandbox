'use strict';

exports.create = (keypath, value) => {
    const root = {};
    let current = root;
    let previous = null;
    let last = null;

    keypath.split('.').forEach((key, index) => {
        previous = current;
        current[key] = {};
        current = current[key];
        last = key;
    });
    previous[last] = value;
    return root;
};

exports.get = (obj, keypath) => {
    let current = obj;

    keypath.split('.').every(key => {
        if (typeof current !== 'object') {
            current = null;
            return false;
        } else {
            current = current[key];
            return true;
        }
    });
    return current;
};

module.exports = exports;
