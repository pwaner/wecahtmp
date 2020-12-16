<template>
  <div>
    <br>
    <div id="content">
      
    <div class="mine-info-submit text-center">
      物业列表
    </div>
      <div class="mine-info-container">
      <div class="mine-info-row-w">
       <div class="hhxh-flex">
        <button class="active-btn" @click="goScenes">切换场景</button>
        </div>
      </div>
      </div>
    <div class="mine-men-container">
      <div class="item-box" v-for="(item, index) in items" :key='index'>
        <div class="hhxh-flex">
          
          <div class="flex-1">{{item.address}}<br>{{getNamePS(item)}}</div>
          <div v-if="!hasSubscrible(item)" class="flex-0 m-l-20" @click="goEstateInfo(item)"><img src="../assets/footer-mine.png"></div>
          <img v-if="!hasSubscrible(item)" src="../assets/edit.png" class="flex-0 m-l-20" >
          <div v-if="!hasSubscrible(item)" class="flex-0 m-l-20" @click="subscrible(item)">订阅通知</div>
          <div v-if="hasSubscrible(item)" class="flex-0 m-l-20" @click="goEstateInfo(item)"><img src="../assets/footer-mine.png"></div>
          <img v-if="hasSubscrible(item)" src="../assets/delete.png" class="flex-0 m-l-20">
          <div v-if="hasSubscrible(item)" class="flex-0 m-l-20" @click.stop="cancelSubscribe(item)">取消订阅</div>
        </div>
      </div>
      <scroll :onBottom = 'onBottom'></scroll>
    </div>
    
    <no-data :items="items || []"></no-data>
    <!--container end-->
  </div>
  </div>
</template>
<script src="../js/mineEstate.js"></script>
