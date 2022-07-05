(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SuperFrom", [], factory);
	else if(typeof exports === 'object')
		exports["SuperFrom"] = factory();
	else
		root["SuperFrom"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2470":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5341");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3ad9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("41f0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "41f0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5341":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5ebe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5fa5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7e2d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5fa5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "a733":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b8fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a733");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bce9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_markLine_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5ebe");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_markLine_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_markLine_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_markLine_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12c24a87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/index.vue?vue&type=template&id=f2e06358&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"flow-canvas",staticClass:"super-flow",on:{"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();return _vm.contextmenu($event)}}},[(_vm.temEdgeConf.visible)?_c('graph-line',{attrs:{"padding":_vm.linkPadding,"graph":_vm.graph,"link":_vm.temEdgeConf.link,"link-base-style":_vm.linkBaseStyle,"link-desc":_vm.linkDesc,"link-style":_vm.linkStyle}}):_vm._e(),_vm._l((_vm.graph.linkList),function(edge,idx){return _c('graph-line',{key:edge.key,attrs:{"index":idx,"padding":_vm.linkPadding,"graph":_vm.graph,"link":edge,"link-base-style":_vm.linkBaseStyle,"link-desc":_vm.linkDesc,"link-style":_vm.linkStyle}})}),(_vm.moveNodeConf.isMove && _vm.hasMarkLine)?_c('mark-line',{attrs:{"width":_vm.clientWidth,"height":_vm.clientHeight,"mark-color":_vm.markLineColor,"markLine":_vm.moveNodeConf.markLine}}):_vm._e(),_vm._l((_vm.graph.nodeList),function(node,idx){return _c('graph-node',{key:node.key,attrs:{"index":idx,"node":node,"graph":_vm.graph,"is-move":node === _vm.moveNodeConf.node,"is-tem-edge":_vm.temEdgeConf.visible,"node-intercept":_vm.nodeIntercept(node),"line-drop":_vm.linkAddable,"node-drop":_vm.draggable},on:{"node-mousedown":_vm.nodeMousedown,"node-mouseenter":_vm.nodeMouseenter,"node-mouseleave":_vm.nodeMouseleave,"node-mouseup":_vm.nodeMouseup,"side-mousedown":_vm.sideMousedown,"node-contextmenu":_vm.nodeContextmenu},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var meta = ref.meta;
return [_vm._t("node",null,{"meta":meta})]}}],null,true)})}),_c('graph-menu',{attrs:{"visible":_vm.menuConf.visible,"graph":_vm.graph,"position":_vm.menuConf.position,"list":_vm.menuConf.list,"source":_vm.menuConf.source},on:{"update:visible":function($event){return _vm.$set(_vm.menuConf, "visible", $event)}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var item = ref.item;
return [_vm._t("menuItem",null,{"item":item})]}}],null,true)}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.graph.graphSelected),expression:"graph.graphSelected"}],ref:"selectAllMask",staticClass:"select-all__mask",style:(_vm.maskStyle),attrs:{"tabindex":"-1"},on:{"blur":function($event){_vm.graph.graphSelected = false},"mousedown":_vm.selectAllMaskMouseDown,"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();}}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/index.vue?vue&type=template&id=f2e06358&

// CONCATENATED MODULE: ./packages/GraphEvent.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * User: CHT
 * Date: 2020/6/3
 * Time: 14:53
 */
var GraphEvent = /*#__PURE__*/function () {
  function GraphEvent() {
    _classCallCheck(this, GraphEvent);

    this.listeners = {};
  }

  _createClass(GraphEvent, [{
    key: "add",
    value: function add(type, callback) {
      if (!(type in this.listeners)) {
        this.listeners[type] = [];
      }

      this.listeners[type].push(callback);
    }
  }, {
    key: "remove",
    value: function remove(type, callback) {
      if (!(type in this.listeners)) {
        return;
      }

      var stack = this.listeners[type];

      for (var i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
          stack.splice(i, 1);
          return this.remove(type, callback);
        }
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(event) {
      var _this = this;

      var breakOff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!(event.type in this.listeners)) {
        return;
      }

      var stack = this.listeners[event.type];
      event.target = this;

      if (breakOff) {
        stack.some(function (fun, idx) {
          var result = fun.call(_this, event);
          if (result) stack.unshift.apply(stack, _toConsumableArray(stack.splice(idx, 1)));
          return result;
        });
      } else {
        stack.forEach(function (fun) {
          return fun.call(_this, event);
        });
      }
    }
  }]);

  return GraphEvent;
}();


// CONCATENATED MODULE: ./packages/utils.js
function utils_toConsumableArray(arr) { return utils_arrayWithoutHoles(arr) || utils_iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || utils_nonIterableSpread(); }

function utils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }

function utils_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function utils_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return utils_arrayLikeToArray(arr); }

function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:03
 */
function uuid() {
  var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var charsLen = chars.length;
  var uuid = [];
  var len = 16;

  for (var i = 0; i < len; i++) {
    uuid[i] = chars[0 | Math.random() * charsLen];
  }

  return before + uuid.join('') + after;
}
function getOffset(evt) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var clientX = evt.clientX,
      clientY = evt.clientY,
      currentTarget = evt.currentTarget;
  var current = target || currentTarget;
  var scrollTop = current.scrollTop;
  var scrollLeft = current.scrollLeft;

  var _current$getBoundingC = current.getBoundingClientRect(),
      left = _current$getBoundingC.left,
      top = _current$getBoundingC.top;

  return [clientX - left + scrollLeft, clientY - top + scrollTop];
}
function isIntersect(_ref, target) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;

  var _target$getBoundingCl = target.getBoundingClientRect(),
      top = _target$getBoundingCl.top,
      right = _target$getBoundingCl.right,
      bottom = _target$getBoundingCl.bottom,
      left = _target$getBoundingCl.left;

  return top < clientY && right > clientX && bottom > clientY && left < clientX;
} // 向量相加

function addVector(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]];
} //  向量乘以常量系数

function multiply(vector, k) {
  return [vector[0] * k, vector[1] * k];
}
function differ(pointA, pointB) {
  return [pointB[0] - pointA[0], pointB[1] - pointA[1]];
}
function minus(pointA, pointB) {
  return [pointA[0] - pointB[0], pointA[1] - pointB[1]];
} // 向量点积

function dotProduct(vectorA, vectorB) {
  return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1];
} // 向量叉乘

function cross(vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0];
} // 向量的单位向量

function unitVector(vector) {
  var m = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
  return [vector[0] / m, vector[1] / m];
} // 判断向量 x,y 坐标相等

function equals(vector, target) {
  return vector[0] === target[0] && vector[1] === target[1];
} // 向量夹角

function utils_angle(vector) {
  return Math.round(180 / Math.PI * Math.atan2(vector[1], vector[0])) + 180;
} // 判断向量是否平行

function parallel(vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0] === 0;
} // 判断 y 轴相等

function yAxisEqual(vectorA, vectorB) {
  return vectorA[1] === vectorB[1];
} // 判断 x 轴相等

function xAxisEqual(vectorA, vectorB) {
  return vectorA[0] === vectorB[0];
} //

