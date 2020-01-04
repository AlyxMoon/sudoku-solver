<template>
  <div class="commands">
    <template v-if="!solving">
      <button @click="solve()">Solve</button>
    </template>
    <template v-if="solving">
      <button @click="stop()">Stop Solving</button>

      <button
        v-if="!finishedSolving"
        @click="togglePause()">
        {{ pauseAlgorithm ? 'Resume Algorithm' : 'Pause Algorithm' }}
      </button>

      <span v-if="!finishedSolving">Currently solving...</span>
      <span v-if="finishedSolving">Finished solving!</span>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MenuOptions',
  computed: {
    ...mapState({
      finishedSolving: state => state.finishedSolving,
      pauseAlgorithm: state => state.pauseAlgorithm,
      solving: state => state.solving,
    }),
  },
  methods: {
    ...mapActions(['solve', 'stop', 'togglePause']),
  },
}
</script>

<style lang="scss">
.commands {
  padding: 5px 8px;
  position: relative;
  width: 100%;
  z-index: 1;

  button {
    margin-right: 3px;
  }
}
</style>
