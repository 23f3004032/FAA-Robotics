import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import ForInstitutions from '../views/ForInstitutions.vue'
import StudentZone from '../views/StudentZone.vue'
import RoboStore from '../views/RoboStore.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/institutions',
    name: 'ForInstitutions',
    component: ForInstitutions
  },
  {
    path: '/student-zone',
    name: 'StudentZone',
    component: StudentZone
  },
  {
    path: '/store',
    name: 'RoboStore',
    component: RoboStore
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
