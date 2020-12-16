<template>
  <div class="item" @click="itemClick">
    <div class="item_img">
      <div class="item_icon"><slot name="icon"></slot></div>
    </div>
    <span class="item_p"><slot name="text"></slot></span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped lang="less">
.item {
  width: calc(100% / 3);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  .item_img {
    width: 100%;
    height: 70px;
    max-width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  }
  .item_p {
    display: block;
    font-size: 14px;
    margin-top: 10px;
    color: #333;
    width: 100%;
    text-align: center;
  }
}
.item:nth-child(3n + 1) .item_img {
  background-color: var(--btn-color1);
}
.item:nth-child(3n + 2) .item_img {
  background-color: var(--btn-color2);
}
.item:nth-child(3n + 3) .item_img {
  background-color: var(--btn-color3);
}
</style>