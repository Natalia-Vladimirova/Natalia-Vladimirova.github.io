let mongoose = require('mongoose');
let config = require('../config/index');

module.exports = function() {
	mongoose.connect(config.get('mongoose:uri'));
};