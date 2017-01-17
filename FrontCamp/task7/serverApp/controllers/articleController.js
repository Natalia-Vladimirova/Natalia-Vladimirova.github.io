let ArticleService = require('../services/articleService');

class ArticleController {
	constructor() {
		this.articleService = new ArticleService();
	}
	
	getAllJson(req, res) {
		this.articleService.getAll().then(articles => {
			return res.json(articles);
		});
	}

	getJson(req, res) {
		let id = req.params.id;
		this.articleService.get(id)
			.then(article => res.json(article))
			.catch(error => res.json(error));
	}

	getAll(req, res) {
		this.articleService.getAll().then(articles => {
			res.render('index', { 
				title: 'Blog', 
				auth: req.isAuthenticated(),
				articles: articles 
			});
		});
	}

	getUserArticles(req, res) {
		let user_id = req.user._id;
		this.articleService.getUserArticles(user_id).then(articles => {
			return res.json({ 
				title: 'Blog', 
				auth: req.isAuthenticated(),
				userArticles: true,
				articles: articles 
			});
			/*res.render('index', { 
				title: 'Blog', 
				auth: req.isAuthenticated(),
				userArticles: true,
				articles: articles 
			});*/
		}).catch(error => {
			res.redirect('/secure/articles');
		});
	}

	get(req, res) {
		let id = req.params.id;
		this.articleService.get(id).then(article => {
			res.render('article/read', { 
				title: 'Details', 
				auth: req.isAuthenticated(),
				article: article 
			});
		}).catch(error => {
			res.redirect('/secure/articles');
		});
	}

	create(req, res) {
		res.render('article/create', { 
			title: 'Create',
			auth: req.isAuthenticated()
		});
	}

	createPost(req, res) {
		let user_id = req.user._id;
		let article = {
			title: req.body.title, 
			image: req.file !== undefined ? req.file.filename : null,
			text: req.body.text,
			user_id: user_id
		};
		
		this.articleService.create(article).then(() => {
			res.redirect('/secure/articles/get-user-articles');
		}).catch(error => {
			res.render('article/create', { 
				title: 'Create',
				auth: req.isAuthenticated(),
				article: {
					title: req.body.title || '',
					text: req.body.text || ''
				},
				error_message: error.errors.title || error.errors.text
			});
		});
	}

	update(req, res) {
		let user_id = req.user._id;
		let id = req.params.id;
		this.articleService.get(id).then(article => {
			if (article.user_id != user_id) {
				res.redirect('/secure/articles/get-user-articles');
			}
			else {
				res.render('article/update', { 
					title: 'Update', 
					auth: req.isAuthenticated(),
					article: article 
				});
			}
		}).catch(error => {
			res.redirect('/secure/articles/get-user-articles');
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
			res.redirect('/secure/articles/get-user-articles');
		}).catch(error => {
			res.render('article/update', { 
				title: 'Update',
				auth: req.isAuthenticated(),
				article: {
					_id: req.body.id,
					title: req.body.title || '',
					image: req.body.currentImage,
					text: req.body.text || ''
				},
				error_message: error.errors.title || error.errors.text
			});
		});
	}
	
	delete(req, res) {
		let user_id = req.user._id;
		let id = req.params.id;
		this.articleService.get(id).then(article => {
			if (article.user_id != user_id) {
				res.redirect('/secure/articles/get-user-articles');
			}
			else {
				res.render('article/delete', { 
					title: 'Delete', 
					auth: req.isAuthenticated(), 
					article: article 
				});
			}
		}).catch(error => {
			res.redirect('/secure/articles/get-user-articles');
		});
	}

	deletePost(req, res) {
		this.articleService.delete(req.body.id).then(() => {
			res.redirect('/secure/articles/get-user-articles');
		}).catch(error => {
			res.redirect('/secure/articles/get-user-articles');
		});
	}
}

module.exports = ArticleController;