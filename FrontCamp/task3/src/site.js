'use strict';

import '../styles/app.less';

import { Loader } from './loader';
import { CategoriesPresenter } from './categoriesPresenter';

document.addEventListener("DOMContentLoaded", function() {
	getNewsCategories();
});

document.getElementById("showNews").addEventListener("click", function() {
    getNews('bbc-news', 'BBC News');
});

function getNewsCategories(){
	let loader = new Loader();
	let presenter = new CategoriesPresenter();
	
	loader.load('https://newsapi.org/v1/sources')
		.then(data => {
			presenter.showCategories(data);
		});
}

function getNews(source, categoryName) {
    require.ensure([], function(require) {
        let NewsPresenter = require('./newsPresenter').NewsPresenter;
        let newsPresenter = new NewsPresenter();
        let loader = new Loader();

        let apiKey = '8ac8c1098fbe4ec0b3f6e8851facac4a';
        let requestString = `https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`;

        loader.load(requestString)
            .then(data => {
                newsPresenter.showAllNews(data, categoryName);
            });
    });
}

export {getNews};