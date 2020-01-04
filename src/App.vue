<template>
  <div
    id="app"
    :class="'theme-' + options.theme"
  >
    <h1>Sudoku Solver</h1>

    <div class="content">
      <MenuCommands />

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
              v-if="options.showPossibleAnswers && !cells[i - 1] && typeof possibleAnswers[i - 1] === 'object'"
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
              v-if="options.showPossibleAnswers && !cells[i - 1] && typeof possibleAnswers[i - 1] === 'number'"
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

      <MenuThemes />
      <MenuOptions />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import MenuCommands from './components/MenuCommands'
import MenuOptions from './components/MenuOptions'
import MenuThemes from './components/MenuThemes'

export default {
  name: 'App',

  components: {
    MenuCommands,
    MenuOptions,
    MenuThemes,
  },

  computed: {
    ...mapState({
      activeCell: state => state.activeCell,
      cells: state => state.cells,
      computedCells: state => state.computedCells,
      options: state => state.options,
      possibleAnswers: state => state.possibleAnswers,
      solving: state => state.solving,
    }),
  },

  created () {
    this.$store.dispatch('updatePossibleAnswers')
    window.addEventListener('keyup', e => this.updateCell(Number(e.key)))
  },

  methods: {
    ...mapActions(['setActiveCell', 'setOption', 'updateCell', 'updatePossibleAnswers']),
  },
}
</script>

<style lang="scss">
@use 'scss/base_elementStyling';

$grid-length: 30rem;

#app {
  height: 100%;
  overflow-y: auto;
  padding: 10px 0;
  width: 100%;

  &.theme-default {
    @import './scss/themes/default';
  }

  &.theme-dim {
    @import './scss/themes/dim';
  }

  &.theme-other {
    @import './scss/themes/other';
  }
}

.content {
  margin: 0 auto;
  width: $grid-length;
}

.grid {
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
</style>
