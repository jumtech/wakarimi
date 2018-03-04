<template>
  <div class="container">
    <div class="thumbnail">
      <img class="wide_image" src="../../../image/001_ua_motion/thumbnail.png" alt="thumbnail">
    </div>
    <div class="description">
      <p>こんな問題が解けるようになります。</p>
      <ul class="list">
        <img class="list_item_image" src="../../../image/001_ua_motion/car.png" alt="car">
        <li class="list_item">車が動くやつ</li>
        <img class="list_item_image" src="../../../image/001_ua_motion/ball.png" alt="ball">
        <li class="list_item">小球を落とす(投げる)やつ</li>
        <li class="list_item">速度vや時間tを求めさせるやつ</li>
        <li class="list_item">「加速度」って書いてあるやつ</li>
      </ul>
    </div>
    <div class="cmn_center_content">
      <img class="arrow_icon" src="../../../image/icon/arrow.png" alt="arrow">
    </div>
    <p class="heading"><span class="cmn_underline">3つのテクニック</span>で解けるように！</p>
    <LinkItem class="link_item" v-for="(step, i) in steps" :key="i"
      :num="i+1"
      :title="step.title"
      :contentId="contentId"
      :stepId="step.id" />
  </div>
</template>

<script>
import LinkItem from './LinkItem.vue';
export default {
  components: {
    LinkItem,
  },
  data() {
    return {
      steps: [
        {title: '「v」とか「t」を覚える！', id: '001'},
        {title: '正しい図が描ける！', id: '002'},
        {title: '公式を正しく使える！', id: '003'},
      ]
    }
  },
  computed: {
    contentId() {
      return this.$route.params.contentId;
    },
  },
}
</script>

<style scoped>
.container {
  padding: 16px 16px 16px 16px;
}
.description {
  margin: 16px 0 16px 0;
  padding: 12px 12px 12px 12px;
  background-color: #E7E6E6;
}
.wide_image {
  width: 100%;
}
.list_item {
  margin: 12px 0 12px 0;
  list-style-position: inside;
}
.list_item_image {
  height: 64px;
}
.description {
  font-size: 20px;
}
.arrow_icon {
  width: 160px;
}
.heading {
  margin: 16px 0 16px 0;
  font-size: 20px;
}
.link_item {
  margin: 24px 0 24px 0;
}
</style>
