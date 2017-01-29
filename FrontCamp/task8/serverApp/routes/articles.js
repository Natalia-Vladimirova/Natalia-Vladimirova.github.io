let ArticleController = require('../controllers/articleController');
let express = require('express');
let router = express.Router();

let articleController = new ArticleController();

router.post('/create/json', function(req, res, next) {
	articleController.create(req, res);
});

router.post('/update/json', function(req, res, next) {
	articleController.update(req, res);
});

router.post('/delete/json', function(req, res, next) {
	articleController.delete(req, res);
});

router.get('/json', function(req, res, next) {
	articleController.getAll(req, res);
});

router.get('/:id/json', function(req, res, next) {
	articleController.get(req, res);
});

module.exports = router;
