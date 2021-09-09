// 获取用户信息接口
const express = require('express');
const route = express.Router();
const authToken = require('./authToken');

route.post('/getUserInfo', authToken, function (req, res) {
  res.send(req.decoded);
});

module.exports = route;
