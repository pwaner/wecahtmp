import EndFooter from 'components/content/EndFooter'
import mineInfoService from 'SERVICES/mineInfoService'
import {Toast, MessageBox} from 'mint-ui'
export default {
  components: {
    EndFooter
  },
  data: () => ({
    SS_OWNER: 11100, // 主体1的所有者
    SS_LEGAL_REPRESENT: 11101, // 法人的法人代表
    SS_MANAGE: 11300, // 主体1的管理者
    SS_CONTACT: 11301, // 主体1的联系人
    SS_RELATION: 11500, // 主体1的关联人
    SS_MEMBER: 11501, // 主体1的自然人成员
    SS_FIRE: 11502, // 主体1的消防责任人
    SS_OTHER: 11900, // 主体1的其他关系
    SS_GROUP: 11901, // 法人的法人群组
    SS_LEGAL2: 11902, // 法人的二级法人
    SS_AGENT: 11903, // 主体1的代理人
    SS_MIN: 11000,
    SS_MAX: 11999,
    SO_OWNER: 12100, // 客体的所有者
    SO_MANAGE: 12300, // 客体的管理者
    SO_RELATION: 12500, // 客体的关联人
    OBJECT_OBJECT: 22000, // 客体和客体关系
    OO_OWNER: 22100, // 客体1拥有客体2
    OO_MANAGE: 22300, // 客体1管理客体2
    OO_RELATION: 22500, // 客体1使用客体2
    LEVEL2_COUNT: 99,

    checkData: {
      id: ''
    },
    items: []
  }),
  created () {
    this.loadScenes()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      localStorage.setItem('fromr', from.name)
    })
  },
  methods: {
    loadScenes: function () {
      var vuserInfo = localStorage.getItem('userInfo')
      if (vuserInfo !== undefined) {
        var userinfo = JSON.parse(vuserInfo)
        if (userinfo !== undefined && userinfo[0] !== undefined) {
          this.items = userinfo[0].scenes
        }
      }
    },
    calcTypeMax: function(type) {
      var divs = 10
      var maxadd = 0
      var check
      check = Math.floor(type / divs) * divs
      while (check === type) {
        maxadd = divs - 1
        divs = divs * 10
        check = Math.floor(type / divs) * divs
      }
      return type + maxadd
    },
    isRelationType: function(type, value) {
      if (!value) return false
      if (value < type) return false
      if (value > this.calcTypeMax(type)) return false
      return true
    },
    isSubjectManage: function(crType) {
      if (!crType) return false
      if (crType >= this.SS_OWNER && crType <= this.SS_RELATION) return true
      return false
    },
    convertSS21CrType: function(crType) {
      if (this.isRelationType(this.SS_OWNER, crType)) {
        switch (crType) {
          case this.SS_LEGAL_REPRESENT:
            return '法人代表'
          default:
            return '所有者'
        }
      } else if (this.isRelationType(this.SS_MANAGE, crType)) {
        switch (crType) {
          case this.SS_CONTACT:
            return '联系人'
          default:
            return '管理者'
        }
      } else {
        switch (crType) {
          case this.SS_RELATION:
            return '成员'
          case this.SS_MEMBER:
            return '成员'
          case this.SS_FIRE:
            return '消防责任人'
          case this.SS_OTHER:
            return '其他'
          case this.SS_GROUP:
            return '法人群组'
          case this.SS_LEGAL2:
            return '二级法人'
          case this.SS_AGENT:
            return '代理人'
          default:
            return '个人物业'
        }
      }
    },
    changeScene: function (item) {
      var me = this
      var fromr = localStorage.getItem('fromr')
      MessageBox({
        title: '提示',
        message: '是否切换到当前场景?',
        showCancelButton: true
      }).then(res => {
        if (res !== 'cancel') {
          mineInfoService.changeToScene(item).then(res => {
            Toast('场景切换成功')
            localStorage.setItem('userInfo',JSON.stringify(res.rows))
            me.$router.push({
              name: fromr
            })
          })
        }
      })
    }
  }
}
