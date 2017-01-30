class DeleteController {
	constructor(articleService, $location, $routeParams) {
		this.articleService = articleService;
		this.$location = $location;
		
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
	
	submit() {
		this.articleService.delete(this.article._id)
			.then(() => {
				this.$location.path('/');
			})
			.catch(error => {
				this.error_message = 'An error occurred';
			})
	}
}

DeleteController.$inject = ['articleService', '$location', '$routeParams'];

export default DeleteController;
