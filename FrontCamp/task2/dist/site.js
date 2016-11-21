'use strict';

window.onload = function () {
	getNewsCategories();
	getNews('bbc-news', 'BBC News');
};

function getNewsCategories() {
	var categories = document.getElementById('categories');
	categories.innerHTML = '';

	var requestString = 'https://newsapi.org/v1/sources';
	var init = { method: 'GET' };

	fetch(requestString, init).then(function (response) {
		return response.json();
	}).then(function (data) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = data.sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var category = _step.value;

				showCategory(category, categories);
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
	}).catch(function (error) {
		return console.log('error: ' + error);
	});
}

function getNews(source, categoryName) {
	var allNews = document.getElementById('allNews');
	allNews.innerHTML = '<h1>' + categoryName + '</h1>';

	var apiKey = '8ac8c1098fbe4ec0b3f6e8851facac4a';
	var requestString = 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey;

	var request = new Request(requestString);
	var init = { method: 'GET' };

	fetch(request, init).then(function (response) {
		return response.json();
	}).then(function (data) {
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = data.articles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var news = _step2.value;

				showNews(news, allNews);
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
	}).catch(function (error) {
		return console.log('error: ' + error);
	});
}

function showNews(news, parent) {
	var description = news.description ? news.description : '';
	var author = news.author ? 'Author: ' + news.author : '';
	var publishedAt = news.publishedAt ? 'Published at: ' + news.publishedAt : '';

	var div = document.createElement('div');
	div.className = 'news';
	div.innerHTML = '<h3><a href="' + news.url + '">' + news.title + '</a></h3>\n    \t<h4>' + author + '</h4>\n    \t<h6>' + publishedAt + '</h6>\n    \t<div class="image">\n    \t\t<img src="' + news.urlToImage + '" alt="no picture">\n    \t</div>\n    \t<p class="description">' + description + '</p>';

	parent.appendChild(div);
}

function showCategory(category, parent) {
	var li = document.createElement('li');
	li.innerHTML = '<a href=\'#\' onclick="getNews(\'' + category.id + '\', \'' + category.name + '\')">\n\t\t\t' + category.name + '\n\t\t</a>';

	parent.appendChild(li);
}