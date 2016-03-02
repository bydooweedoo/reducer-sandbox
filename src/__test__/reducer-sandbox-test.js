const R = require('ramda');
const expect = require('expect');
const reducerSandbox = require('../SandboxFP');

describe('reducer-sandbox', () => {

    it('should be a function', () => {
        return expect(reducerSandbox).toBeA('function');
    });

    describe('#nextid', () => {

        it('should be a function', () => {
            return expect(reducerSandbox.nextid).toBeA('function');
        });

        it('should get different values on each call', () => {
            const ids = [
                reducerSandbox.nextid(),
                reducerSandbox.nextid(),
                reducerSandbox.nextid(),
            ];

            return expect(R.allUniq(ids)).toBe(true);
        });

    });

    describe('#keyParams', () => {

        it('should be a function', () => {
            return expect(reducerSandbox.keyParams).toBeA('function');
        });

        it('should returns object with default key', () => {
            const params = reducerSandbox.keyParams(undefined);

            expect(params).toBeA('object');
            expect(params.sandbox).toBeA('string');
            return expect(params.sandbox.length).toBeGreaterThan(0);
        });

        it('should returns object with given key', () => {
            const params = reducerSandbox.keyParams('mykey');

            expect(params).toBeA('object');
            expect(params.mykey).toBeA('string');
            return expect(params.mykey.length).toBeGreaterThan(0);
        });

        it('should accept multilevel path (a.b.c)', () => {
            const params = reducerSandbox.keyParams('a.b.c');

            expect(params).toBeA('object');
            expect(params.a).toBeA('object');
            expect(params.a.b).toBeA('object');
            expect(params.a.b.c).toBeA('string');
            return expect(params.a.b.c.length).toBeGreaterThan(0);
        });

    });

    describe('#getid', () => {

        it('should be a function', () => {
            return expect(reducerSandbox.getid).toBeA('function');
        });

        it('should returns sandbox id with default key', () => {
            const id = reducerSandbox.getid({
                sandbox: '100',
            }, undefined);

            expect(id).toBeA('string');
            return expect(id).toEqual('100');
        });

        it('should returns sandbox id with given key', () => {
            const id = reducerSandbox.getid({
                mykey: '100',
            }, 'mykey');

            console.log(id);

            expect(id).toBeA('string');
            return expect(id).toEqual('100');
        });

    });

});
