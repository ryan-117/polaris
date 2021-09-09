// token校检
const response = require('./response');
const common = require('./common');

module.exports = function (req, res, next) {
  const token = req.body.token || req.query.token || req.headers['token'];
  if (token) {
    common.verifytoken(token).then(data => {
      if (data) {
        req.decoded = data;
        next();
      } else {
        res.send(response.out('无效的token,请重新登录'));
      }
    });
  } else {
    res.send(response.err('没有传token,请先登录'));
  }
};
