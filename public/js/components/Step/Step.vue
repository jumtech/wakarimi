<template>
  <div class="container">
    <div class="media"></div>
    <div class="description">
      {{description}}
    </div>
    <div class="footer">
      <div class="previous" @click="previous">
        <div class="previous_icon cmn_center_content">
          <div class="arrow left"></div>
        </div>
      </div>
      <div class="next" @click="next">
        <div class="next_text cmn_center_content">Next</div>
        <div class="next_icon cmn_center_content">
          <div class="arrow right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { text: "まずはよく使う「5つの文字」を覚えましょう。" },
        { text: "「a」「v0」とかが何なのか。これがわからないと、テストの時に「そもそも問題文の意味がわからん！」となります。" },
        { text: "ではまずは、簡単な3つの文字から。" },
      ]
    }
  },
  computed: {
    contentId() {
      return this.$route.params.contentId;
    },
    stepId() {
      return this.$route.params.stepId;
    },
    currentPage() {
      return this.$route.params.page || 1;
    },
    description() {
      return this.pages[this.currentPage - 1].text;
    },
  },
  methods: {
    previous() {
      let p = Number(this.currentPage) - 1;
      if (p < 1) p = 1;
      this.$router.push(`/c/${this.contentId}/s/${this.stepId}/p/${p}`)
    },
    next() {
      let p = Number(this.currentPage) + 1;
      if (p > this.pages.length) p = this.pages.length;
      this.$router.push(`/c/${this.contentId}/s/${this.stepId}/p/${p}`)
    },
  },
  created() {
  },
}
</script>

<style scoped>
.container {
  padding: 8px 8px 8px 8px;
  height: calc(100vh - 48px);
}
.media {
  height: calc((100vh - 48px - 80px - 24px) * 0.6);
}
.description {
  height: calc((100vh - 48px - 80px - 24px) * 0.4);
  background-color: #E2F0D9;
  padding: 8px 8px 8px 8px;
  font-size: 20px;
  line-height: 32px;
}
.footer {
  display: flex;
  position: absolute;
  bottom: 0;
  width: calc(100% - 16px);
  height: 80px;
  margin-bottom: 8px;
}
.previous {
  width: 20%;
  height: 100%;
  border: 1px solid #E2F0D9;
  margin-right: 4px;
}
.previous_icon {
  height: 100%;
}
.next {
  display: flex;
  width: 80%;
  border: 1px solid #70AD47;
  background-color: #70AD47;
  color: #FFFFFF;
}
.next_text {
  width: 70%;
  font-size: 40px;
}
.next_icon {
  width: 30%;
}
.arrow {
  position: relative;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 16px solid transparent;
}
.arrow.left {
  border-right: 16px solid #A9D18E;
  left: -8px;
}
.arrow.right {
  border-left: 16px solid #FFFFFF;
}
</style>
