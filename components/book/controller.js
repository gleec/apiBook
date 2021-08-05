const store = require('./store');
const mongoose = require('mongoose');
const crypto = require('crypto');
const fs = require('fs');

function addBook(book) {
  return new Promise((resolve, reject) => {
    /*if (!title || !author || !publisher || !lang || !category) {
      console.error(
        '[messageController] there is no title, author, plublisher, lang o category'
      );
      reject('The data is wrong');
      return false;
    }*/

    let cover = book.cover;
    if (book.cover.url.includes('base64')) {
      cover.fileName = crypto.randomBytes(10).toString('hex');

      const buffer = Buffer.from(book.cover.url, 'base64');
      fs.writeFile(`${appRoot}/public/files/${cover.fileName}${cover.ext}`, buffer, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('The file was saved!');
      });
      // cover.url = 'http://localhost:3000/app/files/' + cover.fileName + cover.ext;
    }

    store.add({
      ...book,
      cover: cover
    });
    resolve(book);
  });
}

function listBooks() {
  return store.list();
}

function listBooksByCategory(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid ID');
      return false;
    }

    store
      .list({ category: mongoose.Types.ObjectId(id) })
      .then(books => {
        resolve(books);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function getBookId(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid ID');
      return false;
    }
    store
      .getId(id)
      .then(book => {
        resolve(book);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function updateBook(id, book) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid ID');
      return false;
    }
    store
      .update(id, book)
      .then(() => {
        resolve(book);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function deleteBook(id) {
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

function searchBooks(text) {
  return new Promise((resolve, reject) => {
    if (!text) {
      reject('Invalid text');
      return false;
    }
    store
      .search(text)
      .then(books => {
        resolve(books);
      })
      .catch(e => {
        reject(e);
      });
  });
}

module.exports = {
  addBook,
  listBooks,
  listBooksByCategory,
  getBookId,
  updateBook,
  deleteBook,
  searchBooks
};
