<template>
  <div>
    <m-infinite
      v-model="loading"
      :isFinished="isFinished"
      @onLoad="getPexelsData"
    >
      <m-waterfall
        class="px-1 w-full"
        :data="pexelsList"
        :nodeKey="'id'"
        :column="isMobileTerminal ? 2 : 5"
        :picturePreReading="false"
      >
        <template v-slot="{ item, width }">
          <item-vue :data="item" :width="width"></item-vue>
        </template>
      </m-waterfall>
    </m-infinite>
  </div>
</template>

<script>
export default {
  name: 'list'
};
</script>
<script setup>
import { getPexelsList } from '@/api/pexels';
import { ref } from 'vue';
import itemVue from './item.vue';
import { isMobileTerminal } from '@/utils/flexible';

// 构建请求数据
let query = {
  page: 1,
  size: 20
};

const loading = ref(false);
const isFinished = ref(false);

const pexelsList = ref([]);

const getPexelsData = async () => {
  if (isFinished.value) {
    return;
  }
  if (pexelsList.value.length) {
    query.page++;
  }
  const result = await getPexelsList(query);
  pexelsList.value = [...pexelsList.value, ...result.list];
  if (pexelsList.value.length === result.total) {
    isFinished.value = true;
  }
  loading.value = false;
};
// getPexelsData();
</script>

<style lang="scss" scoped></style>
