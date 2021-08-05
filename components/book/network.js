const express = require('express');
const multer = require('multer');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
  controller
    .addBook(req.body)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.get('/', function(req, res) {
  controller
    .listBooks()
    .then(books => {
      response.success(req, res, books, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.get('/category/:id', function(req, res) {
  controller
    .listBooksByCategory(req.params.id)
    .then(book => {
      response.success(req, res, book, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.get('/:id', function(req, res) {
  controller
    .getBookId(req.params.id)
    .then(book => {
      response.success(req, res, book, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.put('/:id', function(req, res) {
  controller
    .updateBook(req.params.id, req.body)
    .then(book => {
      response.success(req, res, book, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.delete('/:id', function(req, res) {
  controller
    .deleteBook(req.params.id)
    .then(() => {
      response.success(req, res, `Book ${req.params.id} deleted`, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.get('/search/:text', function(req, res) {
  controller
    .searchBooks(req.params.text)
    .then(books => {
      response.success(req, res, books, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

module.exports = router;
