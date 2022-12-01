import { ALL_CATEGORY_ITEM, CATEGORY_NOMAR_DATA } from '@/constants';
import { getCategory } from '@/api/category';

/**
 * 处理navigationBar 中的数据 categorys
 */

export default {
  // 独立作用域
  namespaced: true,
  state: () => ({
    /**
     * 1. 让 categorys 具备一个初始化数据
     * 2. 从服务端获取数据, 替换初始化数据
     * 3. 为了防止初始化数据太老, 我们把每次获取到的新数据, 都作为下一次的初始化数据
     * 第三步方案: 每次从接口得到数据,进行缓存(localStorage), 下次运行时, 把缓存的数据作为初始值
     * 使用vuex-persistedstate
     */
    categorys: CATEGORY_NOMAR_DATA
  }),
  mutations: {
    setCategorys(state, newCategorys) {
      state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys];
    }
  },
  actions: {
    async useCategoryData({ commit }) {
      const { categorys } = await getCategory();
      commit('setCategorys', categorys);
    }
  }
};
