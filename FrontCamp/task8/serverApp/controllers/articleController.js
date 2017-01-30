let ArticleService = require('../services/articleService');

class ArticleController {
	constructor() {
		this.articleService = new ArticleService();
	}
	
	getAll(req, res) {
		this.articleService.getAll()
			.then(articles => res.json(articles))
			.catch(error => res.json(error));
	}

	get(req, res) {
		let id = req.params.id;
		this.articleService.get(id)
			.then(article => res.json(article))
			.catch(error => res.json(error));
	}

	create(req, res) {
		let user_id = 'test';
		let article = {
			title: req.body.title,
			text: req.body.text,
			image: req.file !== undefined ? req.file.filename : null
		};
		
		this.articleService.create(article)
			.then(() => res.json({}))
			.catch(error => res.json(error));
	}

	update(req, res) {
		let article = {
			id: req.body.id,
			title: req.body.title,
			text: req.body.text,
			image: req.file !== undefined ? req.file.filename : req.body.currentImage
		};
		this.articleService.update(article)
			.then(() => res.json({}))
			.catch(error => res.json(error));
	}
	
	delete(req, res) {
		this.articleService.delete(req.body.id)
			.then(() => res.json({}))
			.catch(error => res.json(error));
	}
}

module.exports = ArticleController;
