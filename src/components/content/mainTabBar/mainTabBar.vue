<template>
  <tab-bar>
    <tab-bar-item link="/Index">
      <img slot="icon" src="~assets/img/tabbar/logo.png" alt="" />
      <img slot="active-icon" src="~assets/img/tabbar/logo.png" alt="" />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/Mine">
      <img slot="icon" src="~assets/img/tabbar/profile.png" alt="" />
      <img slot="active-icon" src="~assets/img/tabbar/profile.png" alt="" />
      <div slot="text">我的</div>
    </tab-bar-item>
    <tab-bar-item link="/" style="pointer-events: none;">
      <img slot="icon" src="~assets/img/tabbar/more.png" alt="" />
      <img slot="active-icon" src="~assets/img/tabbar/more.png" alt="" />
      <div slot="text">更多</div>
    </tab-bar-item>
  </tab-bar>
</template>

  <script>
import TabBar from "components/common/tabBar/tabBar";
import TabBarItem from "components/common/tabBar/tabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
