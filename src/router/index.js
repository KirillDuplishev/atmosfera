import Vue from 'vue'

// import MainPage from '../views/MainPage.vue'
// import PhotoGallery from '../views/PhotoGallery.vue'
// import ProductsPage from '../views/ProductsPage.vue'
// import PrivacyPage from '../views/PrivacyPage.vue'

// import AboutUs from '../views/AboutUs.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/photoGallery',
    name: 'photoGallery',
    component: () => import('../views/PhotoGallery.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsPage.vue')
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/privacy',
    name: 'PrivacyPage',
    component: () => import('../views/PrivacyPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    if(!window.location.href.includes('#screenMapSection')){
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
