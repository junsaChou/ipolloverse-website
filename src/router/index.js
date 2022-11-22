import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';
import HomeView from '../views/home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/TestCamp',
    name: 'TestCamp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/testCamp/index.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard/index.vue'),
  },
  {
    path: '/nodeOverview',
    name: 'nodeOverview',
    component: () => import('../views/tableData/index.vue'),
  },
  {
    path: '/bulletin',
    name: 'bulletin',
    component: () => import('../views/bulletin/index.vue')
  }
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

export default router;
