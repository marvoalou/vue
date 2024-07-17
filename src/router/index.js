import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import DataAnalysis from '../views/DataAnalysis.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dataanalysis',
    name: 'dataanalysis',
    component: DataAnalysis
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

