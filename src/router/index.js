import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router';
import HomeView from '../views/home.vue';

const routes = [
  {
    path: '/Intro',
    name: 'Intro',
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
    name: 'Dashboard',
    component: () => import('../views/dashboard/index.vue'),
  },
  {
    path: '/nodeOverview',
    name: 'NodeOverview',
    component: () => import('../views/tableData/index.vue'),
  },
  {
    path: '/bulletin',
    name: 'Bulletin',
    component: () => import('../views/bulletin/index.vue')
  },
  {
    path: '/UserAgreement',
    name: 'UserAgreement',
    component: () => import('../views/userAgreement/index.vue')
  },
  {
    path: '/OperatorAgreement',
    name: 'OperatorAgreement',
    component: () => import('../views/operatorAgreement/index.vue')
  },
  {
    path: '/',
    name: 'SpaceList',
    component: () => import('../views/spaceDom/index.vue')
  }
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

export default router;
