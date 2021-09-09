// 登录接口
const response = require('./response');
const model = require('./model');
const User = model.user;
const express = require('express');
const route = express.Router();
const common = require('./common');

route.post('/login', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //是否合法的参数
  if (username == null || username.trim() == '' || password == null || password.trim() == '') {
    res.send(response.err('用户名或密码不能为空'));
    return;
  }

  User.findOne({ username, password: common.md5(password) })
    .then(data => {
      return new Promise((resolve, reject) => {
        if (data) {
          resolve(data);
        } else {
          res.send(response.err('用户名或密码错误'));
          reject();
        }
      });
    })
    .then(data => {
      console.log(data);
      var token = common.signtoken(JSON.stringify(data));
      res.send(response.succ('用户登录成功', { token: token }));
    })
    .catch(err => {
      if (err) {
        console.log(err);
      }
    });
});

module.exports = route;
