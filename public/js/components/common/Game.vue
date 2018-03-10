<template>
  <div id="game_container">
    <iframe id="game" :src="htmlPath" scrolling="no" marginheight="0" marginwidth="0" frameborder="0" style="border:none;" onload="this.contentWindow.focus();"></iframe>
  </div>
</template>

<script>
import p5 from 'p5';
export default {
  props: ['htmlPath'],
  created() {
    console.log("p5:",p5)
  }
}
</script>

<style scoped>
</style>