function vector(result) {
  var handler = {
    add: addVector,
    multiply: multiply,
    differ: differ,
    minus: minus,
    dotProduct: dotProduct,
    cross: cross,
    unitVector: unitVector,
    equals: equals,
    angle: utils_angle,
    parallel: parallel
  };
  var proxyHandler = {};
  Object.keys(handler).forEach(function (key) {
    Object.defineProperty(proxyHandler, key, {
      get: function get() {
        return function (val) {
          result = handler[key](result, val);
          return proxyHandler;
        };
      }
    });
  });
  Object.defineProperty(proxyHandler, 'end', {
    get: function get() {
      return result;
    }
  });
  return proxyHandler;
}
function toRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}
function isFun(val) {
  return toRawType(val) === 'function';
}
function isBool(val) {
  return toRawType(val) === 'boolean';
}
function isUndef(val) {
  return toRawType(val) === 'undefined';
}
function isString(val) {
  return toRawType(val) === 'string';
}
function isObject(val) {
  return toRawType(val) === 'object';
}
function arrayReplace(arr1, arr2) {
  arr1.splice.apply(arr1, [0, arr1.length].concat(utils_toConsumableArray(arr2)));
}
function debounce(fn, timestamp) {
  var timeout = null;
  return function () {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(fn, timestamp);
  };
}
// CONCATENATED MODULE: ./packages/types.js
var _directionVector;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * User: CHT
 * Date: 2020/5/27
 * Time: 9:52
*/
var types_direction = {
  top: 1,
  right: 2,
  bottom: 3,
  left: 4
}; // [0,-1] 右：[1,0] 下 [1,1] 左 [-1,0]

var directionVector = (_directionVector = {}, _defineProperty(_directionVector, types_direction.top, [0, -1]), _defineProperty(_directionVector, types_direction.right, [1, 0]), _defineProperty(_directionVector, types_direction.bottom, [0, 1]), _defineProperty(_directionVector, types_direction.left, [-1, 0]), _directionVector);
// CONCATENATED MODULE: ./packages/GraphNode.js
function GraphNode_toConsumableArray(arr) { return GraphNode_arrayWithoutHoles(arr) || GraphNode_iterableToArray(arr) || GraphNode_unsupportedIterableToArray(arr) || GraphNode_nonIterableSpread(); }

function GraphNode_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GraphNode_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GraphNode_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GraphNode_arrayLikeToArray(o, minLen); }

function GraphNode_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function GraphNode_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return GraphNode_arrayLikeToArray(arr); }

function GraphNode_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function GraphNode_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GraphNode_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GraphNode_createClass(Constructor, protoProps, staticProps) { if (protoProps) GraphNode_defineProperties(Constructor.prototype, protoProps); if (staticProps) GraphNode_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */



var GraphNode_GraphNode = /*#__PURE__*/function () {
  function GraphNode(props, graph) {
    GraphNode_classCallCheck(this, GraphNode);

    var _props$id = props.id,
        id = _props$id === void 0 ? uuid('node') : _props$id,
        _props$width = props.width,
        width = _props$width === void 0 ? 180 : _props$width,
        _props$height = props.height,
        height = _props$height === void 0 ? 100 : _props$height,
        _props$coordinate = props.coordinate,
        coordinate = _props$coordinate === void 0 ? [0, 0] : _props$coordinate,
        _props$meta = props.meta,
        meta = _props$meta === void 0 ? null : _props$meta;
    this.key = uuid('node');
    this.graph = graph;
    this.id = id;
    this.coordinate = GraphNode_toConsumableArray(coordinate);
    this.meta = meta;
    this.width = width;
    this.height = height;
  }

  GraphNode_createClass(GraphNode, [{
    key: "angle",
    value: function angle() {
      var w = this.width / 2,
          h = this.height / 2,
          center = [0, 0];
      var topLeft = vector(center).minus([w, h]).angle().end;
      var topRight = vector(center).add([w, 0]).minus([0, h]).angle().end;
      var bottomRight = vector(center).add([w, h]).angle().end;
      var bottomLeft = vector(center).add([0, h]).minus([w, 0]).angle().end;
      this.angleList = [topLeft, topRight, bottomRight, bottomLeft];
    }
  }, {
    key: "relative",
    value: function relative(offset) {
      var angle = vector(offset).minus([this.width / 2, this.height / 2]).angle().end;
      var angleList = this.angleList;
      var directionList = [types_direction.top, types_direction.right, types_direction.bottom, types_direction.left];
      var dir = types_direction.left;
      angleList.reduce(function (prev, current, idx) {
        if (angle >= prev && angle < current) {
          dir = directionList[idx - 1];
        }

        return current;
      });
      return {
        position: this.fixOffset(offset, dir),
        direction: directionVector[dir]
      };
    }
  }, {
    key: "fixOffset",
    value: function fixOffset(offset, dir) {
      switch (dir) {
        case types_direction.top:
          offset[0] = this.width / 2;
          offset[1] = 0;
          break;

        case types_direction.right:
          offset[0] = this.width;
          offset[1] = this.height / 2;
          break;

        case types_direction.bottom:
          offset[0] = this.width / 2;
          offset[1] = this.height;
          break;

        case types_direction.left:
        default:
          offset[0] = 0;
          offset[1] = this.height / 2;
          break;
      }

      return offset;
    }
  }, {
    key: "remove",
    value: function remove() {
      return this.graph.removeNode(this);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        width: this.width,
        height: this.height,
        coordinate: GraphNode_toConsumableArray(this.coordinate),
        meta: this.meta
      };
    }
  }, {
    key: "position",
    get: function get() {
      return vector(this.coordinate).add(this.graph.origin).end;
    },
    set: function set(position) {
      this.coordinate = vector(position).minus(this.graph.origin).end;
    }
  }, {
    key: "center",
    get: function get() {
      return vector(this.coordinate).add([this.width / 2, this.height / 2]).end;
    },
    set: function set(position) {
      this.coordinate = vector(position).minus([this.width / 2, this.height / 2]).end;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    },
    set: function set(w) {
      w = Math.floor(w);
      this._width = w > 50 ? w : 50;
      this.angle();
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    },
    set: function set(h) {
      h = Math.floor(h);
      this._height = h > 20 ? h : 20;
      this.angle();
    }
  }]);

  return GraphNode;
}();


// CONCATENATED MODULE: ./packages/GraphLink.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || GraphLink_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GraphLink_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GraphLink_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GraphLink_arrayLikeToArray(o, minLen); }

function GraphLink_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function GraphLink_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GraphLink_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GraphLink_createClass(Constructor, protoProps, staticProps) { if (protoProps) GraphLink_defineProperties(Constructor.prototype, protoProps); if (staticProps) GraphLink_defineProperties(Constructor, staticProps); return Constructor; }

function GraphLink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */



