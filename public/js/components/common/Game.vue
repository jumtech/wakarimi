<template>
  <iframe id="game" :src="htmlPath" scrolling="no" marginheight="0" marginwidth="0" frameborder="0" style="border:none;" onload="this.contentWindow.focus();"></iframe>
</template>

<script>
export default {
  props: ['htmlPath'],
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>
