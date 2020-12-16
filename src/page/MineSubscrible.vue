<template>
  <div>
    <!--container-->
    <br>
    <div class="mine-info-submit text-center">
      <!-- <button class="active-btn" @click="goAdd"><img src="../assets/add-.png" style="height: .7rem;"></button> -->
      我的订阅
    </div>
    <div class="mine-men-container">
      <div class="item-box" v-for="(item, index) in items" :key="index">
        <div class="hhxh-flex m-t-15">
          <div class="flex-1">{{item.location}}</div>
          <img src="../assets/delete.png" class="flex-0 m-l-20">
          <div class="flex-0 m-l-20" @click.stop="cancelSubscribe(item)">取消</div>
        </div>
      </div>

    </div>

    
    <no-data :items="items || []"></no-data>
    
    <!--container end-->
  </div>
</template>
<script src="../js/mineSubscrible.js"></script>