var GraphLink_GraphLink = /*#__PURE__*/function () {
  function GraphLink(options, graph) {
    GraphLink_classCallCheck(this, GraphLink);

    var _options$id = options.id,
        id = _options$id === void 0 ? uuid('link') : _options$id,
        start = options.start,
        _options$end = options.end,
        end = _options$end === void 0 ? null : _options$end,
        _options$startAt = options.startAt,
        startAt = _options$startAt === void 0 ? [0, 0] : _options$startAt,
        _options$endAt = options.endAt,
        endAt = _options$endAt === void 0 ? [0, 0] : _options$endAt,
        _options$meta = options.meta,
        meta = _options$meta === void 0 ? null : _options$meta;
    this.key = uuid('link');
    this.id = id;
    this.graph = graph;
    this.start = start;
    this.meta = meta;
    this.end = end;
    this.startDirection = directionVector[types_direction.top];
    this.endDirection = directionVector[types_direction.top];
    this.startAt = startAt;
    this.endAt = endAt;
  }

  GraphLink_createClass(GraphLink, [{
    key: "startCoordinate",
    value: function startCoordinate() {
      return vector(this.start.position).add(this.startAt).end;
    }
  }, {
    key: "endCoordinate",
    value: function endCoordinate() {
      if (this.end) {
        return vector(this.end.position).add(this.endAt).end;
      } else {
        return this.movePosition;
      }
    }
  }, {
    key: "coordinateList",
    value: function coordinateList() {
      var turnRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
      var entryPoint = this.startCoordinate();
      var exitPoint = this.endCoordinate();
      var entryDirection = this.startDirection;
      var exitDirection = this.endDirection; // 路径起点

      var startPoint = vector(entryDirection).multiply(GraphLink.distance).add(entryPoint).end; // 路径终点

      var endPoint = vector(exitDirection).multiply(GraphLink.distance).add(exitPoint).end; // 入口方向取反

      exitDirection = vector(exitDirection).multiply(-1).end; // 终点 - 起点  垂直 水平向量

      var pathHorizontalVec = [endPoint[0] - startPoint[0], 0];
      var pathVerticalVec = [0, endPoint[1] - startPoint[1]];
      var startDirection = this.pathDirection(pathVerticalVec, pathHorizontalVec, entryDirection);
      var endDirection = this.pathDirection(pathVerticalVec, pathHorizontalVec, exitDirection);
      var splitNum = vector(startDirection).dotProduct(endDirection).end > 0 ? 2 : 1;
      var pathMiddle = endDirection === pathHorizontalVec ? pathVerticalVec : pathHorizontalVec;
      var points = [];
      points.push(entryPoint, startPoint);

      if (splitNum === 1) {
        var point1 = vector(startPoint).add(startDirection).end;
        var point2 = vector(point1).add(endDirection).end;
        points.push(point1, point2);
      } else {
        var _point = vector(startDirection).multiply(turnRatio).add(startPoint).end;
        var _point2 = vector(_point).add(pathMiddle).end;
        var point3 = vector(endDirection).multiply(1 - turnRatio).add(_point2).end;
        points.push(_point, _point2, point3);
      }

      points.push(exitPoint);
      return points;
    }
  }, {
    key: "pathDirection",
    value: function pathDirection(vertical, horizontal, direction) {
      if (vector(horizontal).parallel(direction).end) {
        if (vector(horizontal).dotProduct(direction).end > 0) {
          return horizontal;
        } else {
          return vertical;
        }
      } else {
        if (vector(vertical).dotProduct(direction).end > 0) {
          return vertical;
        } else {
          return horizontal;
        }
      }
    }
  }, {
    key: "isPointInLink",
    value: function isPointInLink(position, pathPointList) {
      var _ref = pathPointList || this.pathPointList,
          pointList = _ref.pointList,
          minX = _ref.minX,
          minY = _ref.minY,
          maxX = _ref.maxX,
          maxY = _ref.maxY;

      var n = 5;

      if (position[0] < minX - n || position[0] > maxX + n || position[1] < minY - n || position[1] > maxY + n) {
        return false;
      }

      for (var i = 0; i < pointList.length - 2; i++) {
        var prev = pointList[i];
        var current = pointList[i + 1];
        var top = Math.min(prev[1], current[1]) - n;
        var right = Math.max(prev[0], current[0]) + n;
        var bottom = Math.max(prev[1], current[1]) + n;
        var left = Math.min(prev[0], current[0]) - n;

        var _position = _slicedToArray(position, 2),
            x = _position[0],
            y = _position[1];

        if (x > left && x < right && y > top && y < bottom) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "remove",
    value: function remove() {
      return this.graph.removeLink(this);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        startId: this.start.id,
        endId: this.end.id,
        startAt: this.startAt,
        endAt: this.endAt,
        meta: this.meta
      };
    }
  }, {
    key: "end",
    get: function get() {
      return this._end;
    },
    set: function set(node) {
      if (this.start === node) {
        return false;
      } else {
        this._end = node;
      }
    }
  }, {
    key: "startAt",
    get: function get() {
      return this._startAt;
    },
    set: function set(offset) {
      var relative = this.start.relative(offset);
      this._startAt = relative.position;
      this.startDirection = relative.direction;
    }
  }, {
    key: "endAt",
    get: function get() {
      return this._endAt;
    },
    set: function set(offset) {
      if (this.end) {
        var relative = this.end.relative(offset);
        this._endAt = relative.position;
        this.endDirection = relative.direction;
      } else {
        this._endAt = offset;
      }
    }
  }, {
    key: "movePosition",
    get: function get() {
      return this._movePosition;
    },
    set: function set(offset) {
      this._movePosition = offset;
      if (this.end) return;
      var relative = this.start.relative(vector(offset).minus(this.graph.origin).minus(this.start.coordinate).end);
      this.endDirection = vector(relative.direction).multiply(-1).end;
    }
  }, {
    key: "pathPointList",
    get: function get() {
      var pointList = this.coordinateList(),
          xList = [],
          yList = [];
      pointList.forEach(function (item) {
        xList.push(item[0]);
        yList.push(item[1]);
      });
      return {
        pointList: pointList,
        xList: xList,
        yList: yList,
        minX: Math.min.apply(Math, xList),
        maxX: Math.max.apply(Math, xList),
        minY: Math.min.apply(Math, yList),
        maxY: Math.max.apply(Math, yList)
      };
    }
  }]);

  return GraphLink;
}();

GraphLink_defineProperty(GraphLink_GraphLink, "distance", 15);


// CONCATENATED MODULE: ./packages/Graph.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Graph_toConsumableArray(arr) { return Graph_arrayWithoutHoles(arr) || Graph_iterableToArray(arr) || Graph_unsupportedIterableToArray(arr) || Graph_nonIterableSpread(); }

function Graph_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Graph_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Graph_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Graph_arrayLikeToArray(o, minLen); }

function Graph_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function Graph_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Graph_arrayLikeToArray(arr); }

