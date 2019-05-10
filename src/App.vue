<template>
  <div id="app" style="height: 100%">
    <el-container style="height: 95%; border: 1px solid #eee">
      <el-header style="height: 10%;text-align: right"><cheader/></el-header>
      <el-container style="height: 80%">
        <el-aside width="201px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer style="height: 10%"><cfooter>1231</cfooter></el-footer>
    </el-container>
  </div>
</template>

<script>
import navMenu from '@/components/navMenu'
import navMenu2 from '@/components/navMenu2'
import header from '@/components/Header'
import footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    'navmenu': navMenu,
    'navmenu2': navMenu2,
    'cheader': header,
    'cfooter': footer
  }
}
</script>
<style>
</style>
