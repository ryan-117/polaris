// 定义全局请求状态：成功、失败、登录信息已过期
module.exports = {
  succ: (msg = '', data = {}) => {
    return {
      retCode: 0,
      retData: data,
      retMsg: msg
    };
  },
  err: (msg = '请求参数有错') => {
    return {
      retCode: 110,
      retData: {},
      retMsg: msg
    };
  },
  out: (msg = '请重新登录') => {
    return {
      retCode: 120,
      retData: {},
      retMsg: msg
    };
  }
};
