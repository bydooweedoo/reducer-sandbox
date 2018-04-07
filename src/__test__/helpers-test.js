import R from 'ramda';
import expect from 'expect';
import * as helpers from '../helpers';

describe('helpers', () => {
    it('should be an object', () => {
        expect(helpers).toBeAn(Object);
    });

    describe('#defaults', () => {
        it('should be a function', () => {
            expect(helpers.defaults).toBeA(Function);
        });

        it('should returns second argument call result if first is nil', () => {
            expect(helpers.defaults(undefined, R.always('DEFAULT'))).toEqual('DEFAULT');
            expect(helpers.defaults(null, R.always('DEFAULT'))).toEqual('DEFAULT');
        });

        it('should returns first argument identity if not undefined', () => {
            const obj = { test: true };

            expect(helpers.defaults(1, R.always('DEFAULT'))).toEqual(1);
            expect(helpers.defaults(false, R.always('DEFAULT'))).toEqual(false);
            expect(helpers.defaults(obj, R.always('DEFAULT'))).toBe(obj);
        });

        it('should returns second argument value if it is not a function', () => {
            expect(helpers.defaults(undefined, 'DEFAULT')).toEqual('DEFAULT');
            expect(helpers.defaults(null, 'DEFAULT')).toEqual('DEFAULT');
        });
    });

    describe('#callIfFunction', () => {
        it('should be a function', () => {
            expect(helpers.callIfFunction).toBeA(Function);
        });

        it('should call once if given argument is a function', () => {
            const spy = expect.createSpy().andReturn('WORKING');

            helpers.callIfFunction(spy);
            expect(spy).toHaveBeenCalled();
            expect(spy.calls.length).toEqual(1);
        });

        it('should return calling result if given argument is a function', () => {
            const result = { working: true };
            const spy = expect.createSpy().andReturn(result);

            expect(helpers.callIfFunction(spy)).toBe(result);
        });

        it('should return argument if given argument is not a function', () => {
            const obj = { test: true };
            const arr = [1, 2, 3];

            expect(helpers.callIfFunction(false)).toBe(false);
            expect(helpers.callIfFunction(null)).toBe(null);
            expect(helpers.callIfFunction(obj)).toBe(obj);
            expect(helpers.callIfFunction(arr)).toBe(arr);
        });
    });
});
