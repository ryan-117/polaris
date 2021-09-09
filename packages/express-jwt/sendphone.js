// 发送短信
const QcloudSms = require('qcloudsms_js');

// 短信应用SDK AppID
const appid = 1400009099; // SDK AppID是1400开头

// 短信应用SDK AppKey
const appkey = '9ff91d87c2cd7cd0ea762f141975d1df37481d48700d70ac37470aefc60f9bad';

// 实例化QcloudSms
const qcloudsms = QcloudSms(appid, appkey);

module.exports = function (phone, content) {
  return new Promise(resolve => {
    const smsType = 0; // Enum{0: 普通短信, 1: 营销短信}
    let ssender = qcloudsms.SmsSingleSender();
    ssender.send(smsType, 86, phone, content, '', '', (err, res, resData) => {
      if (err) {
        console.log('err: ', err);
        resolve(null);
      } else {
        console.log('request data: ', res.req);
        console.log('response data: ', resData);
        resolve(resData);
      }
    });
  });
};
