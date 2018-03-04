<template>
  <div class="container">
    <router-link class="home" to="/c">
      <img class="home_icon" src="https://s3-ap-northeast-1.amazonaws.com/wakarimi/icon/home.png" alt="home">
    </router-link>
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
  width: 40px;
  height: 40px;
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
