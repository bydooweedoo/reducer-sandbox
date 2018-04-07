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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reducerSandbox = __webpack_require__(46);

	var _reducerSandbox2 = _interopRequireDefault(_reducerSandbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _reducerSandbox2.default;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.nonAlphaNumericRegExp = exports.emptyObject = exports.emptyArray = exports.emptyString = undefined;

	var _constructRegExp = __webpack_require__(8);

	var _constructRegExp2 = _interopRequireDefault(_constructRegExp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var emptyString = exports.emptyString = '';
	var emptyArray = exports.emptyArray = [];
	var emptyObject = exports.emptyObject = {};
	var nonAlphaNumericRegExp = exports.nonAlphaNumericRegExp = (0, _constructRegExp2.default)('[^a-zA-Z0-9]+', 'g');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _internal = __webpack_require__(2);

	/**
	 * Splits string into list. Delimiter is every sequence of non-alphanumerical values.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.splitByNonAlphaNumeric('Hello    world/1'); // ['Hello', 'world', '1']
	 *
	 * @sig String -> [String]
	 *
	 */
	var splitByNonAlphaNumeric = (0, _ramda.o)((0, _ramda.reject)((0, _ramda.equals)(_internal.emptyString)), (0, _ramda.split)(_internal.nonAlphaNumericRegExp));

	exports.default = splitByNonAlphaNumeric;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Converts arguments to list.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        R.compose(R.sum, R_.argumentsToList)(1, 2, 3) // 6
	 *
	 * @sig (a, b, c, ...) → ([a, b, c, ...])
	 */
	var argumentsToList = (0, _ramda.unapply)(_ramda.identity);

	exports.default = argumentsToList;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compareLength = undefined;

	var _ramda = __webpack_require__(1);

	var compareLength = exports.compareLength = (0, _ramda.useWith)(_ramda.__, [_ramda.identity, _ramda.length]);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns an over lens to the first index of list.
	 *
	 * @func
	 * @category List
	 * @param {*} v
	 * @param {*} x
	 * @return {*}
	 * @example
	 *
	 *      R_.overHead(R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
	 *
	 */
	var overHead = (0, _ramda.over)((0, _ramda.lensIndex)(0));

	exports.default = overHead;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Splits string by dot into list.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.splitByDot('a.b.c') // ['a', 'b', 'c']
	 *
	 * @sig String -> [String]
	 */
	var splitByDot = (0, _ramda.split)('.');

	exports.default = splitByDot;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Constructs RegExp.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        test(R_.constructRegExp('end$', 'gi'), 'in the end') // true
	 *
	 */
	var constructRegExp = (0, _ramda.constructN)(2, RegExp);

	exports.default = constructRegExp;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if argument is type of Object.
	 *
	 * @func
	 * @category Type
	 *
	 * @example
	 *
	 *        R_.isObject({}) // true
	 *        R_.isObject([]) // true
	 *        R_.isObject('') // false

	 * @sig a -> Boolean
	 */
	var isObject = (0, _ramda.is)(Object);

	exports.default = isObject;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if argument is neither null or undefined.
	 *
	 * @func
	 * @category Logic
	 *
	 * @example
	 *
	 *        R_.notNil(null)		// false
	 *        R_.notNil(undefined)	// false
	 *        R_.notNil('')		// true
	 *        R_.notNil(false)	// true
	 *        R_.notNil(0)		// true
	 *        R_.notNil([])		// true
	 *        R_.notNil({})		// true
	 *
	 * @sig a -> Boolean
	 */
	var notNil = (0, _ramda.o)(_ramda.not, _ramda.isNil);

	exports.default = notNil;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Always returns null.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        R_.alwaysNull() // null
	 *
	 * @sig a -> Object
	 */
	var alwaysNull = (0, _ramda.always)(null);

	exports.default = alwaysNull;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if argument is type of Function.
	 *
	 * @func
	 * @category Type
	 *
	 * @example
	 *
	 *        R_.isFunction(() => {})	// true
	 *        R_.isFunction({})	// false
	 *        R_.isFunction([])	// false
	 *        R_.isFunction('')	// false
	 *        R_.isFunction(0)	// false
	 *
	 * @sig a -> Boolean
	 *
	 */
	var isFunction = (0, _ramda.is)(Function);

	exports.default = isFunction;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Joins array of string with underscore determiner.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.joinWithUnderscore(['a', 'b', 'c']) // 'a_b_c'
	 *
	 * @sig [String] -> String
	 */
	var joinWithUnderscore = (0, _ramda.join)('_');

	exports.default = joinWithUnderscore;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _lengthUtils = __webpack_require__(5);

	/**
	 * Returns true if length of array is bigger or equals than first argument
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        const lengthBiggerThanEqualsOne = R_.lteThanLength(1)
	 *        lengthBiggerThanEqualsOne([{},{}])	// true
	 *        lengthBiggerThanEqualsOne([{}])		// true
	 *        lengthBiggerThanEqualsOne([])		// false
	 *
	 * @sig Number -> [a] -> Boolean
	 */
	var lteThanLength = (0, _lengthUtils.compareLength)(_ramda.lte);

	exports.default = lteThanLength;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _splitByDot = __webpack_require__(7);

	var _splitByDot2 = _interopRequireDefault(_splitByDot);

	var _argumentsToList = __webpack_require__(4);

	var _argumentsToList2 = _interopRequireDefault(_argumentsToList);

	var _overHead = __webpack_require__(6);

	var _overHead2 = _interopRequireDefault(_overHead);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Makes a shallow clone of an object, setting or overriding the nodes required
	 * to create the given path, and placing the specific value at the tail end of
	 * that path.
	 *
	 * @func
	 * @category Object
	 * @param {String} path the dot path to set
	 * @param {*} val The new value
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object equivalent to the original except along the specified path.
	 * @example
	 *
	 *      R_.assocDotPath('a.b.c', 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
	 *
	 *      // Any missing or non-object keys in path will be overridden
	 *      R_.assocDotPath('a.b.c', 42, {a: 5}); //=> {a: {b: {c: 42}}}
	 *
	 * @sig String -> a -> b
	 */
	var assocDotPath = (0, _ramda.curryN)(2, (0, _ramda.compose)((0, _ramda.apply)(_ramda.assocPath), (0, _overHead2.default)(_splitByDot2.default), _argumentsToList2.default));

	exports.default = assocDotPath;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _splitByDot = __webpack_require__(7);

	var _splitByDot2 = _interopRequireDefault(_splitByDot);

	var _argumentsToList = __webpack_require__(4);

	var _argumentsToList2 = _interopRequireDefault(_argumentsToList);

	var _overHead = __webpack_require__(6);

	var _overHead2 = _interopRequireDefault(_overHead);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Retrieve the value at a given dot path.
	 *
	 * @func
	 * @category Object
	 * @param {String} path The dot path to use.
	 * @param {Object} obj The object to retrieve the nested property from.
	 * @return {*} The data at `path`.
	 *
	 * @example
	 *
	 *      R_.dotPath('a.b', {a: {b: 2}}); //=> 2
	 *      R_.dotPath('a.b', {c: {b: 2}}); //=> undefined
	 *
	 */
	var dotPath = (0, _ramda.curryN)(2, (0, _ramda.compose)((0, _ramda.apply)(_ramda.path), (0, _overHead2.default)(_splitByDot2.default), _argumentsToList2.default));

	exports.default = dotPath;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _replicate = __webpack_require__(37);

	var _replicate2 = _interopRequireDefault(_replicate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates pair. Every item of pair equals to input parameter.
	 *
	 * @param {a} input Value for duplication
	 *
	 * @return List Pair in which every item equals to `input` parameter
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        R_.duplicate(1) // [1, 1]
	 *
	 * @sig a -> [a]
	 */
	var duplicate = (0, _replicate2.default)(2);

	exports.default = duplicate;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _internal = __webpack_require__(2);

	/**
	 * Testing if function is equals to ''
	 *
	 * @func
	 * @category String
	 *
	 * @param  {string} string
	 * @return {boolean} True if string is empty
	 *
	 * @example
	 *
	 *        R_.equalsEmptyString('')	// true
	 *        R_.equalsEmptyString('hi')	// false
	 *
	 * @sig a -> Boolean
	 */
	var equalsEmptyString = (0, _ramda.equals)(_internal.emptyString);

	exports.default = equalsEmptyString;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _notNil = __webpack_require__(10);

	var _notNil2 = _interopRequireDefault(_notNil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns first not nil value
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        R_.findNotNil([null, undefined, 0, true]) // 0
	 *
	 * @sig [a] -> a
	 *
	 */
	var findNotNil = (0, _ramda.find)(_notNil2.default);

	exports.default = findNotNil;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _argumentsToList = __webpack_require__(4);

	var _argumentsToList2 = _interopRequireDefault(_argumentsToList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Applies flatten on array of arguments
	 *
	 * @func
	 * @category List
	 *
	 * @return {Array} flatten array
	 *
	 * @example
	 *
	 *    R_.flattenArgs('e', 'f', 'a')		// ['e', 'f', 'a']
	 *        R_.flattenArgs('e', ['f', 'a'])		// ['e', 'f', 'a']
	 *        R_.flattenArgs('e', ['f', ['a']])	// ['e', 'f', 'a']
	 *
	 * @sig (a, [b, c]...) -> [a, b, c]
	 */
	var flattenArgs = (0, _ramda.compose)(_ramda.flatten, _argumentsToList2.default);

	exports.default = flattenArgs;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Takes first argument from the arguments
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        R_.headArg('a', 'b', 'c') // a
	 *
	 *
	 */
	var headArg = (0, _ramda.nthArg)(0);

	exports.default = headArg;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns `true` if if `list` includes `item`.
	 *
	 * @func
	 * @category List
	 *
	 * @param {Array} list
	 * @param {any} item
	 * @return {Boolean} Returns `true` if `list` includes `item`.
	 *
	 * @example
	 *
	 *    R_.includes(['e', 'f'], 'e') // true
	 *    R_.includes(['a', 'f'], 'a']) // false
	 *
	 * @sig [a] -> b -> Boolean
	 */
	var includes = (0, _ramda.flip)(_ramda.contains);

	exports.default = includes;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if argument is type of Array.
	 *
	 * @func
	 * @category Type
	 *
	 * @example
	 *
	 *        R_.isArray([]) // true
	 *        R_.isArray('') // false

	 * @sig a -> Boolean
	 */
	var isArray = (0, _ramda.is)(Array);

	exports.default = isArray;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _notNil = __webpack_require__(10);

	var _notNil2 = _interopRequireDefault(_notNil);

	var _isObject = __webpack_require__(9);

	var _isObject2 = _interopRequireDefault(_isObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns true if argument is not nil object.
	 *
	 * @func
	 * @category Logic
	 *
	 * @example
	 *
	 *        R_.isNotNilObject({})		// true
	 *        R_.isNotNilObject([])		// true
	 *        R_.isNotNilObject(() => {})	// true
	 *        R_.isNotNilObject(null)		// false
	 *        R_.isNotNilObject()		// false
	 *        R_.isNotNilObject(1)		// false
	 *        R_.isNotNilObject("")		// false
	 *
	 * @sig a -> Boolean
	 *
	 */
	var isNotNilObject = (0, _ramda.allPass)([_notNil2.default, _isObject2.default]);

	exports.default = isNotNilObject;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _notNaN = __webpack_require__(33);

	var _notNaN2 = _interopRequireDefault(_notNaN);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns true if argument is finite numeric value.
	 *
	 * @func
	 * @category Logic
	 *
	 * @example
	 *
	 *        R_.isNumeric(-1)	// true
	 *    R_.isNumeric(0)		// true
	 *        R_.isNumeric(1)		// true
	 *        R_.isNumeric(1.1)	// true
	 *        R_.isNumeric(Infinity)	// false
	 *        R_.isNumeric(NaN)	// false
	 *        R_.isNumeric('')	// false
	 *        R_.isNumeric(() => {})	// false
	 *        R_.isNumeric(false)	// false
	 *        R_.isNumeric(null)	// false
	 *        R_.isNumeric(undefined)	// false
	 *        R_.isNumeric({})	// false
	 *        R_.isNumeric([])	// false
	 *
	 * @sig a -> Boolean
	 *
	 */
	var isNumeric = (0, _ramda.allPass)([(0, _ramda.o)(_notNaN2.default, parseFloat), isFinite]);

	exports.default = isNumeric;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if argument is type of String.
	 *
	 * @func
	 * @category Type
	 *
	 * @example
	 *
	 *        R_.isString({}) // false
	 *        R_.isString([]) // false
	 *        R_.isString('') // true
	 *
	 * @sig a -> Boolean
	 */
	var isString = (0, _ramda.is)(String);

	exports.default = isString;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Joins array of string with dash (hyphen) determiner.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.joinWithDash(['a', 'b', 'c']) // 'a-b-c'
	 *
	 * @sig [String] -> String
	 */
	var joinWithDash = (0, _ramda.join)('-');

	exports.default = joinWithDash;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Joins array of string with dot determiner.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.joinWithDot(['a', 'b', 'c']) // 'a.b.c'
	 *
	 * @sig [String] -> String
	 */
	var joinWithDot = (0, _ramda.join)('.');

	exports.default = joinWithDot;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Joins array of string with space determiner.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.joinWithSpace(['a', 'b', 'c']) // 'a b c'
	 *
	 * @sig [String] -> String
	 */
	var joinWithSpace = (0, _ramda.join)(' ');

	exports.default = joinWithSpace;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Takes first argument from the arguments
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        R_.lastArg('a', 'b', 'c') // c
	 *
	 *
	 */
	var lastArg = (0, _ramda.nthArg)(-1);

	exports.default = lastArg;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _internal = __webpack_require__(2);

	/**
	 * Converts list of strings to string.
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        R_.listToString(['h', 'e', 'l', 'l', 'o']) // 'hello'
	 *
	 * @sig [String] -> String
	 *
	 */
	var listToString = (0, _ramda.join)(_internal.emptyString);

	exports.default = listToString;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Always returns null.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        R_.mapKeysAndValues(([a, b]) => [b, a], { foo: "bar", baz: "boo" })
	 *        // { bar: "foo", boo: "baz" }
	 *
	 * @sig ([a] -> [b]) -> Object -> Object
	 */
	var mapKeysAndValues = (0, _ramda.useWith)((0, _ramda.compose)(_ramda.fromPairs, _ramda.map), [_ramda.identity, _ramda.toPairs]);

	exports.default = mapKeysAndValues;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/* eslint-disable max-len */
	/**
	 * Return negation of native isNaN function.
	 *
	 * @func
	 * @category Logic
	 *
	 * @example
	 *
	 *        R_.notNaN(0)            // true
	 *        R_.notNaN('')           // true
	 *        R_.notNaN([])           // true
	 *        R_.notNaN(null)         // true
	 *        R_.notNaN({})           // false
	 *        R_.notNaN(NaN)          // false
	 *        R_.notNaN(undefined)    // false
	 *
	 * @see http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
	 *
	 * @sig a -> Boolean
	 */
	var notNaN = (0, _ramda.o)(_ramda.not, isNaN);

	exports.default = notNaN;
	/* eslint-enable max-len */

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Takes a predicate, string `padString` and initial value. `padString` is contacted to the output string
	 * everytime `pred` returns falsy value.
	 *
	 * @param {fn} pred Called after every contactation of `padString`
	 * @param {string} padString String that is added everytime the `pred` returns falsy value
	 * @param {string} init Intitial value
	 *
	 * @return String
	 * @see R_.padLeft, R_.padRight, R_.padRightUntil
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.padLeftUntil((x) => x.length === 10, '0')('1') // '0000000001'
	 *
	 * @sig (a -> Boolean) -> a -> a
	 */
	var padLeftUntil = (0, _ramda.useWith)(_ramda.until, [_ramda.identity, _ramda.concat, _ramda.identity]);

	exports.default = padLeftUntil;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Takes a predicate, string `padString` and initial value. `padString` is append to the output string
	 * everytime `pred` returns falsy value.
	 *
	 * @param {fn} pred Called after every append of `padString`.
	 * @param {string} padString String that is added everytime the `pred` returns falsy value
	 * @param {string} init Intitial value
	 *
	 * @return String
	 * @see R_.padLeft, R_.padRight, R_.padLeftUntil
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.padRightUntil((x) => x.length === 10, '0')('1') // '1000000000'
	 *
	 * @sig (a -> Boolean) -> a -> a
	 */
	var padRightUntil = (0, _ramda.useWith)(_ramda.until, [_ramda.identity, (0, _ramda.flip)(_ramda.concat), _ramda.identity]);

	exports.default = padRightUntil;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Filters out every value in a list that equals to first argument.
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 * 		R_.rejectEq('foo', ['foo', 'bar', 'foo', 'bar']); // ['bar', 'bar']
	 *
	 * @sig a -> [b] -> [c]
	 *
	 */
	var rejectEq = (0, _ramda.useWith)(_ramda.reject, [_ramda.equals, _ramda.identity]);

	exports.default = rejectEq;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Creates list of length `n`. Every item in list equals to `input` parameter.
	 *
	 * @param {Number} n How many times replicate `input`
	 * @param {a} input Value for replication
	 *
	 * @return List List of length `n`. Every item in list equals to `input` parameter
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        R_.replicate(1, 6) // [6]
	 *        R_.replicate(2, 6) // [6, 6]
	 *        R_.replicate(3, 6) // [6, 6, 6]
	 *
	 * @sig Number -> a -> [a]
	 */
	var replicate = (0, _ramda.flip)(_ramda.repeat);

	exports.default = replicate;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _toPascalCase = __webpack_require__(40);

	var _toPascalCase2 = _interopRequireDefault(_toPascalCase);

	var _toLowerFirst = __webpack_require__(39);

	var _toLowerFirst2 = _interopRequireDefault(_toLowerFirst);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts string into camelCase.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.toCamelCase('hello-world')		// 'helloWorld'
	 *        R_.toCamelCase('hello- world')		// 'helloWorld'
	 *        R_.toCamelCase('  hello-/ world/ ')	// 'helloWorld'
	 *
	 * @sig String -> String
	 *
	 */
	var toCamelCase = (0, _ramda.o)(_toLowerFirst2.default, _toPascalCase2.default);

	exports.default = toCamelCase;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Decapitalize first letter.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.toLowerFirst('HELLO WORLD') // 'hELLO WORLD'
	 *
	 * @sig String -> String
	 */
	var toLowerFirst = (0, _ramda.o)((0, _ramda.join)(''), (0, _ramda.adjust)(_ramda.toLower, 0));

	exports.default = toLowerFirst;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _splitByNonAlphaNumeric = __webpack_require__(3);

	var _splitByNonAlphaNumeric2 = _interopRequireDefault(_splitByNonAlphaNumeric);

	var _toUpperFirst = __webpack_require__(41);

	var _toUpperFirst2 = _interopRequireDefault(_toUpperFirst);

	var _listToString = __webpack_require__(31);

	var _listToString2 = _interopRequireDefault(_listToString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts string into PascalCase.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.toPascalCase('hello-world')		// 'HelloWorld'
	 *        R_.toPascalCase('hello- world')		// 'HelloWorld'
	 *        R_.toPascalCase('  hello-/ world/ ')	// 'HelloWorld'
	 *
	 * @sig String -> String
	 */
	var toPascalCase = (0, _ramda.o)(_listToString2.default, (0, _ramda.o)((0, _ramda.map)(_toUpperFirst2.default), _splitByNonAlphaNumeric2.default));

	exports.default = toPascalCase;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Capitalize first letter.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.toUpperFirst('hello world') // 'Hello world'
	 *
	 * @sig String -> String
	 */
	var toUpperFirst = (0, _ramda.o)((0, _ramda.join)(''), (0, _ramda.adjust)(_ramda.toUpper, 0));

	exports.default = toUpperFirst;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Applies custom view function on the given lens
	 *
	 * @func
	 * @category Object
	 * @param {Lens} lens
	 * @param {*} v view function
	 * @param {*} x
	 * @return {*}
	 * @example
	 *
	 *      R_.viewWith(R.lensIndex(0), R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }]); //=> true
	 *        R_.viewWith(R.lensIndex(0), R.divide(R.__, 2), [4]) //=> 2
	 *
	 */
	var viewWith = (0, _ramda.useWith)((0, _ramda.flip)(_ramda.o), [_ramda.view, _ramda.identity, _ramda.identity]);

	exports.default = viewWith;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 44 */
/***/ (function(module, exports) {

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

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ramda = __webpack_require__(1);

	var _ramda2 = _interopRequireDefault(_ramda);

	var _ramdaExtension = __webpack_require__(64);

	var _action = __webpack_require__(43);

	var _helpers = __webpack_require__(45);

	var _counter = __webpack_require__(44);

	var _counter2 = _interopRequireDefault(_counter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var doesActionKeyEqual = _ramda2.default.useWith(_ramda2.default.pipe, [_ramdaExtension.dotPath, _ramda2.default.equals]);

	var createSandboxMatchAction = function createSandboxMatchAction(id, key) {
	    return _ramda2.default.anyPass([_action.isNotAction, _action.isInitAction, doesActionKeyEqual(key, id)]);
	};

	var createReducer = function createReducer(sandboxMatchAction, reducer) {
	    return function (state, action) {
	        return sandboxMatchAction(action) === true ? reducer(state, action) : state;
	    };
	};

	var createSandboxID = (0, _counter2.default)(0);

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
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var id = (0, _helpers.defaults)((0, _helpers.prop)('id', options), createSandboxID);
	    var key = (0, _helpers.defaults)((0, _helpers.prop)('key', options), _ramda2.default.always('sandbox'));
	    var sandboxParams = (0, _ramdaExtension.assocDotPath)(key, id, {});
	    var sandboxMatchAction = createSandboxMatchAction(id, key);

	    /**
	     * Bind sandbox params to given action.
	     *
	     *      bindToAction({type: 'TEST'}) //=> {type: 'TEST', sandbox: '1'}
	     */
	    var bindToAction = bindParamsToAction(sandboxParams);
	    var bindToActionCreator = function bindToActionCreator(actionCreator) {
	        return _ramda2.default.pipe(actionCreator, bindToAction);
	    };
	    var bindToActionCreators = _ramda2.default.map(_ramda2.default.ifElse(_ramda2.default.is(Function), bindToActionCreator, _ramda2.default.identity));

	    return {
	        id: id,
	        key: key,
	        bindToAction: bindToAction,
	        bindToActionCreator: bindToActionCreator,
	        bindToActionCreators: bindToActionCreators,
	        dispatcher: createDispatcher(sandboxParams),
	        reducer: createReducer(sandboxMatchAction, _ramda2.default.curryN(2, reducer))
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

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _internal = __webpack_require__(2);

	/**
	 * Always returns empty array.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        R_.alwaysEmptyArray() // []
	 *
	 * @sig a -> [a]
	 */
	var alwaysEmptyArray = (0, _ramda.always)(_internal.emptyArray);

	exports.default = alwaysEmptyArray;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _internal = __webpack_require__(2);

	/**
	 * Always returns empty object.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        R_.alwaysEmptyObject() // {}
	 *
	 * @sig a -> [a]
	 */
	var alwaysEmptyObject = (0, _ramda.always)(_internal.emptyObject);

	exports.default = alwaysEmptyObject;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _internal = __webpack_require__(2);

	/**
	 * Always returns empty string.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        R_.alwaysEmptyString() // ''
	 *
	 * @sig a -> String
	 */
	var alwaysEmptyString = (0, _ramda.always)(_internal.emptyString);

	exports.default = alwaysEmptyString;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _notNil = __webpack_require__(10);

	var _notNil2 = _interopRequireDefault(_notNil);

	var _alwaysNull = __webpack_require__(11);

	var _alwaysNull2 = _interopRequireDefault(_alwaysNull);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Call apply on function if the function is defined. Otherwise do nothing and return null.
	 *
	 * @func
	 * @category Function
	 *
	 * @param {Function} fn The function which will be called with `args` when defined
	 * @param {Array} args The arguments to call `fn` with
	 * @return {*} result The result, equivalent to `fn(...args)` or null
	 * @example
	 *
	 *        const nums = [1, 2, 3];
	 *        R_.applyIfNotNil(R.sum, nums) // 6
	 *        R_.applyIfNotNil(undefined, nums) // null
	 *
	 * @sig (*... -> a) -> [*] -> a
	 */
	var applyIfNotNil = (0, _ramda.ifElse)(_notNil2.default, _ramda.apply, _alwaysNull2.default);

	exports.default = applyIfNotNil;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _toCamelCase = __webpack_require__(38);

	var _toCamelCase2 = _interopRequireDefault(_toCamelCase);

	var _isNotNilObject = __webpack_require__(24);

	var _isNotNilObject2 = _interopRequireDefault(_isNotNilObject);

	var _isArray = __webpack_require__(23);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isFunction = __webpack_require__(12);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Must be written as arrow `x => camelizeKeys(x)` due to recursion
	// prettier-ignore
	var camelizeObj = (0, _ramda.compose)(_ramda.fromPairs, (0, _ramda.map)((0, _ramda.juxt)([(0, _ramda.o)(_toCamelCase2.default, _ramda.head), (0, _ramda.o)(function (x) {
	  return camelizeKeys(x);
	}, _ramda.last)])), _ramda.toPairs);
	var camelizeArray = (0, _ramda.map)(function (x) {
	  return camelizeKeys(x);
	});

	/**
	 * Transform recursevely all keys within object
	 *
	 * @func
	 * @category Object
	 *
	 * @param {any} x Object to transform
	 * @return {any}
	 * @example
	 *
	 *      camelizeKeys({
	 *          'co-obj': { co_string: 'foo' },
	 *          'co-array': [0, null, { 'f-f': 'ff' }],
	 *          'co-number': 1,
	 *          'co-string': '1',
	 *          'co-fn': head,
	 *      });
	 *
	 *      // {
	 *      //     coArray: [
	 *      //         0,
	 *      //         null,
	 *      //         {
	 *      //             fF: 'ff'
	 *      //         }
	 *      //     ],
	 *      //     coFn: {},
	 *      //     coNumber: 1,
	 *      //     coObj: {
	 *      //         coString: 'foo'
	 *      //     },
	 *      //     coString: '1'
	 *      // }
	 *
	 */
	// prettier-ignore
	var camelizeKeys = (0, _ramda.cond)([[_isArray2.default, camelizeArray], [_isFunction2.default, _ramda.identity], [_isNotNilObject2.default, camelizeObj], [_ramda.T, _ramda.identity]]);

	exports.default = camelizeKeys;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Creates curried compose. The rightmost function determines the arity of curry.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 * const appendAndRejectNil = R_.composeC(R.rejectNil, R.append);
	 * const appendCAndRejectNil = appendAndRejectNil('c');
	 * appendCAndRejectNil(['a', null]) // ['a', 'c'];
	 *
	 */
	var composeC = (0, _ramda.converge)(_ramda.curry, [_ramda.compose]);

	exports.default = composeC;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Resolves to true if all elements in first list are found within the second list
	 *
	 * @func
	 * @category List
	 *
	 *
	 * @param {Array} List
	 * @param {Array} List
	 * @return {Boolean} If all items from first array are in the second array.
	 *
	 * @example
	 *
	 *    R_.containsAll(['a', 'b'], ['a', 'b', 'c']) // true
	 *    R_.containsAll(['a', 'b', 'd'], ['a', 'b', 'c']) // false
	 *
	 * @sig [a] -> [a] -> Boolean
	 *
	 */
	var containsAll = (0, _ramda.curry)((0, _ramda.compose)(_ramda.isEmpty, _ramda.difference));

	exports.default = containsAll;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns `true` if any of the items from first array are in the second array.
	 *
	 * @func
	 * @category List
	 *
	 * @param {Array} List
	 * @param {Array} List
	 * @return {Boolean} If any of the items from first array are in the second array.
	 *
	 * @example
	 *
	 *    R_.containsAny(['a', 'e'], ['a', 'b', 'c']) // true
	 *    R_.containsAny(['e', 'f'], ['a', 'b', 'c']) // false
	 *
	 * @sig [a] -> [a] -> Boolean
	 *
	 */
	var containsAny = (0, _ramda.curry)((0, _ramda.compose)(_ramda.not, _ramda.isEmpty, _ramda.intersection));

	exports.default = containsAny;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns `true` if any of the items from first array is not the second array.
	 *
	 * @func
	 * @category List
	 *
	 * @param {Array} List
	 * @param {Array} List
	 * @return {Boolean} If any of the items from first array is not in the second array.
	 *
	 * @example
	 *
	 *    R_.containsNone(['e', 'f'], ['a', 'b', 'c']) // true
	 *    R_.containsNone(['a', 'f'], ['a', 'b', 'c']) // false
	 *
	 * @sig [a] -> [a] -> Boolean
	 */
	var containsNone = (0, _ramda.curry)((0, _ramda.compose)(_ramda.isEmpty, _ramda.intersection));

	exports.default = containsNone;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _flattenArgs = __webpack_require__(20);

	var _flattenArgs2 = _interopRequireDefault(_flattenArgs);

	var _joinWithSpace = __webpack_require__(29);

	var _joinWithSpace2 = _interopRequireDefault(_joinWithSpace);

	var _isObject = __webpack_require__(9);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _isString = __webpack_require__(26);

	var _isString2 = _interopRequireDefault(_isString);

	var _rejectEq = __webpack_require__(36);

	var _rejectEq2 = _interopRequireDefault(_rejectEq);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createSaveModifiers = (0, _ramda.ifElse)(_ramda.isEmpty, (0, _ramda.always)([_ramda.identity]));

	var getDefinitions = (0, _ramda.compose)(_ramda.uniq, _ramda.unnest, (0, _ramda.map)(_ramda.toPairs));
	var createRejects = (0, _ramda.map)((0, _ramda.o)(_rejectEq2.default, _ramda.head));
	var createAppends = (0, _ramda.map)((0, _ramda.o)(_ramda.append, _ramda.head));
	var getRejects = createSaveModifiers((0, _ramda.o)(createRejects, (0, _ramda.filter)((0, _ramda.o)(_ramda.not, _ramda.last))));
	var getAppends = createSaveModifiers((0, _ramda.o)(createAppends, (0, _ramda.filter)(_ramda.last)));

	var createModifiers = (0, _ramda.o)((0, _ramda.converge)(_ramda.concat, [getRejects, getAppends]), getDefinitions);
	var createAndApplyModifiers = (0, _ramda.uncurryN)(2, (0, _ramda.o)((0, _ramda.apply)(_ramda.compose), createModifiers));
	var handleArgs = (0, _ramda.converge)(createAndApplyModifiers, [(0, _ramda.filter)(_isObject2.default), (0, _ramda.filter)(_isString2.default)]);

	/**
	 * Conditionally joining classNames together.
	 *
	 * The cx function takes any number of arguments which can be a string, object
	 * even nested arrays of strings and objects.
	 *
	 * The argument 'foo' is short for { foo: true }.
	 *
	 * If the value associated with a given key is falsy, that key won't be included in the output.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.cx('Table', ['MagicTable'], {'Table--active': true })	// 'Table MagicTable Table--active'
	 *        R_.cx('Table', ['MagicTable'], {'Table--active': false })	// 'Table MagicTable'
	 *        R_.cx(['Table', ['MagicTable']])				// 'Table MagicTable'
	 *
	 * @sig String | [String] | Object -> String
	 */
	var cx = (0, _ramda.compose)(_joinWithSpace2.default, _ramda.uniq, handleArgs, _flattenArgs2.default);

	exports.default = cx;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _findNotNil = __webpack_require__(19);

	var _findNotNil2 = _interopRequireDefault(_findNotNil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns result of first not nil evaluated functions in the list.
	 * Undefined otherwise.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 *        R_.dispatch([R.always(null), R.identity, R.always(null)], 3) // 3
	 *        R_.dispatch([R.always(null), R.identity, R.always(null)], null) // undefined
	 *
	 * @sig [a] -> b|undefined
	 */
	var dispatch = (0, _ramda.useWith)((0, _ramda.compose)(_findNotNil2.default, _ramda.call), [_ramda.juxt, _ramda.identity]);

	exports.default = dispatch;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _splitByDot = __webpack_require__(7);

	var _splitByDot2 = _interopRequireDefault(_splitByDot);

	var _argumentsToList = __webpack_require__(4);

	var _argumentsToList2 = _interopRequireDefault(_argumentsToList);

	var _overHead = __webpack_require__(6);

	var _overHead2 = _interopRequireDefault(_overHead);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Makes a shallow clone of an object, omitting the property at the given dot path.
	 * Note that this copies and flattens
	 * prototype properties onto the new object as well. All non-primitive properties are copied by reference.
	 *
	 * @func
	 * @category Object
	 *
	 * @param {String} path The dot path to the value to omit
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object without the property at path
	 * @example
	 *
	 *      R_.dissocDotPath('a.b.c', {a: {b: {c: 42}}}); //=> {a: {b: {}}}
	 */
	var dissocDotPath = (0, _ramda.curryN)(2, (0, _ramda.compose)((0, _ramda.apply)(_ramda.dissocPath), (0, _overHead2.default)(_splitByDot2.default), _argumentsToList2.default));

	exports.default = dissocDotPath;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _constructRegExp = __webpack_require__(8);

	var _constructRegExp2 = _interopRequireDefault(_constructRegExp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getRegExp_ = (0, _ramda.useWith)((0, _ramda.flip)(_constructRegExp2.default)('gi'), [(0, _ramda.flip)(_ramda.concat)('$')]);

	/**
	 * Testing string if ends with some suffix.
	 *
	 * @func
	 * @category String
	 *
	 * @param  {string} suffix
	 * @param  {string} x
	 * @return {boolean}          True if `x` ends with `suffix`
	 *
	 * @example
	 *
	 *        R_.endsWithSuffix('o', 'hello')		// true
	 *        R_.endsWithSuffix('ello', 'hello')	// true
	 *        R_.endsWithSuffix('y', 'good bye')	// false
	 *
	 * @sig a -> b -> Boolean
	 */
	var endsWithSuffix = (0, _ramda.useWith)(_ramda.test, [getRegExp_, _ramda.identity]);

	exports.default = endsWithSuffix;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _lengthUtils = __webpack_require__(5);

	/**
	 * Returns true if length of array equals first argument
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        const lengthEqualsOne = R_.equalsLength(1)
	 *        lengthEqualsOne([{}])	// true
	 *        lengthEqualsOne([])	// false
	 *
	 * @sig Number -> [a] -> Boolean
	 */
	var equalsLength = (0, _lengthUtils.compareLength)(_ramda.equals);

	exports.default = equalsLength;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if argument equals 0.
	 *
	 * @func
	 * @category Math
	 *
	 * @example
	 *
	 *        R_.equalsZero(3)	// false
	 *        R_.equalsZero(0)	// true
	 *        R_.equalsZero(-3)	// false
	 *
	 * @sig Number -> Boolean
	 */
	var equalsZero = (0, _ramda.equals)(0);

	exports.default = equalsZero;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _lengthUtils = __webpack_require__(5);

	/**
	 * Returns true if length of array is smaller than first argument
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        const lengthSmallerThanTwo = R_.gtThanLength(2)
	 *        lengthSmallerThanTwo([{}])	// true
	 *        lengthSmallerThanTwo([{},{}])	// false
	 *
	 * @sig Number -> [a] -> Boolean
	 */
	var gtThanLength = (0, _lengthUtils.compareLength)(_ramda.gt);

	exports.default = gtThanLength;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _lengthUtils = __webpack_require__(5);

	/**
	 * Returns true if length of array is smaller or equals than first argument
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        const lengthSmallerThanEqualsOne = R_.gteThanLength(1)
	 *        lengthSmallerThanEqualsTwo([{},{}])	// false
	 *        lengthSmallerThanEqualsTwo([{}])	// true
	 *        lengthSmallerThanEqualsTwo([])		// true
	 *
	 * @sig Number -> [a] -> Boolean
	 */
	var gteThanLength = (0, _lengthUtils.compareLength)(_ramda.gte);

	exports.default = gteThanLength;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.padRight = exports.padRightUntil = exports.padLeft = exports.padLeftUntil = exports.composeC = exports.pipeC = exports.notInclude = exports.includes = exports.notEqual = exports.camelizeKeys = exports.isNotNilObject = exports.mapKeysWithValue = exports.lastArg = exports.headArg = exports.valueMirror = exports.keyMirror = exports.replicate = exports.duplicate = exports.pathNotEq = exports.propNotEq = exports.cx = exports.flattenArgs = exports.viewWith = exports.viewEq = exports.ltThanLength = exports.lteThanLength = exports.gtThanLength = exports.gteThanLength = exports.equalsLength = exports.applyIfNotNil = exports.mapKeys = exports.mergeWithDotPath = exports.assocDotPath = exports.dotPath = exports.overHead = exports.dissocDotPath = exports.joinWithDash = exports.joinWithUnderscore = exports.joinWithSpace = exports.joinWithDot = exports.splitByDot = exports.rejectEq = exports.rejectNil = exports.constructRegExp = exports.splitByNonAlphaNumeric = exports.listToString = exports.toScreamingSnakeCase = exports.toDotCase = exports.toKebabCase = exports.toSnakeCase = exports.toPascalCase = exports.toCamelCase = exports.toLowerFirst = exports.toUpperFirst = exports.unfoldObjectDots = exports.containsNone = exports.containsAny = exports.containsAll = exports.argumentsToList = exports.endsWithSuffix = exports.startsWithPrefix = exports.noop = exports.dispatch = exports.findNotNil = exports.isNilOrEmptyString = exports.equalsEmptyString = exports.equalsZero = exports.isPositive = exports.isNegative = exports.reduceSource = exports.reduceCallable = exports.notNumeric = exports.isNumeric = exports.notNaN = exports.trace = exports.log = exports.notEmpty = exports.notNil = exports.isPromise = exports.isObject = exports.isFunction = exports.isString = exports.isArray = exports.alwaysEmptyObject = exports.alwaysEmptyArray = exports.alwaysEmptyString = exports.alwaysNull = undefined;

	var _alwaysNull2 = __webpack_require__(11);

	var _alwaysNull3 = _interopRequireDefault(_alwaysNull2);

	var _alwaysEmptyString2 = __webpack_require__(49);

	var _alwaysEmptyString3 = _interopRequireDefault(_alwaysEmptyString2);

	var _alwaysEmptyArray2 = __webpack_require__(47);

	var _alwaysEmptyArray3 = _interopRequireDefault(_alwaysEmptyArray2);

	var _alwaysEmptyObject2 = __webpack_require__(48);

	var _alwaysEmptyObject3 = _interopRequireDefault(_alwaysEmptyObject2);

	var _isArray2 = __webpack_require__(23);

	var _isArray3 = _interopRequireDefault(_isArray2);

	var _isString2 = __webpack_require__(26);

	var _isString3 = _interopRequireDefault(_isString2);

	var _isFunction2 = __webpack_require__(12);

	var _isFunction3 = _interopRequireDefault(_isFunction2);

	var _isObject2 = __webpack_require__(9);

	var _isObject3 = _interopRequireDefault(_isObject2);

	var _isPromise2 = __webpack_require__(68);

	var _isPromise3 = _interopRequireDefault(_isPromise2);

	var _notNil2 = __webpack_require__(10);

	var _notNil3 = _interopRequireDefault(_notNil2);

	var _notEmpty2 = __webpack_require__(76);

	var _notEmpty3 = _interopRequireDefault(_notEmpty2);

	var _log2 = __webpack_require__(70);

	var _log3 = _interopRequireDefault(_log2);

	var _trace2 = __webpack_require__(93);

	var _trace3 = _interopRequireDefault(_trace2);

	var _notNaN2 = __webpack_require__(33);

	var _notNaN3 = _interopRequireDefault(_notNaN2);

	var _isNumeric2 = __webpack_require__(25);

	var _isNumeric3 = _interopRequireDefault(_isNumeric2);

	var _notNumeric2 = __webpack_require__(79);

	var _notNumeric3 = _interopRequireDefault(_notNumeric2);

	var _reduceCallable2 = __webpack_require__(85);

	var _reduceCallable3 = _interopRequireDefault(_reduceCallable2);

	var _reduceSource2 = __webpack_require__(86);

	var _reduceSource3 = _interopRequireDefault(_reduceSource2);

	var _isNegative2 = __webpack_require__(65);

	var _isNegative3 = _interopRequireDefault(_isNegative2);

	var _isPositive2 = __webpack_require__(67);

	var _isPositive3 = _interopRequireDefault(_isPositive2);

	var _equalsZero2 = __webpack_require__(61);

	var _equalsZero3 = _interopRequireDefault(_equalsZero2);

	var _equalsEmptyString2 = __webpack_require__(18);

	var _equalsEmptyString3 = _interopRequireDefault(_equalsEmptyString2);

	var _isNilOrEmptyString2 = __webpack_require__(66);

	var _isNilOrEmptyString3 = _interopRequireDefault(_isNilOrEmptyString2);

	var _findNotNil2 = __webpack_require__(19);

	var _findNotNil3 = _interopRequireDefault(_findNotNil2);

	var _dispatch2 = __webpack_require__(57);

	var _dispatch3 = _interopRequireDefault(_dispatch2);

	var _noop2 = __webpack_require__(75);

	var _noop3 = _interopRequireDefault(_noop2);

	var _startsWithPrefix2 = __webpack_require__(88);

	var _startsWithPrefix3 = _interopRequireDefault(_startsWithPrefix2);

	var _endsWithSuffix2 = __webpack_require__(59);

	var _endsWithSuffix3 = _interopRequireDefault(_endsWithSuffix2);

	var _argumentsToList2 = __webpack_require__(4);

	var _argumentsToList3 = _interopRequireDefault(_argumentsToList2);

	var _containsAll2 = __webpack_require__(53);

	var _containsAll3 = _interopRequireDefault(_containsAll2);

	var _containsAny2 = __webpack_require__(54);

	var _containsAny3 = _interopRequireDefault(_containsAny2);

	var _containsNone2 = __webpack_require__(55);

	var _containsNone3 = _interopRequireDefault(_containsNone2);

	var _unfoldObjectDots2 = __webpack_require__(94);

	var _unfoldObjectDots3 = _interopRequireDefault(_unfoldObjectDots2);

	var _toUpperFirst2 = __webpack_require__(41);

	var _toUpperFirst3 = _interopRequireDefault(_toUpperFirst2);

	var _toLowerFirst2 = __webpack_require__(39);

	var _toLowerFirst3 = _interopRequireDefault(_toLowerFirst2);

	var _toCamelCase2 = __webpack_require__(38);

	var _toCamelCase3 = _interopRequireDefault(_toCamelCase2);

	var _toPascalCase2 = __webpack_require__(40);

	var _toPascalCase3 = _interopRequireDefault(_toPascalCase2);

	var _toSnakeCase2 = __webpack_require__(92);

	var _toSnakeCase3 = _interopRequireDefault(_toSnakeCase2);

	var _toKebabCase2 = __webpack_require__(90);

	var _toKebabCase3 = _interopRequireDefault(_toKebabCase2);

	var _toDotCase2 = __webpack_require__(89);

	var _toDotCase3 = _interopRequireDefault(_toDotCase2);

	var _toScreamingSnakeCase2 = __webpack_require__(91);

	var _toScreamingSnakeCase3 = _interopRequireDefault(_toScreamingSnakeCase2);

	var _listToString2 = __webpack_require__(31);

	var _listToString3 = _interopRequireDefault(_listToString2);

	var _splitByNonAlphaNumeric2 = __webpack_require__(3);

	var _splitByNonAlphaNumeric3 = _interopRequireDefault(_splitByNonAlphaNumeric2);

	var _constructRegExp2 = __webpack_require__(8);

	var _constructRegExp3 = _interopRequireDefault(_constructRegExp2);

	var _rejectNil2 = __webpack_require__(87);

	var _rejectNil3 = _interopRequireDefault(_rejectNil2);

	var _rejectEq2 = __webpack_require__(36);

	var _rejectEq3 = _interopRequireDefault(_rejectEq2);

	var _splitByDot2 = __webpack_require__(7);

	var _splitByDot3 = _interopRequireDefault(_splitByDot2);

	var _joinWithDot2 = __webpack_require__(28);

	var _joinWithDot3 = _interopRequireDefault(_joinWithDot2);

	var _joinWithSpace2 = __webpack_require__(29);

	var _joinWithSpace3 = _interopRequireDefault(_joinWithSpace2);

	var _joinWithUnderscore2 = __webpack_require__(13);

	var _joinWithUnderscore3 = _interopRequireDefault(_joinWithUnderscore2);

	var _joinWithDash2 = __webpack_require__(27);

	var _joinWithDash3 = _interopRequireDefault(_joinWithDash2);

	var _dissocDotPath2 = __webpack_require__(58);

	var _dissocDotPath3 = _interopRequireDefault(_dissocDotPath2);

	var _overHead2 = __webpack_require__(6);

	var _overHead3 = _interopRequireDefault(_overHead2);

	var _dotPath2 = __webpack_require__(16);

	var _dotPath3 = _interopRequireDefault(_dotPath2);

	var _assocDotPath2 = __webpack_require__(15);

	var _assocDotPath3 = _interopRequireDefault(_assocDotPath2);

	var _mergeWithDotPath2 = __webpack_require__(74);

	var _mergeWithDotPath3 = _interopRequireDefault(_mergeWithDotPath2);

	var _mapKeys2 = __webpack_require__(72);

	var _mapKeys3 = _interopRequireDefault(_mapKeys2);

	var _applyIfNotNil2 = __webpack_require__(50);

	var _applyIfNotNil3 = _interopRequireDefault(_applyIfNotNil2);

	var _equalsLength2 = __webpack_require__(60);

	var _equalsLength3 = _interopRequireDefault(_equalsLength2);

	var _gteThanLength2 = __webpack_require__(63);

	var _gteThanLength3 = _interopRequireDefault(_gteThanLength2);

	var _gtThanLength2 = __webpack_require__(62);

	var _gtThanLength3 = _interopRequireDefault(_gtThanLength2);

	var _lteThanLength2 = __webpack_require__(14);

	var _lteThanLength3 = _interopRequireDefault(_lteThanLength2);

	var _ltThanLength2 = __webpack_require__(71);

	var _ltThanLength3 = _interopRequireDefault(_ltThanLength2);

	var _viewEq2 = __webpack_require__(96);

	var _viewEq3 = _interopRequireDefault(_viewEq2);

	var _viewWith2 = __webpack_require__(42);

	var _viewWith3 = _interopRequireDefault(_viewWith2);

	var _flattenArgs2 = __webpack_require__(20);

	var _flattenArgs3 = _interopRequireDefault(_flattenArgs2);

	var _cx2 = __webpack_require__(56);

	var _cx3 = _interopRequireDefault(_cx2);

	var _propNotEq2 = __webpack_require__(84);

	var _propNotEq3 = _interopRequireDefault(_propNotEq2);

	var _pathNotEq2 = __webpack_require__(82);

	var _pathNotEq3 = _interopRequireDefault(_pathNotEq2);

	var _duplicate2 = __webpack_require__(17);

	var _duplicate3 = _interopRequireDefault(_duplicate2);

	var _replicate2 = __webpack_require__(37);

	var _replicate3 = _interopRequireDefault(_replicate2);

	var _keyMirror2 = __webpack_require__(69);

	var _keyMirror3 = _interopRequireDefault(_keyMirror2);

	var _valueMirror2 = __webpack_require__(95);

	var _valueMirror3 = _interopRequireDefault(_valueMirror2);

	var _headArg2 = __webpack_require__(21);

	var _headArg3 = _interopRequireDefault(_headArg2);

	var _lastArg2 = __webpack_require__(30);

	var _lastArg3 = _interopRequireDefault(_lastArg2);

	var _mapKeysWithValue2 = __webpack_require__(73);

	var _mapKeysWithValue3 = _interopRequireDefault(_mapKeysWithValue2);

	var _isNotNilObject2 = __webpack_require__(24);

	var _isNotNilObject3 = _interopRequireDefault(_isNotNilObject2);

	var _camelizeKeys2 = __webpack_require__(51);

	var _camelizeKeys3 = _interopRequireDefault(_camelizeKeys2);

	var _notEqual2 = __webpack_require__(77);

	var _notEqual3 = _interopRequireDefault(_notEqual2);

	var _includes2 = __webpack_require__(22);

	var _includes3 = _interopRequireDefault(_includes2);

	var _notInclude2 = __webpack_require__(78);

	var _notInclude3 = _interopRequireDefault(_notInclude2);

	var _pipeC2 = __webpack_require__(83);

	var _pipeC3 = _interopRequireDefault(_pipeC2);

	var _composeC2 = __webpack_require__(52);

	var _composeC3 = _interopRequireDefault(_composeC2);

	var _padLeftUntil2 = __webpack_require__(34);

	var _padLeftUntil3 = _interopRequireDefault(_padLeftUntil2);

	var _padLeft2 = __webpack_require__(80);

	var _padLeft3 = _interopRequireDefault(_padLeft2);

	var _padRightUntil2 = __webpack_require__(35);

	var _padRightUntil3 = _interopRequireDefault(_padRightUntil2);

	var _padRight2 = __webpack_require__(81);

	var _padRight3 = _interopRequireDefault(_padRight2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.alwaysNull = _alwaysNull3.default;
	exports.alwaysEmptyString = _alwaysEmptyString3.default;
	exports.alwaysEmptyArray = _alwaysEmptyArray3.default;
	exports.alwaysEmptyObject = _alwaysEmptyObject3.default;
	exports.isArray = _isArray3.default;
	exports.isString = _isString3.default;
	exports.isFunction = _isFunction3.default;
	exports.isObject = _isObject3.default;
	exports.isPromise = _isPromise3.default;
	exports.notNil = _notNil3.default;
	exports.notEmpty = _notEmpty3.default;
	exports.log = _log3.default;
	exports.trace = _trace3.default;
	exports.notNaN = _notNaN3.default;
	exports.isNumeric = _isNumeric3.default;
	exports.notNumeric = _notNumeric3.default;
	exports.reduceCallable = _reduceCallable3.default;
	exports.reduceSource = _reduceSource3.default;
	exports.isNegative = _isNegative3.default;
	exports.isPositive = _isPositive3.default;
	exports.equalsZero = _equalsZero3.default;
	exports.equalsEmptyString = _equalsEmptyString3.default;
	exports.isNilOrEmptyString = _isNilOrEmptyString3.default;
	exports.findNotNil = _findNotNil3.default;
	exports.dispatch = _dispatch3.default;
	exports.noop = _noop3.default;
	exports.startsWithPrefix = _startsWithPrefix3.default;
	exports.endsWithSuffix = _endsWithSuffix3.default;
	exports.argumentsToList = _argumentsToList3.default;
	exports.containsAll = _containsAll3.default;
	exports.containsAny = _containsAny3.default;
	exports.containsNone = _containsNone3.default;
	exports.unfoldObjectDots = _unfoldObjectDots3.default;
	exports.toUpperFirst = _toUpperFirst3.default;
	exports.toLowerFirst = _toLowerFirst3.default;
	exports.toCamelCase = _toCamelCase3.default;
	exports.toPascalCase = _toPascalCase3.default;
	exports.toSnakeCase = _toSnakeCase3.default;
	exports.toKebabCase = _toKebabCase3.default;
	exports.toDotCase = _toDotCase3.default;
	exports.toScreamingSnakeCase = _toScreamingSnakeCase3.default;
	exports.listToString = _listToString3.default;
	exports.splitByNonAlphaNumeric = _splitByNonAlphaNumeric3.default;
	exports.constructRegExp = _constructRegExp3.default;
	exports.rejectNil = _rejectNil3.default;
	exports.rejectEq = _rejectEq3.default;
	exports.splitByDot = _splitByDot3.default;
	exports.joinWithDot = _joinWithDot3.default;
	exports.joinWithSpace = _joinWithSpace3.default;
	exports.joinWithUnderscore = _joinWithUnderscore3.default;
	exports.joinWithDash = _joinWithDash3.default;
	exports.dissocDotPath = _dissocDotPath3.default;
	exports.overHead = _overHead3.default;
	exports.dotPath = _dotPath3.default;
	exports.assocDotPath = _assocDotPath3.default;
	exports.mergeWithDotPath = _mergeWithDotPath3.default;
	exports.mapKeys = _mapKeys3.default;
	exports.applyIfNotNil = _applyIfNotNil3.default;
	exports.equalsLength = _equalsLength3.default;
	exports.gteThanLength = _gteThanLength3.default;
	exports.gtThanLength = _gtThanLength3.default;
	exports.lteThanLength = _lteThanLength3.default;
	exports.ltThanLength = _ltThanLength3.default;
	exports.viewEq = _viewEq3.default;
	exports.viewWith = _viewWith3.default;
	exports.flattenArgs = _flattenArgs3.default;
	exports.cx = _cx3.default;
	exports.propNotEq = _propNotEq3.default;
	exports.pathNotEq = _pathNotEq3.default;
	exports.duplicate = _duplicate3.default;
	exports.replicate = _replicate3.default;
	exports.keyMirror = _keyMirror3.default;
	exports.valueMirror = _valueMirror3.default;
	exports.headArg = _headArg3.default;
	exports.lastArg = _lastArg3.default;
	exports.mapKeysWithValue = _mapKeysWithValue3.default;
	exports.isNotNilObject = _isNotNilObject3.default;
	exports.camelizeKeys = _camelizeKeys3.default;
	exports.notEqual = _notEqual3.default;
	exports.includes = _includes3.default;
	exports.notInclude = _notInclude3.default;
	exports.pipeC = _pipeC3.default;
	exports.composeC = _composeC3.default;
	exports.padLeftUntil = _padLeftUntil3.default;
	exports.padLeft = _padLeft3.default;
	exports.padRightUntil = _padRightUntil3.default;
	exports.padRight = _padRight3.default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if argument is lower than 0.
	 *
	 * @func
	 * @category Math
	 *
	 * @example
	 *
	 *        R_.isNegative(3)	// false
	 *        R_.isNegative(0)	// false
	 *        R_.isNegative(-3)	// true
	 *
	 * @sig Number -> Boolean
	 */
	var isNegative = (0, _ramda.gt)(0);

	exports.default = isNegative;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _equalsEmptyString = __webpack_require__(18);

	var _equalsEmptyString2 = _interopRequireDefault(_equalsEmptyString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns true if argument is null, undefined or ''.
	 *
	 * @func
	 * @category Logic
	 *
	 * @example
	 *
	 *        R_.isNilOrEmptyString(null)	// true
	 *        R_.isNilOrEmptyString(undefined)// true
	 *        R_.isNilOrEmptyString('')	// true
	 *        R_.isNilOrEmptyString(false)	// false
	 *        R_.isNilOrEmptyString(0)	// false
	 *        R_.isNilOrEmptyString([])	// false
	 *        R_.isNilOrEmptyString({})	// false
	 *
	 * @sig a -> Boolean
	 */
	var isNilOrEmptyString = (0, _ramda.anyPass)([_ramda.isNil, _equalsEmptyString2.default]);

	exports.default = isNilOrEmptyString;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if argument is greater than 0.
	 *
	 * @func
	 * @category Math
	 *
	 * @example
	 *
	 *        R_.isPositive(3)	// true
	 *        R_.isPositive(0)	// false
	 *        R_.isPositive(-3)	// false
	 *
	 * @sig Number -> Boolean
	 */
	var isPositive = (0, _ramda.lt)(0);

	exports.default = isPositive;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _isFunction = __webpack_require__(12);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _isObject = __webpack_require__(9);

	var _isObject2 = _interopRequireDefault(_isObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns true if argument is Promise.
	 *
	 * @func
	 * @category Type
	 *
	 * @example
	 *
	 *        R_.isPromise(Promise.resolve()) // true
	 *    R_.isPromise(0) // false
	 *
	 * @sig a -> Boolean
	 *
	 */
	var isPromise = (0, _ramda.allPass)([_isObject2.default, (0, _ramda.o)(_isFunction2.default, (0, _ramda.prop)('then'))]);

	exports.default = isPromise;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Copies keys of object to appropriate values.
	 *
	 * @func
	 * @category Object
	 *
	 *
	 * @param {Object} Object where should be keys copied as values.
	 *
	 * @return {Object}
	 *
	 * @example
	 *
	 *    const actionTypes = R_.keyMirror({
	 *        ITEM_REQUEST: null,
	 *        ITEM_SUCCESS: null,
	 *        ITEM_ERROR: null,
	 *    });
	 *
	 *    const action = { type: actionTypes.ITEM_REQUEST };
	 *
	 *    action.type === actionTypes.ITEM_REQUEST // true
	 *
	 *
	 * @sig Object -> Object
	 *
	 */
	var keyMirror = (0, _ramda.mapObjIndexed)((0, _ramda.nthArg)(1));

	exports.default = keyMirror;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Function with side-effect. Logs input to console and returns that input. Should be used only in development.
	 *
	 * @func
	 * @category Debugging
	 *
	 * @example
	 *
	 *        R_.log('hello') // logs 'hello'
	 *        compose(R_.log, R.sum)([1, 3]) // logs 4
	 *
	 * @sig a -> a
	 *
	 */
	var log = (0, _ramda.tap)(function (x) {
	  return console.log(x);
	});

	exports.default = log;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _lengthUtils = __webpack_require__(5);

	/**
	 * Returns true if length of array is bigger than first argument
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        const lengthBiggerThanZero = R_.ltThanLength(0)
	 *        lengthBiggerThanZero([{}])	// true
	 *        lengthBiggerThanZero([])	// false
	 *
	 * @sig Number -> [a] -> Boolean
	 */
	var ltThanLength = (0, _lengthUtils.compareLength)(_ramda.lt);

	exports.default = ltThanLength;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _overHead = __webpack_require__(6);

	var _overHead2 = _interopRequireDefault(_overHead);

	var _mapKeysAndValues = __webpack_require__(32);

	var _mapKeysAndValues2 = _interopRequireDefault(_mapKeysAndValues);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Use map function over the keys of the given object
	 *
	 * @func
	 * @category Object
	 * @param {Function} fn The function to be called on every key of the input object.
	 * @param {Array} obj The object to be iterated over.
	 * @return {Array} The new object with mapped keys.
	 *
	 * @example
	 *
	 *      R_.mapKeys(R_.toUpperFirst, {x: 1, y: 2, z: 3}); //=> {X: 2, Y: 4, Z: 6}
	 *
	 */
	var mapKeys = (0, _ramda.useWith)(_mapKeysAndValues2.default, [_overHead2.default, _ramda.identity]);

	exports.default = mapKeys;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _mapKeysAndValues = __webpack_require__(32);

	var _mapKeysAndValues2 = _interopRequireDefault(_mapKeysAndValues);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var wrapMapping = (0, _ramda.compose)(_ramda.juxt, (0, _ramda.flip)(_ramda.prepend)([_ramda.last]), _ramda.apply);

	/**
	 * Map object keys. Mapping functions have both key and value as arguments.
	 *
	 * @func
	 * @category Object
	 *
	 * @example
	 *
	 *      R_.mapKeysWithValue((key, value) => value)({ foo: "bar" }) // { bar: "bar" }
	 *
	 * @sig ((String, a) -> b) -> Object -> Object
	 */

	var mapKeysWithValue = (0, _ramda.useWith)(_mapKeysAndValues2.default, [wrapMapping, _ramda.identity]);

	exports.default = mapKeysWithValue;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _dotPath = __webpack_require__(16);

	var _dotPath2 = _interopRequireDefault(_dotPath);

	var _assocDotPath = __webpack_require__(15);

	var _assocDotPath2 = _interopRequireDefault(_assocDotPath);

	var _headArg = __webpack_require__(21);

	var _headArg2 = _interopRequireDefault(_headArg);

	var _lastArg = __webpack_require__(30);

	var _lastArg2 = _interopRequireDefault(_lastArg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Merge data in object using custom merge fn.
	 *
	 * @func
	 * @category Object
	 *
	 * @param {String} path The dot path to the value
	 * @param {Function} mergeFn The merging function
	 * @param {*} value Value to merge
	 * @param {Object} obj The object to clone
	 * @return {Object} A new object with merge data
	 * @example
	 *
	 *      R_.mergeWithDotPath('a.b', R.merge, { d: 30 }, {a: {b: { c: 20 }}}); //=> {a: {b: { c: 20, d: 30 }}}
	 */
	var resolveDotPath = (0, _ramda.converge)(_dotPath2.default, [_headArg2.default, _lastArg2.default]);
	var performMerge = (0, _ramda.converge)(_ramda.call, [(0, _ramda.nthArg)(1), resolveDotPath, (0, _ramda.nthArg)(2)]);
	var mergeWithDotPath = (0, _ramda.converge)(_assocDotPath2.default, [_headArg2.default, performMerge, _lastArg2.default]);

	exports.default = mergeWithDotPath;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alwaysNull = __webpack_require__(11);

	var _alwaysNull2 = _interopRequireDefault(_alwaysNull);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Alias for `alwaysNull`
	 *
	 * @func
	 * @category Function
	 *
	 * @sig a -> Object
	 *
	 * @example
	 *
	 *        R_.noop() // null
	 *
	 */
	var noop = _alwaysNull2.default;

	exports.default = noop;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if the given value is not its type's empty value
	 *
	 * @func
	 * @category Logic
	 *
	 * @sig a -> Boolean
	 *
	 * @example
	 *
	 *        R_.notEmpty([1, 2, 3]);   // true
	 *    R_.notEmpty([]);          // false
	 *        R_.notEmpty('');          // false
	 *        R_.notEmpty(null);        // true
	 *        R_.notEmpty({});          // false
	 *        R_.notEmpty({length: 0}); // true
	 *
	 */
	var notEmpty = (0, _ramda.o)(_ramda.not, _ramda.isEmpty);

	exports.default = notEmpty;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if the arguments are not equal
	 *
	 * @func
	 * @category Logic
	 *
	 * @sig a -> b -> Boolean
	 *
	 * @example
	 *
	 *        R_.notEqual(1, 2);   // true
	 *        R_.notEqual(1, 1);   // false
	 *
	 *
	 */
	var notEqual = (0, _ramda.complement)(_ramda.equals);

	exports.default = notEqual;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _includes = __webpack_require__(22);

	var _includes2 = _interopRequireDefault(_includes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns `false` if any of the items from `list` includes `item`.
	 *
	 * @func
	 * @category List
	 *
	 * @param {Array} list
	 * @param {any} item
	 * @return {Boolean} Returns `false` if `list` includes `item`.
	 *
	 * @example
	 *
	 *    R_.notInclude(['e', 'f'], 'e') // false
	 *    R_.notInclude(['a', 'f'], 'a']) // true
	 *
	 * @sig [a] -> b -> Boolean
	 */
	var notInclude = (0, _ramda.complement)(_includes2.default);

	exports.default = notInclude;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _isNumeric = __webpack_require__(25);

	var _isNumeric2 = _interopRequireDefault(_isNumeric);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns true if argument is not finite numeric value.
	 *
	 * @func
	 * @category Logic
	 *
	 * @example
	 *
	 *        R_.notNumeric(-1)	// false
	 *        R_.notNumeric(0)	// false
	 *        R_.notNumeric(1)	// false
	 *        R_.notNumeric(1.1)	// false
	 *        R_.notNumeric(Infinity)	// true
	 *        R_.notNumeric(NaN)	// true
	 *        R_.notNumeric('')	// true
	 *        R_.notNumeric(() => {})	// true
	 *        R_.notNumeric(false)	// true
	 *        R_.notNumeric(null)	// true
	 *        R_.notNumeric(undefined)// true
	 *        R_.notNumeric({})	// true
	 *        R_.notNumeric([])	// true
	 *
	 * @sig a -> Boolean
	 *
	 */
	var notNumeric = (0, _ramda.o)(_ramda.not, _isNumeric2.default);

	exports.default = notNumeric;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _padLeftUntil = __webpack_require__(34);

	var _padLeftUntil2 = _interopRequireDefault(_padLeftUntil);

	var _lteThanLength = __webpack_require__(14);

	var _lteThanLength2 = _interopRequireDefault(_lteThanLength);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Length of the output string, `padString` and initial value.
	 * `padString` is repeatedly concated to `init` until the length of the string is equal to `lengthString`.
	 *
	 * @param {number} lengthString Length of the output string.
	 * @param {string} padString
	 * @param {string} init Intitial value
	 * @see R_.padRight, R_.padLeftUntil, R_.padRightUntil
	 *
	 * @return String
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.padLeft(10, '0')('1') // '00000000001'
	 *        R_.padLeft(-9, '0')('1') // '1'
	 *        R_.padLeft(1, '0')('1') // '1'
	 *
	 * @sig Number -> a -> a
	 */
	var padLeft = (0, _ramda.useWith)(_padLeftUntil2.default, [_lteThanLength2.default, _ramda.identity, _ramda.identity]);

	exports.default = padLeft;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _padRightUntil = __webpack_require__(35);

	var _padRightUntil2 = _interopRequireDefault(_padRightUntil);

	var _lteThanLength = __webpack_require__(14);

	var _lteThanLength2 = _interopRequireDefault(_lteThanLength);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Length of the output string, `padString` and initial value.
	 * `padString` is repeatedly appended to the `init` until the length of the string is equal to `lengthString`.
	 *
	 * @param {number} lengthString Length of the output string.
	 * @param {string} padString
	 * @param {string} init Intitial value
	 * @see R_.padLeft, R_.padRightUntil, R_.padRightUntil
	 *
	 * @return String
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.padRight(10, '0')('1') // '10000000000'
	 *        R_.padRight(-9, '0')('1') // '1'
	 *        R_.padRight(1, '0')('1') // '1'
	 *
	 * @sig Number -> a -> a
	 */
	var padRight = (0, _ramda.useWith)(_padRightUntil2.default, [_lteThanLength2.default, _ramda.identity, _ramda.identity]);

	exports.default = padRight;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if nested path of object literal does not contains given value.
	 *
	 * @func
	 * @category Relation
	 *
	 * @example
	 *
	 *        R_.pathNotEq(['a', 'b'], 1, { a: { b: 1 } })	// false
	 *        R_.pathNotEq(['a', 'b'], 1, { a: { b: 2 } })	// true
	 *        R_.pathNotEq(['a', 'b'], 1, {}) 		// true
	 *        R_.pathNotEq(['a', 'b'], 1, { a: {} }) 		// true
	 *
	 * @sig [String | Int] → a → {a} → Boolean
	 */
	var pathNotEq = (0, _ramda.complement)(_ramda.pathEq);

	exports.default = pathNotEq;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Creates curried pipe. The leftmost function determines the arity of curry.
	 *
	 * @func
	 * @category Function
	 *
	 * @example
	 *
	 * const appendAndRejectNil = R_.pipeC(R.append, R.rejectNil);
	 * const appendCAndRejectNil = appendAndRejectNil('c');
	 * appendCAndRejectNil(['a', null]) // ['a', 'c'];
	 *
	 */
	var pipeC = (0, _ramda.converge)(_ramda.curry, [_ramda.pipe]);

	exports.default = pipeC;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Returns true if property of object literal does not equals the given value.
	 *
	 * @func
	 * @category Relation
	 *
	 * @example
	 *
	 *        R_.propNotEq('a', 1, { a: 1 })	// false
	 *        R_.propNotEq('a', 1, { a: 2 })	// true
	 *        R_.propNotEq('a', 1, {})	// true
	 *
	 * @sig String → a → Object → Boolean
	 */
	var propNotEq = (0, _ramda.complement)(_ramda.propEq);

	exports.default = propNotEq;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Call function passed as first argument with arguments determined by second parameter in order.
	 *
	 * @func
	 * @category Function
	 *
	 * @sig (a → ... → b) → [a, ..., b] → c
	 *
	 * @example
	 *
	 *        const f = (a) => (b) => a + b
	 *    R_.reduceCallable(f, [1, 2]) // 3
	 *
	 */
	var reduceCallable = (0, _ramda.reduce)(_ramda.call);

	exports.default = reduceCallable;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Extends the reduce functionality by adding the original accumulator value
	 * as a third argument and the original list as a fourth argument to the
	 * iterator function.
	 *
	 * @func
	 * @category List
	 *
	 * @param {Function} fn The iterator function. Receives four arguments, the
	 *        accumulator, the current element, the source accumulator and the
	 *        source list.
	 * @param {*} acc The initial accumulator value and value passed as the source
	 *        accumulator value in the iterator function.
	 * @param {Array} list The list to iterator over and value passed as the source
	 *        list in the iterator function.
	 * @return {*} The reduced result.
	 *
	 * @example
	 *        R_.reduceSource((acc, v, sAcc) => v + acc + sAcc, 1, [1, 2, 3]); //=> 10
	 *        R_.reduceSource(R.pipe(R.unapply(R.flatten), R.sum), 0, [1, 2]); //=> 9
	 *
	 * @sig ((a, b, a, [b]) -> a) -> a -> [b] -> a
	 */
	var reduceSource = (0, _ramda.converge)(_ramda.reduce, [(0, _ramda.converge)(_ramda.partialRight, [(0, _ramda.nthArg)(0), // iteratorFn
	(0, _ramda.unapply)(_ramda.tail)] // [accumulator, list]
	), (0, _ramda.nthArg)(1), // accumulator
	(0, _ramda.nthArg)(2)] // list
	);

	exports.default = reduceSource;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Filters out every nil value in a list.
	 *
	 * @func
	 * @category List
	 *
	 * @example
	 *
	 *        R_.rejectNil([null, undefined, '']); // ['']
	 *
	 * @sig [a] -> [a]
	 *
	 */
	var rejectNil = (0, _ramda.reject)(_ramda.isNil);

	exports.default = rejectNil;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _constructRegExp = __webpack_require__(8);

	var _constructRegExp2 = _interopRequireDefault(_constructRegExp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getRegExp_ = (0, _ramda.useWith)((0, _ramda.flip)(_constructRegExp2.default)('gi'), [(0, _ramda.concat)('^')]);

	/**
	 * Testing string if starts with some prefix.
	 *
	 * @func
	 * @category String
	 *
	 * @param  {string} prefix
	 * @param  {string} x
	 * @return {boolean} True if `x` starts with `prefix`
	 *
	 * @example
	 *
	 *        R_.startsWithPrefix('h', 'hello')	// true
	 *        R_.startsWithPrefix('hell', 'hello')	// true
	 *        R_.startsWithPrefix('h', 'good bye')	// false
	 *
	 * @sig a -> b -> Boolean
	 */
	var startsWithPrefix = (0, _ramda.useWith)(_ramda.test, [getRegExp_, _ramda.identity]);

	exports.default = startsWithPrefix;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _splitByNonAlphaNumeric = __webpack_require__(3);

	var _splitByNonAlphaNumeric2 = _interopRequireDefault(_splitByNonAlphaNumeric);

	var _joinWithDot = __webpack_require__(28);

	var _joinWithDot2 = _interopRequireDefault(_joinWithDot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts string into dot.case.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.toDotCase('hello-world')		// 'hello.world'
	 *        R_.toDotCase('hello/*? world')		// 'hello.world'
	 *        R_.toDotCase('  hello -/ world/ ')	// 'hello.world'
	 *
	 * @sig String -> String
	 */
	var toDotCase = (0, _ramda.o)(_joinWithDot2.default, (0, _ramda.o)((0, _ramda.map)(_ramda.toLower), _splitByNonAlphaNumeric2.default));

	exports.default = toDotCase;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _splitByNonAlphaNumeric = __webpack_require__(3);

	var _splitByNonAlphaNumeric2 = _interopRequireDefault(_splitByNonAlphaNumeric);

	var _joinWithDash = __webpack_require__(27);

	var _joinWithDash2 = _interopRequireDefault(_joinWithDash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts string into kebab-case.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.toKebabCase('hello-world')		// 'hello-world'
	 *        R_.toKebabCase('hello- world')		// 'hello-world'
	 *        R_.toKebabCase('  hello-/ world/ ')	// 'hello-world'
	 *
	 * @sig String -> String
	 */
	var toKebabCase = (0, _ramda.o)(_joinWithDash2.default, (0, _ramda.o)((0, _ramda.map)(_ramda.toLower), _splitByNonAlphaNumeric2.default));

	exports.default = toKebabCase;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _splitByNonAlphaNumeric = __webpack_require__(3);

	var _splitByNonAlphaNumeric2 = _interopRequireDefault(_splitByNonAlphaNumeric);

	var _joinWithUnderscore = __webpack_require__(13);

	var _joinWithUnderscore2 = _interopRequireDefault(_joinWithUnderscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts string into SCREAMINT_SNAKE_CASE.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.toScreamingSnakeCase('hello-world')		// 'HELLO_WORLD'
	 *        R_.toScreamingSnakeCase('hello- world')		// 'HELLO_WORLD'
	 *        R_.toScreamingSnakeCase('  hello-/ world/ ')	// 'HELLO_WORLD'
	 *
	 * @sig String -> String
	 */
	var toScreamingSnakeCase = (0, _ramda.o)(_joinWithUnderscore2.default, (0, _ramda.o)((0, _ramda.map)(_ramda.toUpper), _splitByNonAlphaNumeric2.default));

	exports.default = toScreamingSnakeCase;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _splitByNonAlphaNumeric = __webpack_require__(3);

	var _splitByNonAlphaNumeric2 = _interopRequireDefault(_splitByNonAlphaNumeric);

	var _joinWithUnderscore = __webpack_require__(13);

	var _joinWithUnderscore2 = _interopRequireDefault(_joinWithUnderscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Converts string into snake_case.
	 *
	 * @func
	 * @category String
	 *
	 * @example
	 *
	 *        R_.toSnakeCase('hello-world')		// 'hello_world'
	 *        R_.toSnakeCase('hello- world')		// 'hello_world'
	 *        R_.toSnakeCase('  hello-/ world/ ')	// 'hello_world'
	 *
	 * @sig String -> String
	 */
	var toSnakeCase = (0, _ramda.o)(_joinWithUnderscore2.default, (0, _ramda.o)((0, _ramda.map)(_ramda.toLower), _splitByNonAlphaNumeric2.default));

	exports.default = toSnakeCase;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	/**
	 * Function with side-effect. Logs input to console and returns that input.
	 * Similar to "log" but allows to label logged value. Should be used only in development.
	 *
	 * @func
	 * @category Debugging
	 *
	 * @sig a -> b -> b
	 *
	 * @example
	 *
	 *        compose(calculation2, R_.trace('Page A'), calculation1); // logs "Page A" and result of calculation1
	 *
	 */
	var trace = (0, _ramda.useWith)(_ramda.tap, [(0, _ramda.curryN)(2, console.log), _ramda.identity]);

	exports.default = trace;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ramda = __webpack_require__(1);

	var _splitByDot = __webpack_require__(7);

	var _splitByDot2 = _interopRequireDefault(_splitByDot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Unfolds input object by dot delimetered path inside its keys.
	 *
	 * @func
	 * @category Object
	 *
	 * @example
	 *
	 *        R_.unfoldObjectDots({'a.b.c': 1, 'd.e.f': 2, 'g': 3})
	 *        // {a: {b: {c: 1}}, d: {e: {f: 2}}, g: 3}
	 *
	 * @sig Object -> Object
	 */
	var unfoldObjectDots = (0, _ramda.o)((0, _ramda.o)(_ramda.mergeAll, _ramda.values), (0, _ramda.mapObjIndexed)((0, _ramda.useWith)((0, _ramda.flip)(_ramda.call), [_ramda.identity, (0, _ramda.compose)((0, _ramda.apply)(_ramda.compose), (0, _ramda.map)(_ramda.objOf), _splitByDot2.default)])));

	exports.default = unfoldObjectDots;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _duplicate = __webpack_require__(17);

	var _duplicate2 = _interopRequireDefault(_duplicate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates object mirror from list of keys.
	 *
	 * @func
	 * @category Object
	 *
	 *
	 * @param {Array} keyList List of values representing the keys and values of resulting object.
	 *
	 * @return {Object} Object, where keys and appropriate values equals to value in `keyList`.
	 *
	 * @example
	 *
	 *    const actionTypes = R_.valueMirror([
	 *        'ITEM_REQUEST',
	 *        'ITEM_SUCCESS',
	 *        'ITEM_ERROR',
	 *    ]);
	 *
	 *        const action = { type: actionTypes.ITEM_REQUEST };
	 *
	 *        action.type === actionTypes.ITEM_REQUEST // true
	 *        actionTypes.ITEM_SUCCESS // "ITEM_SUCCESS"
	 *
	 * @sig [String] -> Object
	 *
	 */
	var valueMirror = (0, _ramda.o)(_ramda.fromPairs, (0, _ramda.map)(_duplicate2.default));

	exports.default = valueMirror;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ramda = __webpack_require__(1);

	var _viewWith = __webpack_require__(42);

	var _viewWith2 = _interopRequireDefault(_viewWith);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Returns true if the given lens equals to given value
	 *
	 * @func
	 * @category Object
	 * @param {Lens} lens
	 * @param {*} v value to equal
	 * @param {*} x
	 * @return {*}
	 * @example
	 *
	 *      R_.viewEq(R.lensIndex(0), 'foo', ['foo', 'bar', 'baz']); //=> true
	 */
	var viewEq = (0, _ramda.useWith)(_viewWith2.default, [_ramda.identity, _ramda.equals, _ramda.identity]);

	exports.default = viewEq;

/***/ })
/******/ ])
});
;