<template>
  <div
    id="app"
    :class="'theme-' + options.theme"
  >
    <h1>Sudoku Solver</h1>

    <div class="content">
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

      <div class="grid">
        <template v-if="!solving">
          <div
            v-for="i in 81"
            :key="'cell-' + i"
            :class="{ selected: (i - 1) === activeCell }"
            class="cell"
            @click="setActiveCell(i - 1)">
            <span v-if="cells[i - 1]">{{ cells[i - 1] }}</span>
            <div
              v-if="showPossibleAnswers && !cells[i - 1] && typeof possibleAnswers[i - 1] === 'object'"
              class="cell-answers-wrapper">
              <span>{{ possibleAnswers[i - 1][1] ? 1 : '' }}</span>
              <span>{{ possibleAnswers[i - 1][2] ? 2 : '' }}</span>
              <span>{{ possibleAnswers[i - 1][3] ? 3 : '' }}</span>
              <span>{{ possibleAnswers[i - 1][4] ? 4 : '' }}</span>
              <span>{{ possibleAnswers[i - 1][5] ? 5 : '' }}</span>
              <span>{{ possibleAnswers[i - 1][6] ? 6 : '' }}</span>
              <span>{{ possibleAnswers[i - 1][7] ? 7 : '' }}</span>
              <span>{{ possibleAnswers[i - 1][8] ? 8 : '' }}</span>
              <span>{{ possibleAnswers[i - 1][9] ? 9 : '' }}</span>
            </div>
            <div
              v-if="showPossibleAnswers && !cells[i - 1] && typeof possibleAnswers[i - 1] === 'number'"
              class="auto-number">
              {{ possibleAnswers[i - 1] }}
            </div>
          </div>
        </template>

        <template v-else>
          <div
            v-for="i in 81"
            :key="'cell-' + i"
            class="cell">
            <span v-if="cells[i - 1]">{{ cells[i - 1] }}</span>
            <span
              v-else-if="computedCells[i - 1]"
              class="auto-number">{{ computedCells[i - 1] }}</span>
          </div>
        </template>

        <div class="grid-divider col-1"/>
        <div class="grid-divider col-2"/>
        <div class="grid-divider row-1"/>
        <div class="grid-divider row-2"/>
      </div>

      <div class="themes">
        <span>Themes</span>
        <ul>
          <li
            :class="{ active: options.theme === 'default'}"
            @click="setOption({ option: 'theme', value: 'default' })">
            <span>Default</span>
          </li>
          <li
            :class="{ active: options.theme === 'other' }"
            @click="setOption({ option: 'theme', value: 'other' })">
            <span>Other</span>
          </li>
        </ul>
      </div>

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
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapState({
      activeCell: state => state.activeCell,
      cells: state => state.cells,
      possibleAnswers: state => state.possibleAnswers,
      computedCells: state => state.computedCells,

      options: state => state.options,

      solving: state => state.solving,
      finishedSolving: state => state.finishedSolving,
      pauseAlgorithm: state => state.pauseAlgorithm
    }),
    showPossibleAnswers: {
      set (value) {
        this.setOption({ option: 'showPossibleAnswers', value })
      },
      get () { return this.options.showPossibleAnswers }
    }
  },

  created () {
    this.$store.dispatch('updatePossibleAnswers')
    window.addEventListener('keyup', e => this.updateCell(Number(e.key)))
  },

  methods: {
    ...mapActions(['setActiveCell', 'setOption', 'solve', 'stop', 'togglePause', 'updateCell', 'updatePossibleAnswers'])
  }
}
</script>

<!-- Core styling  -->
<style lang="scss">
$grid-length: 30rem;

html, body {
  margin: 0;
  height: 100vh;
  font-size: 1.1rem;
}

#app {
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  padding: 10px 0;
  width: 100%;
}

h1 {
  font-size: 2.7rem;
  margin-top: 0;
  text-align: center;
}

.content {
  margin: 0 auto;
  width: $grid-length;
}

.grid {
  box-sizing: border-box;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  height: $grid-length;
  position: relative;
  width: $grid-length;
}

.cell {
  cursor: pointer;
  height: 100%;
  user-select: none;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
}

.cell-answers-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  font-size: 0.7rem;
  font-weight: normal;
  line-height: 100%;

  height: 100%;
  width: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.grid-divider {
  position: absolute;

  &[class *= 'col-'] {
    top: 0;
    bottom: 0;
    width: 3px;
  }
  &[class *= 'row-'] {
    left: 0;
    right: 0;
    height: 3px;
  }
  &.col-1 {
    left: 33%;
  }
  &.col-2 {
    right: 33%;
  }
  &.row-1 {
    top: 33%;
  }
  &.row-2 {
    bottom: 33%;
  }
}

.themes {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px 8px;
  position: relative;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding-left: 15px;
  }

  li {
    border-style: solid;
    border-width: 0 0 0 1px;
    cursor: pointer;
    padding: 0 3px;

    &:last-child {
      border-right-width: 1px;
    }
  }
}

.options {
  border-style: dotted;
  border-width: 2px 0 0 0;
  box-sizing: border-box;
  padding: 5px 8px;
  position: relative;
  width: 100%;
  z-index: 2;
}

.commands {
  box-sizing: border-box;
  padding: 5px 8px;
  position: relative;
  width: 100%;
  z-index: 2;

  & > * {
    margin-left: 3px;
    margin-right: 3px;
  }
}

</style>

<!-- Conditional theme styles -->
<style lang="scss">
  #app.theme-default {
    @import './themes/default.scss';
  }

  #app.theme-other {
    @import './themes/other.scss';
  }
</style>
