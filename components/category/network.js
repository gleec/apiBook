const express = require('express');
const response = require('../../network/response');

const controller = require('./controller');

const router = express.Router();

router.post('/', function(req, res) {
  controller
    .addCategory(req.body)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.get('/', function(req, res) {
  controller
    .listCategories()
    .then(categories => {
      response.success(req, res, categories, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.get('/:id', function(req, res) {
  controller
    .getCategoryId(req.params.id)
    .then(category => {
      response.success(req, res, category, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.put('/:id', function(req, res) {
  controller
    .updateCategory(req.params.id, req.body)
    .then(category => {
      response.success(req, res, category, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.delete('/:id', function(req, res) {
  controller
    .deleteCategory(req.params.id)
    .then(() => {
      response.success(req, res, `Category ${req.params.id} deleted`, 200);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

module.exports = router;
