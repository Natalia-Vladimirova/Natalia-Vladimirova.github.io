webpackJsonpnewsApp([1],{

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NewsPresenter = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateLoader = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewsPresenter = exports.NewsPresenter = function () {
	    function NewsPresenter() {
	        _classCallCheck(this, NewsPresenter);
	    }

	    _createClass(NewsPresenter, [{
	        key: 'showNews',
	        value: function showNews(news, parent, loader) {
	            var description = news.description ? news.description : '';
	            var author = news.author ? 'Author: ' + news.author : '';
	            var publishedAt = news.publishedAt ? 'Published at: ' + news.publishedAt : '';

	            loader.getHtmlTemplate('templates/news.html').then(function (data) {
	                var div = document.createElement('div');
	                div.className = 'news';
	                div.innerHTML = data.replace(/NEWS_URL/, news.url).replace(/NEWS_TITLE/, news.title).replace(/NEWS_AUTHOR/, author).replace(/NEWS_PUBLISHEDAT/, publishedAt).replace(/NEWS_URLTOIMAGE/, news.urlToImage).replace(/NEWS_DESCRIPTION/, description);
	                parent.appendChild(div);
	            });
	        }
	    }, {
	        key: 'showAllNews',
	        value: function showAllNews(news, header) {
	            var _this = this;

	            var loader = new _templateLoader.TemplateLoader();
	            loader.getHtmlTemplate('templates/newsHeader.html').then(function (data) {
	                var allNews = document.getElementById('allNews');
	                allNews.innerHTML = data.replace(/NEWS_HEADER/, header);

	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = news.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;

	                        _this.showNews(item, allNews, loader);
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
	}();

/***/ }

});