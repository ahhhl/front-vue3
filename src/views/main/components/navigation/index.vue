<template>
  <mobile-navigation-vue :data="categoryData" v-if="isMobileTerminal" />
  <pc-navigation-vue v-else></pc-navigation-vue>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible';
import mobileNavigationVue from './mobile/index.vue';
import pcNavigationVue from './pc/index.vue';
import { getCategory } from '@/api/category.js';
import { ref } from '@vue/reactivity';
import { ALL_CATEGORY_ITEM } from '../../../../constants';

const categoryData = ref([]);
const getCategoryData = async () => {
  const { categorys } = await getCategory();
  categoryData.value = categorys;
  categoryData.value.unshift(ALL_CATEGORY_ITEM);
};
getCategoryData();
</script>

<style lang="scss" scoped></style>
