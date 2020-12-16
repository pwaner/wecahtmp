<template>
  <scroll
    class="content"
    ref="scroll"
    :pull-up-load="true"
  >
    <div>
      <list-top text="佳御智慧安防公众号" />
      <div class="login-box">
        <div class="txt-name">
          公众号暂提供业务系统（佳御智慧安防管理系统）通知的设备报警消息、警情信息
        </div>
      </div>
    </div>
  </scroll>
</template>
<script>
import ListTop from 'components/content/listTop/listTop'
import Scroll from 'components/common//scroll/Scroll'
export default {
  components: {
    ListTop,
    Scroll
  },
  data: () => ({
    headerData: {
      titel: 'test',
      toLink: '/MineReport'
    },
    data: {
      id: '',
      name: '',
      number: '',
      checknumber: '',
      longTime: null,
      mobile: ''
    },
    showSearch: false,
    checkReportListitems: [],
    ReportListitems: []
  }),
  created() {},
  beforeRouteEnter(to, from, next) {
    next()
  }
}
</script>
