<template>
  <div class="container">
    <ul>
      <li>
        <router-link to="/c/001/">
          <span>等加速度運動</span>
        </router-link>
      </li>
    </ul>
    <Game htmlPath="dist/SampleGame.html" />
  </div>
</template>

<script>
import Game from '../common/Game.vue';
export default {
  components: {
    Game,
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.container {
  padding: 16px 16px 16px 16px;
}
</style>
