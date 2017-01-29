class CreateController {
	constructor(articleService, $location, $scope) {
		this.ctrl = $scope;
		this.buttonValue = 'Create';
		this.articleService = articleService;
		this.$location = $location;
	}
		
	submit() {
		if (!this.ctrl.article) {
			this.ctrl.error_message = 'Title and text are required';
			return;
		}
		console.log(this.ctrl.article);
		this.articleService.create(this.ctrl.article)
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

CreateController.$inject = ['articleService', '$location', '$scope'];

export default CreateController;