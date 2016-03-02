const R = require('ramda');
const expect = require('expect');
const keypath = require('../keypath');

describe('reducer-sandbox', () => {

    describe('#keypath', () => {

        it('should be an object', () => {
            expect(keypath).toBeA('object');
        });

        describe('#create', () => {

            it('should be a function', () => {
                expect(keypath.create).toBeA('function');
            });

            it('should returns value for given single level path', () => {
                const lens = keypath.create('sandbox');
                const value = { sandbox: 42, };

                expect(lens).toBeA('function');
                expect(R.view(lens, value)).toEqual(42);
            });

            it('should returns value for multi-level path', () => {
                const lens = keypath.create('a.b.c');
                const value = { a: { b: { c: 42, }, }, };

                expect(R.view(lens, value)).toEqual(42);
            });

            it('should returns undefined for unknown multi-level path', () => {
                const lens = keypath.create('a.b.c');
                const value = { t: 4, };

                expect(R.view(lens, value)).toEqual(undefined);
            });

        });

        describe('#setTo', () => {

            it('should be a function', () => {
                expect(keypath.setTo).toBeA('function');
            });

            it('should set given value to given path of given object', () => {
                const obj = {};
                const expected = { a: { b: { c: 42, }, }, };

                expect(keypath.setTo('a.b.c', 42, obj)).toEqual(expected);
                expect(obj).toEqual({});
            });

            it('should returns a copy of given object', () => {
                const obj = { d: true, };
                const expected = { a: { b: { c: 42, }, }, d: true, };

                expect(keypath.setTo('a.b.c', 42, obj)).toEqual(expected);
                expect(obj).toEqual({ d: true, });
            });

        });

        describe('#getFrom', () => {

            it('should be a function', () => {
                expect(keypath.getFrom).toBeA('function');
            });

            it('should get value at given path for given object', () => {
                const obj = { a: { b: { c: 42, }, }, };
                const expected = 42;

                expect(keypath.getFrom('a.b.c', obj)).toEqual(expected);
            });

        });

    });

});
