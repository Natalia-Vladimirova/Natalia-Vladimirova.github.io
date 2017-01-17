let ArticleController = require('../controllers/articleController');
let express = require('express');
let router = express.Router();

let articleController = new ArticleController();

router.get('/create', function(req, res, next) {
	articleController.create(req, res);
});

router.post('/create', function(req, res, next) {
	articleController.createPost(req, res);
});

router.get('/update/:id', function(req, res, next) {
	articleController.update(req, res);
});

router.post('/update', function(req, res, next) {
	articleController.updatePost(req, res);
});

router.get('/delete/:id', function(req, res, next) {
	articleController.delete(req, res);
});

router.post('/delete', function(req, res, next) {
	articleController.deletePost(req, res);
});

router.get('/', function(req, res, next) {
	articleController.getAll(req, res);
});

router.get('/json', function(req, res, next) {
	articleController.getAllJson(req, res);
});

router.get('/get-user-articles', function(req, res, next) {
	articleController.getUserArticles(req, res);
});

router.get('/:id', function(req, res, next) {
	articleController.get(req, res);
});

router.get('/:id/json', function(req, res, next) {
	articleController.getJson(req, res);
});

module.exports = router;
