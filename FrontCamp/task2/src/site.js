'use strict';

window.onload = function() {
	getNewsCategories();
	getNews('bbc-news', 'BBC News');
};

function getNewsCategories(){
	let categories = document.getElementById('categories');
	categories.innerHTML = '';

	let requestString = 'https://newsapi.org/v1/sources';
	let init = { method: 'GET'};

	fetch(requestString, init)
		.then(response => response.json())
		.then(data => {
			for (let category of data.sources) {
				showCategory(category, categories);
			}
		})
		.catch(error => console.log('error: ' + error));
}

function getNews(source, categoryName) {
	let allNews = document.getElementById('allNews');
	allNews.innerHTML = `<h1>${categoryName}</h1>`;

	let apiKey = '8ac8c1098fbe4ec0b3f6e8851facac4a';
	let requestString = `https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`;

	let request = new Request(requestString);
	let init = { method: 'GET'};

	fetch(request, init)
		.then(response => response.json())
		.then(data => {
			for (let news of data.articles) {
				showNews(news, allNews);
			}
		})
		.catch(error => console.log('error: ' + error));
}

function showNews(news, parent) {
	let description = news.description ? news.description : '';
	let author = news.author ? 'Author: ' + news.author : '';
	let publishedAt = news.publishedAt ? 'Published at: ' + news.publishedAt : '';

	let div = document.createElement('div');
    div.className = 'news';
    div.innerHTML = 
    	`<h3><a href="${news.url}">${news.title}</a></h3>
    	<h4>${author}</h4>
    	<h6>${publishedAt}</h6>
    	<div class="image">
    		<img src="${news.urlToImage}" alt="no picture">
    	</div>
    	<p class="description">${description}</p>`;

	parent.appendChild(div);
}

function showCategory(category, parent) {
	let li = document.createElement('li');
	li.innerHTML = 
		`<a href='#' onclick="getNews('${category.id}', '${category.name}')">
			${category.name}
		</a>`;

	parent.appendChild(li);
}