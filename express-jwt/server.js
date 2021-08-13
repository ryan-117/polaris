//入口文件
const express = require('express');
const app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./mongoconn');

//api
let api = require('./api');
api(app);

//error
let err = require('./error');
err(app);

//listen
app.listen(3000, () => {
  console.log('app listening on port 3000');
});
