import EndFooter from 'components/content/EndFooter'
import noData from 'components/content/noData'
import mineInfoService from 'SERVICES/mineInfoService'
import {Toast, MessageBox} from 'mint-ui'
export default {
  components: {
    EndFooter,
    noData
  },
  data: () => ({
    headerData: {
      titel: '订阅列表',
      toLink: ''
    },
    checkData: {
      id: ''
    },
    items: []
  }),
  created () {
    this.getSubscribleList()
  },
  methods: {
    getSubscribleList: function () {
      // filter: [{"property":"subjectId","value":8121,"exactMatch":true}]
      var eid
      var vuserInfo = localStorage.getItem('userInfo')
      if (vuserInfo !== undefined) {
        var userinfo = JSON.parse(vuserInfo)
        if (userinfo !== undefined && userinfo[0] !== undefined) {
          eid = userinfo[0].scene.eid
        }
      }
      var param = [{
        property: 'subjectId',
        value: eid,
        exactMatch: true
      }];
      var filter = 'filter=' + encodeURIComponent(JSON.stringify(param))
      mineInfoService.loadSubscribleInfo(filter).then(res => {
        this.items = res.rows
      }).catch(error => {
        Toast(error.message)
      })
    },
    cancelSubscribe: function (item) {
      var me = this
      MessageBox({
        title: '提示',
        message: '确认取消该订阅吗?',
        showCancelButton: true
      }).then(res => {
        if (res !== 'cancel') {
          mineInfoService.cancelSubscribe(item.rsId).then(res => {
            me.getSubscribleList()
            Toast('成功取消该订阅')
          })
        }
      })
    }
  }
}
