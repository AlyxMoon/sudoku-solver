<template>
  <div id="app">
    <h1>Sudoko Solver</h1>
    <div class="grid">
      <div class="block" v-for="i_block in 9">
        <div class="cell" v-for="i_cell in 9"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
h1 {
  text-align: center;
}

.grid {
  box-shadow: 6px 6px 10px 6px black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 30rem;
  margin: 5rem auto;
  width: 30rem;
}

.block {
  border: 3px solid black;
  border-bottom-width: 4px;
  border-right-width: 4px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  width: 100%;
}

.cell {
  background-color: #EEEEEE;
  border: 1px solid rgb(50, 50, 50);
  height: 100%;
  margin: 0;
  width: 100%;
}

</style>
