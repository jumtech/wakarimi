<template>
  <div class="choice_buttons">
    <div class="choice"
      :class="{'selected': selectedChoice === i}"
      v-for="(choice, i) in choices" v-bind:key="i"
      @click="selectChoice(i)"
      >
      <div class="choice_num cmn_center_content">{{i+1}}</div>
      <div class="choice_text">
        {{choice}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['choices', 'selectedChoice'],
  data() {
    return {}
  },
  methods: {
    selectChoice(i) {
      this.$emit('selectChoice', i);
    },
  },
}
</script>

<style scoped>
.choice_buttons {
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
</style>
