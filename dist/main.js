/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/card-validator/index.js":
/*!**********************************************!*\
  !*** ./node_modules/card-validator/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  number: __webpack_require__(/*! ./src/card-number */ \"./node_modules/card-validator/src/card-number.js\"),\n  expirationDate: __webpack_require__(/*! ./src/expiration-date */ \"./node_modules/card-validator/src/expiration-date.js\"),\n  expirationMonth: __webpack_require__(/*! ./src/expiration-month */ \"./node_modules/card-validator/src/expiration-month.js\"),\n  expirationYear: __webpack_require__(/*! ./src/expiration-year */ \"./node_modules/card-validator/src/expiration-year.js\"),\n  cvv: __webpack_require__(/*! ./src/cvv */ \"./node_modules/card-validator/src/cvv.js\"),\n  postalCode: __webpack_require__(/*! ./src/postal-code */ \"./node_modules/card-validator/src/postal-code.js\"),\n  creditCardType: __webpack_require__(/*! credit-card-type */ \"./node_modules/credit-card-type/index.js\")\n};\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/index.js?");

/***/ }),

/***/ "./node_modules/card-validator/src/card-number.js":
/*!********************************************************!*\
  !*** ./node_modules/card-validator/src/card-number.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar luhn10 = __webpack_require__(/*! ./luhn-10 */ \"./node_modules/card-validator/src/luhn-10.js\");\nvar getCardTypes = __webpack_require__(/*! credit-card-type */ \"./node_modules/credit-card-type/index.js\");\n\nfunction verification(card, isPotentiallyValid, isValid) {\n  return {card: card, isPotentiallyValid: isPotentiallyValid, isValid: isValid};\n}\n\nfunction cardNumber(value, options) {\n  var potentialTypes, cardType, isPotentiallyValid, isValid, i, maxLength;\n\n  options = options || {};\n\n  if (typeof value === 'number') {\n    value = String(value);\n  }\n\n  if (typeof value !== 'string') { return verification(null, false, false); }\n\n  value = value.replace(/\\-|\\s/g, '');\n\n  if (!/^\\d*$/.test(value)) { return verification(null, false, false); }\n\n  potentialTypes = getCardTypes(value);\n\n  if (potentialTypes.length === 0) {\n    return verification(null, false, false);\n  } else if (potentialTypes.length !== 1) {\n    return verification(null, true, false);\n  }\n\n  cardType = potentialTypes[0];\n\n  if (options.maxLength && value.length > options.maxLength) {\n    return verification(cardType, false, false);\n  }\n\n  if (cardType.type === getCardTypes.types.UNIONPAY && options.luhnValidateUnionPay !== true) {\n    isValid = true;\n  } else {\n    isValid = luhn10(value);\n  }\n\n  maxLength = Math.max.apply(null, cardType.lengths);\n  if (options.maxLength) {\n    maxLength = Math.min(options.maxLength, maxLength);\n  }\n\n  for (i = 0; i < cardType.lengths.length; i++) {\n    if (cardType.lengths[i] === value.length) {\n      isPotentiallyValid = value.length < maxLength || isValid;\n      return verification(cardType, isPotentiallyValid, isValid);\n    }\n  }\n\n  return verification(cardType, value.length < maxLength, false);\n}\n\nmodule.exports = cardNumber;\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/src/card-number.js?");

/***/ }),

/***/ "./node_modules/card-validator/src/cvv.js":
/*!************************************************!*\
  !*** ./node_modules/card-validator/src/cvv.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar DEFAULT_LENGTH = 3;\n\nfunction includes(array, thing) {\n  var i = 0;\n\n  for (; i < array.length; i++) {\n    if (thing === array[i]) { return true; }\n  }\n\n  return false;\n}\n\nfunction max(array) {\n  var maximum = DEFAULT_LENGTH;\n  var i = 0;\n\n  for (; i < array.length; i++) {\n    maximum = array[i] > maximum ? array[i] : maximum;\n  }\n\n  return maximum;\n}\n\nfunction verification(isValid, isPotentiallyValid) {\n  return {isValid: isValid, isPotentiallyValid: isPotentiallyValid};\n}\n\nfunction cvv(value, maxLength) {\n  maxLength = maxLength || DEFAULT_LENGTH;\n  maxLength = maxLength instanceof Array ? maxLength : [maxLength];\n\n  if (typeof value !== 'string') { return verification(false, false); }\n  if (!/^\\d*$/.test(value)) { return verification(false, false); }\n  if (includes(maxLength, value.length)) { return verification(true, true); }\n  if (value.length < Math.min.apply(null, maxLength)) { return verification(false, true); }\n  if (value.length > max(maxLength)) { return verification(false, false); }\n\n  return verification(true, true);\n}\n\nmodule.exports = cvv;\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/src/cvv.js?");

/***/ }),

