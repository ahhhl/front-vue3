// import svgIcon from './svg-icon/index.vue';
// import popup from './popup/index.vue';
import { defineAsyncComponent } from 'vue';

export default {
  install(app) {
    // app.component('m-svg-icon', svgIcon);
    // app.component('m-popup', popup);
    const components = import.meta.glob('./*/index.vue');
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = 'm-' + fullPath.replace('./', '').split('/')[0];
      // defineAsyncComponent 定义一个异步组件，它在运行时是懒加载的。参数可以是一个异步加载函数，或是对加载行为进行更具体定制的一个选项对象。
      app.component(componentName, defineAsyncComponent(fn));
    }
  }
};
