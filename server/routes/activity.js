const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// 活动管理
const Activity = mongoose.model(
  "Activity",
  new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    createTime: {type: Number},
    creator: {type: String}
  })
);

// 新增活动
router.post("/add", async (req, res) => {
  const {name, description} = req.body;
  const {userName} = req.cookies;
  const createTime = +new Date();
  const activity = await Activity.create({
    name,
    description,
    createTime,
    creator: userName
  });
  res.send({
    code: 1000,
    data: activity,
    msg: "success"
  });
});

// 活动列表
router.get("/all", async (req, res) => {
  const articles = await Activity.find();
  res.send({
    code: 1000,
    data: articles
  });
});

// 活动详情
router.get("/:id", async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  res.send({
    code: 1000,
    data: activity,
    msg: "success"
  });
});

// 删除活动
router.delete("/:id/delete", async (req, res) => {
  await Activity.findByIdAndDelete(req.params.id);
  res.send({
    code: 1000,
    data: "",
    msg: "success"
  });
});

// 修改活动
router.put("/:id/edit", async (req, res) => {
  const activity = await Activity.findByIdAndUpdate(req.params.id, req.body);
  res.send({
    code: 1000,
    data: activity,
    msg: "success"
  });
});

module.exports = router;
