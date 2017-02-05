class ArticleController {
	constructor(articleService, $location, $routeParams) {
		let ctrl = this;
		let id = $routeParams.id;
		
		articleService.get(id)
			.then(data => {
				ctrl.article = data;
			})
			.catch(error => {
				$location.path('/');
			});
	}
}

ArticleController.$inject = ['articleService', '$location', '$routeParams'];

export default ArticleController;
