let ArticleController = require('../controllers/articleController');
let express = require('express');
let router = express.Router();

let articleController = new ArticleController();

router.get('/', function(req, res, next) {
	articleController.getAll(req, res);
});

module.exports = router;
