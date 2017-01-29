class ArticleController {
	constructor(articleService, $location, $routeParams) {
		let ctrl = this;
		let id = $routeParams.id;
		
		articleService.get(id)
			.then(response => {
				ctrl.article = response.data;
			})
			.catch(error => {
				$location.path('/');
			});
	}
}

ArticleController.$inject = ['articleService', '$location', '$routeParams'];
