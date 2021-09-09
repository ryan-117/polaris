// 注册接口
const response = require('./response');
const model = require('./model');
const User = model.user;
const express = require('express');
const route = express.Router();
const common = require('./common');

route.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //是否合法的参数
  if (username == null || username.trim() == '' || password == null || password.trim() == '') {
    res.send(response.err('用户名或密码不能为空'));
    return;
  }

  //是否存在用户
  User.findOne({ username })
    .then(data => {
      console.log(data);
      return new Promise((resolve, reject) => {
        if (data) {
          res.send(response.err('用户已注册过'));
          reject();
        } else {
          resolve();
        }
      });
    })
    .then(() => {
      //存储
      return new User({
        username,
        password: common.md5(password)
      }).save();
    })
    .then(data => {
      if (data) {
        res.send(response.succ('注册成功'));
        return;
      }

      res.send(response.err('注册失败'));
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = route;
