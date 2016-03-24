(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ramda"));
	else if(typeof define === 'function' && define.amd)
		define(["ramda"], factory);
	else if(typeof exports === 'object')
		exports["reducer-chain"] = factory(require("ramda"));
	else
		root["reducer-chain"] = factory(root["ramda"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reducerSandbox = __webpack_require__(6);

	var _reducerSandbox2 = _interopRequireDefault(_reducerSandbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reducerSandbox2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isNotInitAction = exports.isInitAction = exports.isNotAction = exports.isAction = undefined;

	var _ramda = __webpack_require__(1);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns true if given object is an action, else false.
	 *
	 *      isAction({type: 'INCREMENT'}) //=> true
	 *      isAction({type: 'ADD', payload: 1}) //=> true
	 *      isAction({metadata: true}) //=> false
	 *      isAction({}) //=> false
	 *      isAction(false) //=> false
	 */
	var isAction = exports.isAction = _ramda2.default.both(_ramda2.default.is(Object), _ramda2.default.pipe(_ramda2.default.prop('type'), _ramda2.default.is(String)));

	/**
	 * Returns true if given object is not an action, else false.
	 *
	 *      isNotAction({type: 'INCREMENT'}) //=> false
	 *      isNotAction({type: 'ADD', payload: 1}) //=> false
	 *      isNotAction({metadata: true}) //=> true
	 *      isNotAction({}) //=> true
	 *      isNotAction(false) //=> true
	 */
	var isNotAction = exports.isNotAction = _ramda2.default.complement(isAction);

	/**
	 * Returns true if given object is an init action, else false.
	 *
	 *      isInitAction({type: '@@INIT'}) //=> true
	 *      isInitAction({type: '@@ADD', payload: 1}) //=> true
	 *      isInitAction({type: 'INIT'}) //=> false
	 *      isInitAction({}) //=> false
	 *      isInitAction(false) //=> false
	 */
	var isInitAction = exports.isInitAction = _ramda2.default.both(isAction, _ramda2.default.pipe(_ramda2.default.prop('type'), _ramda2.default.pipe(_ramda2.default.indexOf('@@'), _ramda2.default.equals(0))));

	/**
	 * Returns true if given object is not an init action, else false.
	 *
	 *      isNotInitAction({type: '@@INIT'}) //=> false
	 *      isNotInitAction({type: '@@ADD', payload: 1}) //=> false
	 *      isNotInitAction({type: 'INIT'}) //=> true
	 *      isNotInitAction({}) //=> true
	 *      isNotInitAction(false) //=> true
	 */
	var isNotInitAction = exports.isNotInitAction = _ramda2.default.complement(isInitAction);

	exports.default = {
	  isAction: isAction,
	  isInitAction: isInitAction,
	  isNotAction: isNotAction,
	  isNotInitAction: isNotInitAction
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Returns counter function starting from given number.
	 * Each time counter function is called, increment counter
	 * from previous state and stringify result.
	 *
	 *      import counter from './counter';
	 *
	 *      const counterFrom1 = counter(1);
	 *
	 *      counterFrom1(); //=> '2'
	 *      counterFrom1(); //=> '3'
	 */

	exports.default = function (number) {
	    var counter = 0;

	    return function () {
	        ++counter;
	        return String(counter + number);
	    };
	};

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.prop = exports.defaults = exports.callIfFunction = exports.isNotNil = undefined;

	var _ramda = __webpack_require__(1);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isNotNil = exports.isNotNil = _ramda2.default.complement(_ramda2.default.isNil);

	var callIfFunction = exports.callIfFunction = _ramda2.default.ifElse(_ramda2.default.is(Function), _ramda2.default.call, _ramda2.default.identity);

	var defaults = exports.defaults = _ramda2.default.unapply(_ramda2.default.ifElse(_ramda2.default.pipe(_ramda2.default.head, isNotNil), _ramda2.default.head, _ramda2.default.pipe(_ramda2.default.last, callIfFunction)));

	var prop = exports.prop = _ramda2.default.unapply(_ramda2.default.ifElse(_ramda2.default.pipe(_ramda2.default.last, _ramda2.default.both(_ramda2.default.is(Object), isNotNil)), _ramda2.default.apply(_ramda2.default.prop), _ramda2.default.always(undefined)));

	exports.default = {
	    defaults: defaults,
	    prop: prop,
	    callIfFunction: callIfFunction,
	    isNotNil: isNotNil
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getFromKeyPath = exports.setToKeyPath = exports.createKeyPathAt = undefined;

	var _ramda = __webpack_require__(1);

	var _ramda2 = _interopRequireDefault(_ramda);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	var createKeyPathAt = exports.createKeyPathAt = _ramda2.default.compose(_ramda2.default.lensPath, _ramda2.default.split('.'));

	/**
	 * Set given value at given path for given object.
	 * If value already exists for given path, override it.
	 *
	 *      setToKeyPath('a.b.c', 'OK', {}); //=> {a: {b: {c: 'OK'}}}
	 */
	var setToKeyPath = exports.setToKeyPath = _ramda2.default.curry(function (path, value, obj) {
	  return _ramda2.default.set(createKeyPathAt(path), value, obj);
	});

	/**
	 * Get value from given object at given path.
	 * Returns undefined if path does not exists.
	 *
	 *      getFromKeyPath('a.b.c', {a: {b: {c: 'OK'}}}); //=> 'OK'
	 *      getFromKeyPath('a.b.c', {a: true}); //=> undefined
	 */
	var getFromKeyPath = exports.getFromKeyPath = _ramda2.default.curry(function (path, obj) {
	  return _ramda2.default.view(createKeyPathAt(path), obj);
	});

	exports.default = {
	  createKeyPathAt: createKeyPathAt,
	  setToKeyPath: setToKeyPath,
	  getFromKeyPath: getFromKeyPath
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ramda = __webpack_require__(1);

	var _ramda2 = _interopRequireDefault(_ramda);

	var _action = __webpack_require__(2);

	var _keypath = __webpack_require__(5);

	var _helpers = __webpack_require__(4);

	var _counter = __webpack_require__(3);

	var _counter2 = _interopRequireDefault(_counter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var doesActionKeyEqual = function doesActionKeyEqual(key, id) {
	    return _ramda2.default.pipe((0, _keypath.getFromKeyPath)(key), _ramda2.default.equals(id));
	};

	var createSandboxMatchAction = function createSandboxMatchAction(id, key) {
	    return _ramda2.default.anyPass([_action.isNotAction, _action.isInitAction, doesActionKeyEqual(key, id)]);
	};

	var createReducer = function createReducer(sandboxMatchAction, reducer) {
	    return function (state, action) {
	        return sandboxMatchAction(action) === true ? reducer(state, action) : state;
	    };
	};

	var createSandboxID = (0, _counter2.default)(-1);

	var createDispatcher = function createDispatcher(sandboxParams) {
	    return function (store) {
	        return function (action) {
	            return store.dispatch(_ramda2.default.merge(action, sandboxParams));
	        };
	    };
	};

	var bindParamsToAction = function bindParamsToAction(params) {
	    return _ramda2.default.ifElse(_ramda2.default.is(Object), _ramda2.default.merge(_ramda2.default.__, params), _ramda2.default.pipe(_ramda2.default.always(params), _ramda2.default.clone));
	};

	var sandbox = function sandbox(reducer) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var id = (0, _helpers.defaults)((0, _helpers.prop)('id', options), createSandboxID);
	    var key = (0, _helpers.defaults)((0, _helpers.prop)('key', options), _ramda2.default.always('sandbox'));
	    var sandboxParams = (0, _keypath.setToKeyPath)(key, id, {});
	    var sandboxMatchAction = createSandboxMatchAction(id, key);

	    return {
	        id: id,
	        key: key,
	        dispatcher: createDispatcher(sandboxParams),
	        reducer: createReducer(sandboxMatchAction, _ramda2.default.curryN(2, reducer)),
	        bindToAction: bindParamsToAction(sandboxParams)
	    };
	};

	var applySandbox = _ramda2.default.apply(sandbox);

	var hasOneArgWithType = function hasOneArgWithType(type) {
	    return _ramda2.default.both(_ramda2.default.pipe(_ramda2.default.length, _ramda2.default.equals(1)), _ramda2.default.pipe(_ramda2.default.head, _ramda2.default.type, _ramda2.default.equals(type)));
	};

	var curriedSandbox = _ramda2.default.unapply(_ramda2.default.cond([
	// 1 argument which are options, we curry sandbox with given options
	[hasOneArgWithType('Object'), _ramda2.default.apply(_ramda2.default.curryN(2, _ramda2.default.flip(sandbox)))],
	// default, we call sandbox
	[_ramda2.default.T, applySandbox]]));

	exports.default = curriedSandbox;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;