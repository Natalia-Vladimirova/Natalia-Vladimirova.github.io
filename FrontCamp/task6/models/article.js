let mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Article', articleSchema);
