<template>
  <div class="container" :class="{expanded: expanded}" @click="toggleExpanded">
    <div class="min">
      <img class="icon" src="https://s3-ap-northeast-1.amazonaws.com/wakarimi/icon/girl.png" alt="student">
      <div class="min_content">
        <p class="title">なんで2のつぎが13なの？</p>
        <div class="dots">・ ・ ・ ・ ・ ・ ・ ・</div>
      </div>
    </div>
    <ul class="expansion" v-if="expanded">
      <li>3〜12はあんまテストに出ないので、飛ばしてしまいます。</li>
      <li>テストが始まったら、問題を解く前に余白に上の表をメモしておきましょう。その後の問題が解きやすくなります！</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    }
  },
  created() {
  },
}
</script>

<style scoped>
.container {
  height: 72px;
  transition: height .5s;
  padding: 4px 4px 4px 4px;
  background-color: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
}
.container:before {
  content: "";
  position: absolute;
  bottom: 112px;
  left: calc(100% - 16px);
  border: 8px solid transparent;
  border-left: 8px solid #FFFFFF;
  border-bottom: 8px solid #FFFFFF;
}
.container.expanded {
  height: 240px;
}
.min {
  display: flex;
}
.icon {
  height: 64px;
}
.min_content {
  margin: 12px 12px 12px 12px;
}
.title {
  margin: 0 0 8px 0;
  text-decoration: underline;
}
.dots {
  text-align: center;
}
.expansion li{
  list-style-position: inside;
  padding-left: 1em;
  text-indent: -1em;
  line-height: 24px;
  margin: 8px 16px 0 16px;
}
</style>
