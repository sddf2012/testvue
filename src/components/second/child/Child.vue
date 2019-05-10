<template>
  <div>
    <span>{{msg}}</span>
    <button v-on:click="$emit('enlarge')">button</button>
  </div>
</template>

<script>
class Book {
  constructor (name, price) {
    this.name = name
    this.price = price
  }
}

export default {
  name: 'Child',
  props: {
    msg: {type: String, default: 'default msg'},
    book: Book
  }
}
</script>

<style scoped>

</style>
