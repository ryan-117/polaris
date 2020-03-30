const express = require('express')
const mongoose = require('mongoose')
// 路由文件
const index = require('./routes/index')
const user = require('./routes/user')
const article = require('./routes/article')
const app = express()
// const port = process.env.PORT || 8080

app.use(require('cors')())
app.use(express.json())
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
  res.header('Access-Control-Max-Age', 2592000);
  if (req.method == 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
});
app.use('/api', index) // 接口访问路径 /api/*
app.use('/api/user', user) // 接口访问路径 /api/user/*
app.use('/api/article', article)

mongoose.connect('mongodb://localhost:27017/blog', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
})

app.listen(3001, () => {
  console.log('http://localhost:3001')
})

app.get('/hello', async (req, res) => {
  res.send('Hello node api!')
})
// app.use((request, response) => {
//     response.status(404).send("Page not found!");
// });