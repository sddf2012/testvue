<template>
  <div>
    <el-table
      :data="buyProducts"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="商品"
        width="180">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="描述"
        width="180">
      </el-table-column>
      <el-table-column
        prop="unitPrice"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="buyNum" label="数量">
      </el-table-column>
      <el-table-column
        prop="buyPrice" label="总价">
      </el-table-column>
    </el-table>
    <span>{{totalNum}}</span>  <span>{{totalPrice}}</span>
  </div>

</template>

<script>
import Child from './child/Child'

export default {
  name: 'FormCheckbox',
  components: {
    'child': Child
  },
  computed: {
    buyProducts () { return this.$store.getters.buyProducts },
    totalNum () {
      return this.$store.getters.totalNum
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  }
}
</script>

<style scoped>

</style>