function Graph_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Graph_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Graph_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Graph_createClass(Constructor, protoProps, staticProps) { if (protoProps) Graph_defineProperties(Constructor.prototype, protoProps); if (staticProps) Graph_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:00
 */





var Graph_Graph = /*#__PURE__*/function (_GraphEvent) {
  _inherits(Graph, _GraphEvent);

  var _super = _createSuper(Graph);

  function Graph(options) {
    var _this;

    Graph_classCallCheck(this, Graph);

    var _options$nodeList = options.nodeList,
        nodeList = _options$nodeList === void 0 ? [] : _options$nodeList,
        _options$linkList = options.linkList,
        linkList = _options$linkList === void 0 ? [] : _options$linkList,
        origin = options.origin;
    _this = _super.call(this);
    _this.nodeList = [];
    _this.linkList = [];
    _this.origin = origin;
    _this.mouseonLink = null;
    _this.mouseonNode = null;
    _this.graphSelected = false;
    _this.maskBoundingClientRect = {};

    _this.initNode(nodeList);

    _this.initLink(linkList);

    return _this;
  }

  Graph_createClass(Graph, [{
    key: "pointMap",
    value: function pointMap() {
      var map = {};
      this.nodeList.forEach(function (point) {
        map[point.id] = point;
      });
      return map;
    }
  }, {
    key: "initNode",
    value: function initNode(nodeList) {
      var _this2 = this;

      arrayReplace(this.nodeList, nodeList.map(function (node) {
        return _this2.createNode(node);
      }));
      return this.nodeList;
    }
  }, {
    key: "initLink",
    value: function initLink(linkList) {
      var _this3 = this;

      var list = [];
      linkList.forEach(function (link) {
        var _link$startId = link.startId,
            startId = _link$startId === void 0 ? '' : _link$startId,
            _link$endId = link.endId,
            endId = _link$endId === void 0 ? '' : _link$endId,
            _link$startAt = link.startAt,
            startAt = _link$startAt === void 0 ? [0, 0] : _link$startAt,
            _link$endAt = link.endAt,
            endAt = _link$endAt === void 0 ? [0, 0] : _link$endAt,
            _link$meta = link.meta,
            meta = _link$meta === void 0 ? null : _link$meta;

        var pointMap = _this3.pointMap();

        var start = pointMap[startId];
        var end = pointMap[endId];

        if (start && end) {
          list.push(_this3.createLink({
            start: start,
            end: end,
            meta: meta,
            startAt: startAt,
            endAt: endAt
          }));
        }
      });
      arrayReplace(this.linkList, list);
      return this.linkList;
    }
  }, {
    key: "createNode",
    value: function createNode(options) {
      return new GraphNode_GraphNode(options, this);
    }
  }, {
    key: "createLink",
    value: function createLink(options) {
      return new GraphLink_GraphLink(options, this);
    }
  }, {
    key: "addNode",
    value: function addNode(options) {
      var node = options.constructor === GraphNode_GraphNode ? options : this.createNode(options);
      this.nodeList.push(node);
      return node;
    }
  }, {
    key: "addLink",
    value: function addLink(options) {
      var newLink = options.constructor === GraphLink_GraphLink ? options : this.createLink(options);
      var currentLink = this.linkList.find(function (item) {
        return item.start === newLink.start && item.end === newLink.end;
      });

      if (currentLink) {
        currentLink.startAt = newLink.startAt;
        currentLink.endAt = newLink.endAt;
      } else if (newLink.start && newLink.end) {
        this.linkList.push(newLink);
      }

      return newLink;
    }
  }, {
    key: "removeNode",
    value: function removeNode(node) {
      var _this4 = this;

      var idx = this.nodeList.indexOf(node);
      this.linkList.filter(function (link) {
        return link.start === node || link.end === node;
      }).forEach(function (link) {
        _this4.removeLink(link);
      });
      this.nodeList.splice(idx, 1);
      return node;
    }
  }, {
    key: "removeLink",
    value: function removeLink(link) {
      var idx = this.linkList.indexOf(link);
      this.linkList.splice(idx, 1);

      if (this.mouseonLink === link) {
        this.mouseonLink = null;
      }

      return link;
    }
  }, {
    key: "toLastNode",
    value: function toLastNode(idx) {
      var nodeList = this.nodeList;
      nodeList.splice.apply(nodeList, [nodeList.length - 1, 0].concat(Graph_toConsumableArray(nodeList.splice(idx, 1))));
    }
  }, {
    key: "toLastLink",
    value: function toLastLink(idx) {
      var linkList = this.linkList;
      linkList.splice.apply(linkList, [linkList.length - 1, 0].concat(Graph_toConsumableArray(linkList.splice(idx, 1))));
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        origin: this.origin,
        nodeList: this.nodeList.map(function (node) {
          return node.toJSON();
        }),
        linkList: this.linkList.map(function (link) {
          return link.toJSON();
        })
      };
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      var nodeList = this.nodeList;
      var margin = 20;
      this.maskBoundingClientRect = {
        top: Math.min.apply(Math, Graph_toConsumableArray(nodeList.map(function (node) {
          return node.center[1] - node.height / 2;
        }))) - margin,
        right: Math.max.apply(Math, Graph_toConsumableArray(nodeList.map(function (node) {
          return node.center[0] + node.width / 2;
        }))) + margin,
        bottom: Math.max.apply(Math, Graph_toConsumableArray(nodeList.map(function (node) {
          return node.center[1] + node.height / 2;
        }))) + margin,
        left: Math.min.apply(Math, Graph_toConsumableArray(nodeList.map(function (node) {
          return node.center[0] - node.width / 2;
        }))) - margin
      };
      this.graphSelected = true;
    }
  }]);

  return Graph;
}(GraphEvent);

