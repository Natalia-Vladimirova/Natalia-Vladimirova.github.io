let mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
	title: { 
		type: String, 
		required: [true, 'Title is required.']
	},
	image: { 
		type: String 
	},
	text: { 
		type: String, 
		required: [true, 'Article text is required.'] 
	},
	date: { 
		type: Date, 
		default: Date.now()
	},
	user_id: { 
		type: String, 
		required: true 
	}
});

module.exports = mongoose.model('Article', articleSchema);
