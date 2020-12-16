<template>
  <div class="clickBtn mine-info-row-w" @click="clickBtn">
      <slot></slot>
      <span v-if="centerText">{{centerText}}</span>
  </div>
</template>

<script>
export default {
    props: {
        centerText: {
            type: String || Object,
            default: typeof this == 'String' ? '': {}
        }
    },

    methods: {
        clickBtn() {
            this.$emit('clickBtn')
        }
    }
}
</script>

<style scoped lang="less">
    .clickBtn{
        padding: 5px;
        margin-top: 10px;
        span{
            display: block;
            text-align: center;
            width: 100%;
            color: #000;
        }
    }
</style>