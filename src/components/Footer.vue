<template>
  <el-row>
    <el-col :span="24">
      <!--<a v-bind:href="url" class="head-wrap">Footer</a>-->
      <slot/>
    </el-col>
  </el-row>
</template>

<style scoped>
  .head-wrap{

  }
</style>
