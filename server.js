const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./db');

db(
  'mongodb+srv://root:root@cluster0.zxbot.mongodb.net/bookshop?retryWrites=true&w=majority'
);

global.appRoot = path.resolve(__dirname);

const router = require('./network/routes');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    extended: false,
    limit: '50mb'
  })
);

router(app);
app.use('/app', express.static('public'));

server.listen(3000, function() {
  console.log('La app está escuchando en http://localhost:3000');
});
