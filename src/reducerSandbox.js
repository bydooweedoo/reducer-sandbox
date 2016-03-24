import R from 'ramda';
import { isNotAction, isInitAction } from './action';
import { setToKeyPath, getFromKeyPath } from './keypath';
import { prop, defaults } from './helpers';
import counter from './counter';

const doesActionKeyEqual = (key, id) => R.pipe(
    getFromKeyPath(key),
    R.equals(id)
);

const createSandboxMatchAction = (id, key) => R.anyPass([
    isNotAction,
    isInitAction,
    doesActionKeyEqual(key, id),
]);

const createReducer = (sandboxMatchAction, reducer) => (state, action) => (
    sandboxMatchAction(action) === true ?
    reducer(state, action) : state
);

const createSandboxID = counter(-1);

const createDispatcher = sandboxParams => store => action => store.dispatch(
    R.merge(action, sandboxParams)
);

const bindParamsToAction = params => R.ifElse(
    R.is(Object),
    R.merge(R.__, params),
    R.pipe(R.always(params), R.clone)
);

const sandbox = (reducer, options = {}) => {
    const id = defaults(prop('id', options), createSandboxID);
    const key = defaults(prop('key', options), R.always('sandbox'));
    const sandboxParams = setToKeyPath(key, id, {});
    const sandboxMatchAction = createSandboxMatchAction(id, key);
    const bindToAction = bindParamsToAction(sandboxParams);
    const bindToActionCreator = actionCreator => (
        R.pipe(actionCreator, bindToAction)
    );
    const bindToActionCreators = R.map(
        R.ifElse(R.is(Function), bindToActionCreator, R.identity)
    );

    return {
        id,
        key,
        dispatcher: createDispatcher(sandboxParams),
        reducer: createReducer(sandboxMatchAction, R.curryN(2, reducer)),
        bindToAction: bindToAction,
        bindToActionCreator: bindToActionCreator,
        bindToActionCreators: bindToActionCreators,
    };
};

const applySandbox = R.apply(sandbox);

const hasOneArgWithType = type => R.both(
    R.pipe(R.length, R.equals(1)),
    R.pipe(R.head, R.type, R.equals(type))
);

const curriedSandbox = R.unapply(R.cond([
    // 1 argument which are options, we curry sandbox with given options
    [hasOneArgWithType('Object'), R.apply(R.curryN(2, R.flip(sandbox)))],
    // default, we call sandbox
    [R.T, applySandbox],
]));

export default curriedSandbox;
