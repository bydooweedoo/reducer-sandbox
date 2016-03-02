'use strict';

/**
 * @alias module:reducer-sandbox
 */
const R = require('ramda');
const ObjectPath = require('./ObjectPath');
let sandboxcount = -1;

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


const counter = num => () => String(++num);
const sandboxid = counter(-1);
const isAction = R.both(
    R.is(Object),
    R.pipe(R.prop('type'), R.is(String))
);
const isInitAction = R.both(
    isAction,
    R.pipe(
        R.prop('type'),
        R.pipe(R.indexOf('@@'), R.equals(0))
    )
);
const keyParams = R.cond([
    [R.is(String), key => R.objOf(key, sandboxid())],
    [R.T, R.compose(R.objOf('sandbox'), sandboxid)]
]);
const getsandboxid = (action, key) => R.cond([
    [R.is(String), R.curry(R.prop)(R.__, action)],
    [R.T, R.always(R.prop('sandbox', action))]
])(key);
const sandbox = () => null;

sandbox.isInitAction = isInitAction;
sandbox.isAction = isAction;
sandbox.counter = counter;
sandbox.nextid = sandboxid;
sandbox.getid = getsandboxid;
sandbox.keyParams = keyParams;

exports = module.exports = sandbox;
