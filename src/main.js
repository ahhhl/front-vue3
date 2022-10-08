import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useREM } from '@/utils/flexible.js';
import mLibs from '@/libs/index.js';

import './styles/index.scss';
import 'virtual:svg-icons-register';

useREM();

createApp(App).use(router).use(mLibs).mount('#app');
