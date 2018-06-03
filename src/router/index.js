import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Staff from '@/pages/Staff'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: '홈페이지',
      component: Home
    },
    {
      path: '/staff',
      name: '직원소개',
      component: Staff
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = 'AK 동물병원 ' + to.name
  next()
})

export default router
