import R from 'ramda';
import expect from 'expect';
import keypath from '../keypath';

describe('keypath', () => {

    it('should be an object', () => {
        expect(keypath).toBeAn(Object);
    });

    describe('#createKeyPathAt', () => {

        it('should be a function', () => {
            expect(keypath.createKeyPathAt).toBeA(Function);
        });

        it('should returns value for given single level path', () => {
            const lens = keypath.createKeyPathAt('sandbox');
            const value = { sandbox: 42, };

            expect(lens).toBeA(Function);
            expect(R.view(lens, value)).toEqual(42);
        });

        it('should returns value for multi-level path', () => {
            const lens = keypath.createKeyPathAt('a.b.c');
            const value = { a: { b: { c: 42, }, }, };

            expect(R.view(lens, value)).toEqual(42);
        });

        it('should returns undefined for unknown multi-level path', () => {
            const lens = keypath.createKeyPathAt('a.b.c');
            const value = { t: 4, };

            expect(R.view(lens, value)).toEqual(undefined);
        });

    });

    describe('#setToKeyPath', () => {

        it('should be a function', () => {
            expect(keypath.setToKeyPath).toBeA(Function);
        });

        it('should set given value to given path of given object', () => {
            const obj = {};
            const expected = { a: { b: { c: 42, }, }, };

            expect(keypath.setToKeyPath('a.b.c', 42, obj)).toEqual(expected);
            expect(obj).toEqual({});
        });

        it('should returns a copy of given object', () => {
            const obj = { d: true, };
            const expected = { a: { b: { c: 42, }, }, d: true, };

            expect(keypath.setToKeyPath('a.b.c', 42, obj)).toEqual(expected);
            expect(obj).toEqual({ d: true, });
        });

    });

    describe('#getFromKeyPath', () => {

        it('should be a function', () => {
            expect(keypath.getFromKeyPath).toBeA(Function);
        });

        it('should get value at given path for given object', () => {
            const obj = { a: { b: { c: 42, }, }, };
            const expected = 42;

            expect(keypath.getFromKeyPath('a.b.c', obj)).toEqual(expected);
        });

    });

});
