<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName" highlight-current-row
      @current-change="handleCurrentChange">
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
        prop="inventory"
        label="库存">
      </el-table-column>
    </el-table>
    <el-input-number v-model="buyNum" @change="handleChange" :min="1" :max="maxNum"
                     :disabled="!valid"></el-input-number>
    <el-button type="primary" @click="buy" :disabled="!valid">添加至购物车</el-button>
  </div>
</template>

<script>
import products from '../../config/products'

export default {
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    handleChange (row) {
    },
    buy () {
      this.currentRow.inventory -= this.buyNum
      this.$store.commit('pushProduct', {product: this.currentRow, buyNum: this.buyNum})
      if (this.currentRow.inventory <= 0) {
        this.valid = false
        this.buyNum = 1
      } else {
        this.buyNum = 1
      }
    },
    handleCurrentChange (row) {
      this.currentRow = row
      if (this.currentRow.inventory > 0) {
        this.valid = true
      } else {
        this.valid = false
      }
    }
  },
  data () {
    return {
      tableData: products.products,
      buyNum: 1,
      currentRow: {},
      valid: false
    }
  },
  computed: {
    maxNum () {
      if (this.currentRow) {
        return this.currentRow.inventory
      } else {
        return 1
      }
    }
  }
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
