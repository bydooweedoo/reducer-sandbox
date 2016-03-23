import R from 'ramda';
import expect from 'expect';
import action from '../action';

describe('action', () => {

    it('should be an object', () => {
        expect(action).toBeAn(Object);
    });

    describe('#isAction', () => {

        it('should be a function', () => {
            expect(action.isAction).toBeA(Function);
        });

        it('should returns true if valid action given', () => {
            expect(action.isAction({
                type: 'TEST',
            })).toBe(true);
        });

        it('should returns false if not valid action given', () => {
            expect(action.isAction()).toBe(false);
            expect(action.isAction(true)).toBe(false);
            expect(action.isAction([])).toBe(false);
            expect(action.isAction({})).toBe(false);
        });
    });

    describe('#isNotAction', () => {

        it('should be a function', () => {
            expect(action.isNotAction).toBeA(Function);
        });

        it('should returns false if valid action given', () => {
            expect(action.isNotAction({
                type: 'TEST',
            })).toBe(false);
        });

        it('should returns true if not valid action given', () => {
            expect(action.isNotAction()).toBe(true);
            expect(action.isNotAction(true)).toBe(true);
            expect(action.isNotAction([])).toBe(true);
            expect(action.isNotAction({})).toBe(true);
        });
    });

    describe('#isInitAction', () => {

        it('should be a function', () => {
            expect(action.isInitAction).toBeA(Function);
        });

        it('should returns true if valid action given', () => {
            expect(action.isInitAction({
                type: '@@redux/INIT',
            })).toBe(true);
        });

        it('should returns false if not valid action given', () => {
            expect(action.isInitAction()).toBe(false);
            expect(action.isInitAction(true)).toBe(false);
            expect(action.isInitAction([])).toBe(false);
            expect(action.isInitAction({
                type: 'ANOTHER_ACTION',
            })).toBe(false);
        });
    });

    describe('#isNotInitAction', () => {

        it('should be a function', () => {
            expect(action.isNotInitAction).toBeA(Function);
        });

        it('should returns false if valid action given', () => {
            expect(action.isNotInitAction({
                type: '@@redux/INIT',
            })).toBe(false);
        });

        it('should returns true if not valid action given', () => {
            expect(action.isNotInitAction()).toBe(true);
            expect(action.isNotInitAction(true)).toBe(true);
            expect(action.isNotInitAction([])).toBe(true);
            expect(action.isNotInitAction({
                type: 'ANOTHER_ACTION',
            })).toBe(true);
        });
    });

});
