<template>
  <div id="app">
    <h1>Sudoko Solver</h1>
    <div class="app-options">
      <div>Show possible answers in cells</div>

      <label for="showPossibleAnswers-false">No</label>
      <input type="radio" name="showPossibleAnswers" id="showPossibleAnswers-true"
        :value="false" v-model.lazy="showPossibleAnswers" />
      <label for="showPossibleAnswers-true">Yes</label>
      <input type="radio" name="showPossibleAnswers" id="showPossibleAnswers-false"
        :value="true" v-model.lazy="showPossibleAnswers" />
    </div>
    <div class="grid">
      <div v-for="i in 81" :key="'cell-' + i"
        class="cell" :class="{ selected: (i - 1) === activeCell }"
        @click="setCellActive(i - 1)">
        <span v-if="cells[i - 1]">{{ cells[i - 1] }}</span>
        <div v-if="showPossibleAnswers && !cells[i - 1]"
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
      </div>

      <div class="grid-divider col-1"></div>
      <div class="grid-divider col-2"></div>
      <div class="grid-divider row-1"></div>
      <div class="grid-divider row-2"></div>
    </div>
  </div>
</template>

<script>
import { getPossibleAnswers } from '@/lib/getPossibleAnswers'

export default {
  name: 'App',
  data () {
    return {
      activeCell: null,
      cells: Array.apply(null, Array(81)).map(() => {}),
      possibleAnswers: null,
      showPossibleAnswers: false
    }
  },
  created () {
    this.updatePossibleAnswers()
    window.addEventListener('keyup', e => {
      if (!isNaN(this.activeCell) && this.activeCell !== null) {
        if (!isNaN(e.key)) {
          this.cells.splice(this.activeCell, 1, Number(e.key))
          this.activeCell = null
          this.updatePossibleAnswers()
        }
      }
    })
  },
  methods: {
    setCellActive: function (i) {
      if (i < 0 || i >= this.cells.length) return

      if (this.activeCell === i) {
        this.activeCell = null
      } else {
        this.activeCell = i
      }
    },
    updatePossibleAnswers: function () {
      if (!this.possibleAnswers) this.possibleAnswers = []
      this.possibleAnswers.splice(0, 81, ...getPossibleAnswers(this.cells))
    }
  }
}
</script>

<style>
#app {
  margin-left: auto;
  margin-right: auto;
  width: 30rem;
}

h1 {
  text-align: center;
}

.grid {
  background-color: black;
  box-shadow: 6px 6px 10px 6px black;
  border: 4px solid black;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  height: 30rem;
  margin: 1rem auto;
  position: relative;
  width: 100%;
}

.cell {
  background-color: #EEEEEE;
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
.cell:hover {
  background-color: pink;
}
.cell.selected {
  background-color: yellow;
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
}
.cell-answers-wrapper span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-divider {
  background-color: black;
  position: absolute;
}
.grid-divider[class *= 'col-'] {
  top: 0;
  bottom: 0;
  width: 3px;
}
.grid-divider[class *= 'row-'] {
  left: 0;
  right: 0;
  height: 3px;
}
.grid-divider.col-1 {
  left: 33%;
}
.grid-divider.col-2 {
  right: 33%;
}
.grid-divider.row-1 {
  top: 33%;
}
.grid-divider.row-2 {
  bottom: 33%;
}

</style>
