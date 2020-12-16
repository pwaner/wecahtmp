import ListTop from 'components/content/listTop/listTop'
import mineInfoService from 'services/mineInfoService'
import helpers from '../utils/helpers'
// import {Toast, MessageBox} from 'mint-ui'
export default {
  components: {
    ListTop
  },
  data: () => ({
    headerData: {
      titel: '警情信息',
      toLink: ''
    },
    checkData: {
      id: ''
    },
    items: []
  }),
  created () {
    // this.initHead()
    this.getPoliceList()
  },
  methods: {
    goAdd () {
      // this.$router.push({
      //   name: 'MineMenInfo'
      // })
    },
    // initHead: function () {
    //   this.headerData.toLink = helpers.initHead(this.$route)
    // },
    getPoliceList: function () {
      // mineMenService.loadRentManlist().then(res => {
      mineInfoService.getPoliceList(localStorage.getItem('openid')).then(res => {
        this.items = res.rows
      })
    },
    makePhotoUrl: function (url) {
      // 返回的数据中 多了‘|’ 所以去除
      var photoUrl = url ? helpers.makePhotoUrl(url.replace('|', '')) : ''
      // console.info('loading image:' + photoUrl)
      return photoUrl
    }
  }
}
