const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: String,
  description: String
});

const model = mongoose.model('Category', mySchema);

module.exports = model;
