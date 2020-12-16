
import noData from 'components/content/noData'
import ListTop from 'components/content/listTop/listTop'
import ChangeBtn from 'components/common/changeBtn/changeBtn'
import mineInfoService from 'services/mineInfoService'
import helpers from '../utils/helpers.js';
import {Toast} from 'mint-ui'
export default {
  components: {
    noData,
    ListTop,
    ChangeBtn
  },
  data: () => ({
    headerData: {
      titel: '告警信息',
      toLink: ''
    },
    checkData: {
      id: ''
    },
    items: [],
    num:5
  }),
  created () {
    this.getAlamList()
  },
  methods: {
    goScenes: function (id) {
      this.$router.push({
        name: 'MineScene'
      })
    },
    dateFormat: function(time) {
      var date = new Date(time)
      var fmt = 'yyyy-MM-dd hh:mm:ss'
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + '';
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
        }
      }
      return fmt;
    },

    padLeftZero: function (str) {
      return ('00' + str).substr(str.length);
    },
    getAlamList: function () {
      // http://test.zayutech.com/api/desktop/devices/alarms?_dc=1569379641412&page=1&start=0&limit=20
      var param = 'page=1&start=0&limit=40'
      mineInfoService.getAlamList(param).then(res => {
        this.items = res.rows
      }).catch(error => {
        Toast(error.message)
      })
    }
  }
}

