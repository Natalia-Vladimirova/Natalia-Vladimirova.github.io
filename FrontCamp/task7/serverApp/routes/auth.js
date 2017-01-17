let AuthController = require('../controllers/authController');
let express = require('express');
let router = express.Router();

let authController = new AuthController();

router.get('/register', function(req, res, next) {
	authController.register(req, res);
});

router.post('/register', function(req, res, next) {
	authController.registerPost(req, res, next);
});

router.get('/login', function(req, res, next) {
	authController.login(req, res);
});

router.post('/login', function(req, res, next) {
	authController.loginPost(req, res, next);
});

router.get('/logout', function(req, res, next) {
	authController.logout(req, res);
});

module.exports = router;