/***/ "./node_modules/card-validator/src/expiration-date.js":
/*!************************************************************!*\
  !*** ./node_modules/card-validator/src/expiration-date.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar parseDate = __webpack_require__(/*! ./parse-date */ \"./node_modules/card-validator/src/parse-date.js\");\nvar expirationMonth = __webpack_require__(/*! ./expiration-month */ \"./node_modules/card-validator/src/expiration-month.js\");\nvar expirationYear = __webpack_require__(/*! ./expiration-year */ \"./node_modules/card-validator/src/expiration-year.js\");\n\nfunction verification(isValid, isPotentiallyValid, month, year) {\n  return {\n    isValid: isValid,\n    isPotentiallyValid: isPotentiallyValid,\n    month: month,\n    year: year\n  };\n}\n\nfunction expirationDate(value, maxElapsedYear) {\n  var date, monthValid, yearValid, isValidForThisYear;\n\n  if (typeof value === 'string') {\n    value = value.replace(/^(\\d\\d) (\\d\\d(\\d\\d)?)$/, '$1/$2');\n    date = parseDate(value);\n  } else if (value !== null && typeof value === 'object') {\n    date = {\n      month: String(value.month),\n      year: String(value.year)\n    };\n  } else {\n    return verification(false, false, null, null);\n  }\n\n  monthValid = expirationMonth(date.month);\n  yearValid = expirationYear(date.year, maxElapsedYear);\n\n  if (monthValid.isValid) {\n    if (yearValid.isCurrentYear) {\n      isValidForThisYear = monthValid.isValidForThisYear;\n      return verification(isValidForThisYear, isValidForThisYear, date.month, date.year);\n    }\n\n    if (yearValid.isValid) {\n      return verification(true, true, date.month, date.year);\n    }\n  }\n\n  if (monthValid.isPotentiallyValid && yearValid.isPotentiallyValid) {\n    return verification(false, true, null, null);\n  }\n\n  return verification(false, false, null, null);\n}\n\nmodule.exports = expirationDate;\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/src/expiration-date.js?");

/***/ }),

/***/ "./node_modules/card-validator/src/expiration-month.js":
/*!*************************************************************!*\
  !*** ./node_modules/card-validator/src/expiration-month.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction verification(isValid, isPotentiallyValid, isValidForThisYear) {\n  return {\n    isValid: isValid,\n    isPotentiallyValid: isPotentiallyValid,\n    isValidForThisYear: isValidForThisYear || false\n  };\n}\n\nfunction expirationMonth(value) {\n  var month, result;\n  var currentMonth = new Date().getMonth() + 1;\n\n  if (typeof value !== 'string') {\n    return verification(false, false);\n  }\n  if (value.replace(/\\s/g, '') === '' || value === '0') {\n    return verification(false, true);\n  }\n  if (!/^\\d*$/.test(value)) {\n    return verification(false, false);\n  }\n\n  month = parseInt(value, 10);\n\n  if (isNaN(value)) {\n    return verification(false, false);\n  }\n\n  result = month > 0 && month < 13;\n\n  return verification(result, result, result && month >= currentMonth);\n}\n\nmodule.exports = expirationMonth;\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/src/expiration-month.js?");

/***/ }),

/***/ "./node_modules/card-validator/src/expiration-year.js":
/*!************************************************************!*\
  !*** ./node_modules/card-validator/src/expiration-year.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar DEFAULT_VALID_NUMBER_OF_YEARS_IN_THE_FUTURE = 19;\n\nfunction verification(isValid, isPotentiallyValid, isCurrentYear) {\n  return {\n    isValid: isValid,\n    isPotentiallyValid: isPotentiallyValid,\n    isCurrentYear: isCurrentYear || false\n  };\n}\n\nfunction expirationYear(value, maxElapsedYear) {\n  var currentFirstTwo, currentYear, firstTwo, len, twoDigitYear, valid, isCurrentYear;\n\n  maxElapsedYear = maxElapsedYear || DEFAULT_VALID_NUMBER_OF_YEARS_IN_THE_FUTURE;\n\n  if (typeof value !== 'string') {\n    return verification(false, false);\n  }\n  if (value.replace(/\\s/g, '') === '') {\n    return verification(false, true);\n  }\n  if (!/^\\d*$/.test(value)) {\n    return verification(false, false);\n  }\n\n  len = value.length;\n\n  if (len < 2) {\n    return verification(false, true);\n  }\n\n  currentYear = new Date().getFullYear();\n\n  if (len === 3) {\n    // 20x === 20x\n    firstTwo = value.slice(0, 2);\n    currentFirstTwo = String(currentYear).slice(0, 2);\n    return verification(false, firstTwo === currentFirstTwo);\n  }\n\n  if (len > 4) {\n    return verification(false, false);\n  }\n\n  value = parseInt(value, 10);\n  twoDigitYear = Number(String(currentYear).substr(2, 2));\n\n  if (len === 2) {\n    isCurrentYear = twoDigitYear === value;\n    valid = value >= twoDigitYear && value <= twoDigitYear + maxElapsedYear;\n  } else if (len === 4) {\n    isCurrentYear = currentYear === value;\n    valid = value >= currentYear && value <= currentYear + maxElapsedYear;\n  }\n\n  return verification(valid, valid, isCurrentYear);\n}\n\nmodule.exports = expirationYear;\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/src/expiration-year.js?");

/***/ }),

