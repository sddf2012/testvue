<template>
  <div  v-bind:style="{ fontSize: postFontSize + 'em' }">
  <child msg="radio message" v-on:enlarge="postFontSize += 0.1"></child>
  </div>
</template>

<script>
import Child from './child/Child'
export default {
  name: 'FormRadio',
  data: function () {
    return {
      postFontSize: 1
    }
  },
  components: {
    'child': Child
  }
}
</script>

<style scoped>

</style>
