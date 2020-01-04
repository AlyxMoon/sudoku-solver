<template>
  <div class="options">
    <div>Show possible answers in cells</div>

    <label for="showPossibleAnswers-false">No</label>
    <input
      id="showPossibleAnswers-true"
      :value="false"
      v-model.lazy="showPossibleAnswers"
      type="radio"
      name="showPossibleAnswers" >
    <label for="showPossibleAnswers-true">Yes</label>
    <input
      id="showPossibleAnswers-false"
      :value="true"
      v-model.lazy="showPossibleAnswers"
      type="radio"
      name="showPossibleAnswers" >
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MenuOptions',
  computed: {
    showPossibleAnswers: {
      set (value) {
        this.setOption({ option: 'showPossibleAnswers', value })
      },
      get () {
        return this.$store.state.options.showPossibleAnswers
      },
    },
  },
  methods: {
    ...mapActions(['setOption']),
  },
}
</script>

<style lang="scss">
.options {
  border-style: dotted;
  border-width: 2px 0 0 0;
  padding: 5px 8px;
  position: relative;
  width: 100%;
  z-index: 1;
}
</style>
