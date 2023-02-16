import Vue from 'vue'

import MainPage from '../views/MainPage.vue'
import PhotoGallery from '../views/PhotoGallery.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: MainPage
  },
  {
    path: '/photoGallery',
    name: 'photoGallery',
    component: PhotoGallery
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
