import config from './config';

import ArticleService from './services/article.service';
import ArticleController from './articles/article.controller';
import CreateController from './articles/create.controller';
import UpdateController from './articles/update.controller';
import DeleteController from './articles/delete.controller';

import ArticlesComponent from './components/articles.component';
import ButtonComponent from './components/button.component';
import ArticleForm from './components/article.form.directive';
import MoreThan from './components/article.length.validator';

angular
	.module('app', ['ngRoute', 'ngResource'])
	.config(config)
	.service('articleService', ArticleService)
	.controller('ArticleController', ArticleController)
	.controller('CreateController', CreateController)
	.controller('UpdateController', UpdateController)
	.controller('DeleteController', DeleteController)
	.component('articles', ArticlesComponent)
	.component('customButton', ButtonComponent)
	.directive('articleForm', ArticleForm)
	.directive('moreThan', MoreThan);

export default 'app';