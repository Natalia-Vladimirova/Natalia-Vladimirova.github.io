class UpdateController {
	constructor(articleService, $location, $scope, $routeParams) {
		this.ctrl = $scope;
		this.buttonValue = 'Update';
		this.articleService = articleService;
		this.$location = $location;
		
		let ctrl = this;
		let id = $routeParams.id;
		
		articleService.get(id)
			.then(response => {
				this.ctrl.article = response.data;
				ctrl.article = response.data;
			})
			.catch(error => {
				$location.path('/');
			});
	}
		
	submit() {
		if (!this.ctrl.article) {
			this.ctrl.error_message = 'Title and text are required';
			return;
		}
		this.articleService.update(this.ctrl.article)
			.then(response => {
				if (response.data.errors) {
					this.ctrl.error_message = response.data.message;
				}
				else {
					this.$location.path('/');
				}
			})
			.catch(error => {
				this.ctrl.error_message = error;
			})
	}
}

UpdateController.$inject = ['articleService', '$location', '$scope', '$routeParams'];