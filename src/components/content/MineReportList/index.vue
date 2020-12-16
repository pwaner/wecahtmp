<template>
  <div>
    <!--header-->
   <!--  <com-header :titel="headerData.titel" :toLink="headerData.toLink"></com-header> -->
    <!--header end-->
    <!--container-->
    <div class="mine-test-box" v-for="item in items" :key="item" @click="goInfos(item.id,item.flag)" >
      <div class="hhxh-flex">
        <div class="flex-1 title-2">{{item.number}}</div>
        <div class="flex-1 text-right">{{item.orderTime}}</div>
      </div>
      <div class="hhxh-flex m-top-20">
        <div class="flex-1 text-overflow product">{{item.name}}</div>
        <div class="flex-0 text-right" v-if="item.flag === '1'"><span class="report">test1</span></div>
        <div class="flex-0 text-right" v-if="item.flag === '0'"><span class="report no">test2</span></div>
      </div>
    </div>
    <!--container end-->
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import comHeader from 'components/comHeader'

export default {
  components: {
    comHeader
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    headerData: {
      titel: '资讯服务',
      toLink: '/Mine'
    }
  }),
  methods: {
    goInfos: function (id, flag) {
      if (flag !== '1') {
        Toast('test1')
      } else {
        id !== '' ? this.$router.push({name: 'MineReportDetailByOrderId', params: {MineReportDetailId: id}}) : Toast('test2')
      }
    }
  }
}
</script>
