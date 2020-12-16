<template>
  <div>
    <!--container-->
    <div class="container">
      <div class="info-container">
        <list-top text="切换场景" />
        <change-btn @clickBtn="goScenes" centerText="切换场景"></change-btn>
      </div>
      <div class="item-box" v-for="(item, index) in items" :key='index'>
        <div class="hhxh-flex">
          <div class="flex-1">{{item.address}}</div>
        </div>
        <div class="hhxh-flex">
          <div class="flex-1">{{item.note}}</div>
        </div>
        <div class="hhxh-flex m-t-15">
          <div class="flex-1 text-overflow1">{{dateFormat(item.createTime)}}</div>
        </div>
      </div>
    </div>
    <div class="mine-info-submit text-center">
      <!-- <button class="active-btn" @click="goAdd"><img src="../assets/add-.png" style="height: .7rem;"></button> -->
      <!-- 仅显示最多二十条记录 -->
    </div>
    <no-data :items="items || []"></no-data>

    <!--container end-->
  </div>
</template>
<script src="../js/mineAlarm.js"></script>

<style scoped>
.active-btn{
  padding: 5px
}
</style>