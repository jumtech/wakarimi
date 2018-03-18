<template>
  <div class="container">
    <div class="media">
      <div class="title" v-if="currentPage.title">
        {{currentPage.title}}
      </div>
      <div class="image_wrapper cmn_center_content">
        <img class="image" :src="currentPage.image_url" alt="image">
      </div>
    </div>
    <div class="main">
      <div class="text" v-if="currentPage.text">
        {{currentPage.text}}
      </div>
      <div class="choices" v-if="currentPage.choices">
        <div class="choice" :class="{'selected': selectedChoice === i}" v-for="(choice, i) in currentPage.choices" @click="selectChoice(i)" v-bind:key="i">
          <div class="choice_num cmn_center_content">{{i+1}}</div>
          <div class="choice_text">
            {{choice}}
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <FAQ class="faq"/>
      <div class="buttons">
        <div class="previous" @click="previous">
          <div class="previous_icon cmn_center_content">
            <div class="arrow left"></div>
          </div>
        </div>
        <div class="next" :class="{'disable': !isCorrect}" @click="next">
          <div class="next_text cmn_center_content">{{isLastPage ? 'Finish!' : 'Next'}}</div>
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
import FAQ from './FAQ.vue';
export default {
  components: {
    FAQ,
  },
  data() {
    return {
      selectedChoice: null,
    }
  },
  computed: {
    contentId() {
      return this.$route.params.contentId;
    },
    stepId() {
      return this.$route.params.stepId;
    },
    currentStep() {
      return CONTENT[this.contentId].steps[this.stepId];
    },
    currentPageId() {
      return Number(this.$route.params.page) || 1;
    },
    currentPage() {
      const page = this.currentStep.pages[this.currentPageId - 1];
      if (page.image)
        page.image_url = `https://s3-ap-northeast-1.amazonaws.com/wakarimi/content/${this.contentId}/step/${this.stepId}/${page.image}`
      return page;
    },
    isCorrect() {
      if (this.currentPage.answer === undefined)
        return true;
      return this.selectedChoice === this.currentPage.answer;
    },
    isLastPage() {
      return this.currentPageId === this.currentStep.pages.length;
    }
  },
  methods: {
    previous() {
      this.selectedChoice = null;
      let p = this.currentPageId - 1;
      if (p < 1) p = 1;
      this.$router.push(`/c/${this.contentId}/s/${this.stepId}/p/${p}`)
    },
    next() {
      if (!this.isCorrect) return;
      this.selectedChoice = null;
      let p = this.currentPageId + 1;
      if (p <= this.currentStep.pages.length)
        this.$router.push(`/c/${this.contentId}/s/${this.stepId}/p/${p}`);
      else if (this.isLastPage)
        this.$router.push(`/c/${this.contentId}`);
      else
        throw new Error("page not found");
    },
    selectChoice(i) {
      this.selectedChoice = i;
    },
  },
  created() {},
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: calc(100vh - 48px);
}
.title {
  position: absolute;
  font-size: 20px;
  padding: 8px 0 16px 8px;
}
.media {
  height: calc((100vh - 48px) * 0.4);
}
.image_wrapper {
  height: 100%;
}
.image {
  max-width: 100%;
  max-height: 100%;
}
.main {
  height: calc((100vh - 48px) * 0.6);
  background-color: #E2F0D9;
}
.text {
  font-size: 20px;
  line-height: 32px;
  padding: 8px 8px 8px 8px;
}
.choices {
  padding: 8px 8px 8px 8px;
}
.choice {
  display: flex;
  margin: 0 0 4px 0;
  padding: 8px 12px 8px 12px;
  border-radius: 8px;
  background-color:#F7F9F7;
  color: #222222;
  cursor: pointer;
}
.choice.selected {
  background-color:#70AD47;
  color: #FFFFFF;
}
.choice_num {
  width: 16px;
  height: 16px;
  border: 1px solid;
  border-radius: 50%;
}
.choice_text {
  margin: 0 0 0 16px;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
}
.faq {
  width: calc(100vw - 24px);
  margin: 12px 12px 12px 12px;
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
  cursor: pointer;
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
  cursor: pointer;
}
.next.disable {
  border: 1px solid #999999;
  background-color: #999999;
  color: #CCCCCC;
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
