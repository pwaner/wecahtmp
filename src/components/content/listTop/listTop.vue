<template>
  <div class="list_top">
    <img :src="imgUrl" alt="img" />
    <p>{{text}}</p>
  </div>
</template>

<script>
import imgURL1 from "assets/img/logo.png";

export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: imgURL1
    }
  }
}
</script>

<style>
.list_top {
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
  padding: 10px 0;
  text-align: center;
  font-size: 16px;
}
.list_top img {
  width: 35px;
  height: auto;
}
</style>