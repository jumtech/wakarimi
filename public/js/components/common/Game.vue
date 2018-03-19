<template>
  <div id="game"></div>
</template>

<script>
import p5 from 'p5';
import games from '../games';
export default {
  props: ['gameName'],
  created() {
    const sample = new p5(games[this.gameName], 'game');
  }
}
</script>

<style scoped>
</style>
