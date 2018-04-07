import R from 'ramda';
import { isFunction, dispatch, headArg, lastArg } from 'ramda-extension';

export const callIfFunction = R.when(isFunction, R.call);
export const defaults = dispatch([headArg, R.compose(callIfFunction, lastArg)]);
