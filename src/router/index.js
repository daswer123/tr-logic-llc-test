import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactPage from '../views/ContactPage.vue'
import ContactList from '../views/ContactList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'contact-list',
    component: ContactList
  },
  {
    path: '/contact/:id',
    name: 'contact-page',
    component: ContactPage
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
