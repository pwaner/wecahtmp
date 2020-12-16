<template>
  <div>
    <!--container--> 
    <div class="container"> 
      <div class="info-container">
        <list-top :text="headerData.titel" />
      </div>
      <div class="item-box" v-for="(item, index) in items" :key='index'>
        <div class="hhxh-flex">
          <div class="flex-1">{{item.note}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.pname}}</div>
          <!-- <img src="../assets/edit.png" class="flex-0 m-l-20" >
          <div class="flex-0 m-l-20" @click="goEdit(item.id)">编辑</div> -->
        </div>
        <div class="hhxh-flex m-t-15">
          <div class="flex-1 text-overflow1">{{item.alarmtime}}</div>
          <!-- <img src="../assets/delete.png" class="flex-0 m-l-20">
          <div class="flex-0 m-l-20" @click.stop="deleteUser(item.id, index)">删除</div> -->
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
<script src="../js/minePolice.js"></script>
