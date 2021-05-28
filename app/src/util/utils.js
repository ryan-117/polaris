export const setCookie = (name, value, days = 30) => {
  const exp = new Date();
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + '=' + escape(value) + ';expires=' + exp.toGMTString();
};

export const getCookie = name => {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(name + '='); // 获取字符串的起点
    if (start !== -1) {
      start = start + name.length + 1; // 获取值的起点
      let end = document.cookie.indexOf(';', start); // 获取结尾处
      if (end === -1) end = document.cookie.length; // 如果是最后一个，结尾就是cookie字符串的结尾
      return decodeURI(document.cookie.substring(start, end)); // 截取字符串返回
    }
  }
  return '';
};

// 删除cookie
export const delCookie = name => {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = this.getCookie(name);
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
};
