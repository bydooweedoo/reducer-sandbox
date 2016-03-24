# reducer-sandbox [![npm package][npm-badge]][npm] [![Travis][build-badge]][build] [![Coveralls][coverage-badge]][coverage]

[build-badge]: https://img.shields.io/travis/bydooweedoo/reducer-sandbox/master.svg?style=flat-square
[build]: https://travis-ci.org/bydooweedoo/reducer-sandbox

[coverage-badge]: https://img.shields.io/codecov/c/github/bydooweedoo/reducer-sandbox.svg?style=flat-square
[coverage]: https://codecov.io/github/bydooweedoo/reducer-sandbox

[npm-badge]: https://img.shields.io/npm/v/reducer-sandbox.svg?style=flat-square
[npm]: https://www.npmjs.org/package/reducer-sandbox

`reducer-sandbox` helps you to reuse your `redux` reducers in different place without conflict them.

## Getting started

Install `reducer-sandbox` using [npm](https://www.npmjs.org/):

```shell
npm install reducer-sandbox --save
```

Then using ES6

```js
import counterReducer from './reducers/counter';
import reducerSandbox from 'reducer-sandbox';

const sandbox = reducerSandbox(counterReducer, {
  key: 'metadata.sandboxid',
  id: 'stats-counter',
});

sandbox.reducer; //=> sandboxed counterReducer to attach to the store
sandbox.dispatcher(store)(action); //=> you can use the new dispatch function in order to dispatch action to this sandbox reducer
store.dispatch(sandbox.bindToAction(action)); //=> or use this to update given action with sandbox metadata

export default sandbox;
```

Using ES5

```js
var counterReducer = require('./reducers/counter');
var reducerSandbox = require('reducer-sandbox');

var sandbox = reducerSandbox(counterReducer, {
  key: 'metadata.sandboxid',
  id: 'stats-counter',
});

sandbox.reducer; //=> sandboxed counterReducer to attach to the store
sandbox.dispatcher(store)(action); //=> you can use the new dispatch function in order to dispatch action to this sandbox reducer
store.dispatch(sandbox.bindToAction(action)); //=> or use this to update given action with sandbox metadata

module.exports = sandbox;
```

## Usage

Take this piece of code:
```js
import redux from 'redux';
import counterReducer from './reducers/counter';

const reducers = redux.combineReducers({
  statsCounter: counterReducer,
  itemsCounter: counterReducer,
});
const store = reducer.createStore(reducers);

// this will increment both counter from statsCounter and itemsCounter
store.dispatch({type: 'INCREMENT'});
// statsCounter.counter = 1
// itemsCounter.counter = 1

// if you want to only increment statsCounter, then you can reducer-sandbox.
```

Let's do it:
```js
import redux from 'redux';
import reducerSandbox from 'reducer-sandbox';
import counterReducer from './reducers/counter';

const statsCounter = reducerSandbox(counterReducer);
const itemsCounter = reducerSandbox(counterReducer);

const reducers = redux.combineReducers({
  statsCounter: statsCounter.reducer,
  itemsCounter: itemsCounter.reducer,
});
const store = reducer.createStore(reducers);

// now if you want to only increment statsCounter, you have 4 choices.

// First is using bindToAction helper:
store.dispatch(statsCounter.bindToAction({type: 'INCREMENT'}));
// statsCounter.counter = 1
// itemsCounter.counter = 0

// Second is using dispatcher helper:
const dispatchStatsCounter = statsCounter.dispatcher(store);

dispatchStatsCounter({type: 'INCREMENT'});
// statsCounter.counter = 2
// itemsCounter.counter = 0

// Third is using bindToActionCreator helper:
const makeIncrement = () => {type: 'INCREMENT'};
const makeStatsIncrement = statsCounter.bindToActionCreator(makeIncrement);

store.dispatch(makeStatsIncrement());
// statsCounter.counter = 3
// itemsCounter.counter = 0

// Fourth is using bindToActionCreators helper:
const actions = {
  increment: () => {type: 'INCREMENT'},
  decrement: () => {type: 'DECREMENT'},
};
const statsActions = statsCounter.bindToActionCreators(actions);

store.dispatch(statsActions.increment());
```

## Examples

* [counter](./examples/counter)

## Links

* [`renum`](https://www.npmjs.org/package/renum) is a small library to create enum using frozen objects in javascript from multiple sources.
* [`reducer-chain`](https://www.npmjs.org/package/reducer-chain) helps you to chain `redux` reducers with given state and action, then keep last updated state.
* [`reducer-pipe`](https://www.npmjs.org/package/reducer-pipe) helps you to pipe `redux` reducers with given state and action, passing previously returned state to next reducer, then keep last updated state.
