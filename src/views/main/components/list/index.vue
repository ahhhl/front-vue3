<template>
  <div class="w-full flex flex-wrap">
    <m-waterfall :data="" :nodeKey="" :column="" :picturePreReading="">
      <template v-slot="{ item, width }">
        <item-vue :data="item"></item-vue>
      </template>
    </m-waterfall>
  </div>
</template>

<script setup>
import { getPexelsList } from '@/api/pexels';
import { ref } from 'vue';
import itemVue from './item.vue';

// 构建请求数据
let query = {
  page: 1,
  size: 20
};

const pexelsList = ref([]);

const getPexelsData = async () => {
  const result = await getPexelsList(query);
  pexelsList.value = result.list;
};
getPexelsData();
</script>

<style lang="scss" scoped></style>
