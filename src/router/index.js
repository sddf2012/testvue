import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menuConfig'

Vue.use(Router)

var routes = []

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      component: () => import(`@/components/${item.id}/${sub.componentName}`)
    })
  })
})

export default new Router({ routes })
