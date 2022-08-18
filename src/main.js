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
app.use(store).use(router).use(ElementPlus).mount('#app');
