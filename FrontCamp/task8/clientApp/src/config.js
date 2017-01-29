function config($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	
	$routeProvider
		.when('/', {
			template: '<articles></articles>'
		})
		.when('/article/create', {
			templateUrl: 'src/articles/create.html',
			controller: 'CreateController',
			controllerAs: 'formCtrl'
		})
		.when('/article/update/:id', {
			templateUrl: 'src/articles/update.html',
			controller: 'UpdateController',
			controllerAs: 'formCtrl'
		})
		.when('/article/delete/:id', {
			templateUrl: 'src/articles/delete.html',
			controller: 'DeleteController',
			controllerAs: 'formCtrl'
		})
		.when('/article/:id', {
			templateUrl: 'src/articles/article.html',
			controller: 'ArticleController',
			controllerAs: 'articleCtrl'
		})
		.otherwise({
			redirectTo :'/'
		});
}

config.$inject = ['$routeProvider', '$locationProvider'];

export default config;
