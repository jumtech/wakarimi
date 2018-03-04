<template>
  <div id="app">
    <Header></Header>
    <p>{{foo}}</p>
  </div>
</template>

<script>
import Header from './Header/Header.vue';
export default {
  components: {
    Header,
  },
  data() {
    return {
      foo: 'buzz',
    }
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: #2e9afe;
}
</style>
