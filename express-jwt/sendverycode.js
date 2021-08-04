// 发送验证码
const sendmail = require('./sendmail');
const sendphone = require('./sendphone');

module.exports = {
  mail: (mail, verycode) => sendmail(mail, '西红柿APP的验证码', '您的验证码是' + verycode),
  phone: (phone, verycode) => sendphone(phone, '您的验证码是' + verycode)
};
