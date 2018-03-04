<template>
  <div id="app">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from './common/Header.vue';
import Content from './Content/Content.vue';
export default {
  components: {
    Header,
    Content,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>
