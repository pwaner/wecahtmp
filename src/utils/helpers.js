import ENV from '../SERVICES/xhr/config';
// import loginService from '../SERVICES/loginService'

export default {
  makePhotoUrl: function(endpoint) {
    return `${ENV.photoPreviewUrl.replace(/\/$/, '')}${endpoint}`;
  },
  validateCodeUrl: function(endpoint) {
    endpoint = `/${ENV.hostEndpoint}` + endpoint;
    return this.makePhotoUrl(endpoint);
  },
  html_encode: function(str) {
    var s = '';
    if (str.length === 0) return '';
    s = str.replace(/&/g, '&amp;');
    s = s.replace(/</g, '&lt;');
    s = s.replace(/>/g, '&gt;');
    s = s.replace(/ /g, '&nbsp;');
    s = s.replace(/'/g, '&#39;');
    s = s.replace(/'/g, '&quot;');
    s = s.replace(/\n/g, '<br>');
    return s;
  },
  html_decode: function(text) {
    // 1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement('div');
    // 2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
    temp.innerHTML = text;
    // 3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
  },
  /**
   * 用这个 window.moment(date).format('YYYY-MM-DD HH:mm')
   * @param  {[type]} date [description]
   * @param  {[type]} fmt  [yyyy-MM-dd HH:mm:ss]
   * @return {[type]}      [description]
   */
  dateFormat: function(val, fmt) {
    return fmt;
  },
  isLogin: function() {
    const isBinding = localStorage.getItem('isBinding');
    console.info('isBinding=' + isBinding);
    // 暂未实现退出
    // const isOut = localStorage.getItem('isOut')
    // if (isOut === '' || isOut === null || isOut === 'null') {
    //   return false
    // }
    return isBinding === 'true';
  },
  initHead: function(route) {
    let redirectPath = '';
    // const fullPath = this.$router.currentRoute.fullPath
    // console.info('fullPath====>' + fullPath)
    let { redirect } = route.query;
    if (redirect) {
      // console.info(decodeURIComponent(redirect))
      redirectPath = decodeURIComponent(redirect);
    }
    return redirectPath;
  }
};
