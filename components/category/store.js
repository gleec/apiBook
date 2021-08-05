const Model = require('./model');
const BookModel = require('../../components/book/model');

function add(category) {
  const myCategory = new Model(category);
  return myCategory.save();
}

async function list() {
  return Model.find();
}

async function getId(id) {
  return Model.findById(id);
}

function update(id, category) {
  return Model.findByIdAndUpdate(id, category);
}

function remove(id) {
  BookModel.deleteMany({ category: id });
  return Model.findByIdAndDelete(id);
}

module.exports = {
  add,
  list,
  getId,
  update,
  remove
};
