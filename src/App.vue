<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import './style/zayu.css'
import MainTabBar from 'components/content/mainTabBar/mainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
#app {
  height: 100%;
}
</style>
