<template>
  <div id="app">
    <h1>Sudoko Solver</h1>
    <div class="grid">
      <div
        v-for="i in 81" :key="'cell-' + i"
        class="cell" :class="{ selected: (i - 1) === activeCell }"
        @click="setCellActive(i - 1)">
        {{ cells[i - 1] || '' }}
      </div>

      <div class="grid-divider col-1"></div>
      <div class="grid-divider col-2"></div>
      <div class="grid-divider row-1"></div>
      <div class="grid-divider row-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeCell: null,
      cells: Array.apply(null, Array(81)).map(() => {})
    }
  },
  created () {
    window.addEventListener('keyup', e => {
      if (this.activeCell) {
        if (!isNaN(e.key)) {
          this.cells.splice(this.activeCell, 1, Number(e.key))
          this.activeCell = null
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
    }
  }
}
</script>

<style>
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
  margin: 4rem auto;
  position: relative;
  width: 30rem;
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
