const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// 文章管理
const Article = mongoose.model('Article', new mongoose.Schema({
  title: { type: String },
  body: { type: String }
}))
// 新增文章
router.post('/add', async (req, res) => {
  const article = await Article.create(req.body);
  res.send({
    code: 1000,
    data: article,
    msg: 'success'
  })
})
// 文章列表
router.get('/all', async (req, res) => {
  const articles = await Article.find()
  res.send({
    code: 1000,
    data: articles
  })
})
// 文章详情
router.get('/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.send({
    code: 1000,
    data: article,
    msg: 'success'
  })
})
// 删除文章
router.delete('/:id/delete', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    code: 1000,
    data: '',
    msg: 'success'
  })
})
// 修改文章
router.put('/:id/edit', async (req, res) => {
  console.log(111)
  const article = await Article.findByIdAndUpdate(req.params.id, req.body)
  res.send({
    code: 1000,
    data: article,
    msg: 'success'
  })
})

module.exports = router