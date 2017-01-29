function config($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	
	$routeProvider
		.when('/', {
			template: '<articles></articles>'
		})
		.when('/article/create', {
			templateUrl: 'articles/create.html',
			controller: 'CreateController',
			controllerAs: 'formCtrl'
		})
		.when('/article/update/:id', {
			templateUrl: 'articles/update.html',
			controller: 'UpdateController',
			controllerAs: 'formCtrl'
		})
		.when('/article/delete/:id', {
			templateUrl: 'articles/delete.html',
			controller: 'DeleteController',
			controllerAs: 'formCtrl'
		})
		.when('/article/:id', {
			templateUrl: 'articles/article.html',
			controller: 'ArticleController',
			controllerAs: 'articleCtrl'
		})
		.otherwise({
			redirectTo :'/'
		});
}

config.$inject = ['$routeProvider', '$locationProvider'];
