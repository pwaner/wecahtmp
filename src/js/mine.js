import ListTop from "components/content/listTop/listTop";
import MineBtnList from "components/content/mineBtnList/mineBtnList";

import Scroll from 'components/common//scroll/Scroll'

import defaultImg from 'assets/default-user.png'


import {MessageBox} from 'mint-ui'

// import loginService from 'SERVICES/loginService'
// import mineInfoService from 'SERVICES/mineInfoService'
export default {
  components: {
    ListTop,
    Scroll,
    MineBtnList
  },
  data: () => ({
    point: 2,
    headerData: {
      titel: '我的',
      toLink: '/'
    },
    isOut: true,
    isshowpage: false,
    uname: '未绑定',
    userData: JSON.parse(localStorage.getItem('userDate')) || {telephone: '', uname: ''},
    isfirst: '',
    defaultImg: defaultImg
  }),
  created () {
    this.checkLogin()
  },
  beforeRouteEnter (to, from, next) {
    // sessionStorage.clear()
    next()
  },
  methods: {
    goMineInfo () {
      this.$router.push({
        name: 'MineInfo'
      })
    },
    goMineEstateList () {
      this.$router.push({
        name: 'MineEstate'
      })
    },
    goMineSubscribleList () {
      this.$router.push({
        name: 'MineSubscrible'
      })
    },
    checkLogin: function () {
      var vuserInfo = localStorage.getItem('userInfo')
      if (vuserInfo !== undefined) {
        var userinfo = JSON.parse(vuserInfo)
        if (userinfo !== undefined && userinfo[0] !== undefined) { this.uname = userinfo[0].name }
      }
    },
    loginOut: function () {
      MessageBox({
        title: '提示',
        message: '账户注销功能暂未提供，请取消关注',
        showCancelButton: true
      }).then(res => {
        if (res !== 'cancel') {
          // loginService.memberOut(localStorage.getItem('openid')).then(req => {
          //   if (req.success === true) {
          //     localStorage.clear()
          //     localStorage.setItem('isOut', true)
          //     this.$router.push('/')
          //   }
          // })
        }
      })
    }
  }
}
