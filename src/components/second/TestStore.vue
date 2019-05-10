<template>
  <div>
    <span>{{count}}</span>
    <button v-on:click="increment">增加</button>
    <button v-on:click="decrement">减少</button>
  </div>
</template>

<script>
import store from '../../store/store.js'
export default {
  name: 'TestStore',
  computed: {
    'count': function () {
      return store.state.count
    }
  },
  methods: {
    increment: function () {
      store.dispatch('increment', 3)
    },
    decrement: function () {
      store.dispatch('decrement', 3)
    }
  }

}
</script>

<style scoped>

</style>
