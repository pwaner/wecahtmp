var ENV = {
  baseURL: '/api/wechat',
  serverRootUrl: '/api/wechat',
  moduleName: 'wechat',
  version: '1.0',
  environment: process.env.NODE_ENV,
  defaultLocale: 'zh',
  apiNameSpace: 'wechat/mp',
  hostEndpoint: 'api',
  fileUploadUrl: '',
  photoPreviewUrl: '',
  routeRootPath: null,
  appid: 101
}
ENV.baseURL = `/${ENV.hostEndpoint}/${ENV.apiNameSpace}`

export default ENV