/* harmony default export */ var packages_Graph = (Graph_Graph);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12c24a87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu.vue?vue&type=template&id=3f925806&
var menuvue_type_template_id_3f925806_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"super-flow__menu-container"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"flow__menu-mask",on:{"mousemove":function($event){$event.stopPropagation();$event.preventDefault();},"mousedown":_vm.close}}),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"super-flow__menu",style:(_vm.style),attrs:{"tabindex":"-1"},on:{"mousemove":function($event){$event.stopPropagation();$event.preventDefault();},"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();},"blur":_vm.close}},[_vm._l((_vm.list),function(subList){return [_vm._l((subList),function(subItem){return _c('li',{staticClass:"super-flow__menu-item",class:{'is-disabled': subItem.disable},on:{"click":function($event){return _vm.select(subItem)}}},[_vm._t("default",[_c('span',{staticClass:"super-flow__menu-item-icon"}),_c('span',{staticClass:"super-flow__menu-item-content"},[_vm._v(" "+_vm._s(subItem.label)+" ")])],{"item":subItem})],2)}),_c('li',{staticClass:"super-flow__menu-line"})]})],2)])}
var menuvue_type_template_id_3f925806_staticRenderFns = []


// CONCATENATED MODULE: ./packages/menu.vue?vue&type=template&id=3f925806&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  props: {
    graph: Object,
    visible: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    position: {
      type: Array,
      default: function _default() {
        return [0, 0];
      }
    },
    source: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    style: function style() {
      return {
        left: this.position[0] + 'px',
        top: this.position[1] + 'px'
      };
    }
  },
  methods: {
    select: function select(subItem) {
      if (subItem.disable) return;
      this.$emit('update:visible', false);
      subItem.selected(this.source, vector(this.position).minus(this.graph.origin).end);
    },
    close: function close(evt) {
      this.$emit('update:visible', false);
    }
  },
  watch: {
    visible: function visible() {
      var _this = this;

      if (this.visible) {
        this.$nextTick(function () {
          return _this.$el.focus();
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/menu.vue?vue&type=style&index=0&lang=less&
var menuvue_type_style_index_0_lang_less_ = __webpack_require__("b8fb");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/menu.vue






/* normalize component */

var component = normalizeComponent(
  packages_menuvue_type_script_lang_js_,
  menuvue_type_template_id_3f925806_render,
  menuvue_type_template_id_3f925806_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_menu = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12c24a87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/node.vue?vue&type=template&id=4fdbdc61&
var nodevue_type_template_id_4fdbdc61_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"super-flow__node",class:{'can-move': _vm.nodeDrop},style:(_vm.style),attrs:{"tabindex":"-1"},on:{"mousedown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.nodeMousedown($event)},"mouseenter":_vm.nodeMouseenter,"mouseleave":_vm.nodeMouseleave,"mouseup":_vm.nodeMouseup,"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();return _vm.nodeContextmenu($event)}}},[_vm._t("default",null,{"meta":_vm.node.meta}),_vm._l((_vm.direction),function(dir,key){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.output && _vm.lineDrop),expression:"output && lineDrop"}],class:("node-side node-side-" + key),on:{"contextmenu":function($event){$event.stopPropagation();$event.preventDefault();},"mousedown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();$event.stopPropagation();return (function (evt) { return _vm.sideMousedown(evt, dir); })($event)}}})})],2)}
var nodevue_type_template_id_4fdbdc61_staticRenderFns = []


// CONCATENATED MODULE: ./packages/node.vue?vue&type=template&id=4fdbdc61&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/node.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var nodevue_type_script_lang_js_ = ({
  props: {
    graph: Object,
    node: Object,
    index: Number,
    isMove: Boolean,
    isTemEdge: Boolean,
    nodeIntercept: Function,
    lineDrop: Boolean,
    nodeDrop: Boolean
  },
  data: function data() {
    return {
      direction: types_direction,
      output: this.nodeIntercept()
    };
  },
  computed: {
    style: function style() {
      var _this$node = this.node,
          position = _this$node.position,
          width = _this$node.width,
          height = _this$node.height;
      return {
        width: width + 'px',
        height: height + 'px',
        top: position[1] + 'px',
        left: position[0] + 'px'
      };
    }
  },
  methods: {
    nodeMousedown: function nodeMousedown(evt) {
      this.graph.toLastNode(this.index);
      this.$emit('node-mousedown', this.node, getOffset(evt));
    },
    nodeMouseenter: function nodeMouseenter(evt) {
      this.output = this.nodeIntercept();
      this.graph.mouseonNode = this.node;
      if (!this.isTemEdge) return;
      this.$emit('node-mouseenter', evt, this.node, getOffset(evt, this.$el));
    },
    nodeMouseleave: function nodeMouseleave() {
      this.graph.mouseonNode = null;
      if (!this.isTemEdge) return;
      this.$emit('node-mouseleave');
    },
    nodeMouseup: function nodeMouseup() {
      if (!this.isTemEdge) return;
      this.$emit('node-mouseup');
    },
    nodeContextmenu: function nodeContextmenu(evt) {
      this.$emit('node-contextmenu', evt, this.node);
    },
    sideMousedown: function sideMousedown(evt) {
      this.$emit('side-mousedown', evt, this.node, getOffset(evt, this.$el));
    }
  }
});
// CONCATENATED MODULE: ./packages/node.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_nodevue_type_script_lang_js_ = (nodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/node.vue?vue&type=style&index=0&lang=less&
var nodevue_type_style_index_0_lang_less_ = __webpack_require__("2470");

// CONCATENATED MODULE: ./packages/node.vue






/* normalize component */

var node_component = normalizeComponent(
  packages_nodevue_type_script_lang_js_,
  nodevue_type_template_id_4fdbdc61_render,
  nodevue_type_template_id_4fdbdc61_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_node = (node_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12c24a87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/link.vue?vue&type=template&id=5b6a584a&
var linkvue_type_template_id_5b6a584a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('canvas',{staticClass:"super-flow__line"})}
var linkvue_type_template_id_5b6a584a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/link.vue?vue&type=template&id=5b6a584a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/link.vue?vue&type=script&lang=js&
function linkvue_type_script_lang_js_slicedToArray(arr, i) { return linkvue_type_script_lang_js_arrayWithHoles(arr) || linkvue_type_script_lang_js_iterableToArrayLimit(arr, i) || linkvue_type_script_lang_js_unsupportedIterableToArray(arr, i) || linkvue_type_script_lang_js_nonIterableRest(); }

function linkvue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function linkvue_type_script_lang_js_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function linkvue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function linkvue_type_script_lang_js_toConsumableArray(arr) { return linkvue_type_script_lang_js_arrayWithoutHoles(arr) || linkvue_type_script_lang_js_iterableToArray(arr) || linkvue_type_script_lang_js_unsupportedIterableToArray(arr) || linkvue_type_script_lang_js_nonIterableSpread(); }

function linkvue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function linkvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return linkvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return linkvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function linkvue_type_script_lang_js_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function linkvue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return linkvue_type_script_lang_js_arrayLikeToArray(arr); }

function linkvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var linkvue_type_script_lang_js_ = ({
  props: {
    padding: {
      type: Number,
      default: 50
    },
    linkDesc: [Function, null],
    linkStyle: [Function, null],
    linkBaseStyle: Object,
    index: Number,
    graph: Object,
    link: Object
  },
  data: function data() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      currentPointList: [],
      currentPathPointList: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.ctx = this.$el.getContext('2d');
    this.draw();
    this.graph.add('mousemove', this.rootMousemove);
    this.$once('hook:beforeDestroy', function () {
      _this.graph.remove('mousemove', _this.rootMousemove);
    });
  },
  computed: {
    styles: function styles() {
      return Object.assign({
        hover: '#FF0000',
        color: '#666666',
        textColor: '#666666',
        textHover: '#FF0000',
        font: '14px Arial',
        dotted: false,
        lineDash: [4, 4],
        background: 'rgba(255,255,255,0.6)'
      }, this.linkBaseStyle);
    },
    inPath: {
      get: function get() {
        return this.graph.mouseonLink === this.link;
      },
      set: function set(bol) {
        if (bol && !this.graph.mouseonNode) {
          this.graph.mouseonLink = this.link;
          this.$el.style.zIndex = '1';
          this.graph.toLastLink(this.index);
        } else if (this.inPath) {
          this.graph.mouseonLink = null;
          this.$el.style.zIndex = '0';
        }
      }
    }
  },
  methods: {
    draw: function draw() {
      var _this2 = this;

      var _this$currentPathPoin = this.currentPathPointList = this.link.pathPointList,
          pointList = _this$currentPathPoin.pointList,
          minX = _this$currentPathPoin.minX,
          minY = _this$currentPathPoin.minY,
          maxX = _this$currentPathPoin.maxX,
          maxY = _this$currentPathPoin.maxY;

      this.top = minY - this.padding;
      this.right = maxX + this.padding;
      this.bottom = maxY + this.padding;
      this.left = minX - this.padding;
      this.currentPointList = pointList.map(function (point) {
        return [Math.floor(point[0] - _this2.left), Math.floor(point[1] - _this2.top)];
      });
      this.changeStyle();
      this.initLine();
    },
    changeStyle: function changeStyle() {
      this.$el.width = this.right - this.left;
      this.$el.height = this.bottom - this.top;
      this.$el.style.top = this.top + 'px';
      this.$el.style.left = this.left + 'px';
    },
    initLine: function initLine() {
      this.ctx.clearRect(0, 0, this.$el.width, this.$el.height);

      if (this.linkStyle) {
        var style = this.linkStyle();

        if (isObject(style)) {
          Object.assign(this.styles, style);
        }
      }

      if (this.inPath) {
        var color = this.styles.hover;
        var textColor = this.styles.textHover;
        this.drawLine(color);
        this.drawDesc(textColor);
        this.drawArrow(color);
      } else {
        var _color = this.styles.color;
        var _textColor = this.styles.textColor;
        this.drawLine(_color);
        this.drawDesc(_textColor);
        this.drawArrow(_color);
      }
    },
    drawLine: function drawLine(strokeStyle) {
      var lineWidth = 2;
      var ctx = this.ctx;
      ctx.lineJoin = 'round';
      ctx.beginPath();

      if (this.styles.dotted) {
        ctx.setLineDash(this.styles.lineDash);
      }

      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      this.currentPointList.forEach(function (point, idx) {
        if (idx === 0) {
          ctx.moveTo.apply(ctx, linkvue_type_script_lang_js_toConsumableArray(point));
        } else {
          ctx.lineTo.apply(ctx, linkvue_type_script_lang_js_toConsumableArray(point));
          ctx.stroke();
        }
      });
      ctx.save();
    },
    drawDesc: function drawDesc(color) {
      var ctx = this.ctx;
      var desc;

      if (isFun(this.linkDesc)) {
        desc = this.linkDesc(this.link);
      }

      if (isString(desc)) {
        var _this$styles = this.styles,
            font = _this$styles.font,
            background = _this$styles.background;
        this.ctx.font = font;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';

        var _this$descIntercept = this.descIntercept(desc),
            text = _this$descIntercept.text,
            width = _this$descIntercept.width;

        var height = parseInt(font.match(/(\d+px)/g)[0]);
        var descPosition = this.descPosition();
        var position = vector(descPosition).minus([width / 2, height / 2]).end;
        this.ctx.fillStyle = background;
        ctx.fillRect(position[0], position[1], width, height);
        this.ctx.fillStyle = color;
        ctx.fillText.apply(ctx, [text].concat(linkvue_type_script_lang_js_toConsumableArray(descPosition)));
      }
    },
    descPosition: function descPosition() {
      var lineLen = 0;
      var contrastLen = 0;
      var descPosition = null;
      this.currentPointList.reduce(function (prev, current) {
        var vec = vector(prev).minus(current).end;
        lineLen += Math.abs(vec[0]) + Math.abs(vec[1]);
        return current;
      });
      this.currentPointList.reduce(function (prev, current) {
        var vec = vector(prev).minus(current).end;
        var size = Math.abs(vec[0]) + Math.abs(vec[1]);
        var prevLen = contrastLen;
        var middle = lineLen / 2;
        contrastLen += size;

        if (contrastLen >= lineLen / 2 && descPosition === null) {
          descPosition = prev;

          if (prev[0] === current[0]) {
            if (prev[1] < current[1]) {
              descPosition = vector(prev).add([0, middle - prevLen]).end;
            } else {
              descPosition = vector(prev).add([0, -(middle - prevLen)]).end;
            }
          } else {
            if (prev[0] < current[0]) {
              descPosition = vector(prev).add([middle - prevLen, 0]).end;
            } else {
              descPosition = vector(prev).add([-(middle - prevLen), 0]).end;
            }
          }
        }

        return current;
      });
      return descPosition;
    },
    descIntercept: function descIntercept(str) {
      var ctx = this.ctx;
      var strWidth = ctx.measureText(str).width;
      var maxWidth = this.padding * 2 - 10;
      var ellipsis = '...';
      var ellipsisWidth = ctx.measureText(ellipsis).width;

      if (strWidth <= maxWidth || maxWidth <= ellipsisWidth) {
        return {
          text: str,
          width: strWidth
        };
      } else {
        var len = str.length;

        while (strWidth >= maxWidth - ellipsisWidth && len-- > 0) {
          str = str.slice(0, len);
          strWidth = ctx.measureText(str).width;
        }

        return {
          text: str + ellipsis,
          width: maxWidth + ellipsisWidth
        };
      }
    },
    drawArrow: function drawArrow(fillStyle) {
      var size = 4;
      var len = this.currentPointList.length;
      if (len < 2) return;
      var start = this.currentPointList[len - 2];
      var end = this.currentPointList[len - 1];
      var ctx = this.ctx; // 移动中心点

      ctx.translate.apply(ctx, linkvue_type_script_lang_js_toConsumableArray(end)); // 箭头原方向垂直向下,
      // 算出直线偏离Y的角, 然后旋转 ,
      // rotate是顺时针旋转的, 所以加个负号

      var ang = Math.atan((end[0] - start[0]) / (end[1] - start[1]));
      ctx.beginPath();

      if (end[1] - start[1] >= 0) {
        ctx.rotate(-ang);
      } else {
        ctx.rotate(Math.PI - ang); // 加个180度，反过来
      }

      ctx.fillStyle = fillStyle;
      ctx.lineTo(-size, -size * 2);
      ctx.lineTo(0, -size);
      ctx.lineTo(size, -size * 2);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
    getCoordinates: function getCoordinates(evt) {
      var clientX = evt.clientX,
          clientY = evt.clientY;

      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          top = _this$$el$getBounding.top,
          left = _this$$el$getBounding.left;

      return [clientX - left, clientY - top];
    },
    isPointInStroke: function isPointInStroke(evt) {
      var _this$getCoordinates = this.getCoordinates(evt),
          _this$getCoordinates2 = linkvue_type_script_lang_js_slicedToArray(_this$getCoordinates, 2),
          x = _this$getCoordinates2[0],
          y = _this$getCoordinates2[1];

      return this.link.isPointInLink([this.left + x, this.top + y], this.currentPathPointList);
    },
    rootMousemove: function rootMousemove(_ref) {
      var evt = _ref.evt;
      this.inPath = this.isPointInStroke(evt);
      return this.inPath;
    }
  },
  watch: {
    'link.pathPointList': function linkPathPointList() {
      this.draw();
    },
    inPath: function inPath() {
      this.initLine();
    },
    'link.meta': {
      deep: true,
      handler: function handler() {
        this.draw();
      }
    },
    'linkBaseStyle': {
      deep: true,
      handler: function handler() {
        this.draw();
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/link.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_linkvue_type_script_lang_js_ = (linkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/link.vue?vue&type=style&index=0&lang=less&
var linkvue_type_style_index_0_lang_less_ = __webpack_require__("7e2d");

// CONCATENATED MODULE: ./packages/link.vue






/* normalize component */

var link_component = normalizeComponent(
  packages_linkvue_type_script_lang_js_,
  linkvue_type_template_id_5b6a584a_render,
  linkvue_type_template_id_5b6a584a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_link = (link_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12c24a87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/markLine.vue?vue&type=template&id=e5ae067e&
var markLinevue_type_template_id_e5ae067e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('canvas',{ref:"markLine",staticClass:"super-flow__mark-line"})}
var markLinevue_type_template_id_e5ae067e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/markLine.vue?vue&type=template&id=e5ae067e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/markLine.vue?vue&type=script&lang=js&
function markLinevue_type_script_lang_js_toConsumableArray(arr) { return markLinevue_type_script_lang_js_arrayWithoutHoles(arr) || markLinevue_type_script_lang_js_iterableToArray(arr) || markLinevue_type_script_lang_js_unsupportedIterableToArray(arr) || markLinevue_type_script_lang_js_nonIterableSpread(); }

function markLinevue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function markLinevue_type_script_lang_js_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function markLinevue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return markLinevue_type_script_lang_js_arrayLikeToArray(arr); }

function markLinevue_type_script_lang_js_slicedToArray(arr, i) { return markLinevue_type_script_lang_js_arrayWithHoles(arr) || markLinevue_type_script_lang_js_iterableToArrayLimit(arr, i) || markLinevue_type_script_lang_js_unsupportedIterableToArray(arr, i) || markLinevue_type_script_lang_js_nonIterableRest(); }

function markLinevue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function markLinevue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return markLinevue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return markLinevue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function markLinevue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function markLinevue_type_script_lang_js_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function markLinevue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var markLinevue_type_script_lang_js_ = ({
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    markLine: Array,
    markColor: String
  },
  mounted: function mounted() {
    this.$refs.markLine.height = this.height;
    this.$refs.markLine.width = this.width;
    this.draw();
  },
  methods: {
    draw: function draw() {
      var ctx = this.$el.getContext('2d');
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.strokeStyle = this.markColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 2]);
      this.markLine.forEach(function (_ref) {
        var _ref2 = markLinevue_type_script_lang_js_slicedToArray(_ref, 2),
            start = _ref2[0],
            end = _ref2[1];

        ctx.beginPath();
        ctx.moveTo.apply(ctx, markLinevue_type_script_lang_js_toConsumableArray(start));
        ctx.lineTo.apply(ctx, markLinevue_type_script_lang_js_toConsumableArray(end));
        ctx.stroke();
      });
    }
  },
  watch: {
    markLine: function markLine() {
      this.draw();
    }
  }
});
// CONCATENATED MODULE: ./packages/markLine.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_markLinevue_type_script_lang_js_ = (markLinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/markLine.vue?vue&type=style&index=0&lang=less&
var markLinevue_type_style_index_0_lang_less_ = __webpack_require__("bce9");

// CONCATENATED MODULE: ./packages/markLine.vue






/* normalize component */

var markLine_component = normalizeComponent(
  packages_markLinevue_type_script_lang_js_,
  markLinevue_type_template_id_e5ae067e_render,
  markLinevue_type_template_id_e5ae067e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var markLine = (markLine_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/index.vue?vue&type=script&lang=js&
function lib_vue_loader_options_packagesvue_type_script_lang_js_toConsumableArray(arr) { return lib_vue_loader_options_packagesvue_type_script_lang_js_arrayWithoutHoles(arr) || lib_vue_loader_options_packagesvue_type_script_lang_js_iterableToArray(arr) || lib_vue_loader_options_packagesvue_type_script_lang_js_unsupportedIterableToArray(arr) || lib_vue_loader_options_packagesvue_type_script_lang_js_nonIterableSpread(); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return lib_vue_loader_options_packagesvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lib_vue_loader_options_packagesvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return lib_vue_loader_options_packagesvue_type_script_lang_js_arrayLikeToArray(arr); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { lib_vue_loader_options_packagesvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function lib_vue_loader_options_packagesvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var lib_vue_loader_options_packagesvue_type_script_lang_js_ = ({
  name: 'super-flow',
  props: {
    draggable: {
      type: Boolean,
      default: true
    },
    linkAddable: {
      type: Boolean,
      default: true
    },
    linkEditable: {
      type: Boolean,
      default: true
    },
    hasMarkLine: {
      type: Boolean,
      default: true
    },
    linkDesc: {
      type: [Function, null],
      default: null
    },
    linkStyle: {
      type: [Function, null],
      default: null
    },
    linkBaseStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    markLineColor: {
      type: String,
      default: '#55abfc'
    },
    origin: {
      type: Array,
      default: function _default() {
        return [0, 0];
      }
    },
    nodeList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    linkList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    graphMenu: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    nodeMenu: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    linkMenu: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    linkPadding: {
      type: Number,
      default: 50
    },
    enterIntercept: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    outputIntercept: {
      type: Function,
      default: function _default() {
        return true;
      }
    }
  },
  data: function data() {
    return {
      graph: new packages_Graph({
        width: this.width,
        height: this.height,
        origin: this.origin
      }),
      menuConf: {
        visible: false,
        position: [0, 0],
        source: null,
        list: []
      },
      moveNodeConf: {
        isMove: false,
        node: null,
        offset: null,
        verticalList: [],
        horizontalList: [],
        markLine: []
      },
      moveAllConf: {
        isMove: false,
        downPosition: [0, 0]
      },
      temEdgeConf: {
        visible: false,
        link: null
      },
      loaded: false,
      clientWidth: 0,
      clientHeight: 0
    };
  },
  components: {
    GraphMenu: packages_menu,
    GraphNode: packages_node,
    GraphLine: packages_link,
    MarkLine: markLine
  },
  computed: {
    maskStyle: function maskStyle() {
      var _this$graph$maskBound = this.graph.maskBoundingClientRect,
          top = _this$graph$maskBound.top,
          right = _this$graph$maskBound.right,
          bottom = _this$graph$maskBound.bottom,
          left = _this$graph$maskBound.left;
      return {
        width: "".concat(right - left, "px"),
        height: "".concat(bottom - top, "px"),
        top: "".concat(top + this.graph.origin[1], "px"),
        left: "".concat(left + this.graph.origin[0], "px")
      };
    }
  },
  mounted: function mounted() {
    var _this = this;

    document.addEventListener('mouseup', this.docMouseup);
    document.addEventListener('mousemove', this.docMousemove);
    this.$once('hook:beforeDestroy', function () {
      document.removeEventListener('mouseup', _this.docMouseup);
      document.removeEventListener('mousemove', _this.docMousemove);
    });
    this.$nextTick(function () {
      _this.graph.initNode(_this.nodeList);

      _this.graph.initLink(_this.linkList);
    });
  },
  methods: {
    initMenu: function initMenu(menu, source) {
      return menu.map(function (subList) {
        return subList.map(function (item) {
          var disable;
          var hidden;

          if (isFun(item.disable)) {
            disable = item.disable(source);
          } else if (isBool(item.disable)) {
            disable = item.disable;
          } else {
            disable = Boolean(item.disable);
          }

          if (isFun(item.hidden)) {
            hidden = item.hidden(source);
          } else if (isBool(item.hidden)) {
            hidden = item.hidden;
          } else {
            hidden = Boolean(item.hidden);
          }

          return _objectSpread(_objectSpread({}, item), {}, {
            disable: disable,
            hidden: hidden
          });
        }).filter(function (item) {
          return !item.hidden;
        });
      }).filter(function (sublist) {
        return sublist.length;
      });
    },
    showContextMenu: function showContextMenu(position, list, source) {
      if (!list.length) return;
      this.$set(this.menuConf, 'position', position);
      this.$set(this.menuConf, 'list', list);
      this.$set(this.menuConf, 'source', source);
      this.menuConf.visible = true;
    },
    docMouseup: function docMouseup(evt) {
      if (this.moveNodeConf.isMove) {
        evt.stopPropagation();
        evt.preventDefault();
      }

      this.moveNodeConf.isMove = false;
      this.moveNodeConf.node = null;
      this.moveNodeConf.offset = null;
      arrayReplace(this.moveNodeConf.markLine, []);
      this.temEdgeConf.visible = false;
      this.temEdgeConf.link = null;
      this.moveAllConf.isMove = false;
    },
    docMousemove: function docMousemove(evt) {
      if (this.moveNodeConf.isMove) {
        this.moveNode(evt);
      } else if (this.temEdgeConf.visible) {
        this.moveTemEdge(evt);
      } else if (this.graph.graphSelected) {
        this.moveWhole(evt);
      } else if (this.linkEditable) {
        this.graph.dispatch({
          type: 'mousemove',
          evt: evt
        }, true);
      }
    },
    moveNode: function moveNode(evt) {
      var _this2 = this;

      var distance = 10;
      var conf = this.moveNodeConf;
      var origin = this.graph.origin;
      var position = vector(conf.offset).differ(getOffset(evt, this.$el)).minus(origin).add([conf.node.width / 2, conf.node.height / 2]).end;

      if (this.hasMarkLine) {
        var resultList = [];
        conf.verticalList.some(function (vertical) {
          var x = position[0];
          var result = vertical - distance < x && vertical + distance > x;

          if (result) {
            position[0] = vertical;
            vertical = Math.floor(vertical);
            vertical += origin[0];
            vertical += vertical % 1 === 0 ? 0.5 : 0;
            resultList.push([[vertical, 0], [vertical, _this2.clientHeight]]);
          }

          return result;
        });
        conf.horizontalList.some(function (horizontal) {
          var y = position[1];
          var result = horizontal - distance < y && horizontal + distance > y;

          if (result) {
            position[1] = horizontal;
            horizontal = Math.floor(horizontal);
            horizontal += origin[1];
            horizontal += horizontal % 1 === 0 ? 0.5 : 0;
            resultList.push([[0, horizontal], [_this2.clientWidth, horizontal]]);
          }

          return result;
        });
        arrayReplace(conf.markLine, resultList);
      }

      conf.node.center = position;
    },
    moveTemEdge: function moveTemEdge(evt) {
      this.temEdgeConf.link.movePosition = getOffset(evt, this.$el);
    },
    moveWhole: function moveWhole(evt) {
      if (this.moveAllConf.isMove) {
        var offset = vector(this.moveAllConf.downPosition).differ([evt.clientX, evt.clientY]).end;
        arrayReplace(this.graph.origin, vector(this.moveAllConf.origin).add(offset).end);
      }
    },
    contextmenu: function contextmenu(evt) {
      var mouseonLink = this.graph.mouseonLink;
      var position = getOffset(evt);
      var list, source;

      if (mouseonLink && mouseonLink.isPointInLink(position)) {
        list = this.initMenu(this.linkMenu, mouseonLink);
        source = mouseonLink;
      } else {
        if (mouseonLink) this.graph.mouseonLink = null;
        list = this.initMenu(this.graphMenu, this.graph);
        source = this.graph;
      }

      this.showContextMenu(position, list, source);
    },
    nodeMousedown: function nodeMousedown(node, offset) {
      if (this.draggable) {
        this.clientWidth = this.$el.clientWidth;
        this.clientHeight = this.$el.clientHeight;
        var verticalList = this.moveNodeConf.verticalList;
        var horizontalList = this.moveNodeConf.horizontalList;
        var centerList = this.graph.nodeList.filter(function (item) {
          return item !== node;
        }).map(function (node) {
          return node.center;
        });
        arrayReplace(verticalList, lib_vue_loader_options_packagesvue_type_script_lang_js_toConsumableArray(new Set(centerList.map(function (center) {
          return center[0];
        }))).sort(function (prev, next) {
          return prev - next;
        }));
        arrayReplace(horizontalList, lib_vue_loader_options_packagesvue_type_script_lang_js_toConsumableArray(new Set(centerList.map(function (center) {
          return center[1];
        }))).sort(function (prev, next) {
          return prev - next;
        }));
        this.moveNodeConf.isMove = true;
        this.moveNodeConf.node = node;
        this.moveNodeConf.offset = offset;
      }
    },
    nodeMouseenter: function nodeMouseenter(evt, node, offset) {
      var link = this.temEdgeConf.link;

      if (this.enterIntercept(link.start, node, this.graph)) {
        link.end = node;
        link.endAt = offset;
      }
    },
    nodeMouseleave: function nodeMouseleave() {
      this.temEdgeConf.link.end = null;
    },
    nodeMouseup: function nodeMouseup() {
      this.graph.addLink(this.temEdgeConf.link);
    },
    nodeContextmenu: function nodeContextmenu(evt, node) {
      var list = this.initMenu(this.nodeMenu, node);
      if (!list.length) return;
      this.$set(this.menuConf, 'position', getOffset(evt, this.$el));
      this.$set(this.menuConf, 'list', list);
      this.$set(this.menuConf, 'source', node);
      this.menuConf.visible = true;
    },
    sideMousedown: function sideMousedown(evt, node, startAt) {
      if (this.linkAddable) {
        var link = this.graph.createLink({
          start: node,
          startAt: startAt
        });
        link.movePosition = getOffset(evt, this.$el);
        this.$set(this.temEdgeConf, 'link', link);
        this.temEdgeConf.visible = true;
      }
    },
    nodeIntercept: function nodeIntercept(node) {
      var _this3 = this;

      return function () {
        return _this3.outputIntercept(node, _this3.graph);
      };
    },
    menuItemSelect: function menuItemSelect() {
      this.menuConf.visible = false;
    },
    selectAllMaskMouseDown: function selectAllMaskMouseDown(evt) {
      this.moveAllConf.isMove = true;
      this.moveAllConf.origin = lib_vue_loader_options_packagesvue_type_script_lang_js_toConsumableArray(this.graph.origin);
      this.moveAllConf.downPosition = [evt.clientX, evt.clientY];
    },
    selectedAll: function selectedAll() {
      this.graph.selectAll();
    },
    toJSON: function toJSON() {
      return this.graph.toJSON();
    },
    getMouseCoordinate: function getMouseCoordinate(clientX, clientY) {
      var offset = getOffset({
        clientX: clientX,
        clientY: clientY
      }, this.$el);
      return vector(offset).minus(this.graph.origin).end;
    },
    addNode: function addNode(options) {
      return this.graph.addNode(options);
    }
  },
  watch: {
    'graph.graphSelected': function graphGraphSelected() {
      var _this4 = this;

      if (this.graph.graphSelected) {
        this.$nextTick(function () {
          _this4.$refs.selectAllMask.focus();
        });
      }
    },
    'graph.mouseonLink': function graphMouseonLink() {
      if (this.graph.mouseonLink) {
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = '';
      }
    },
    origin: function origin() {
      this.graph.origin = this.origin || [];
    },
    nodeList: function nodeList() {
      this.graph.initNode(this.nodeList);
    },
    linkList: function linkList() {
      this.graph.initLink(this.linkList);
    }
  },
  install: function install(Vue) {
    Vue.component(this.name, this);
  }
});
// CONCATENATED MODULE: ./packages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packagesvue_type_script_lang_js_ = (lib_vue_loader_options_packagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/index.vue?vue&type=style&index=0&lang=less&
var packagesvue_type_style_index_0_lang_less_ = __webpack_require__("3ad9");

// CONCATENATED MODULE: ./packages/index.vue






/* normalize component */

var packages_component = normalizeComponent(
  packagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_0 = (packages_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ })["default"];
});