let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/user');

passport.use(new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password'
}, function(username, password, done) {
	User.findOne({ username: username }, function(err, user) {
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false, { message: 'Incorrect username or password.' });
		}
		if (password !== user.password) {
			return done(null, false, { message: 'Incorrect username or password.' });
		}
		
		done(null, user);
	});
}));

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findOne({ _id: id }, function(err, user) {
		err 
			? done(err)
			: done(null, user);
	});
});

module.exports = passport;
