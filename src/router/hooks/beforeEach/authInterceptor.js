// import router from 'ROUTE/' // 为避免循环依赖，改用如下传入的方式
// import {Toast} from 'mint-ui'
import helpers from '../../../utils/helpers'
// 权限拦截
const authInterceptor = (to, from, next) => {
  const { needAuth } = to.meta
  if (!needAuth && helpers.isLogin()) {
    next({
      path: '/',
      query: {redirect: to.path}
    })
  }
  next()
}

export default authInterceptor
