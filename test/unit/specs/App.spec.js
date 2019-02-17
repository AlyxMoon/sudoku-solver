/* eslint-disable no-unused-expressions */
import Vue from 'vue'
import { expect } from 'chai'

import App from '@/App'

describe('App.vue', () => {
  it('should be rendered', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()

    expect(vm).to.exist
  })
})
