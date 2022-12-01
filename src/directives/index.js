/**
 * 全局指令注册
 */
export default {
  install(app) {
    // 通过import.meta.glob批量导入文件是值一个对象 默认动态导入 () => import(), 设置eager:true为直接导入
    // {"./modules/lazy.js": Module}
    const directives = import.meta.glob('./modules/*.js', { eager: true });
    for (const [key, value] of Object.entries(directives)) {
      // 拼接组件注册的 name
      const arr = key.split('/');
      const directiveName = arr[arr.length - 1].replace('.js', '');
      // 注册
      app.directive(directiveName, value.default);
    }
  }
};
