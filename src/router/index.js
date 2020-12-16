import Vue from 'vue'
import Router from 'vue-router'
import hooks from './hooks/'

import Index from 'page/Index'
import Login from 'page/Login'
import Mine from 'page/Mine'
import MineInfo from 'page/MineInfo'
import MineAlarm from 'page/MineAlarm'
import MinePolice from 'page/MinePolice'
import ReportSearch from 'page/ReportSearch'
import MineEstate from 'page/MineEstate'
import MineSubscrible from 'page/MineSubscrible'
import MineScene from 'page/MineScene'
import MineEstateSurvey from 'page/MineEstateSurvey'
import MineEstateInfo from 'page/MineEstateInfo'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录页'
      }
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      meta: {
        title: '我的',
        needAuth: true
      }
    },
    {
      path: '/MineInfo',
      name: 'MineInfo',
      component: MineInfo,
      meta: {
        title: '个人信息',
        needAuth: true
      }
    },
    {
      path: '/MineAlarm',
      name: 'MineAlarm',
      component: MineAlarm,
      meta: {
        title: '告警信息',
        needAuth: true
      }
    },
    {
      path: '/MinePolice',
      name: 'MinePolice',
      component: MinePolice,
      meta: {
        title: '警情信息',
        needAuth: true
      }
    },
    {
      path: '/ReportSearch',
      name: 'ReportSearch',
      component: ReportSearch,
      meta: {
        title: '资讯服务',
        needAuth: true
      }
    },
    {
      path: '/MineScene',
      name: 'MineScene',
      component: MineScene,
      meta: {
        title: '场景选择',
        needAuth: true
      }
    },
    {
      path: '/MineEstate',
      name: 'MineEstate',
      component: MineEstate,
      meta: {
        title: '我的物业',
        needAuth: true
      }
    },
    {
      path: '/MineSubscrible',
      name: 'MineSubscrible',
      component: MineSubscrible,
      meta: {
        title: '我的订阅',
        needAuth: true
      }
    },

    {
      path: '/mineEstateSurvey',
      name: 'MineEstateSurvey',
      component: MineEstateSurvey,
      meta: {
        title: '我的物业调查表',
        needAuth: true
      }
    },
    {
      path: '/mineEstateInfo',
      name: 'MineEstateInfo',
      component: MineEstateInfo,
      meta: {
        title: '我的物业基本信息',
        needAuth: true
      }
    }
  ]
})

hooks(router)

export default router
