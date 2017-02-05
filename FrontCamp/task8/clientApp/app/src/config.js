function config($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	
	$routeProvider
		.when('/', {
			template: '<articles></articles>'
		})
		.when('/article/create', {
			templateUrl: 'app/src/articles/create.html',
			controller: 'CreateController',
			controllerAs: 'formCtrl'
		})
		.when('/article/update/:id', {
			templateUrl: 'app/src/articles/update.html',
			controller: 'UpdateController',
			controllerAs: 'formCtrl'
		})
		.when('/article/delete/:id', {
			templateUrl: 'app/src/articles/delete.html',
			controller: 'DeleteController',
			controllerAs: 'formCtrl'
		})
		.when('/article/:id', {
			templateUrl: 'app/src/articles/article.html',
			controller: 'ArticleController',
			controllerAs: 'articleCtrl'
		})
		.otherwise({
			redirectTo :'/'
		});
}

config.$inject = ['$routeProvider', '$locationProvider'];

export default config;
