// import 'nprogress/css/nprogress.css'; // 进度条样式
// import { type App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    // redirect: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/index.vue'),
    meta: {
      title: 'Home',
    }
  }
];

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(),
  routes
});

export default router;