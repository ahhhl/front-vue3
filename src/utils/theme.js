import { watch } from 'vue';
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '../constants';
import store from '../store';

/**
 * 监听系统主题变更
 */

let matchMedia;
const watchSystemThemeChange = () => {
  // 仅需一次初始化
  if (matchMedia) return;
  matchMedia = window.matchMedia('(prefers-color-scheme: dark');
  matchMedia.onchange = () => {
    changeTheme(THEME_SYSTEM);
  };
};

/**
 * 变更主题
 * @param {*} theme
 */
const changeTheme = (theme) => {
  // html的class
  let themeClassName = '';
  switch (theme) {
    case THEME_LIGHT:
      themeClassName = 'light';
      break;
    case THEME_DARK:
      themeClassName = 'dark';
      break;
    case THEME_SYSTEM:
      watchSystemThemeChange();
      themeClassName = matchMedia.matches ? 'dark' : 'light';
      break;
  }
  // 修改html的class
  document.querySelector('html').className = themeClassName;
};

/**
 * 初始化主题
 */
export default () => {
  // 1.当主题发生改变是, 或者当进入系统时, 可以进行html class的配置
  watch(() => store.getters.themeType, changeTheme, {
    immediate: true
  });
};
