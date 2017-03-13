import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SearchAll from '@/components/search-all/SearchAll'
import ChooseClass from '@/components/search-all/ChooseClass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/search-all',
      name: 'SearchAll',
      component: SearchAll
    }, {
      path: '/search-all/choose-class',
      name: 'ChooseClass',
      component: ChooseClass
    }
  ]
})
