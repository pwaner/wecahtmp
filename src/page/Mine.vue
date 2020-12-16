<template>
  <scroll class="content" ref="scroll" :pull-up-load="true">
    <div>
      <div class="mine-info">
        <list-top class="mine-infos" :text="uname" :imgUrl="defaultImg" />
      </div>
      <mine-btn-list />
      <div class="mine-info-submit text-center">
        <button class="active-btn logout" @click="loginOut">注销</button>
      </div>
    </div>
  </scroll>
</template>
<script src="../js/mine.js"></script>

<style lang="less">
.mine-infos {
  border: none;
  width: 100%;
  img {
    height: 1.35rem !important;
    width: 1.35rem !important;
  }
  p {
    margin-top: 10px;
  }
}
</style>