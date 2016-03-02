'use strict';

/**
 * @alias module:reducer-sandbox
 */

const R = require('ramda');
const _action = require('./action');
const _keypath = require('./keypath');

/**
 * @param {Function} reducer - Reducer to sandbox.
 * @param {String} [customid] - Custom sandbox id.
 * @param {String} [customkey='sandbox'] - Custom sandbox key path.
 * You can use "key1.key2.key3" notation.
 */
function Sandbox (reducer, customid, customkey) {
    const sandboxid = String(customid || ++sandboxcount);
    const isAction = action => (
        typeof action === 'object' ||
        typeof action.type === 'string'
    );
    const isInit = action => !action.type.indexOf('@@');
    const params = (
        customkey ?
        ObjectPath.create(customkey, sandboxid) :
        { sandbox: sandboxid, }
    );
    const getSandboxValue = (action) => (
        customkey ?
        ObjectPath.get(action, customkey) :
        action.sandbox
    );

    return {

        dispatcher: store => action => {
            return store.dispatch(Object.assign({}, params, action));
        },

        reducer: (state, action) => {
            return (
                !isAction(action) || isInit(action) || getSandboxValue(action) === sandboxid ?
                reducer(state, action) :
                reducer(state, {})
            );
        },

    };
}

const matchSandbox = R.curry((id, key, action) => R.anyPass([
    _action.isNot,
    _action.isInit,
    R.compose(R.equals(id), R.curry(getsandboxid)(R.__, key))
])(action));

const reducer = (id, key, f) => (state, action) => R.cond([
    [matchSandbox(id, key), R.curry(f)(state)],
    [R.T, R.pipe(R.curry(f)(state), R.empty)],
])(action);

const counter = num => () => String(++num);

const sandboxid = counter(-1);

const keyParams = R.cond([
    [R.is(String), key => _keypath.setTo(key, sandboxid(), {})],
    [R.T, R.compose(R.objOf('sandbox'), sandboxid)]
]);

const getsandboxid = (action, key) => R.cond([
    [R.is(String), _keypath.getFrom(R.__, action)],
    [R.T, R.always(R.prop('sandbox', action))]
])(key);

const sandbox = () => null;

sandbox.counter = counter;
sandbox.nextid = sandboxid;
sandbox.getid = getsandboxid;
sandbox.keyParams = keyParams;

exports = module.exports = sandbox;
