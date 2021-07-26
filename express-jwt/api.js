// 定义路由通用路径
const response = require('./response');
const model = require('./model');
const User = model.user;
const register = require('./register');
const login = require('./login');
const userinfo = require('./userinfo');
const verycode = require('./verycode');

const api = '/api';
module.exports = function (app) {
  app.use(api, register);
  app.use(api, login);
  app.use(api, userinfo);
  app.use(api, verycode);
};