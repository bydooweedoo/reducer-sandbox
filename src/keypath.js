import R from 'ramda';

/**
 * Create lens path from given string.
 *
 *      const simplePath = createKeyPathAt('a');
 *      const nestedPath = createKeyPathAt('a.b.c');
 *
 *      setToKeyPath(simplePath, 'OK', {}); //=> {a: 'OK'}
 *      setToKeyPath(nestedPath, 'OK', {}); //=> {a: {b: {c: 'OK'}}}
 */
export const createKeyPathAt = R.compose(R.lensPath, R.split('.'));

/**
 * Set given value at given path for given object.
 * If value already exists for given path, override it.
 *
 *      const path = createKeyPathAt('a.b.c');
 *
 *      setToKeyPath(path, 'OK', {}); //=> {a: {b: {c: 'OK'}}}
 */
export const setToKeyPath = R.curry(
    (path, value, obj) => R.set(createKeyPathAt(path), value, obj)
);

/**
 * Get value from given object at given path.
 * Returns undefined if path does not exists.
 *
 *      const path = createKeyPathAt('a.b.c');
 *
 *      getFromKeyPath(path, {a: {b: {c: 'OK'}}}); //=> 'OK'
 *      getFromKeyPath(path, {a: true}); //=> undefined
 */
export const getFromKeyPath = R.curry(
    (path, obj) => R.view(createKeyPathAt(path), obj)
);

export default {
    createKeyPathAt,
    setToKeyPath,
    getFromKeyPath,
};
