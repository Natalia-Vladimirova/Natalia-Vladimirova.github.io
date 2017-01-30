class ArticleService {
	constructor($resource) {
		this.$resource = $resource;
		let url = 'http://localhost:3000/articles/:id';
		this.articleResource = $resource(url, { id: '@id' }, {
			create: {
				method: "POST",
				transformRequest: angular.identity,
				headers: { 'Content-Type': undefined }
			},
			update: {
				method: "PUT",
				transformRequest: angular.identity,
				headers: { 'Content-Type': undefined }
			}
		});
	}
	
	getAll() {
		return this.articleResource.query().$promise;
	}

	get(id) {
		return this.articleResource.get({ id: id }).$promise;
	}

	create(article, file) {
		let fd = new FormData();
		fd.append('title', article.title);
		fd.append('text', article.text);
		fd.append('image', file);
		
		return this.articleResource.create({}, fd).$promise;
	}

	update(article, file) {
		let fd = new FormData();
		fd.append('id', article._id);
		fd.append('title', article.title);
		fd.append('text', article.text);
		fd.append('currentImage', article.image);
		fd.append('image', file);
		
		return this.articleResource.update({}, fd).$promise;
	}

	delete(id) {
		return this.articleResource.delete({ id: id }).$promise;
	}
}

ArticleService.$inject = ['$resource'];

export default ArticleService;
