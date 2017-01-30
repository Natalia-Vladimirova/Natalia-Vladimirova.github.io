class ArticleService {
	constructor($resource, $http, Upload) {
		this.$resource = $resource;
		this.$http = $http;
		this.uploader = Upload;
	}
	
	getAll() {
		let url = 'http://localhost:3000/articles/json';
		
		return this.$http({
			method: 'GET',
			url: url
		});
	}

	get(id) {
		let url = `http://localhost:3000/articles/${id}/json`;
		
		return this.$http({
			method: 'GET',
			url: url
		});
	}

	create(article, file) {
		let url = 'http://localhost:3000/articles/create/json';
		
		return this.uploader.upload({
			method: 'POST',
            url: url,
            data: {
				title: article.title,
				text: article.text,
				image: file
			}
        });
	}

	update(article, file) {
		let url = 'http://localhost:3000/articles/update/json';
		
		return this.uploader.upload({
			method: 'POST',
			url: url,
			data: {
				id: article._id, 
				title: article.title, 
				text: article.text,
				currentImage: article.image,
				image: file
			}
		});
	}

	delete(id) {
		let url = 'http://localhost:3000/articles/delete/json';
		
		return this.$http({
			method: 'POST',
			url: url,
			data: {
				id: id
			}
		});
	}
}

ArticleService.$inject = ['$resource', '$http', 'Upload'];

export default ArticleService;
