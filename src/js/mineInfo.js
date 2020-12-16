import EndFooter from 'components/content/EndFooter'
export default {
  components: {
    EndFooter
  },
  data: () => ({
    headerData: {
      titel: '账户信息',
      toLink: '/Mine'
    },
    popupVisible: false,
    sexVisible: false,
    cityVisible: false,
    areaList: [],
    chzwdata: [],
    data: {
      mobile: '',
      name: '',
      gender: '',
      genderText: '',
      telephone: '',
      birthday: '',
      idCard: '',
      socialSecurityNo: '',
      areaId: '',
      area: {},
      address: '',
      areaText: ''
    },
    addressSlot: [{
      flex: 1,
      values: [],
      className: 'slot1'
    }],
    citySlots: [
      {
        flex: 1,
        values: Object.keys(address),
        className: 'slot1',
        textAlign: 'center'
      }, {
        divider: true,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: Object.values(address)[0],
        className: 'slot3',
        textAlign: 'center'
      }
    ],
    checkDate: '',
    bir: '',
    a: [],
    addressProvince: '',
    addressCity: '',
    dateValue: new Date(),
    startDate: new Date('1900-01-01'),
    endDate: new Date(),
    addressChangeData: {
      id: '',
      name: ''
    }
  }),
  created () {
    this.loadMyInfo()
  },
  methods: {
    onAddressChange: function (picker, values) {
      this.addressChangeData.id = this.areaList.filter(item => item.name === values[0]).map(a => a.id)[0]
      this.addressChangeData.name = values[0]
    },
    selectaddress: function () {
      this.data.areaId = this.addressChangeData.id
      console.info(this.data.areaId)
      this.data.areaText = this.addressChangeData.name
      this.popupVisible = false
    },
    loadMyInfo: function () {
      var vuserInfo = localStorage.getItem('userInfo')
      if (vuserInfo !== undefined) {
        var userinfo = JSON.parse(vuserInfo)
        if (userinfo !== undefined && userinfo[0] !== undefined) {
          this.data.uname = userinfo[0].name
          this.data.mobile = userinfo[0].mobile
        }
      }
    }
  }
}

const address = {}
