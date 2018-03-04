<template>
  <div class="container">
    <div class="num_wrapper cmn_center_content">
      <div class="num_circle cmn_center_content">
        <p class="num">{{num}}</p>
      </div>
    </div>
    <div class="title cmn_center_content">
      <p>{{title}}</p>
    </div>
    <div class="arrow">
      <div class="right-arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['num', 'title', 'path',],
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  padding: 16px 16px 16px 16px;
  border: 2px solid #E2F0D9;
  box-shadow: 2px 2px 6px 0px #CFE4C1;
}
.num_circle {
  width: 32px;
  height: 32px;
  background-color: #70AD47;
  border-radius: 50%;
  color: #FFFFFF;
  font-size: 24px;
}
.title {
  margin-left: 8px;
  font-size: 24px;
}
.right-arrow {
  position: relative;
  left: 24px;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border: 24px solid transparent;
  border-left: 24px solid #70AD47;
}
</style>
