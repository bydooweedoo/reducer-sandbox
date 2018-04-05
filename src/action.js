import R from 'ramda';
import { isObject, isString } from 'ramda-extension';
/**
 * Returns true if given object is an action, else false.
 *
 *      isAction({type: 'INCREMENT'}) //=> true
 *      isAction({type: 'ADD', payload: 1}) //=> true
 *      isAction({metadata: true}) //=> false
 *      isAction({}) //=> false
 *      isAction(false) //=> false
 */
export const isAction = R.both(
    isObject,
    R.pipe(R.prop('type'), isString)
);

/**
 * Returns true if given object is not an action, else false.
 *
 *      isNotAction({type: 'INCREMENT'}) //=> false
 *      isNotAction({type: 'ADD', payload: 1}) //=> false
 *      isNotAction({metadata: true}) //=> true
 *      isNotAction({}) //=> true
 *      isNotAction(false) //=> true
 */
export const isNotAction = R.complement(isAction);

/**
 * Returns true if given object is an init action, else false.
 *
 *      isInitAction({type: '@@INIT'}) //=> true
 *      isInitAction({type: '@@ADD', payload: 1}) //=> true
 *      isInitAction({type: 'INIT'}) //=> false
 *      isInitAction({}) //=> false
 *      isInitAction(false) //=> false
 */
export const isInitAction = R.both(isAction, R.pipe(
    R.prop('type'),
    R.pipe(R.indexOf('@@'), R.equals(0))
));

/**
 * Returns true if given object is not an init action, else false.
 *
 *      isNotInitAction({type: '@@INIT'}) //=> false
 *      isNotInitAction({type: '@@ADD', payload: 1}) //=> false
 *      isNotInitAction({type: 'INIT'}) //=> true
 *      isNotInitAction({}) //=> true
 *      isNotInitAction(false) //=> true
 */
export const isNotInitAction = R.complement(isInitAction);

export default {
    isAction,
    isInitAction,
    isNotAction,
    isNotInitAction,
};
