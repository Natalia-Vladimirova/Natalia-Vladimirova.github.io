var newsApp =
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
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNews = undefined;

	__webpack_require__(2);

	var _loader = __webpack_require__(6);

	var _presenterFactory = __webpack_require__(7);

	document.addEventListener("DOMContentLoaded", function () {
	    var factory = _presenterFactory.PresenterFactory.getInstance();
	    var presenter = factory.getPresenter('NewsPresenter');
	    presenter.subscribe(showNews);

	    getNewsCategories();
	    getNews('bbc-news', 'BBC News');
	});

	function getNewsCategories() {
	    var loader = new _loader.Loader();
	    var factory = _presenterFactory.PresenterFactory.getInstance();
	    var presenter = factory.getPresenter('CategoriesPresenter');

	    loader.load(('https://newsapi.org/v1') + '/sources').then(function (data) {
	        presenter.showCategories(data);
	    });
	}

	function getNews(source, categoryName) {
	    var loader = new _loader.Loader();
	    var factory = _presenterFactory.PresenterFactory.getInstance();
	    var presenter = factory.getPresenter('NewsPresenter');

	    var requestString = ('https://newsapi.org/v1') + '/articles?source=' + source + '&apiKey=' + ('8ac8c1098fbe4ec0b3f6e8851facac4a');

	    document.getElementById('allNews').innerHTML = '';

	    loader.load(requestString).then(function (data) {
	        presenter.showAllNews(data, categoryName);
	    });
	}

	function showNews(data) {
	    document.getElementById('allNews').innerHTML += data;
	}

	exports.getNews = getNews;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./app.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./app.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n  height: 100%;\n  margin: 0;\n}\nbody {\n  background-color: #C0C0C0;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh6,\nul {\n  margin: 0;\n}\nh1,\nh2,\nh3 {\n  text-align: center;\n}\nh1,\nh2 {\n  margin-bottom: 5%;\n}\na:hover,\na:visited,\na:link,\na:active {\n  text-decoration: none;\n}\na:link,\na:visited {\n  color: black;\n}\na:hover {\n  color: #808080;\n}\na:active {\n  color: #696969;\n}\n.container {\n  position: relative;\n  background-color: white;\n  min-height: 100%;\n  width: 80%;\n  margin: auto;\n}\n.container .content {\n  padding-bottom: 30px;\n  overflow: auto;\n}\n.container .content .news-menu {\n  width: 26%;\n  padding: 2%;\n  display: inline-block;\n}\n.container .content .all-news {\n  display: inline-block;\n  width: 66%;\n  padding: 2%;\n}\n.container .content .all-news .news {\n  overflow: auto;\n  padding-bottom: 4%;\n}\n.container .content .all-news .news .image {\n  margin-top: 1%;\n}\n.container .content .all-news .news .image img {\n  width: 100%;\n}\n.container .content .all-news .news .description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.container .footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 30px;\n  text-align: center;\n  font-family: cursive, verdana;\n  color: #696969;\n  background: #C0C0C0;\n  background: linear-gradient(to bottom, #FFFFFF, #C0C0C0);\n}\n@media only screen and (max-width: 400px) {\n  .container {\n    width: 100%;\n  }\n  .container .content .news-menu,\n  .container .content .all-news {\n    width: 96%;\n  }\n}\n@media only screen and (min-width: 401px) and (max-width: 800px) {\n  .container .content .news-menu,\n  .container .content .all-news {\n    width: 96%;\n  }\n}\n@media only screen and (min-width: 801px) {\n  .container .content .news-menu {\n    float: left;\n  }\n}\n@media only screen and (max-width: 550px) {\n  .container .content .all-news .news .image {\n    width: 100%;\n    margin-right: 0;\n  }\n}\n@media only screen and (min-width: 551px) {\n  .container .content .all-news .news .image {\n    width: 36%;\n    margin-right: 2%;\n    float: left;\n  }\n}\n#nav > a {\n  display: none;\n}\n@media only screen and (max-width: 800px) {\n  #bigCategoryHeader {\n    display: none;\n  }\n  h2 {\n    margin-bottom: 0;\n    text-align: left;\n  }\n  #nav {\n    position: relative;\n  }\n  #nav:not(:target) > a:first-of-type,\n  #nav:target > a:last-of-type {\n    display: block;\n  }\n  #nav > ul {\n    height: auto;\n    display: none;\n    position: absolute;\n    left: 0;\n    right: 0;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  }\n  #nav:target > ul {\n    display: block;\n    background-color: #C0C0C0;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Loader = exports.Loader = function () {
	    function Loader() {
	        _classCallCheck(this, Loader);
	    }

	    _createClass(Loader, [{
	        key: 'load',
	        value: function load(requestString) {
	            var request = new Request(requestString);
	            var init = { method: 'GET' };

	            return fetch(request, init).then(function (response) {
	                return response.json();
	            }).catch(function (error) {
	                return console.log('error: ' + error);
	            });
	        }
	    }]);

	    return Loader;
	}();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.PresenterFactory = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _categoriesPresenter = __webpack_require__(8);

	var _newsPresenter = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PresenterFactory = exports.PresenterFactory = function () {
		function PresenterFactory() {
			_classCallCheck(this, PresenterFactory);

			this.presenters = new Map();
		}

		_createClass(PresenterFactory, [{
			key: 'getPresenter',
			value: function getPresenter(key) {
				var presenter = this.presenters.get(key);

				if (presenter === undefined) {
					switch (key) {
						case 'CategoriesPresenter':
							presenter = new _categoriesPresenter.CategoriesPresenter();
							break;
						case 'NewsPresenter':
							presenter = new _newsPresenter.NewsPresenter();
							break;
					}

					if (presenter === undefined) {
						throw 'There is no presenter for key \'' + key + '\'';
					} else {
						this.presenters.set(key, presenter);
					}
				}

				return presenter;
			}
		}], [{
			key: 'getInstance',
			value: function getInstance() {
				if (!PresenterFactory.instance) {
					PresenterFactory.instance = new PresenterFactory();
				}

				return PresenterFactory.instance;
			}
		}]);

		return PresenterFactory;
	}();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CategoriesPresenter = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateLoader = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CategoriesPresenter = exports.CategoriesPresenter = function () {
	    function CategoriesPresenter() {
	        _classCallCheck(this, CategoriesPresenter);
	    }

	    _createClass(CategoriesPresenter, [{
	        key: 'showCategory',
	        value: function showCategory(category, parent) {
	            var loader = new _templateLoader.TemplateLoader();
	            loader.getHtmlTemplate('templates/category.html').then(function (data) {
	                var li = document.createElement('li');
	                li.innerHTML = data.replace(/CATEGORY_ID/, category.id).replace(/CATEGORY_NAME/g, category.name);
	                parent.appendChild(li);
	            });
	        }
	    }, {
	        key: 'showCategories',
	        value: function showCategories(categories) {
	            var allCategories = document.getElementById('categories');

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = categories.sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;

	                    this.showCategory(item, allCategories);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }]);

	    return CategoriesPresenter;
	}();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TemplateLoader = exports.TemplateLoader = function () {
	    function TemplateLoader() {
	        _classCallCheck(this, TemplateLoader);
	    }

	    _createClass(TemplateLoader, [{
	        key: 'getHtmlTemplate',
	        value: function getHtmlTemplate(path) {
	            return fetch(path).then(function (response) {
	                return response.text();
	            }).catch(function (error) {
	                return console.log('error: ' + error);
	            });
	        }
	    }]);

	    return TemplateLoader;
	}();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NewsPresenter = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _observable = __webpack_require__(11);

	var _templateLoader = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewsPresenter = exports.NewsPresenter = function (_Observable) {
	    _inherits(NewsPresenter, _Observable);

	    function NewsPresenter() {
	        _classCallCheck(this, NewsPresenter);

	        return _possibleConstructorReturn(this, (NewsPresenter.__proto__ || Object.getPrototypeOf(NewsPresenter)).apply(this, arguments));
	    }

	    _createClass(NewsPresenter, [{
	        key: 'showNews',
	        value: function showNews(news, loader) {
	            var _this2 = this;

	            var description = news.description ? news.description : '';
	            var author = news.author ? 'Author: ' + news.author : '';
	            var publishedAt = news.publishedAt ? 'Published at: ' + news.publishedAt : '';

	            loader.getHtmlTemplate('templates/news.html').then(function (data) {
	                var result = data.replace(/NEWS_URL/, news.url).replace(/NEWS_TITLE/, news.title).replace(/NEWS_AUTHOR/, author).replace(/NEWS_PUBLISHEDAT/, publishedAt).replace(/NEWS_URLTOIMAGE/, news.urlToImage).replace(/NEWS_DESCRIPTION/, description);

	                _this2.notify(result);
	            });
	        }
	    }, {
	        key: 'showAllNews',
	        value: function showAllNews(news, header) {
	            var _this3 = this;

	            var loader = new _templateLoader.TemplateLoader();
	            loader.getHtmlTemplate('templates/newsHeader.html').then(function (data) {
	                var resultData = data.replace(/NEWS_HEADER/, header);
	                _this3.notify(resultData);

	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = news.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;

	                        _this3.showNews(item, loader);
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            });
	        }
	    }]);

	    return NewsPresenter;
	}(_observable.Observable);

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observable = exports.Observable = function () {
		function Observable() {
			_classCallCheck(this, Observable);

			this.observers = [];
		}

		_createClass(Observable, [{
			key: "subscribe",
			value: function subscribe(callback) {
				this.observers.push(callback);
			}
		}, {
			key: "unsubscribe",
			value: function unsubscribe(callback) {
				var index = this.observers.indexOf(callback);
				this.observers.splice(index, 1);
			}
		}, {
			key: "notify",
			value: function notify(data) {
				this.observers.forEach(function (callback) {
					callback(data);
				});
			}
		}]);

		return Observable;
	}();

/***/ }
/******/ ]);