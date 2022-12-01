import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { useREM } from '@/utils/flexible.js';
import useTheme from '@/utils/theme.js';
import mLibs from '@/libs/index.js';
import mDirectives from './directives';

import './styles/index.scss';
import 'virtual:svg-icons-register';

useREM();
useTheme();

createApp(App).use(router).use(store).use(mLibs).use(mDirectives).mount('#app');
