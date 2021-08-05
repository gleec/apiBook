const express = require('express');
const book = require('../components/book/network');
const category = require('../components/category/network');

const router = express.Router();
const app = express();

app.use(router);

const routes = function(server) {
  server.use('/book', book), server.use('/category', category);
};

module.exports = routes;
