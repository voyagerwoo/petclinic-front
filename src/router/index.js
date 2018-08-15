import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Staff from '@/pages/Staff'
import Booking from '@/pages/Booking'
import MyPets from '@/pages/MyPets'
import PetPictures from '@/pages/PetPictures'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'

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
    },
    {
      path: '/booking',
      name: '예약',
      component: Booking
    },
    {
      path: '/my-pets',
      name: '나의 펫',
      component: MyPets
    },
    {
      path: '/pet-pictures',
      name: '펫 사진',
      component: PetPictures
    },
    {
      path: '/login',
      name: '로그인',
      component: Login
    },
    {
      path: '/signup',
      name: '회원가입',
      component: Signup
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = 'AK 동물병원 ' + to.name
  next()
})

export default router
