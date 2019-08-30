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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/components/list-block.js":
/*!**************************************!*\
  !*** ./src/components/list-block.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Required components
 */
var __ = wp.i18n.__;
var createElement = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;
var el = createElement;
registerBlockType('dflow/block-list', {
  title: __('Block List'),
  icon: 'list',
  category: 'common',
  keywords: ['list', 'block', 'dflow'],
  edit: function edit(props) {
    return el('div', {
      className: props.className
    }, el('div', {
      className: 'dflow-block-list-wrap'
    }, el('div', {}, 'Description'), el('div', {}, 'Subscribe')));
  },
  save: function save(props) {
    return el('div', {
      className: props.className
    }, el('form', {
      className: 'misha-block-form-wrap'
    }, el('input', {
      'type': 'email',
      'placeholder': 'Enter your email address'
    }), el('button', {}, 'Subscribe')));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Custom block javascript file
 * 
 * Authors: dFlow Team
 * Created by: Kadek Pradnyana (https://github.com/Pradnyana28)
 * 
 * WordPress Docs: https://developer.wordpress.org/block-editor/tutorials/javascript/extending-the-block-editor/
 */
__webpack_require__(/*! ./components/list-block */ "./src/components/list-block.js");

__webpack_require__(/*! ./register-block-styles */ "./src/register-block-styles.js"); // require('./formats/underline');

/***/ }),

/***/ "./src/register-block-styles.js":
/*!**************************************!*\
  !*** ./src/register-block-styles.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Custom block javascript file
 * 
 * Table of contents
 * 1. Extending Quote
 * 2. Extending List
 * 3. Extending List: with background
 * 4. Extending Image
 * 
 * Authors: dFlow Team
 * Created by: Kadek Pradnyana (https://github.com/Pradnyana28)
 * 
 * WordPress Docs: https://developer.wordpress.org/block-editor/tutorials/javascript/extending-the-block-editor/
 */
var registerBlockStyle = wp.blocks.registerBlockStyle; //  1. Extending quote ...

registerBlockStyle('core/quote', {
  name: 'critical-quote',
  label: 'Critical Quote'
}); // 2. Extending List ...

registerBlockStyle('core/list', {
  name: 'pink-list',
  label: 'Pink List'
}); // 3. Extending List ...

registerBlockStyle('core/list', {
  name: 'pink-list-background',
  label: 'With Background'
}); // 4. Extending Image ...

registerBlockStyle('core/image', {
  name: 'with-dark-background',
  label: 'With Dark Background'
}); // 5. Extending Separator ...

registerBlockStyle('core/separator', {
  name: 'five-dots-separator',
  label: '5 Dots'
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map