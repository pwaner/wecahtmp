<template>
  <div>
    <br>
    <div class="mine-info-submit text-center">
      场景列表
    </div>
    <!--container-->
    <div class="mine-men-container">
      <div class="item-box" v-for="(item, index) in items" :key="index">
        <div class="hhxh-flex">
          <div class="flex-1">{{item.name}}({{convertSS21CrType(item.crType)}})</div>
          <img src="../assets/edit.png" class="flex-0 m-l-20" >
          <div class="flex-0 m-l-20" @click="changeScene(item)">切换</div>
        </div>
      </div>

    </div>
    <no-data :items="items || []"></no-data>
    
    <!--container end-->
  </div>
</template>
<script src="../js/mineScene.js"></script>
