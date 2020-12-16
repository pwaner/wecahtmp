import xhr from './xhr/http'

/**
 * 首页资源 API
 */
class IndexService {
  loadJsConfig (url) {
    return xhr.fetch('/wechatlogin/getJsConfig.json', {
      type: 'POST',
      data: {
        url: url
      }
    })
  }
}

// 实例化后导出，全局单例
export default new IndexService()
