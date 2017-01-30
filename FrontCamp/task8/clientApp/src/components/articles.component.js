let ArticlesComponent = {
	templateUrl: 'src/components/articles.html',
	controllerAs: 'articlesCtrl',
	controller: function(articleService) {
		let ctrl = this;
		
		articleService.getAll()
			.then(response => {
				ctrl.articles = response.data;
				ctrl.count = response.data.length;
			})
			.catch(error => { });
	}
};

ArticlesComponent.$inject = ['articleService'];

export default ArticlesComponent;
