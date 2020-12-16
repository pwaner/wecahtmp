import EndFooter from 'components/content/EndFooter'
import mineInfoService from '../services/mineInfoService'
import {Toast, MessageBox} from 'mint-ui'

export default {
  components: {
    EndFooter
  },
  data: () => ({
    checkData: {
      id: ''
    },
    items: {},
    myParam: []
  }),
  created () {
    this.getEstateInfo()
    this.getParam()
    this.getEstateSurvey()
  },
  methods: {
        // 获取查看物业的数据  estate放入data items  行政区划数据不放上去
    getEstateInfo: function() {
      var name
      var address
      var postScript
      var note
      var estate = localStorage.getItem('estate')
      if (estate !== undefined) {
        var estateinfo = JSON.parse(estate)
        if (estateinfo !== undefined) {
          name = estateinfo.name
          address = estateinfo.address
          postScript = estateinfo.postScript
          if (estateinfo.note !== undefined) {
            note = estateinfo.note
          }
        }
      }
      this.items = {
        name,
        address,
        postScript,
        note
      };
    },
        // 跳转到物业调查表页面
    goMineEstateSurvey: function () {
      this.$router.push({
        name: 'MineEstateSurvey'
      })
    },

        /**
         * getParam,getEstateSurvey
         * 两个方法为提前获取存贮该物业的调查表数据
         *
         * 设置接口参数
         * myparam
         */
    getParam: function () {
      var ezEid
      var estate = localStorage.getItem('estate')
      if (estate !== undefined) {
        var estateinfo = JSON.parse(estate)
        if (estateinfo !== undefined) {
          ezEid = estateinfo.ezEid
        }
      }

      var eid
      var vuserInfo = localStorage.getItem('userInfo')
      if (vuserInfo !== undefined) {
        var userinfo = JSON.parse(vuserInfo)
        if (userinfo !== undefined && userinfo[0] !== undefined) {
          eid = userinfo[0].scene.eid
        }
      }
      this.myParam = [
            {'property': 'estateId', 'value': ezEid, 'exactMatch': true},
            {'property': 'appType', 'operator': '=', 'value': 201},
            {'property': 'subjectId', 'operator': '=', 'value': eid}
      ]
    },

        /**
         * 获取调查表信息
         * fiter 参数转码
         * JSON.stringify 将对象变成字符串
         */
    getEstateSurvey: function () {
      var estateSurvey
      var estate
      var filter = 'filter=' + encodeURIComponent(JSON.stringify(this.myParam))
      mineInfoService.loadEstateSurvey(filter).then(res => {
            // this.items = res.rows
            // this.items[0].name = res.rows[0].name
            // this.items[0].address = res.rows[0].address
            // 存放物业表数据到sessionStorage
        localStorage.setItem('estateSurvey', JSON.stringify(res.rows))

        estate = localStorage.getItem('estateSurvey')

        estateSurvey = JSON.parse(estate)
        console.info(estateSurvey[0].name)
        console.info(this.items[0].name)
        console.info('estate:' + estate)
        console.info('estateSurvey:' + estateSurvey)
      }).catch(error => {
        console.info(error.messages)
      })
    }
  }
}
