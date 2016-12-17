module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GaUtil = function () {
	  function GaUtil(flag) {
	    _classCallCheck(this, GaUtil);

	    this.enable = !!flag;
	  }

	  _createClass(GaUtil, [{
	    key: 'init',
	    value: function init(id) {
	      if (this.enable) {
	        /*eslint-disable */
	        (function (i, s, o, g, r, a, m) {
	          i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	            (i[r].q = i[r].q || []).push(arguments);
	          }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
	        ga('create', id, 'auto');
	        ga('send', 'pageview');
	        /*eslint-enable */
	      }
	    }
	  }, {
	    key: 'sendEvent',
	    value: function sendEvent(eventCategory, eventAction, eventLabel, eventValue) {
	      if (this.enable) {
	        /*eslint-disable */
	        ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
	        /*eslint-enable */
	      }
	    }
	  }]);

	  return GaUtil;
	}();

	exports.default = GaUtil;

/***/ }
/******/ ]);