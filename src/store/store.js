import Vue from 'vue'
import Vuex from 'vuex'
import test from './test/test'
import getters from './getter'
import cart from './cart/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {test, cart},
  getters
})

export default store
