let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let userSchema = new mongoose.Schema({
	username: { 
		type: String, 
		unique: true, 
		required: [true, 'Name and password are required.'] 
	},
	password: { 
		type: String, 
		required: [true, 'Name and password are required.'] 
	}
});

userSchema.plugin(uniqueValidator, { 
	message: 'A user with the same name already exists. Try to enter another name.' 
});

module.exports = mongoose.model('User', userSchema);
