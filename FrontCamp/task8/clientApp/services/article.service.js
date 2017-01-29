class ArticleService {
	constructor($resource, $http) {
		this.$resource = $resource;
		this.$http = $http;
	}
	
	getAll() {
		let url = 'http://localhost:3000/articles/json';
		
		return this.$http({
			method: 'GET',
			url: url
		});
	}

	get(id) {
		/*let url = 'http://localhost:3000/articles/:id/json';
		let articleResource = this.$resource(url, { id: '@id' });
		let article = articleResource.get({ id: id });
		console.log(article);*/
		
		let url = `http://localhost:3000/articles/${id}/json`;
		
		return this.$http({
			method: 'GET',
			url: url
		});
	}

	create(article) {
		let url = 'http://localhost:3000/articles/create/json';
		
		return this.$http({
			method: 'POST',
			url: url,
			data: {
				title: article.title,
				text: article.text,
				author: article.author
			}
		});
	}

	update(article) {
		let url = 'http://localhost:3000/articles/update/json';
		
		return this.$http({
			method: 'POST',
			url: url,
			data: {
				id: article._id, 
				title: article.title, 
				text: article.text, 
				author: article.author
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

ArticleService.$inject = ['$resource', '$http'];
