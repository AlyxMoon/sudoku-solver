<template>
  <div class="options">
    <div>
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
    <div>
      <div>Algorithm speed</div>

      <template v-for="(_, speed) in solveSpeeds">
        <label
          :key="'label-' + speed"
          :for="'speeds-' + speed"
        >{{ speed }}</label>
        <input
          :key="'input-' + speed"
          :id="'speeds-' + speed"
          :value="speed"
          v-model.lazy="solveSpeed"
          type="radio"
          name="speeds" >
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MenuOptions',
  computed: {
    ...mapState({
      solveSpeeds: state => state.solveSpeeds,
    }),
    showPossibleAnswers: {
      set (value) {
        this.setOption({ option: 'showPossibleAnswers', value })
      },
      get () {
        return this.$store.state.options.showPossibleAnswers
      },
    },
    solveSpeed: {
      set (value) {
        this.setOption({ option: 'solveSpeed', value })
      },
      get () {
        return this.$store.state.options.solveSpeed
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

  input {
    margin-right: 10px;
  }
}
</style>
