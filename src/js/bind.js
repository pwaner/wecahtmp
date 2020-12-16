import EndFooter from 'components/content/EndFooter'
import ListTop from 'components/content/listTop/listTop'

import Scroll from 'components/common//scroll/Scroll'

import loginService from 'services/loginService'
import validators from '../utils/validators'
import { Toast } from 'mint-ui'
export default {
  components: {
    EndFooter,
    ListTop,
    Scroll
  },
  data: () => ({
    mobile: '',
    code: '',
    count: 0,
    number: '',
    Register: {
      phone: "",
      sendcode: "",
    },
    disabled: false,
    time: 0,
    btntxt: "重新发送",
  }),
  created() {
    this.number = this.$route.query.number
  },
  methods: {
    loadMore() {},
    doGetCode: function () {
      this.code = ''
      if (this.count === 0) {
        if (this.mobile.trim() === '') {
          Toast('请输入手机号')
          return
        } else if (!validators.mobile(this.mobile)) {
          this.mobile = ''
          Toast('手机号不正确')
          return
        } else {
          this.countDown(60)
          loginService.sendSms(this.mobile).then(res => {
            if (res.success === true) {
              Toast('注册码已发送')
            } else {
              Toast(res.message)
            }
          })
        }
      }
    },
    doLogin: function () {
      if (this.mobile.trim() === '') {
        Toast('请输入手机号')
        return
      } else if (!validators.mobile(this.mobile)) {
        this.mobile = ''
        Toast('手机号不正确')
        return
      } else if (this.code.trim() === '') {
        Toast('请输入验证码')
        return
      }
      loginService.bindUser(this.mobile, this.code).then(res => {
        if (res.rows) {
          if (res.success === true) {
            console.info('login--用户绑定成功' + JSON.stringify(res.rows))
            this.$root.userDate = res.rows
            localStorage.setItem('isBinding', 'true')
            this.$router.replace({ path: '/', force: true })
          }
        }
      })
    },
    countDown: function (val) {
      setTimeout(() => {
        val -= 1
        this.count = val
        // console.info(val)
        if (val > 0) {
          this.countDown(val)
        }
      }, 1000)
    }
  }
}
