<template>
  <div id="btnList">
    <list-top class="clearfix" text="佳御智慧安防公众号" />
    <btn-list>
      <btn-list-item link="/ReportSearch">
        <img src="~assets/img/home/subscribe.png" alt="" slot="icon" />
        <div slot="text">资讯服务</div>
      </btn-list-item>
      <btn-list-item link="/MineAlarm">
        <img src="~assets/img/home/giveAnAlarm.png" alt="" slot="icon" />
        <div slot="text">告警信息</div>
      </btn-list-item>
      <btn-list-item link="/MinePolice">
        <img src="~assets/img/home/policeSituation.png" alt="" slot="icon" />
        <div slot="text">警情信息</div>
      </btn-list-item>
    </btn-list>
  </div>
</template>

<script>
import BtnList from "components/common/btnList/btnList";
import BtnListItem from "components/common/btnList/btnListItem";
import ListTop from "components/content/listTop/listTop";

export default {
  data() {
    return {};
  },
  components: {
    BtnList,
    BtnListItem,
    ListTop
  },
};
</script>

<style scoped>
</style>