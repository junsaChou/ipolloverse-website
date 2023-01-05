import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// global css
import './assets/css/common.css'

const app = createApp(App);
// 图片懒加载
import vueLazyload from 'vue-lazyload'

app.use( vueLazyload,{
  preLoad: 1.3,
  loading: require('./assets/img/loading.gif'),
  error: require('./assets/img/loading.gif')
})



app.use(store).use(router).use(ElementPlus).mount('#app');
