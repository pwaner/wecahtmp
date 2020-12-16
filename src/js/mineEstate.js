import EndFooter from 'components/content/EndFooter'
import noData from 'components/content/noData'
import scroll from 'components/content/BottomLoading'

import mineInfoService from 'SERVICES/mineInfoService'

import {Toast, MessageBox} from 'mint-ui'
export default {
  components: { 
    EndFooter,
    noData,
    scroll
  },
  data: () => ({
    checkData: {
      id: ''
    },
    items: [],
    ssParam: [],
    ssList: [],
    num: 10,
    flag_finish: false,
    flag_bottom_time: 0
  }),
  created () {
    // this.getSubscribleParam() //
    this.getEstateList()
  },
  methods: {
    // 触底加载数据触发事件
    onBottom() {
      var currentTime = (new Date()).getTime()
      if (currentTime - this.flag_bottom_time > 10000) {
        this.flag_finish = false
      }
      this.flag_bottom_time = currentTime

         // 用一个字段去判断该方法是否执行完，flag_finish为true表示数据没有返回不再次触发，返回空
      if (this.flag_finish === true) {
        return
      }
      this.flag_finish = true
      // 每触底一次请求后台限制数目+10，展示数据+10
      var num = this.num + 10
      this.num = num
      // this.$router.go(0);
      var param = 'page=1&start=0&limit=' + this.num
      mineInfoService.loadEstateInfo(param).then(res => {
        this.flag_finish = false
        this.items = res.rows
        localStorage.setItem('estates', JSON.stringify(res.rows))
      }).catch(error => {
        Toast(error.message)
      })
    },

    getSubscribleParam: function () {
      // filter: [{"property":"subjectId","value":8121,"exactMatch":true}]
      var eid
      var vuserInfo = localStorage.getItem('userInfo')
      if (vuserInfo !== undefined) {
        var userinfo = JSON.parse(vuserInfo)
        if (userinfo !== undefined && userinfo[0] !== undefined) {
          eid = userinfo[0].scene.eid
        }
      }
      this.ssParam = [{
        property: 'subjectId',
        value: eid,
        exactMatch: true
      }];
    },
    getEstateList: function () {
      // 直接获取该场景下的物业列表,scene数组中的值

      var param = 'page=1&start=0&limit=' + this.num
      mineInfoService.loadEstateInfo(param).then(res => {
        this.items = res.rows
        localStorage.setItem('estates', JSON.stringify(res.rows))
      }).catch(error => {
        Toast(error.message)
      })
      /**
       * 获取订阅列表
       */
      // var filter = 'filter=' + encodeURIComponent(JSON.stringify(this.ssParam))
      // mineInfoService.loadSubscribleInfo(filter).then(res => {
      //   this.ssList = res.rows
      //   var param = 'page=1&start=0&limit=40'
      //   mineInfoService.loadEstateInfo(param).then(res => {
      //     this.items = res.rows
      //   }).catch(error => {
      //     Toast(error.message)
      //   })
      // }).catch(error => {
      //   Toast(error.message)
      // })
    },
    getNamePS: function(record) {
      var name = record.name
      var postScript = record.postScript || ''
      if (postScript !== '') postScript = '(' + postScript + ')'
      return name + postScript
    },
    goScenes: function (id) {
      this.$router.push({
        name: 'MineScene'
      })
    },
    /**
     *
     * 跳转到物业基本信息表
     * 并缓存当前物业的信息
     */
    goEstateInfo: function(estate) {
      var data
      var note
      if (estate.note !== undefined) {
        note = estate.note
      }
      data = {
        ezEid: estate.eid,
        name: estate.name,
        address: estate.address,
        postScript: estate.postScript,
        note
      }
      // 将当前物业信息存放到localStorage
      localStorage.setItem('estate', JSON.stringify(data))
     // 跳转
      this.$router.push({
        name: 'MineEstateInfo'
      })
    },
    subscrible: function(estate) {
     // http://cloud.zayutech.com/api/desktop/subscribes?_dc=1569250957109
      // {"ezEid":8132,"deviceAlarm":1,"clientId":"subscribe-13"}
      // {"crId1":11072,"ehEid":8162,"deviceAlarm":1,"clientId":"subscribe-2"}
      var param = [{
        property: 'estateId',
        value: estate.eid,
        exactMatch: true
      }];
      var filter = 'filter=' + encodeURIComponent(JSON.stringify(param))
      mineInfoService.getSubscrible(filter).then(res => {
        var items = res.rows
        if (items === undefined || items[0] === undefined) { return; }
        var item = items[0]
        var data
          // todo hzb deviceFlag等根据item权限及弹窜选择设置
        if (estate.crId === undefined) {
          data = {
            ad1: item.ad1,
            ad2: item.ad2,
            ad3: item.ad3,
            ad4: item.ad4,
            ad5: item.ad5,
            appEstateFlag: 0,
            deviceFlag: 1,
            estateId: item.estateId,
            reportFlag: 0
          }
        } else {
          data = {
            relationId: estate.crId,
            ad1: item.ad1,
            ad2: item.ad2,
            ad3: item.ad3,
            ad4: item.ad4,
            ad5: item.ad5,
            appEstateFlag: 0,
            deviceFlag: 1,
            estateId: item.estateId,
            reportFlag: 0
          }
        }

        mineInfoService.postSubscrible(data).then(res => {
          Toast('订阅' + estate.name + '成功')
          this.getEstateList()
        }).catch(error => {
          Toast(error.message)
        })
      }).catch(error => {
        Toast(error.message)
      })
    },
    hasSubscrible: function(item) {
      if (this.ssList.length < 1) { return false }
      if (item.crId !== undefined) {
        for (var i = 0; i < this.ssList.length; i++) {
          if (this.ssList[i].crId2 !== null && this.ssList[i].crId2 === item.crId) {
            return true
          } else if (this.ssList[i].crId1 !== null && this.ssList[i].crId1 === item.crId) {
            return true
          }
        }
        return false
      } else {
        for (var q = 0; q < this.ssList.length; q++) {
          var ezid = this.ssList[q].ezEid
          if (ezid === undefined) { ezid = this.ssList[q].ebEid }
          if (ezid === item.eid) { return true }
        }
        return false
      }
    },
    getRsId: function(item) {
      if (this.ssList.length < 1) { return undefined }
      if (item.crId !== undefined) {
        for (var i = 0; i < this.ssList.length; i++) {
          if (this.ssList[i].crId2 !== null && this.ssList[i].crId2 === item.crId ||
            this.ssList[i].crId1 !== null && this.ssList[i].crId1 === item.crId) { return this.ssList[i].rsId }
        }
        return undefined
      } else {
        for (var q = 0; q < this.ssList.length; q++) {
          var ezid = this.ssList[q].ezEid
          if (ezid === undefined) { ezid = this.ssList[q].ebEid }
          if (ezid === item.eid) { return this.ssList[q].rsId }
        }
        return undefined
      }
    },
    cancelSubscribe: function (item) {
      var me = this
      MessageBox({
        title: '提示',
        message: '确认取消该订阅吗?',
        showCancelButton: true
      }).then(res => {
        if (res !== 'cancel') {
          var rsid = me.getRsId(item)
          if (rsid === undefined) return
          mineInfoService.cancelSubscribe(rsid).then(res => {
            me.getEstateList()
            Toast('成功取消该订阅')
          })
        }
      })
    }
  }
}
