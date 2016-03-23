import R from 'ramda';

/**
 * Create lens path from given string.
 *
 *      const simplePath = createKeyPathAt('a');
 *      const nestedPath = createKeyPathAt('a.b.c');
 *
 *      R.set(simplePath, 'OK', {}); //=> {a: 'OK'}
 *      R.set(nestedPath, 'OK', {}); //=> {a: {b: {c: 'OK'}}}
 *      R.set(simplePath, 'updated', {a: true, b: false}); //=> {a: 'updated', b: false}
 */
export const createKeyPathAt = R.compose(R.lensPath, R.split('.'));

/**
 * Set given value at given path for given object.
 * If value already exists for given path, override it.
 *
 *      setToKeyPath('a.b.c', 'OK', {}); //=> {a: {b: {c: 'OK'}}}
 */
export const setToKeyPath = R.curry(
    (path, value, obj) => R.set(createKeyPathAt(path), value, obj)
);

/**
 * Get value from given object at given path.
 * Returns undefined if path does not exists.
 *
 *      getFromKeyPath('a.b.c', {a: {b: {c: 'OK'}}}); //=> 'OK'
 *      getFromKeyPath('a.b.c', {a: true}); //=> undefined
 */
export const getFromKeyPath = R.curry(
    (path, obj) => R.view(createKeyPathAt(path), obj)
);

export default {
    createKeyPathAt,
    setToKeyPath,
    getFromKeyPath,
};
