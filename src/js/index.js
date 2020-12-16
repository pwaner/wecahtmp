import EndFooter from 'components/content/EndFooter'
import Swipe from 'components/content/Swipe'
import HomeSwiper from 'components/content/homeSwiper/homeSwiper'
import MainBtnList from 'components/content/mainBtnList/mainBtnList'

import Scroll from 'components/common//scroll/Scroll'

import helpers from 'utils/helpers'
import loginService from 'SERVICES/loginService'

import imgURL from "assets/img/banner/banner1.png";
export default {
  components: {
    EndFooter,
    Swipe,
    HomeSwiper,
    Scroll,
    MainBtnList
  },
  data: () => ({
    swipeItems: [],
    point: 1,
    materialList: [],
    banners: [{
      link: '',
      image: imgURL
    },
    {
      link: '',
      image: imgURL
    }]
  }),
  created() {
    this.checkLogin()
  },
  beforeRouteEnter(to, from, next) {
    next()
  },
  methods: {
    loadMore() {
      console.log('下拉事件');
    },
    checkLogin: function() {
      console.info('check login!!')
      // if (helpers.isLogin()) {
      //   return
      // }
      const isF = localStorage.getItem('isF')
      if (isF === false) {
        localStorage.clear()
        isF === true
        localStorage.setItem('isF', isF)
      }
      const url = window.location.href
      console.info(url)
      var me = this
      // 检查session是否需要login/bind
      loginService.getNeedBind().then(res => {
        if (res !== undefined && res.rows !== undefined) {
          var d = res.rows[0].action
          console.info('action:' + d)
          console.info('eid:' + res.rows[0].eid)
          if (d.indexOf('wechatRegister') !== -1) {
            console.info('is not Binding')
            localStorage.setItem('isBinding', 'false')
            me.redirectToLogin()
          } else if (res.rows[0].eid > 0) {
            console.info('isBinding ' + JSON.stringify(res.rows))
            localStorage.setItem('isBinding', 'true')
            localStorage.setItem('userInfo', JSON.stringify(res.rows))
          } 
        }
      }).catch(error => {
        console.error(error)
        if (error.status === 401) {
          this.redirectToLogin()
        }
      })
    },
    redirectToLogin: function() {
      this.$router.push('/login')
       // window.location.href = '/mp/index.html';
    },
    goReportSearch() {
      this.$router.push({
        name: 'ReportSearch'
      })
    },
    goAlarmList() {
      this.$router.push({
        name: 'MineAlarm'
      })
    },
    goPoliceList() {
      this.$router.push({
        name: 'MinePolice'
      })
    },
    makePhotoUrl: function(url) {
      var photoUrl = url ? helpers.makePhotoUrl(url.replace('|', '')) : ''
      return photoUrl
    }
  }
}
