'use strict';

import '../styles/app.less';

import { Loader } from './loader';
import { PresenterFactory } from './presenterFactory';

document.addEventListener("DOMContentLoaded", function() {
    let factory = PresenterFactory.getInstance();
    let presenter = factory.getPresenter('NewsPresenter');
    presenter.subscribe(showNews);

	getNewsCategories();
    getNews('bbc-news', 'BBC News');
});

function getNewsCategories(){
	let loader = new Loader();
    let factory = PresenterFactory.getInstance();
    let presenter = factory.getPresenter('CategoriesPresenter');
	
	loader.load(`${SOURCE_SITE}/sources`)
		.then(data => {
			presenter.showCategories(data);
		});
}

function getNews(source, categoryName) {
    let loader = new Loader();
    let factory = PresenterFactory.getInstance();
    let presenter = factory.getPresenter('NewsPresenter');

    let requestString = `${SOURCE_SITE}/articles?source=${source}&apiKey=${API_KEY}`;
    
    document.getElementById('allNews').innerHTML = '';
    
    loader.load(requestString)
        .then(data => {
            presenter.showAllNews(data, categoryName);
        });
}

function showNews(data) {
    document.getElementById('allNews').innerHTML += data;
}

export { getNews };