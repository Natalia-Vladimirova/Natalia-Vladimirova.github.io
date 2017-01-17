let Article = require('../models/article');

class ArticleService {
	constructor() {	}
	
	getAll() {
		return Article.find({}).exec();
	}

	getUserArticles(user_id) {
		return Article.find({
			user_id: user_id
		}).exec();
	}

	get(id) {
		return Article.findOne({
			_id: id
		}).exec();
	}

	create(article) {
		let newArticle = new Article({
			title: article.title,
			image: article.image,
			text: article.text,
			user_id: article.user_id
		});
		return newArticle.save();
	}

	update(article) {
		return this.get(article.id).then(item => {
			item.title = article.title;
			item.image = article.image;
			item.text = article.text;
			return item.save();
		});
	}

	delete(id) {
		return Article.findOne({
			_id: id
		}).remove().exec();
	}
}

module.exports = ArticleService;