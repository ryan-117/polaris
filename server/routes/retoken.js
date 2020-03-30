const jwt = require('jsonwebtoken')
const config = require('../config.js')
const api = require('./unlogin')
let unLogin = api.unLogin
const retoken = (req, res, next) => {
  let method = req.method.toLowerCase()
  let path = req.path
  console.log(unLogin[method])
  if(unLogin[method] && unLogin[method].indexOf(path) !== -1) {
    console.log('此接口不需要登录认证')
    return next()
  }
  let token = req.headers.authorization || ''
  if (!token) {
    return res.json( {
      code: 401,
      msg: 'unlogin'
    })
  }
  
  // token认证
  jwt.verify(token, config.secretkey, (err, decode) => {
    console.log('此接口需要登录认证')
    if (err) {
      return res.json({
        code: 401,
        msg: 'unlogin'
      })
    } else {
      req.user = decode
      return next()
    }
  })
}
module.exports = retoken