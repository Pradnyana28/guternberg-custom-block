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

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

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

/***/ "./src/hooks/separator.js":
/*!********************************!*\
  !*** ./src/hooks/separator.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var addFilter = wp.hooks.addFilter;
var __ = wp.i18n.__; // Enable spacing control on the following blocks

var enableSpacingControlOnBlocks = ['core/separator'];
var colorNames = {
  '#ec008c': 'pink',
  '#231f20': 'bark-chocolate',
  '#59BACC': 'blue',
  '#58AD69': 'green',
  '#FFBC49': 'yellow',
  '#E2574C': 'orange',
  '#FFFFFF': 'white'
  /**
   * Create HOC to add spacing control to inspector controls of block.
   */

};
var withColorPalettes = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    // Do nothing if it's another block than our defined ones.
    if (!enableSpacingControlOnBlocks.includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        borderColor = _props$attributes.borderColor,
        className = _props$attributes.className;
    var classArray = className !== undefined ? className.split(' ') : ['is-style-default'];

    if (borderColor && classArray.length > 0) {
      var borderColorClassName = "has-border-color-".concat(colorNames[borderColor]);
      classArray = classArray.map(function (item) {
        var newClassName = '';

        if (item.includes('is-style')) {
          newClassName = item;
        }

        return newClassName;
      });
      classArray = classArray.filter(function (item) {
        return item !== '';
      });
      var classString = "".concat(classArray.join(' '), " ").concat(borderColorClassName);
      props.attributes.className = classString;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: __('Color Settings'),
      colorSettings: [{
        value: '#000000',
        onChange: function onChange(colorValue) {
          return setAttributes({
            borderColor: colorValue
          });
        },
        label: __('Border Color')
      }]
    })));
  };
}, 'withColorPalettes');
addFilter('editor.BlockEdit', 'extend-block-separator/with-color-palettes', withColorPalettes);

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

__webpack_require__(/*! ./register-block-styles */ "./src/register-block-styles.js");

__webpack_require__(/*! ./hooks/separator */ "./src/hooks/separator.js"); // require('./formats/underline');

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
 * 5. Extending Separator
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
});
registerBlockStyle('core/list', {
  name: 'pink-list-with-border',
  label: 'With Border Bottom'
}); // 4. Extending Image ...

registerBlockStyle('core/image', {
  name: 'with-dark-background',
  label: 'With Dark Background'
}); // 5. Extending Separator ...

registerBlockStyle('core/separator', {
  name: 'five-dots-separator',
  label: '5 Dots'
});
registerBlockStyle('core/separator', {
  name: 'blank-separator',
  label: 'Blank'
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map