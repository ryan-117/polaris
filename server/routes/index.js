const express = require('express')
const router = express.Router();
const ALLOW_IPS = [
  '127.0.0.1',
  '::1'
];

// router.use((req, res, next) => {
//   // req.ip请求来源ip
//   let userIsAllowed = ALLOW_IPS.includes(req.ip);
//   if (userIsAllowed) {
//     return next()
//   } else {
//     return res.status(401).send("Not authorized!")
//   }
// })

module.exports = router