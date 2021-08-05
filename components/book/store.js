const Model = require('./model');

function add(book) {
  const myBook = new Model(book);
  return myBook.save();
}

async function list(options = {}) {
  return Model.find(options);
}

async function getId(id) {
  return Model.findById(id);
}

function update(id, book) {
  return Model.findByIdAndUpdate(id, book);
}

function remove(id) {
  return Model.findByIdAndDelete(id);
}

function search(text) {
  return Model.find({ $text: { $search: text } });
}

module.exports = {
  add,
  list,
  getId,
  update,
  remove,
  search
};
