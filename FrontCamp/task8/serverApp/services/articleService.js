let Article = require('../models/article');

class ArticleService {
	constructor() {	}
	
	getAll() {
		return Article.find({}).exec();
	}

	get(id) {
		return Article.findOne({
			_id: id
		}).exec();
	}

	create(article) {
		let newArticle = new Article({
			title: article.title,
			text: article.text,
			image: article.image,
			user_id: 'test'
		});
		return newArticle.save();
	}

	update(article) {
		return this.get(article.id).then(item => {
			item.title = article.title;
			item.text = article.text;
			item.image = article.image;
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
