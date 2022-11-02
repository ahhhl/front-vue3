import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { useREM } from '@/utils/flexible.js';
import mLibs from '@/libs/index.js';

import './styles/index.scss';
import 'virtual:svg-icons-register';

useREM();

createApp(App).use(router).use(store).use(mLibs).mount('#app');
