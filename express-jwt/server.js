//入口文件
const express = require('express');
const app = express();

//body-parser
let bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//mongodb
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
