import { ALL_CATEGORY_ITEM } from '@/constants';
import { getCategory } from '@/api/category';

/**
 * 处理navigationBar 中的数据 categorys
 */

export default {
  // 独立作用域
  namespaced: true,
  state: () => ({
    categorys: []
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
