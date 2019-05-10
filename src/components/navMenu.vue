<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               router
               background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu v-for="item in menus" :index="item.id" :key="item.id">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span v-text="item.name"></span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="subitem in item.sub" :index="subitem.componentName" :key="subitem.componentName">
              {{subitem.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import menus from '@/config/menuConfig'

export default {
  data () {
    return {
      menus: menus
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .over-hide{
    overflow: hidden;
  }
</style>
