
<template>
	<div class="scroll"></div>
</template>
<script>
export default {
  name: 'Scroll',
  methods: {
    scrollEvent() {
      if (document.documentElement.scrollTop +
                     document.documentElement.clientHeight >=
                    document.querySelector('#content').clientHeight) {
        this.onBottom();
      }
    }
  },
  props: {
    onBottom: Function
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent, false);
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollEvent, false);
  }
}
</script>
