<template>
  <div class="themes">
    <span>Themes</span>
    <ul>
      <li
        v-for="theme in themes"
        :key="'themes-' + theme"
        :class="{ active: activeTheme === theme }"
        @click="setOption({ option: 'theme', value: theme })"
      >
        <span>{{ capitalCase(theme) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { capitalCase } from '@lib'

export default {
  name: 'MenuThemes',
  computed: {
    ...mapState({
      activeTheme: state => state.options.theme,
      themes: state => state.themes,
    }),
  },
  methods: {
    ...mapActions(['capitalCase', 'setOption']),
    capitalCase,
  },
}
</script>

<style lang="scss">
.themes {
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

    span {
      user-select: none;
    }

    &:last-child {
      border-right-width: 1px;
    }
  }
}
</style>
