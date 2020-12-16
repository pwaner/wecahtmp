import xhr from './xhr/http'
import ENV from 'services/xhr/config'
/**
 * 登录相关 API
 */
class LoginService {
  /**
   * 客户端登录验证
   * 暂时只支持用户名，密码认证绑定
   */
  bindUser(mobile, smsCode) {
    var jsonstr = {
      type: 'TSN001',
      data: {
        method: 'auth_mobile',
        mobile: mobile,
        smsCode: smsCode
      }
    };
    return xhr.fetch('session', {
      type: 'POST',
      data: jsonstr // JSON.stringify(jsonstr)
    })
  }
  /**
   * 发送验证码接口
   *
   * @return {[type]} [description]
   */
  sendSms(phone) {
    var jsonstr = {
      type: 'TU001',
      data: {
        task: 'TSN001',
        mobile: phone
      }
    };
    return xhr.fetch('session', {
      type: 'POST',
      data: jsonstr
    })
  }

  // 退出系统
  memberOut(openid) {
    return xhr.fetch('/weixin/unregister', {
      type: 'POST',
      data: {
        openid: openid,
        appid: ENV.appid
      }
    })
  }

  /**
   * 微信授权后自动登录
   *
   * @param  {[type]} code [description]
   * @return {[type]}        [description]
   */
  getAccessToken(code) {
    // let myHeaders = new Headers()
    // myHeaders.append('Content-Type', 'application/json')
    return xhr.fetch('/weixin/getUserByCode', {
      // '/wechatlogin/getAccessToken.json', {
      type: 'POST',
      // contentType: myHeaders,
      data: {
        code: code,
        appid: ENV.appid
      }
    })
  }
  getNeedBind() {
    return xhr.fetch('session', {
      type: 'GET',
      data: {
      }
    })
  }
  /**
   * openid
   * @param  {[type]} openid [description]
   * @return {[type]}        [description]
   */
  autoLogin(openid) {
    return xhr.fetch('/wechatlogin/autoLogin.json', {
      type: 'POST',
      data: {
        openid: openid,
        appid: ENV.appid
      }
    })
  }
}

// 实例化后导出，全局单例
export default new LoginService()
