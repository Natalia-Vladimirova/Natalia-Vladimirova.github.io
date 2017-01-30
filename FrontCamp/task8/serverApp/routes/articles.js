let ArticleController = require('../controllers/articleController');
let express = require('express');
let router = express.Router();

let articleController = new ArticleController();

router.post('/', function(req, res, next) {
	articleController.create(req, res);
});

router.put('/', function(req, res, next) {
	articleController.update(req, res);
});

router.delete('/:id', function(req, res, next) {
	articleController.delete(req, res);
});

router.get('/:id', function(req, res, next) {
	articleController.get(req, res);
});

router.get('/', function(req, res, next) {
	articleController.getAll(req, res);
});

module.exports = router;
