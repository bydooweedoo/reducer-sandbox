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
```

Using ES5

```js
var counterReducer = require('./reducers/counter');
var reducerSandbox = require('reducer-sandbox');

var sandbox = reducerSandbox(counterReducer, {
  key: 'metadata.sandboxid',
  id: 'stats-counter',
});
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
```

This will increment both counter from `statsCounter` and `itemsCounter`:
```js
store.dispatch({type: 'INCREMENT'});
store.getState(); //=> {statsCounter: {counter: 1}, itemsCounter: {counter: 1}}
```

If you want to only increment `statsCounter`, then you can `reducer-sandbox`.

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

store.getState(); //=> {statsCounter: {counter: 0}, itemsCounter: {counter: 0}}
```

Now if you want to only increment `statsCounter`, you have 4 choices.

1. First is using `bindToAction` helper:

  ```js
  store.dispatch(statsCounter.bindToAction({type: 'INCREMENT'}));
  store.getState(); //=> {statsCounter: {counter: 1}, itemsCounter: {counter: 0}}
  ```

2. Second is using `dispatcher` helper:

  ```js
  const dispatchStatsCounter = statsCounter.dispatcher(store);

  dispatchStatsCounter({type: 'INCREMENT'});
  store.getState(); //=> {statsCounter: {counter: 2}, itemsCounter: {counter: 0}}
  ```

3. Third is using `bindToActionCreator` helper:

  ```js
  const increment = () => {type: 'INCREMENT'};
  const statsIncrement = statsCounter.bindToActionCreator(increment);

  store.dispatch(statsIncrement());
  store.getState(); //=> {statsCounter: {counter: 3}, itemsCounter: {counter: 0}}
  ```

4. Fourth is using `bindToActionCreators` helper:

  ```js
  const actions = {
    increment: () => {type: 'INCREMENT'},
    decrement: () => {type: 'DECREMENT'},
  };
  const statsActions = statsCounter.bindToActionCreators(actions);

  store.dispatch(statsActions.increment());
  store.getState(); //=> {statsCounter: {counter: 4}, itemsCounter: {counter: 0}}
  ```

## Examples

* [counter](./examples/counter)

## Links

* [`renum`](https://www.npmjs.org/package/renum) is a small library to create enum using frozen objects in javascript from multiple sources.
* [`reducer-chain`](https://www.npmjs.org/package/reducer-chain) helps you to chain `redux` reducers with given state and action, then keep last updated state.
* [`reducer-pipe`](https://www.npmjs.org/package/reducer-pipe) helps you to pipe `redux` reducers with given state and action, passing previously returned state to next reducer, then keep last updated state.
