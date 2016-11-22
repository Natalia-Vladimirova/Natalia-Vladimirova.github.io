'use strict';

class Loader {
	load(requestString) {
		let request = new Request(requestString);
		let init = { method: 'GET'};

		return fetch(request, init)
				.then(response => response.json())
				.catch(error => console.log('error: ' + error));
	}
};

class Presenter {
	getHtmlTemplate(path) {
		return fetch(path)
				.then(response => response.text())
				.catch(error => console.log('error: ' + error));
	}

	showCategory(category, parent) {
		this.getHtmlTemplate('templates/category.html')
			.then(data => {
				let li = document.createElement('li');
				li.innerHTML = data
					.replace(/CATEGORY_ID/, category.id)
					.replace(/CATEGORY_NAME/g, category.name);
				parent.appendChild(li);
			});
	}

	showNews(news, parent) {
		let description = news.description ? news.description : '';
		let author = news.author ? 'Author: ' + news.author : '';
		let publishedAt = news.publishedAt ? 'Published at: ' + news.publishedAt : '';

		this.getHtmlTemplate('templates/news.html')
			.then(data => {
				let div = document.createElement('div');
				div.className = 'news';
				div.innerHTML = data
					.replace(/NEWS_URL/, news.url)
					.replace(/NEWS_TITLE/, news.title)
					.replace(/NEWS_AUTHOR/, author)
					.replace(/NEWS_PUBLISHEDAT/, publishedAt)
					.replace(/NEWS_URLTOIMAGE/, news.urlToImage)
					.replace(/NEWS_DESCRIPTION/, description);
				parent.appendChild(div);
			});
	}

	showCategories(categories) {
		let allCategories = document.getElementById('categories');

		for (let item of categories.sources) {
				this.showCategory(item, allCategories);
			}
	}

	showAllNews(news, header) {
		this.getHtmlTemplate('templates/newsHeader.html')
			.then(data => {
				let allNews = document.getElementById('allNews');
				allNews.innerHTML = data.replace(/NEWS_HEADER/, header);
				
				for (let item of news.articles) {
					this.showNews(item, allNews);
				}
			});
	}
}


document.addEventListener("DOMContentLoaded", function() {
	getNewsCategories();
	getNews('bbc-news', 'BBC News');
});

function getNewsCategories(){
	let loader = new Loader();
	let presenter = new Presenter();
	
	loader.load('https://newsapi.org/v1/sources')
		.then(data => {
			presenter.showCategories(data);
		});
}

function getNews(source, categoryName) {
	let loader = new Loader();
	let presenter = new Presenter();

	let apiKey = '8ac8c1098fbe4ec0b3f6e8851facac4a';
	let requestString = `https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`;

	loader.load(requestString)
		.then(data => {
			presenter.showAllNews(data, categoryName);
		});
}