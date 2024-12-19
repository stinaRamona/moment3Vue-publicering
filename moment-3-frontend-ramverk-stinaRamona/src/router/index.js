import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyBooksView from '../views/MyBooksView.vue'
import InformationView from '../views/InformationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: HomeView,
    },
    {
      path: '/mina-bocker', 
      name: 'Mina böcker', 
      component: MyBooksView,
    }, 
    {
      path: '/information', 
      name: 'Information', 
      component: InformationView,
    }
  ],
})

export default router
