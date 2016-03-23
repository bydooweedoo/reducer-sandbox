import R from 'ramda';

export const isNotNil = R.complement(R.isNil);

export const callIfFunction = R.ifElse(
    R.is(Function),
    R.call,
    R.identity
);

export const defaults = R.unapply(R.ifElse(
    R.pipe(R.head, isNotNil),
    R.head,
    R.pipe(R.last, callIfFunction)
));

export const prop = R.unapply(R.ifElse(
    R.pipe(R.last, R.both(R.is(Object), isNotNil)),
    R.apply(R.prop),
    R.always(undefined)
));

export default {
    defaults,
    prop,
    callIfFunction,
    isNotNil,
};
