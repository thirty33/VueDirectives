import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mixins from '@/components/Mixins'

Vue.use(Router)

export default new Router({
  mode: 'history',		
  routes: [
    {
      path: '/',
      name: 'Mixins',
      component: Mixins
    }
  ]
})
