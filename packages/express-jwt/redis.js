// 读写redis
const config = require('./config');
const redis = require('redis');
const client = redis.createClient(6379, config.redislink);

const setkv = function setkv(key, value, expire) {
  return new Promise(resolve => {
    client.set(key, value, 'EX', expire, function (err, reply) {
      if (err) {
        resolve(null);
      } else {
        resolve(reply);
      }
    });
  });
};

const getkey = function getkey(key) {
  return new Promise(resolve => {
    client.get(key, function (err, reply) {
      if (err) {
        resolve(null);
      } else {
        resolve(reply);
      }
    });
  });
};

module.exports = {
  setkv,
  getkey
};
