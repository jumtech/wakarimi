<template>
  <div class="container">
    <div class="home">
      <img class="home_icon" src="../../../image/icon/home.png" alt="home">
    </div>
    <div class="title cmn_center_content">
      <p>
        {{title}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '等加速度運動',
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  height: 48px;
  background-color: #E2F0D9;
  padding: 4px 4px 4px 4px;
}
.home {
  width: 48px;
  height: 48px;
}
.home_icon {
  width: 100%;
  height: 100%;
}
.title {
  margin: 0 0 0 16px;
  font-size: 24px;
}
</style>
