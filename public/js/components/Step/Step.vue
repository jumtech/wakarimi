<template>
  <div class="container">
    <div class="media cmn_center_content">
      <img class="image" :src="image_url" alt="image">
    </div>
    <div class="description">
      {{description}}
    </div>
    <div class="footer">
      <div class="question">
        <img class="question_icon" src="https://s3-ap-northeast-1.amazonaws.com/wakarimi/icon/girl.png" alt="girl">
        <div class="question_content">
          <p class="question_title">単位の「s」って何？</p>
          <div class="question_dots">・ ・ ・ ・ ・ ・ ・ ・</div>
        </div>
      </div>
      <div class="buttons">
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
  </div>
</template>

<script>
import CONTENT from '../../data/content';
export default {
  data() {
    return {
    }
  },
  computed: {
    contentId() {
      return this.$route.params.contentId;
    },
    stepId() {
      return this.$route.params.stepId;
    },
    step() {
      return CONTENT[this.contentId].steps[this.stepId];
    },
    currentPage() {
      return this.$route.params.page || 1;
    },
    image_url() {
      let url = '';
      if (this.step.pages[this.currentPage - 1].image) {
        url = `https://s3-ap-northeast-1.amazonaws.com/wakarimi/content/${this.contentId}/step/${this.stepId}/${this.step.pages[this.currentPage - 1].image}`;
      }
      return url;
    },
    description() {
      return this.step.pages[this.currentPage - 1].text;
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
      if (p > this.step.pages.length) p = this.step.pages.length;
      this.$router.push(`/c/${this.contentId}/s/${this.stepId}/p/${p}`)
    },
  },
  created() {
  },
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: calc(100vh - 48px);
}
.media {
  height: calc((100vh - 48px) * 0.4);
}
.image {
  max-width: 100%;
  max-height: 100%;
}
.description {
  height: calc((100vh - 48px) * 0.6);
  background-color: #E2F0D9;
  font-size: 20px;
  line-height: 32px;
  padding: 8px 8px 8px 8px;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
}
.question {
  display: flex;
  margin: 12px 12px 12px 12px;
  padding: 4px 4px 4px 4px;
  background-color: #FFFFFF;
  border-radius: 16px;
}
.question:before {
  content: "";
  position: absolute;
  top: 56px;
  left: calc(100% - 16px);
  border: 8px solid transparent;
  border-left: 8px solid #FFFFFF;
  border-bottom: 8px solid #FFFFFF;
}
.question_icon {
  height: 64px;
}
.question_content {
  margin: 12px 12px 12px 12px;
}
.question_title {
  margin: 0 0 8px 0;
  text-decoration: underline;
}
.question_dots {
  /**/
}
.buttons {
  display: flex;
  bottom: 0;
  width: 100vw;
  height: 88px;
  padding: 4px 4px 4px 4px;
  background-color: #FFFFFF;
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
