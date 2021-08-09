// 通用方法：加密、token正确性检测，手机邮箱正则校检
const config = require('./config');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

const signtoken = obj => jwt.sign(obj, config.jwtsecret);

const verifytoken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtsecret, (err, decoded) => {
      if (err) {
        resolve(null);
      } else {
        resolve(decoded);
      }
    });
  });

const cmd5 = str => md5(str + config.md5secret);

const ismail = mail => {
  const filter = /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/;
  if (filter.test(mail)) {
    return true;
  } else {
    return false;
  }
};

const isphone = phone => {
  return String(phone).length === 11;
};

module.exports = {
  signtoken,
  verifytoken,
  md5: cmd5,
  ismail,
  isphone
};
