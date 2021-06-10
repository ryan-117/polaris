const express = require("express");
const mongoose = require("mongoose");
const config = require("../config.js");
const jwt = require("jsonwebtoken");
// const retoken = require("./retoken");
const router = express.Router();
//添加token认证
// router.use(retoken);

// 用户管理
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    userName: {type: String},
    phone: {type: String},
    password: {type: String}
  })
);

// 用户列表
router.get("/all", async (req, res) => {
  const users = await User.find();
  res.send({
    code: 1000,
    data: users,
    msg: "success"
  });
});

// 新增用户
router.post("/add", async (req, res) => {
  const hasRegisted = await User.findOne({userName: req.body.userName});
  if (hasRegisted) {
    res.send({
      code: 1001,
      data: null,
      msg: `用户${req.body.userName}已被注册，请重新注册`
    });
  } else {
    const user = await User.create(req.body);
    res.send({
      code: 1000,
      data: user,
      msg: "success"
    });
  }
});

// 删除用户
router.post("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({
    code: 1000,
    data: "",
    msg: "success"
  });
});

// 用户详情
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send({
    code: 1000,
    data: user,
    msg: "success"
  });
});

// 编辑用户
router.post("/edit/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send({
    code: 1000,
    data: user,
    msg: "success"
  });
});

// 用户登录
router.post("/login", async (req, res) => {
  // 设置个人信息
  const reqUser = {
    name: req.body.userName,
    loginAt: +new Date()
  };
  await User.findOne({userName: req.body.userName}, (err, userInfo) => {
    if (err) {
      return res.json({
        code: 1010,
        data: err,
        msg: "查询用户信息出错！"
      });
    }
    if (!userInfo) {
      return res.json({
        code: 1010,
        data: [],
        msg: "未查询到该用户，请先注册！"
      });
    }
    if (userInfo.password === req.body.password) {
      // 指定token指定过期时间24h
      const token = jwt.sign(reqUser, config.secretKey, {
        expiresIn: config.expireDate
      });
      const data = {
        userName: userInfo.userName,
        phone: userInfo.phone,
        avator:
          "https://pic3.zhimg.com/v2-1fa488a927703f9a48c23984182a0454_is.jpg",
        token: token,
        userid: userInfo._id
      };
      res.json({
        code: 1000,
        data: data,
        msg: "success"
      });
    } else {
      res.json({
        code: 1011,
        data: [],
        msg: "密码错误！"
      });
    }
  });
});

module.exports = router;
