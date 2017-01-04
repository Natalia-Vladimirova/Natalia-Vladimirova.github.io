let ArticleService = require('../services/articleService');

class ArticleController {
	constructor() {
		this.articleService = new ArticleService();
	}
	
	getAll(req, res) {
		this.articleService.getAll().then(articles => {
			res.render('index', { title: 'Blog', articles: articles });
		});
	}

	get(req, res) {
		let id = req.params.id;
		this.articleService.get(id).then(article => {
			res.render('article/read', { title: 'Details', article: article });
		});
	}

	create(req, res) {
		res.render('article/create', { title: 'Create' });
	}

	createPost(req, res) {
		let article = {
			title: req.body.title, 
			image: req.file !== undefined ? req.file.filename : null,
			text: req.body.text
		};
		this.articleService.create(article).then(() => {
			res.redirect('/articles');
		});
	}

	update(req, res) {
		let id = req.params.id;
		this.articleService.get(id).then(article => {
			res.render('article/update', { title: 'Update', article: article });
		});
	}

	updatePost(req, res) {
		let article = {
			id: req.body.id, 
			title: req.body.title, 
			image: req.file !== undefined ? req.file.filename : req.body.currentImage,
			text: req.body.text
		};
		this.articleService.update(article).then(() => {
			res.redirect('/articles');
		});
	}
	
	delete(req, res) {
		let id = req.params.id;
		this.articleService.get(id).then(article => {
			res.render('article/delete', { title: 'Delete', article: article });
		});
	}

	deletePost(req, res) {
		this.articleService.delete(req.body.id).then(() => {
			res.redirect('/articles');
		});
	}
}

module.exports = ArticleController;