const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  title: String,
  description: String,
  author: String,
  publisher: String,
  lang: String,
  category: {
    type: Schema.ObjectId,
    ref: 'Category'
  },
  cover: new Schema({
    originalName: String,
    fileName: String,
    mime: String,
    ext: String,
    url: String
  })
});

mySchema.index({ title: 'text', description: 'text', author: 'text' });
const model = mongoose.model('Book', mySchema);
// model.createIndexes();

module.exports = model;
