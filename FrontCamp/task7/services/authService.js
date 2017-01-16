let User = require('../models/user');

class AuthService {
	constructor() {	}

	getUser(id) {
		return User.findOne({
			_id: id
		}).exec();
	}

	getUserByName(username) {
		return User.findOne({
			username: username
		}).exec();
	}

	createUser(user) {
		let newUser = new User({ 
			username: user.username, 
			password: user.password
		});
		return newUser.save();
	}
}

module.exports = AuthService;