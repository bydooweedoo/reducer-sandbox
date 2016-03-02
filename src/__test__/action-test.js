const R = require('ramda');
const expect = require('expect');
const action = require('../action');

describe('reducer-sandbox', () => {

    describe('#action', () => {

        it('should be an object', () => {
            return expect(action).toBeA('object');
        });

        describe('#is', () => {

            it('should be a function', () => {
                return expect(action.is).toBeA('function');
            });

            it('should returns true if valid action given', () => {
                return expect(action.is({
                    type: 'TEST',
                })).toBe(true);
            });

            it('should returns false if not valid action given', () => {
                expect(action.is()).toBe(false);
                expect(action.is(true)).toBe(false);
                expect(action.is([])).toBe(false);
                return expect(action.is({})).toBe(false);
            });
        });

        describe('#isInit', () => {

            it('should be a function', () => {
                return expect(action.isInit).toBeA('function');
            });

            it('should returns true if valid action given', () => {
                return expect(action.isInit({
                    type: '@@redux/INIT',
                })).toBe(true);
            });

            it('should returns false if not valid action given', () => {
                expect(action.isInit()).toBe(false);
                expect(action.isInit(true)).toBe(false);
                expect(action.isInit([])).toBe(false);
                return expect(action.isInit({
                    type: 'ANOTHER_ACTION',
                })).toBe(false);
            });
        });

    });

});
