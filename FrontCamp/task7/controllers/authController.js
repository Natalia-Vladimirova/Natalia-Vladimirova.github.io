let passport = require('passport');
let AuthService = require('../services/authService');

class AuthController {
	constructor() {
		this.authService = new AuthService();
	}
	
	register(req, res) {
		res.render('auth_form', { 
			title: 'Register', 
			auth_type: 'register', 
			message: 'Register your account' 
		});
	}
	
	registerPost(req, res, next) {
		let user = { 
			username: req.body.username, 
			password: req.body.password
		};
		this.authService.createUser(user).then(user => {
			req.login(user, function(err) {
				if (err) {
					return next(err);
				}
				
				return res.redirect('/secure/articles');
			});
		}).catch(error => {
			res.render('auth_form', { 
				title: 'Register', 
				auth_type: 'register', 
				message: 'Register your account',
				username: req.body.username,
				error_message: error.errors.username || error.errors.password
			});
		});
	}
	
	login(req, res) {
		res.render('auth_form', { 
			title: 'Login', 
			auth_type: 'login', 
			message: 'Login to your account',
			returnUrl: req.query.returnUrl ? req.query.returnUrl : '/'
		});
	}
	
	loginPost(req, res, next) {
		passport.authenticate('local', function(err, user, info) {
			if (err) {
				return next(err);
			}
			
			if (!user) {
				return res.render('auth_form', {
					title: 'Login',
					auth_type: 'login',
					message: 'Login to your account',
					returnUrl: req.body.returnUrl,
					username: req.body.username,
					error_message: info.message
				});
			}
			
			return req.logIn(user, function(err) {
				if (err) {
					return next(err);
				}
				if (req.body.returnUrl) {
					return res.redirect(req.body.returnUrl);
				}
				return res.redirect('/secure/articles');
			});
		})(req, res, next);
	}
	
	logout(req, res) {
		req.logout();
		res.redirect('/');
	}
}

module.exports = AuthController;