<template>
  <div class="container" :class="{expanded: expanded}" @click="toggleExpanded">
    <div class="min">
      <img class="icon" src="https://s3-ap-northeast-1.amazonaws.com/wakarimi/icon/girl.png" alt="student">
      <div class="min_content">
        <p class="title">なんで2のつぎが13なの？</p>
        <div class="dots">
          <span v-for="(item, i) in new Array(8)" v-bind:key="i" :class="{'selected': selectedIndex === i}">・</span>
        </div>
      </div>
    </div>
    <ul class="expansion" v-if="expanded">
      <li>3〜12はあんまテストに出ないので、飛ばしてしまいます。</li>
      <li>テストが始まったら、<span class="cmn_underline">問題を解く前に余白に上の表をメモ</span>しておきましょう。その後の問題が解きやすくなります！</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      selectedIndex: 0,
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
  height: 56px;
  transition: height .5s;
  padding: 4px 4px 4px 4px;
  background-color: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  font-size: 12px;
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
  height: 200px;
}
.min {
  display: flex;
}
.icon {
  height: 48px;
}
.min_content {
  width: 100%;
  margin: 8px 0 0 0;
}
.title {
  margin: 0 0 8px 0;
  text-align: center;
  text-decoration: underline;
}
.dots {
  text-align: center;
}
.dots span {
  margin: 0 4px 0 0;
  color: #BFBFBF;
}
.dots span.selected {
  color: #000000;
}
.expansion li{
  list-style-position: inside;
  padding-left: 1em;
  text-indent: -1em;
  line-height: 24px;
  margin: 8px 16px 0 16px;
}
</style>
