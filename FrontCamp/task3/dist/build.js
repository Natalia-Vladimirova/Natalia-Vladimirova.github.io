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
/******/ 	__webpack_require__.p = "";

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

	var _loader = __webpack_require__(2);

	var _presenter = __webpack_require__(3);

	document.addEventListener("DOMContentLoaded", function () {
		getNewsCategories();
		getNews('bbc-news', 'BBC News');
	});

	function getNewsCategories() {
		var loader = new _loader.Loader();
		var presenter = new _presenter.Presenter();

		loader.load('https://newsapi.org/v1/sources').then(function (data) {
			presenter.showCategories(data);
		});
	}

	function getNews(source, categoryName) {
		var loader = new _loader.Loader();
		var presenter = new _presenter.Presenter();

		var apiKey = '8ac8c1098fbe4ec0b3f6e8851facac4a';
		var requestString = 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey;

		loader.load(requestString).then(function (data) {
			presenter.showAllNews(data, categoryName);
		});
	}

	exports.getNews = getNews;

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Presenter = exports.Presenter = function () {
	    function Presenter() {
	        _classCallCheck(this, Presenter);
	    }

	    _createClass(Presenter, [{
	        key: 'getHtmlTemplate',
	        value: function getHtmlTemplate(path) {
	            return fetch(path).then(function (response) {
	                return response.text();
	            }).catch(function (error) {
	                return console.log('error: ' + error);
	            });
	        }
	    }, {
	        key: 'showCategory',
	        value: function showCategory(category, parent) {
	            this.getHtmlTemplate('templates/category.html').then(function (data) {
	                var li = document.createElement('li');
	                li.innerHTML = data.replace(/CATEGORY_ID/, category.id).replace(/CATEGORY_NAME/g, category.name);
	                parent.appendChild(li);
	            });
	        }
	    }, {
	        key: 'showNews',
	        value: function showNews(news, parent) {
	            var description = news.description ? news.description : '';
	            var author = news.author ? 'Author: ' + news.author : '';
	            var publishedAt = news.publishedAt ? 'Published at: ' + news.publishedAt : '';

	            this.getHtmlTemplate('templates/news.html').then(function (data) {
	                var div = document.createElement('div');
	                div.className = 'news';
	                div.innerHTML = data.replace(/NEWS_URL/, news.url).replace(/NEWS_TITLE/, news.title).replace(/NEWS_AUTHOR/, author).replace(/NEWS_PUBLISHEDAT/, publishedAt).replace(/NEWS_URLTOIMAGE/, news.urlToImage).replace(/NEWS_DESCRIPTION/, description);
	                parent.appendChild(div);
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
	    }, {
	        key: 'showAllNews',
	        value: function showAllNews(news, header) {
	            var _this = this;

	            this.getHtmlTemplate('templates/newsHeader.html').then(function (data) {
	                var allNews = document.getElementById('allNews');
	                allNews.innerHTML = data.replace(/NEWS_HEADER/, header);

	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;

	                try {
	                    for (var _iterator2 = news.articles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var item = _step2.value;

	                        _this.showNews(item, allNews);
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }
	            });
	        }
	    }]);

	    return Presenter;
	}();

/***/ }
/******/ ]);