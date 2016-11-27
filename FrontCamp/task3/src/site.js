'use strict';

import { Loader } from './loader';
import { Presenter } from './presenter';

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

export {getNews};