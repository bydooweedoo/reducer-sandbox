import R from 'ramda';
import { dotPath, assocDotPath, isObject, isFunction, equalsLength } from 'ramda-extension';
import { isNotAction, isInitAction } from './action';
import { defaults } from './helpers';
import counter from './counter';

const doesActionKeyEqual = R.useWith(R.pipe, [dotPath, R.equals]);

const createSandboxMatchAction = (id, key) => R.anyPass([
    isNotAction,
    isInitAction,
    doesActionKeyEqual(key, id),
]);

const createReducer = (sandboxMatchAction, reducer) => (state, action) => (
    sandboxMatchAction(action) === true ?
    reducer(state, action) : state
);

const createSandboxID = counter(0);

const createDispatcher = sandboxParams => store => action => store.dispatch(
    R.merge(action, sandboxParams)
);

const bindParamsToAction = params => R.ifElse(
    isObject,
    R.merge(R.__, params),
    R.pipe(R.always(params), R.clone)
);

const sandbox = (reducer, options = {}) => {
    const id = defaults(R.prop('id', options), createSandboxID);
    const key = defaults(R.prop('key', options), R.always('sandbox'));
    const sandboxParams = assocDotPath(key, id, {});
    const sandboxMatchAction = createSandboxMatchAction(id, key);

    /**
     * Bind sandbox params to given action.
     *
     *      bindToAction({type: 'TEST'}) //=> {type: 'TEST', sandbox: '1'}
     */
    const bindToAction = bindParamsToAction(sandboxParams);
    const bindToActionCreator = actionCreator => R.pipe(actionCreator, bindToAction);
    const bindToActionCreators = R.map(
        R.when(isFunction, bindToActionCreator)
    );

    return {
        id,
        key,
        bindToAction,
        bindToActionCreator,
        bindToActionCreators,
        dispatcher: createDispatcher(sandboxParams),
        reducer: createReducer(sandboxMatchAction, R.curryN(2, reducer)),
    };
};

const applySandbox = R.apply(sandbox);

const hasOneArgWithType = type => R.both(
    equalsLength(1),
    R.pipe(R.head, R.type, R.equals(type))
);

const curriedSandbox = R.unapply(R.ifElse(
    // 1 argument which are options
    hasOneArgWithType('Object'),
    // we curry sandbox with given options
    R.apply(R.curryN(2, R.flip(sandbox))),
    // default, we call sandbox
    applySandbox
));

export default curriedSandbox;
