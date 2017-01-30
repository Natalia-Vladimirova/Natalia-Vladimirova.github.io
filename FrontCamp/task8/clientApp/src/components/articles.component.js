let ArticlesComponent = {
	templateUrl: 'src/components/articles.html',
	controllerAs: 'articlesCtrl',
	controller: function(articleService) {
		let ctrl = this;
		
		articleService.getAll()
			.then(data => {
				ctrl.articles = data;
				ctrl.count = data.length;
			})
			.catch(error => { });
	}
};

ArticlesComponent.$inject = ['articleService'];

export default ArticlesComponent;