/***/ "./node_modules/card-validator/src/lib/is-array.js":
/*!*********************************************************!*\
  !*** ./node_modules/card-validator/src/lib/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Polyfill taken from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill>.\n\nmodule.exports = Array.isArray || function (arg) {\n  return Object.prototype.toString.call(arg) === '[object Array]';\n};\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/src/lib/is-array.js?");

/***/ }),

/***/ "./node_modules/card-validator/src/luhn-10.js":
/*!****************************************************!*\
  !*** ./node_modules/card-validator/src/luhn-10.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n * Luhn algorithm implementation in JavaScript\n * Copyright (c) 2009 Nicholas C. Zakas\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\nfunction luhn10(identifier) {\n  var sum = 0;\n  var alt = false;\n  var i = identifier.length - 1;\n  var num;\n\n  while (i >= 0) {\n    num = parseInt(identifier.charAt(i), 10);\n\n    if (alt) {\n      num *= 2;\n      if (num > 9) {\n        num = (num % 10) + 1; // eslint-disable-line no-extra-parens\n      }\n    }\n\n    alt = !alt;\n\n    sum += num;\n\n    i--;\n  }\n\n  return sum % 10 === 0;\n}\n\nmodule.exports = luhn10;\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/src/luhn-10.js?");

/***/ }),

/***/ "./node_modules/card-validator/src/parse-date.js":
/*!*******************************************************!*\
  !*** ./node_modules/card-validator/src/parse-date.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar expirationYear = __webpack_require__(/*! ./expiration-year */ \"./node_modules/card-validator/src/expiration-year.js\");\nvar isArray = __webpack_require__(/*! ./lib/is-array */ \"./node_modules/card-validator/src/lib/is-array.js\");\n\nfunction parseDate(value) {\n  var month, len, year, yearValid;\n\n  if (/\\//.test(value)) {\n    value = value.split(/\\s*\\/\\s*/g);\n  } else if (/\\s/.test(value)) {\n    value = value.split(/ +/g);\n  }\n\n  if (isArray(value)) {\n    return {\n      month: value[0],\n      year: value.slice(1).join()\n    };\n  }\n\n  len = value[0] === '0' || value.length > 5 ? 2 : 1;\n\n  if (value[0] === '1') {\n    year = value.substr(1);\n    yearValid = expirationYear(year);\n    if (!yearValid.isPotentiallyValid) {\n      len = 2;\n    }\n  }\n\n  month = value.substr(0, len);\n\n  return {\n    month: month,\n    year: value.substr(month.length)\n  };\n}\n\nmodule.exports = parseDate;\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/src/parse-date.js?");

/***/ }),

/***/ "./node_modules/card-validator/src/postal-code.js":
/*!********************************************************!*\
  !*** ./node_modules/card-validator/src/postal-code.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar DEFAULT_MIN_POSTAL_CODE_LENGTH = 3;\n\nfunction verification(isValid, isPotentiallyValid) {\n  return {isValid: isValid, isPotentiallyValid: isPotentiallyValid};\n}\n\nfunction postalCode(value, options) {\n  var minLength;\n\n  options = options || {};\n\n  minLength = options.minLength || DEFAULT_MIN_POSTAL_CODE_LENGTH;\n\n  if (typeof value !== 'string') {\n    return verification(false, false);\n  } else if (value.length < minLength) {\n    return verification(false, true);\n  }\n\n  return verification(true, true);\n}\n\nmodule.exports = postalCode;\n\n\n//# sourceURL=webpack:///./node_modules/card-validator/src/postal-code.js?");

/***/ }),

