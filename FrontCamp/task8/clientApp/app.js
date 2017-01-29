angular
	.module('myApp', ['ngRoute', 'ngResource'])
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
