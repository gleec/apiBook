const store = require('./store');

function addCategory(category) {
  return new Promise((resolve, reject) => {
    if (!category) {
      reject('Invalid category');
      return false;
    }
    store
      .add(category)
      .then(() => {
        resolve(category);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function listCategories() {
  return store.list();
}

function getCategoryId(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid ID');
      return false;
    }
    store
      .getId(id)
      .then(category => {
        resolve(category);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function updateCategory(id, category) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid ID');
      return false;
    }
    store
      .update(id, category)
      .then(() => {
        resolve(category);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function deleteCategory(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid ID');
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });
  });
}

module.exports = {
  addCategory,
  listCategories,
  getCategoryId,
  updateCategory,
  deleteCategory
};
