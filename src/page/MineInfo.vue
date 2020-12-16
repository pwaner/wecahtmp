<template>
  <div>
    <!--container-->
    <div class="mine-info-container">
      <div class="mine-info-row">
        <div class="hhxh-flex">
          <div class="flex-0 label-box">注册账号</div>
          <input type="text" class="flex-1 text-right" placeholder="注册账号" readonly="readonly" v-model="data.uname">
        </div>
      </div>
       <div class="mine-info-row">
        <div class="hhxh-flex">
          <div class="flex-0 label-box">注册手机</div>
          <input type="text" class="flex-1 text-right" placeholder="手机号码" readonly="readonly" v-model="data.mobile">
        </div>
      </div>
    </div>
    <div class="mine-info-container">
    </div>
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
        <div class="picker-toolbar">
          <span class="mint-datetime-action mint-datetime-cancel" @click="popupVisible = false">取消</span>
          <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>
        </div>
          <mt-picker :slots="addressSlot" @change="onAddressChange" :visible-item-count="3"></mt-picker>
        </mt-popup>
    <div class="mine-info-submit text-center">
    </div>
  </div>
</template>
<script src="../js/mineInfo.js"></script>
<style scoped>
.mint-popup-4 {
    width: 100%;
}
.mint-popup-4 .picker-slot-wrapper, .page-popup .mint-popup-4 .picker-item {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
</style>
