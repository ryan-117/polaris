const express = require('express');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
// 路由文件
const index = require('./routes/index');
const user = require('./routes/user');
const article = require('./routes/article');
const activity = require('./routes/activity');
const app = express();

app.use(require('cors')());
app.use(cookieParser());
app.use(express.json());
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
  res.header('Access-Control-Max-Age', 2592000);
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});
app.use('/api', index); // 接口访问路径 /api/*
app.use('/api/user', user); // 接口访问路径 /api/user/*
app.use('/api/article', article);
app.use('/api/activity', activity);

mongoose.connect('mongodb://localhost:27017/blagapp', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.listen(3001, () => {
  console.log('http://localhost:3001');
});
