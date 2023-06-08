import Vue from 'vue'

import MainPage from '../views/MainPage.vue'
import PhotoGallery from '../views/PhotoGallery.vue'
import ProductsPage from '../views/ProductsPage.vue'

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
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
