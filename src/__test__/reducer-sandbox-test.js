import R from 'ramda';
import expect from 'expect';
import reducerSandbox from '..';

describe('reducer-sandbox', () => {

    it('should be a function', () => {
        expect(reducerSandbox).toBeA(Function);
    });

    it('should take a reducer and return an Api', () => {
        const api = reducerSandbox((state, action) => state);

        expect(api).toBeAn(Object);
    });

    it('should use default options if given options is not an object', () => {
        expect(reducerSandbox(() => {}, null).key).toEqual('sandbox');
        expect(reducerSandbox(() => {}, []).key).toEqual('sandbox');
        expect(reducerSandbox(() => {}, false).key).toEqual('sandbox');
    });

    it('should be able to curry with options', () => {
        const id = 'curry-id';
        const key = 'curry-key';
        const sandbox = reducerSandbox({id, key});

        expect(sandbox).toBeA(Function);
    });

    it('should reuse same id and key from previous curry', () => {
        const id = 'curry-id';
        const key = 'curry-key';
        const sandbox = reducerSandbox({id, key});
        const reducer1 = () => 1;
        const reducer2 = () => 2;
        const sandbox1 = sandbox(reducer1);
        const sandbox2 = sandbox(reducer2);

        expect(sandbox1).toBeAn(Object);
        expect(sandbox2).toBeAn(Object);
        expect(sandbox1.id).toBe(id);
        expect(sandbox2.id).toBe(id);
        expect(sandbox1.key).toBe(key);
        expect(sandbox2.key).toBe(key);
    });

    describe('#Api', () => {

        it('should have a dispatcher function', () => {
            const api = reducerSandbox((state, action) => state);

            expect(api.dispatcher).toBeA(Function);
        });

        it('should have a reducer function', () => {
            const api = reducerSandbox((state, action) => state);

            expect(api.reducer).toBeA(Function);
        });

        it('should have an id string', () => {
            const api = reducerSandbox((state, action) => state);

            expect(api.id).toBeA('string');
        });

        it('should have a key string', () => {
            const api = reducerSandbox((state, action) => state);

            expect(api.key).toBeA('string');
        });

        it('should have a bindToAction function', () => {
            const api = reducerSandbox((state, action) => state);

            expect(api.bindToAction).toBeA(Function);
        });

    });

    describe('#Api.key', () => {

        it('should be set "sandbox" by default', () => {
            const api = reducerSandbox((state, action) => state);

            expect(api.key).toEqual('sandbox');
        });

        it('should be set to given string', () => {
            const key = 'newkey';
            const api = reducerSandbox((state, action) => state, {key});

            expect(api.key).toEqual(key);
        });

    });

    describe('#Api.id', () => {

        it('should be set to non empty string by default', () => {
            const api = reducerSandbox((state, action) => state);

            expect(api.id).toBeA('string');
            expect(api.id.length).toBeGreaterThan(0);
        });

        it('should be incremental by default', () => {
            const api1 = reducerSandbox((state, action) => state);
            const api2 = reducerSandbox((state, action) => state);

            expect(api1.id).toBeA('string');
            expect(api1.id.length).toBeGreaterThan(0);
            expect(api2.id).toBeA('string');
            expect(api2.id.length).toBeGreaterThan(0);
            expect(api1.id).toNotEqual(api2.id);
        });

        it('should be set to given string', () => {
            const id = 'newid';
            const api = reducerSandbox((state, action) => state, {id});

            expect(api.id).toEqual(id);
        });

    });

    describe('#Api.dispatcher', () => {

        it('should take a store and returns new dispatch function', () => {
            const api = reducerSandbox((state, action) => state);
            const store = {dispatch: action => action};

            expect(api.dispatcher(store)).toBeA(Function);
        });

        it('should call store dispatch once when calling new dispatch', () => {
            const api = reducerSandbox((state, action) => state);
            const dispatchSpy = expect.createSpy().andReturn(true);
            const store = {dispatch: dispatchSpy};
            const dispatch = api.dispatcher(store);

            dispatch({type: 'TEST'});
            expect(dispatchSpy).toHaveBeenCalled();
            expect(dispatchSpy.calls.length).toEqual(1);
        });

        it('should pass updated action to store dispatch', () => {
            const api = reducerSandbox((state, action) => state);
            const dispatchSpy = expect.createSpy().andReturn(true);
            const store = {dispatch: dispatchSpy};
            const dispatch = api.dispatcher(store);
            const action = {type: 'TEST'};

            dispatch(action);
            expect(dispatchSpy.calls[0].arguments[0]).toBeAn(Object);
            expect(dispatchSpy.calls[0].arguments[0]).toNotBe(action);
            expect(dispatchSpy.calls[0].arguments[0].type).toEqual(action.type);
        });

        it('should set default sandbox id inside sandbox key', () => {
            const api = reducerSandbox((state, action) => state);
            const dispatchSpy = expect.createSpy().andReturn(true);
            const store = {dispatch: dispatchSpy};
            const dispatch = api.dispatcher(store);
            const action = {type: 'TEST'};

            dispatch(action);
            expect(dispatchSpy.calls[0].arguments[0].sandbox).toBeA('string');
            expect(dispatchSpy.calls[0].arguments[0].sandbox.length).toBeGreaterThan(0);
        });

        it('should copy all other keys from passed action', () => {
            const api = reducerSandbox((state, action) => state);
            const dispatchSpy = expect.createSpy().andReturn(true);
            const store = {dispatch: dispatchSpy};
            const dispatch = api.dispatcher(store);
            const action = {type: 'TEST', anotherKey: true};

            dispatch(action);
            expect(dispatchSpy.calls[0].arguments[0].anotherKey).toEqual(true);
        });

        it('should use given custom id', () => {
            const id = 'customid';
            const api = reducerSandbox((state, action) => state, {id});
            const dispatchSpy = expect.createSpy().andReturn(true);
            const store = {dispatch: dispatchSpy};
            const dispatch = api.dispatcher(store);
            const action = {type: 'TEST'};

            dispatch(action);
            expect(dispatchSpy.calls[0].arguments[0].sandbox).toEqual(id);
        });

        it('should set given custom id at given custom key', () => {
            const id = 'customid';
            const key = 'customkey';
            const api = reducerSandbox((state, action) => state, {id, key});
            const dispatchSpy = expect.createSpy().andReturn(true);
            const store = {dispatch: dispatchSpy};
            const dispatch = api.dispatcher(store);
            const action = {type: 'TEST'};

            dispatch(action);
            expect(dispatchSpy.calls[0].arguments[0][key]).toEqual(id);
        });

        it('should handle custom key with inner path a.b.c', () => {
            const id = 'customid';
            const key = 'a.b.c';
            const api = reducerSandbox((state, action) => state, {id, key});
            const dispatchSpy = expect.createSpy().andReturn(true);
            const store = {dispatch: dispatchSpy};
            const dispatch = api.dispatcher(store);
            const action = {type: 'TEST'};

            dispatch(action);
            expect(dispatchSpy.calls[0].arguments[0].a.b.c).toEqual(id);
        });

    });

    describe('#Api.reducer', () => {

        const id = 'sandboxid';
        const key = 'sandboxkey';
        const actionMatch = {type: 'TEST', [key]: id};
        const actionNotMatch = {type: 'TEST', [key]: 'another-id'};
        const initAction = {type: '@@INIT'};
        const initialState = {updated: false};
        const nextState = {updated: true};
        const reducerSpy = expect.createSpy().andReturn(nextState);
        const api = reducerSandbox(reducerSpy, {id, key});

        afterEach(() => reducerSpy.reset());

        it('should call given reducer once when given action match sandbox id', () => {
            api.reducer(initialState, actionMatch);
            expect(reducerSpy).toHaveBeenCalled();
            expect(reducerSpy.calls.length).toEqual(1);
        });

        it('should not call given reducer when given action does not match sandbox id', () => {
            api.reducer(initialState, actionNotMatch);
            expect(reducerSpy).toNotHaveBeenCalled();
        });

        it('should pass given state and action to reducer when match', () => {
            api.reducer(initialState, actionMatch);
            expect(reducerSpy).toHaveBeenCalledWith(initialState, actionMatch);
        });

        it('should returns reducer result when it does match', () => {
            expect(api.reducer(initialState, actionMatch)).toBe(nextState);
        });

        it('should returns given state when it does not match', () => {
            expect(api.reducer(initialState, actionNotMatch)).toBe(initialState);
        });

        it('should call given reducer when given action is an init action', () => {
            api.reducer(initialState, initAction);
            expect(reducerSpy).toHaveBeenCalled();
            expect(reducerSpy.calls.length).toEqual(1);
        });

    });

    describe('#Api.bindToAction', () => {

        const id = 'sandbox-id';
        const key = 'sandbox-key';
        const actionWithoutKey = {type: 'TEST'};
        const actionWithKey = {type: 'TEST', [key]: 'original'};

        it('should bind given action to sandbox', () => {
            const sandbox = reducerSandbox(() => {}, {
                id, key
            });

            expect(sandbox.bindToAction(actionWithoutKey)).toEqual({
                type: 'TEST',
                [key]: id,
            });
        });

        it('should override given action key/id if already exists', () => {
            const sandbox = reducerSandbox(() => {}, {
                id, key
            });

            expect(sandbox.bindToAction(actionWithKey)).toEqual({
                type: 'TEST',
                [key]: id,
            });
        });

        it('should return object with key/id if given argument is not an action', () => {
            const sandbox = reducerSandbox(() => {}, {
                id, key
            });

            expect(sandbox.bindToAction(null)).toEqual({[key]: id});
            expect(sandbox.bindToAction(undefined)).toEqual({[key]: id});
            expect(sandbox.bindToAction([])).toEqual({[key]: id});
            expect(sandbox.bindToAction(1)).toEqual({[key]: id});
        });

    });

    describe('#Api.bindToActionCreator', () => {

        const reducer = () => {};
        const id = 'sandbox-id';
        const key = 'sandbox-key';
        const actionWithoutKey = {type: 'TEST'};
        const actionWithKey = {type: 'TEST', [key]: 'original'};
        const doActionWithoutKey = () => actionWithoutKey;
        const doActionWithKey = () => actionWithKey;

        it('should return function', () => {
            const sandbox = reducerSandbox(reducer, {id, key});

            expect(sandbox.bindToActionCreator(doActionWithoutKey)).toBeA(Function);
        });

        it('should call original action creator once', () => {
            const action = {working: true};
            const actionSpy = expect.createSpy().andReturn(action);
            const sandbox = reducerSandbox(reducer, {id, key});
            const doAction = sandbox.bindToActionCreator(actionSpy);

            doAction();
            expect(actionSpy).toHaveBeenCalled();
            expect(actionSpy.calls.length).toEqual(1);
        });

        it('should call original action creator with given arguments', () => {
            const action = {working: true};
            const actionSpy = expect.createSpy().andReturn(action);
            const sandbox = reducerSandbox(reducer, {id, key});
            const doAction = sandbox.bindToActionCreator(actionSpy);
            const arg1 = {a: 1};
            const arg2 = new Date();

            doAction(arg1, arg2);
            expect(actionSpy).toHaveBeenCalledWith(arg1, arg2);
        });

        it('should bind returned action without key/id to sandbox', () => {
            const sandbox = reducerSandbox(reducer, {id, key});
            const doAction = sandbox.bindToActionCreator(doActionWithoutKey);

            expect(doAction()).toEqual({
                type: 'TEST',
                [key]: id,
            });
        });

        it('should bind returned action with key/id to sandbox', () => {
            const sandbox = reducerSandbox(reducer, {id, key});
            const doAction = sandbox.bindToActionCreator(doActionWithKey);

            expect(doAction()).toEqual({
                type: 'TEST',
                [key]: id,
            });
        });

    });

    describe('#Api.bindToActionCreators', () => {

        const reducer = () => {};
        const id = 'sandbox-id';
        const key = 'sandbox-key';
        const actionWithoutKey = {type: 'TEST'};
        const actionWithKey = {type: 'TEST', [key]: 'original'};
        const doActionWithoutKey = () => actionWithoutKey;
        const doActionWithKey = () => actionWithKey;
        const actions = {
            doActionWithoutKey,
            doActionWithKey,
        };

        it('should return an object', () => {
            const sandbox = reducerSandbox(reducer, {id, key});

            expect(sandbox.bindToActionCreators(actions)).toBeAn(Object);
        });

        it('should return same object key as given', () => {
            const sandbox = reducerSandbox(reducer, {id, key});
            const result = sandbox.bindToActionCreators(actions);

            expect(result.doActionWithKey).toBeA(Function);
            expect(result.doActionWithoutKey).toBeA(Function);
        });

        it('should not change non-function value', () => {
            const sandbox = reducerSandbox(reducer, {id, key});
            const obj = {working: true};
            const notAllActions = R.merge({test: obj}, actions);
            const result = sandbox.bindToActionCreators(notAllActions);

            expect(result.test).toBe(obj);
        });

        it('should be able to take an array', () => {
            const sandbox = reducerSandbox(reducer, {id, key});
            const spy = expect.createSpy().andReturn(true);
            const listOfActions = [spy, spy];
            const result = sandbox.bindToActionCreators(listOfActions);

            expect(result).toBeAn(Array);
            expect(result.length).toEqual(2);
            result[0]('test');
            expect(spy).toHaveBeenCalled();
        });

        it('should bind to returned action', () => {
            const spy = expect.createSpy().andReturn({type: 'SPY'});
            const sandbox = reducerSandbox(reducer, {id, key});
            const result = sandbox.bindToActionCreators([spy]);

            expect(result[0]()).toEqual({
                type: 'SPY',
                [key]: id,
            });
        });

        it('should call action creator once', () => {
            const spy = expect.createSpy().andReturn({type: 'SPY'});
            const sandbox = reducerSandbox(reducer, {id, key});
            const result = sandbox.bindToActionCreators([spy]);

            result[0]();
            expect(spy).toHaveBeenCalled();
            expect(spy.calls.length).toEqual(1);
        });

        it('should call action creator with given arguments', () => {
            const spy = expect.createSpy().andReturn({type: 'SPY'});
            const sandbox = reducerSandbox(reducer, {id, key});
            const result = sandbox.bindToActionCreators([spy]);
            const arg1 = {a: 1};
            const arg2 = new Date();

            result[0](arg1, arg2);
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(arg1, arg2);
        });

    });

});
