const test = {
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload) {
      state.count = state.count + payload
    },
    decrement (state, payload) {
      state.count = state.count - payload
    }
  },
  actions: {
    increment ({commit}, payload) {
      commit('increment', payload)
    },
    decrement ({commit}, payload) {
      commit('decrement', payload)
    }
  }
}

export default test
