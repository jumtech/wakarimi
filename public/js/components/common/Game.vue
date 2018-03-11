<template>
  <div id="game"></div>
</template>

<script>
import p5 from 'p5';
import games from '../games';
export default {
  props: ['gameName'],
  created() {
    console.log("p5:",p5)
    const sample = new p5(games[this.gameName], 'game');
  }
}
</script>

<style scoped>
</style>