/***/ "./node_modules/credit-card-type/index.js":
/*!************************************************!*\
  !*** ./node_modules/credit-card-type/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar testOrder;\nvar types = {};\nvar customCards = {};\nvar VISA = 'visa';\nvar MASTERCARD = 'mastercard';\nvar AMERICAN_EXPRESS = 'american-express';\nvar DINERS_CLUB = 'diners-club';\nvar DISCOVER = 'discover';\nvar ELO = 'elo';\nvar JCB = 'jcb';\nvar UNIONPAY = 'unionpay';\nvar MAESTRO = 'maestro';\nvar MIR = 'mir';\nvar CVV = 'CVV';\nvar CID = 'CID';\nvar CVC = 'CVC';\nvar CVN = 'CVN';\nvar CVP2 = 'CVP2';\nvar CVE = 'CVE';\nvar ORIGINAL_TEST_ORDER = [\n  VISA,\n  MASTERCARD,\n  AMERICAN_EXPRESS,\n  DINERS_CLUB,\n  DISCOVER,\n  JCB,\n  UNIONPAY,\n  MAESTRO,\n  ELO,\n  MIR\n];\n\nfunction clone(originalObject) {\n  var dupe;\n\n  if (!originalObject) { return null; }\n\n  dupe = JSON.parse(JSON.stringify(originalObject));\n\n  return dupe;\n}\n\ntestOrder = clone(ORIGINAL_TEST_ORDER);\n\ntypes[VISA] = {\n  niceType: 'Visa',\n  type: VISA,\n  patterns: [\n    4\n  ],\n  gaps: [4, 8, 12],\n  lengths: [16, 18, 19],\n  code: {\n    name: CVV,\n    size: 3\n  }\n};\n\ntypes[MASTERCARD] = {\n  niceType: 'Mastercard',\n  type: MASTERCARD,\n  patterns: [\n    [51, 55],\n    [2221, 2229],\n    [223, 229],\n    [23, 26],\n    [270, 271],\n    2720\n  ],\n  gaps: [4, 8, 12],\n  lengths: [16],\n  code: {\n    name: CVC,\n    size: 3\n  }\n};\n\ntypes[AMERICAN_EXPRESS] = {\n  niceType: 'American Express',\n  type: AMERICAN_EXPRESS,\n  patterns: [\n    34,\n    37\n  ],\n  gaps: [4, 10],\n  lengths: [15],\n  code: {\n    name: CID,\n    size: 4\n  }\n};\n\ntypes[DINERS_CLUB] = {\n  niceType: 'Diners Club',\n  type: DINERS_CLUB,\n  patterns: [\n    [300, 305],\n    36,\n    38,\n    39\n  ],\n  gaps: [4, 10],\n  lengths: [14, 16, 19],\n  code: {\n    name: CVV,\n    size: 3\n  }\n};\n\ntypes[DISCOVER] = {\n  niceType: 'Discover',\n  type: DISCOVER,\n  patterns: [\n    6011,\n    [644, 649],\n    65\n  ],\n  gaps: [4, 8, 12],\n  lengths: [16, 19],\n  code: {\n    name: CID,\n    size: 3\n  }\n};\n\ntypes[JCB] = {\n  niceType: 'JCB',\n  type: JCB,\n  patterns: [\n    2131,\n    1800,\n    [3528, 3589]\n  ],\n  gaps: [4, 8, 12],\n  lengths: [16, 17, 18, 19],\n  code: {\n    name: CVV,\n    size: 3\n  }\n};\n\ntypes[UNIONPAY] = {\n  niceType: 'UnionPay',\n  type: UNIONPAY,\n  patterns: [\n    620,\n    [624, 626],\n    [62100, 62182],\n    [62184, 62187],\n    [62185, 62197],\n    [62200, 62205],\n    [622010, 622999],\n    622018,\n    [622019, 622999],\n    [62207, 62209],\n    [622126, 622925],\n    [623, 626],\n    6270,\n    6272,\n    6276,\n    [627700, 627779],\n    [627781, 627799],\n    [6282, 6289],\n    6291,\n    6292\n  ],\n  gaps: [4, 8, 12],\n  lengths: [16, 17, 18, 19],\n  code: {\n    name: CVN,\n    size: 3\n  }\n};\n\ntypes[MAESTRO] = {\n  niceType: 'Maestro',\n  type: MAESTRO,\n  patterns: [\n    493698,\n    [500000, 506698],\n    [506779, 508999],\n    [56, 59],\n    63,\n    67,\n    6\n  ],\n  gaps: [4, 8, 12],\n  lengths: [12, 13, 14, 15, 16, 17, 18, 19],\n  code: {\n    name: CVC,\n    size: 3\n  }\n};\n\ntypes[ELO] = {\n  niceType: 'Elo',\n  type: ELO,\n  patterns: [\n    401178,\n    401179,\n    438935,\n    457631,\n    457632,\n    431274,\n    451416,\n    457393,\n    504175,\n    [506699, 506778],\n    [509000, 509999],\n    627780,\n    636297,\n    636368,\n    [650031, 650033],\n    [650035, 650051],\n    [650405, 650439],\n    [650485, 650538],\n    [650541, 650598],\n    [650700, 650718],\n    [650720, 650727],\n    [650901, 650978],\n    [651652, 651679],\n    [655000, 655019],\n    [655021, 655058]\n  ],\n  gaps: [4, 8, 12],\n  lengths: [16],\n  code: {\n    name: CVE,\n    size: 3\n  }\n};\n\ntypes[MIR] = {\n  niceType: 'Mir',\n  type: MIR,\n  patterns: [\n    [2200, 2204]\n  ],\n  gaps: [4, 8, 12],\n  lengths: [16, 17, 18, 19],\n  code: {\n    name: CVP2,\n    size: 3\n  }\n};\n\nfunction findType(type) {\n  return customCards[type] || types[type];\n}\n\nfunction isValidInputType(cardNumber) {\n  return typeof cardNumber === 'string' || cardNumber instanceof String;\n}\n\nfunction hasEnoughResultsToDetermineBestMatch(results) {\n  var numberOfResultsWithMaxStrengthProperty = results.filter(function (result) {\n    return result.matchStrength;\n  }).length;\n\n  // if all possible results have a maxStrength property\n  // that means the card number is sufficiently long\n  // enough to determine conclusively what the type is\n  return numberOfResultsWithMaxStrengthProperty > 0 &&\n    numberOfResultsWithMaxStrengthProperty === results.length;\n}\n\nfunction findBestMatch(results) {\n  if (!hasEnoughResultsToDetermineBestMatch(results)) {\n    return;\n  }\n\n  return results.reduce(function (bestMatch, result) { // eslint-disable-line consistent-return\n    if (!bestMatch) {\n      return result;\n    }\n\n    // if the current best match pattern is less specific\n    // than this result, set the result as the new best match\n    if (bestMatch.matchStrength < result.matchStrength) {\n      return result;\n    }\n\n    return bestMatch;\n  });\n}\n\nfunction getAllCardTypes() {\n  return testOrder.map(function (type) {\n    return clone(findType(type));\n  });\n}\n\nfunction creditCardType(cardNumber) {\n  var bestMatch;\n  var results = [];\n\n  if (!isValidInputType(cardNumber)) {\n    return [];\n  }\n\n  if (cardNumber.length === 0) {\n    return getAllCardTypes();\n  }\n\n  testOrder.forEach(function (type) {\n    var cardConfiguration = findType(type);\n\n    loopOverCardPatterns(cardNumber, cardConfiguration, results);\n  });\n\n  bestMatch = findBestMatch(results);\n\n  if (bestMatch) {\n    return [bestMatch];\n  }\n\n  return results;\n}\n\nfunction loopOverCardPatterns(cardNumber, cardConfiguration, results) {\n  var i, pattern, patternLength, clonedCardConfiguration;\n\n  for (i = 0; i < cardConfiguration.patterns.length; i++) {\n    pattern = cardConfiguration.patterns[i];\n\n    if (!matches(cardNumber, pattern)) {\n      continue;\n    }\n\n    clonedCardConfiguration = clone(cardConfiguration);\n\n    if (Array.isArray(pattern)) {\n      patternLength = String(pattern[0]).length;\n    } else {\n      patternLength = String(pattern).length;\n    }\n\n    if (cardNumber.length >= patternLength) {\n      clonedCardConfiguration.matchStrength = patternLength;\n    }\n\n    results.push(clonedCardConfiguration);\n    break;\n  }\n}\n\nfunction matches(cardNumber, pattern) {\n  if (Array.isArray(pattern)) {\n    return matchesRange(cardNumber, pattern[0], pattern[1]);\n  }\n\n  return matchesPattern(cardNumber, pattern);\n}\n\nfunction matchesPattern(cardNumber, pattern) {\n  pattern = String(pattern);\n\n  return pattern.substring(0, cardNumber.length) === cardNumber.substring(0, pattern.length);\n}\n\n// Adapted from https://github.com/polvo-labs/card-type/blob/aaab11f80fa1939bccc8f24905a06ae3cd864356/src/cardType.js#L37-L42\nfunction matchesRange(cardNumber, min, max) {\n  var maxLengthToCheck = String(min).length;\n  var substr = cardNumber.substr(0, maxLengthToCheck);\n  var integerRepresentationOfCardNumber = parseInt(substr, 10);\n\n  min = parseInt(String(min).substr(0, substr.length), 10);\n  max = parseInt(String(max).substr(0, substr.length), 10);\n\n  return integerRepresentationOfCardNumber >= min && integerRepresentationOfCardNumber <= max;\n}\n\ncreditCardType.getTypeInfo = function (type) {\n  return clone(findType(type));\n};\n\nfunction getCardPosition(name, ignoreErrorForNotExisting) {\n  var position = testOrder.indexOf(name);\n\n  if (!ignoreErrorForNotExisting && position === -1) {\n    throw new Error('\"' + name + '\" is not a supported card type.');\n  }\n\n  return position;\n}\n\ncreditCardType.removeCard = function (name) {\n  var position = getCardPosition(name);\n\n  testOrder.splice(position, 1);\n};\n\ncreditCardType.addCard = function (config) {\n  var existingCardPosition = getCardPosition(config.type, true);\n\n  customCards[config.type] = config;\n\n  if (existingCardPosition === -1) {\n    testOrder.push(config.type);\n  }\n};\n\ncreditCardType.updateCard = function (cardType, updates) {\n  var clonedCard;\n  var originalObject = customCards[cardType] || types[cardType];\n\n  if (!originalObject) {\n    throw new Error('\"' + cardType + '\" is not a recognized type. Use `addCard` instead.');\n  }\n\n  if (updates.type && originalObject.type !== updates.type) {\n    throw new Error('Cannot overwrite type parameter.');\n  }\n\n  clonedCard = clone(originalObject, true);\n\n  Object.keys(clonedCard).forEach(function (key) {\n    if (updates[key]) {\n      clonedCard[key] = updates[key];\n    }\n  });\n\n  customCards[clonedCard.type] = clonedCard;\n};\n\ncreditCardType.changeOrder = function (name, position) {\n  var currentPosition = getCardPosition(name);\n\n  testOrder.splice(currentPosition, 1);\n  testOrder.splice(position, 0, name);\n};\n\ncreditCardType.resetModifications = function () {\n  testOrder = clone(ORIGINAL_TEST_ORDER);\n  customCards = {};\n};\n\ncreditCardType.types = {\n  VISA: VISA,\n  MASTERCARD: MASTERCARD,\n  AMERICAN_EXPRESS: AMERICAN_EXPRESS,\n  DINERS_CLUB: DINERS_CLUB,\n  DISCOVER: DISCOVER,\n  JCB: JCB,\n  UNIONPAY: UNIONPAY,\n  MAESTRO: MAESTRO,\n  ELO: ELO,\n  MIR: MIR\n};\n\nmodule.exports = creditCardType;\n\n\n//# sourceURL=webpack:///./node_modules/credit-card-type/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0; }\\n\\n.btn {\\n  outline: none;\\n  background-color: DodgerBlue;\\n  border-radius: 20px;\\n  border: none;\\n  color: white;\\n  padding: 10px 13px;\\n  font-size: 16px;\\n  cursor: pointer; }\\n  .btn:hover {\\n    background-color: RoyalBlue; }\\n\\n.modal {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 20;\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  opacity: 0;\\n  visibility: hidden;\\n  transition: visibility 0s linear 0.1s,opacity 0.3s ease; }\\n  .modal.open {\\n    visibility: visible;\\n    opacity: 1;\\n    transition-delay: 0s; }\\n  .modal__overlay {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n    z-index: 21;\\n    background-color: rgba(0, 0, 0, 0.7); }\\n  .modal__container {\\n    position: relative;\\n    z-index: 22;\\n    top: 50%;\\n    transform: translateY(-50%);\\n    box-shadow: 0 0 10px #fff;\\n    margin: auto;\\n    padding: 30px;\\n    background-color: #fff;\\n    text-align: center; }\\n\\n.input {\\n  margin: 5px;\\n  display: flex;\\n  flex-direction: column; }\\n  .input label {\\n    font-family: Arial, Verdana, sans-serif;\\n    font-size: 10px;\\n    color: grey; }\\n  .input input, .input textarea {\\n    resize: none;\\n    border: 0 solid gray;\\n    border-bottom-width: 2px; }\\n    .input input:focus, .input textarea:focus {\\n      border-color: blue;\\n      outline: none; }\\n\\n.add-container {\\n  display: flex;\\n  align-items: center; }\\n  @media only screen and (max-width: 500px) {\\n    .add-container {\\n      flex-direction: column; } }\\n\\n.paper {\\n  padding: 10px; }\\n  @media only screen and (min-width: 500px) {\\n    .paper {\\n      box-shadow: 0 0 10px #888888;\\n      border-radius: 5px;\\n      margin: 20px; } }\\n\\n.list {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column; }\\n  .list label {\\n    font-family: Arial, Verdana, sans-serif;\\n    font-size: 20px; }\\n\\n.card {\\n  padding: 10px;\\n  display: flex;\\n  align-items: center; }\\n  .card img {\\n    width: 50px;\\n    height: 30px; }\\n\\n.main-container {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column; }\\n\\n.error-message {\\n  font-family: Arial, Verdana, sans-serif;\\n  font-size: 15px;\\n  color: red; }\\n\\n.card-numbers {\\n  padding: 5px;\\n  font-family: Arial, Verdana, sans-serif;\\n  font-size: 15px; }\\n\\n.card-comment {\\n  display: block;\\n  text-overflow: ellipsis;\\n  width: 70px;\\n  white-space: nowrap;\\n  overflow: hidden;\\n  padding: 5px;\\n  font-family: Arial, Verdana, sans-serif;\\n  font-size: 15px; }\\n\\n#tooltip {\\n  opacity: 0;\\n  color: #fff;\\n  background: grey;\\n  position: absolute;\\n  z-index: 100;\\n  padding: 15px;\\n  pointer-events: none;\\n  border-radius: 5px;\\n  transition: all .5s ease-in-out; }\\n  #tooltip.top {\\n    margin-top: 20px; }\\n  #tooltip.show {\\n    opacity: 1;\\n    margin-top: 10px;\\n    pointer-events: all; }\\n    #tooltip.show.top {\\n      margin-top: 10px; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/components/Tooltip.js":
/*!***********************************!*\
  !*** ./src/components/Tooltip.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tooltip; });\nclass Tooltip {\n    constructor() {\n        this.show = this.show.bind(this);\n        this.hide = this.hide.bind(this);\n    }\n\n    show(target) {\n        let title = target.getAttribute('tooltip-title');\n        if(!title) return;\n\n        this.tooltip.innerHTML = title;\n\n        this.tooltip.style.maxWidth = 400 + 'px';\n        this.tooltip.style.maxHeight = 50 + 'px';\n        this.tooltip.style.overflow = 'auto';\n\n        let pos_left = target.offsetLeft + ( target.offsetWidth / 2 ) - ( target.offsetWidth / 2 ),\n            pos_top  = target.offsetTop - target.offsetHeight - 60;\n        this.tooltip.className = '';\n        if( pos_left < 0 )\n        {\n            pos_left = target.offsetLeft + target.offsetWidth / 2 - 20;\n            this.tooltip.classList.add('left');\n        }\n\n        if( pos_left + this.tooltip.offsetWidth > window.innerWidth ) {\n            pos_left = target.offsetLeft - target.offsetWidth + target.offsetWidth / 2 + 20;\n            this.tooltip.classList.add('right');\n        }\n\n        if( pos_top < 0 )\n        {\n            pos_top  = target.offsetTop + target.offsetHeight;\n            this.tooltip.classList.add('top');\n        }\n\n        this.tooltip.style.left = pos_left + 'px';\n        this.tooltip.style.top = pos_top + 'px';\n\n        this.tooltip.classList.add('show');\n    }\n\n    hide() {\n        this.tooltip.classList.remove('show');\n    }\n\n    bindEvents() {\n        this.tooltip = document.getElementById('tooltip');\n        this.tooltip.addEventListener('mouseover', () => this.tooltip.classList.add('show'));\n        this.tooltip.addEventListener('mouseout', () => this.tooltip.classList.remove('show'));\n        let targets = document.querySelectorAll('[tooltip-title]');\n        targets.forEach(target => {\n            target.addEventListener('mouseover', () => this.show(target));\n            target.addEventListener('mouseout', this.hide);\n        })\n    }\n}\n\n\n//# sourceURL=webpack:///./src/components/Tooltip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ \"./node_modules/card-validator/index.js\");\n/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage/index.js\");\n/* harmony import */ var _components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Tooltip */ \"./src/components/Tooltip.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nlet commentLength = 1024;\nlet cardForDelete;\nlet tooltip = new _components_Tooltip__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n_storage__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].initStorage();\n\nlet modalDialog = document.getElementById('modalDialog');\nlet errorMessage = document.getElementById('errorMessage');\nlet cardList = document.getElementById('cardList');\nlet cardNumberInput = document.getElementById('cardNumberInput');\nlet cardCommentInput = document.getElementById('cardCommentInput');\nlet addCardButton = document.getElementById('addCardButton');\nlet modalCancelButton = document.getElementById('modalCancelButton');\nlet modalDeleteButton = document.getElementById('modalDeleteButton');\naddCardButton.addEventListener('click', addCard);\ncardNumberInput.addEventListener('keydown', errorMessageClear);\ncardCommentInput.addEventListener('keydown', errorMessageClear);\n\nmodalCancelButton.addEventListener('click', dialogClose);\nmodalDeleteButton.addEventListener('click', deleteCard);\nlistRender();\n\nfunction errorMessageClear() {\n    errorMessage.innerHTML = '&nbsp;';\n}\n\nfunction deleteCard() {\n    dialogClose();\n    _storage__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].deleteCard(cardForDelete);\n    listRender();\n}\n\nfunction dialogOpen() {\n    modalDialog.classList.add('open');\n}\n\nfunction dialogClose() {\n    modalDialog.classList.remove('open');\n}\n\nfunction CardComponent(card) {\n    let element = document.createElement('div');\n    element.classList.add('card');\n    let cardNumbers = document.createElement('span');\n    cardNumbers.classList.add('card-numbers');\n    let cardComment = document.createElement('span');\n    cardComment.classList.add('card-comment');\n    let img = document.createElement('img');\n    let deleteButton = document.createElement('button');\n    let deleteIcon = document.createElement('i');\n    deleteButton.className = 'btn';\n    deleteIcon.className = 'fa fa-close';\n    deleteButton.appendChild(deleteIcon);\n    deleteButton.addEventListener('click', () => {\n        cardForDelete = card.numbers;\n        dialogOpen();\n    });\n    img.src = card.type === 'visa' ? 'dist/visa.png' : 'dist/mastercard.png';\n    cardNumbers.innerHTML = card.numbers;\n    cardComment.innerHTML = card.comment;\n    cardComment.setAttribute('tooltip-title', card.comment);\n    element.appendChild(img);\n    element.appendChild(cardNumbers);\n    element.appendChild(cardComment);\n    element.appendChild(deleteButton);\n    return element;\n}\n\nfunction addCard() {\n    if (_storage__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].isCardExists(cardNumberInput.value)) {\n        errorMessage.innerHTML = 'this card already exists';\n        return\n    }\n    if (cardCommentInput.value.length > commentLength) {\n        errorMessage.innerHTML = `Max comment length is ${commentLength}`;\n        return\n    }\n\n    let numberValidation = card_validator__WEBPACK_IMPORTED_MODULE_0__[\"number\"](cardNumberInput.value);\n    let type = numberValidation.card ? numberValidation.card.type : null;\n\n    if (numberValidation.isValid && (type === 'visa' || type === 'mastercard')) {\n        let card = {\n            type,\n            numbers: cardNumberInput.value,\n            comment: cardCommentInput.value,\n        };\n        _storage__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].addCard(card);\n        listRender()\n    } else {\n        errorMessage.innerHTML = 'card not valid';\n    }\n}\n\nfunction listRender() {\n    let cards = _storage__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].getCards();\n    while (cardList.firstChild) {\n        cardList.removeChild(cardList.firstChild);\n    }\n    let label = document.createElement('label');\n    label.innerHTML = 'Cards';\n    cardList.appendChild(label);\n    cards.forEach(card => cardList.appendChild(CardComponent(card)));\n    tooltip.bindEvents();\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage/index.js":
/*!******************************!*\
  !*** ./src/storage/index.js ***!
  \******************************/
/*! exports provided: storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\nconst initStorage = () => {\n    let cards = localStorage.getItem('cards');\n    if (!cards) localStorage.setItem('cards', JSON.stringify([]));\n};\n\nconst getCards = () => JSON.parse(localStorage.getItem('cards'));\n\nconst addCard = card => {\n    let cards = JSON.parse(localStorage.getItem('cards'));\n    cards.push(card);\n    localStorage.setItem('cards', JSON.stringify(cards));\n};\n\nconst isCardExists = cardNumbers => {\n    let cards = getCards();\n    return Boolean(cards.find(card => card.numbers === cardNumbers))\n};\n\nconst deleteCard = cardNumbers => {\n    let cards = getCards();\n    localStorage.setItem('cards', JSON.stringify(cards.filter(card => card.numbers !== cardNumbers)));\n};\n\nconst storage = {\n    initStorage,\n    getCards,\n    addCard,\n    isCardExists,\n    deleteCard,\n};\n\n\n//# sourceURL=webpack:///./src/storage/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });