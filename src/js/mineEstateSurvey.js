import EndFooter from 'components/content/EndFooter'
import noData from 'components/content/noData'
// import mineInfoService from '../services/mineInfoService'
import helpers from '../utils/helpers'
// import {Toast} from 'mint-ui'

export default {
  components: {
    EndFooter,
    noData
  },
  data: () => ({
    checkData: {
      id: ''
    },
      // 拼接调查表data
    items: [
      {
        title: '',
        address: '',
        surveyCase: '',
        surveyState: '',
        result: ''
      }
    ],
    myitems: [],
      // 设置接口参数
    myParam: []
  }),
  created () {
      /**
       * 加载获取当前物业id
       * 设置调查表的参数fiter
       */
    // this.getParam()
    // this.getEstateSurvey()
    // setTimeout(1000);
    this.getResult()
    this.getSurveyCase()
  },
  methods: {

      /**
       * 调查结论
       */

    getResult: function () {
      // var color = 'accent'
      var state = '尚未得出结论'
      var text = ''
      var estate = localStorage.getItem('estateSurvey')
      var estateSurvey = JSON.parse(estate)
          // 添加name address
      this.items[0].title = estateSurvey[0].metaProperty.title
      this.items[0].address = estateSurvey[0].coeAddress + estateSurvey[0].coeName
      var memo = ''
      console.info('调查结论estateSurvey：' + estateSurvey)
      if (estateSurvey !== undefined) {
        if (estateSurvey[0].metaProperty.resultMemo !== undefined) {
          memo = estateSurvey[0].metaProperty.resultMemo
        }
        if (estateSurvey[0].metaProperty.result !== undefined) {
          var result = estateSurvey[0].metaProperty.result
          if (result >= 200 && result < 300) {
            // color = 'normal'
            state = '通过检查'
          } else if (result >= 300 && result < 400) {
            // color = 'accent'
            state = '无法通过检查 需要整改重新检查'
          } else if (result >= 400 && result < 500) {
            // color = 'alert'
            state = '无法通过检查'
          } else if (result >= 500 && result < 600) {
            // color = 'alert'
            state = '无法通过检查 有一票否决项'
          }
        }
          // text += '<span calss="survey-'+color+'">'
          // text += 'state'
          // text += '</span>'
        text += state
      }

      if (memo !== '' && memo !== undefined) {
          // text += '<li class="survey-item-memo">' + memo + '</li>'
        text = text + '('
        text += memo
        text = text + ')'
      }
      this.items[0].result = text
      console.info('items[0].result: ' + this.items[0].result)
    },

    getSurveyCase: function () {
      var surveyCase = ''
      var estate = localStorage.getItem('estateSurvey')
      var estateSurvey = JSON.parse(estate)
      if (estateSurvey !== undefined) {
        var count0 = estateSurvey[0].metaProperty.count0
        var count100 = estateSurvey[0].metaProperty.count100
        var count200 = estateSurvey[0].metaProperty.count200
        var count400 = estateSurvey[0].metaProperty.count400
        var count500 = estateSurvey[0].metaProperty.count500
        var countAttach = estateSurvey[0].metaProperty.countAttach
        if (countAttach !== 0) {
          surveyCase += countAttach + '附件，'
        }
        if (count0 !== 0) {
          surveyCase += count0 + '项未检查，'
        }
        if (count100 !== 0) {
          surveyCase += count100 + '项填写不完整，'
        }
        if (count200 !== 0) {
          surveyCase += count200 + '项检查通过，'
        }
        if (count400) {
          surveyCase += count400 + '项检查未通过，'
        }
        if (count500) {
          surveyCase += count500 + '项一票否决票数，'
        }
        console.info(surveyCase)
        this.items[0].surveyCase = surveyCase.substring(0, surveyCase.length - 1);

          // 调查状态
        var surveyState = '正在调查'
          // 过期时间戳
        var validTime
          // 调查结束时间戳
        var closeTime
          // 失效说明
        var validMemo

        validMemo = estateSurvey[0].validMemo

        validTime = estateSurvey[0].validTime
        if (validTime) {
            // 时间戳转换日期
          var time = helpers.dateFormat(validTime)
          surveyState = time + '调查失效' + (validMemo ? ' ' + validMemo : '')
        }
        closeTime = estateSurvey[0].closeTime
        if (closeTime) {
          var time1 = helpers.dateFormat(closeTime)
          surveyState = time1 + '调查结束'
        }
          // 调查情况赋值
        this.items[0].surveyState = surveyState

          // 如果物业调查表不为空，则传值到myitems做展示数据源
        if (this.items[0].title !== undefined) {
          this.myitems = this.items
        } else { console.info('title is null') }
      }
    }
  }
}
