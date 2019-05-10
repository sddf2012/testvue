<template>
  <div>
    <span>{{count}}</span><br>
    <span>{{doubleCount}}</span><br>
    <button v-on:click="increment">增加</button>
    <button v-on:click="decrement">减少</button>
  </div>
</template>

<script>
export default {
  name: 'TestStore2',
  computed: {
    count: function () {
      return this.$store.state.test.count
    },
    doubleCount () {
      return this.$store.getters.doubleCount
    }
  },
  methods: {
    increment: function () {
      this.$store.commit('increment', 2)
    },
    decrement: function () {
      this.$store.commit('decrement', 1)
    }
  }

}
</script>

<style scoped>

</style>
