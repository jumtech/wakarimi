<template>
  <p>{{foo}}</p>
</template>

<script>
export default {
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