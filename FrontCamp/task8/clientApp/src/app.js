import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import ngFileUpload from 'ng-file-upload';

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

import '../styles/app.less';
import '../styles/validate.less';
import '../styles/article-list.less';
import '../styles/article/read.less';
import '../styles/article/create.less';
import '../styles/article/delete.less';

angular
	.module('myApp', [ngRoute, ngResource, ngFileUpload])
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
