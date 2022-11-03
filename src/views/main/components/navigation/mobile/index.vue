<template>
  <div class="bg-white dark:bg-zinc-900 duration-500 sticky top-0 left-0 z-10">
    <ul
      id="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
      ref="ulTarget"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200 dark:bg-zinc-800"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 z-20 shadow-l-white dark:shadow-l-zinc"
        @click="onShowPopup"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <li
        v-for="(item, index) in $store.getters.categorys"
        :key="item.name"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{ 'text-zinc-100': currentCategoryIndex === index }"
        :ref="setItemRef"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isVisable">
      <menu-vue @onItemClick="onItemClick" :categorys="data"></menu-vue>
    </m-popup>
  </div>
</template>

<script setup>
import { useScroll, useElementSize } from '@vueuse/core';
import { onBeforeUpdate, ref, watch } from 'vue';
import MenuVue from '../../menu/index.vue';

// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
});

// 获取所有的 item 元素
let itemRefs = [];
const currentCategoryIndex = ref(0);
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el);
  }
};

//数据改变之后, DOM 变化之前
onBeforeUpdate(() => {
  itemRefs = [];
});

// 获取ul元素
const ulTarget = ref(null);
// 通过vueuse -> useScroll 获取响应式的 scroll 滚动距离
const { x: ulScrollLeft } = useScroll(ulTarget);

// 监听currentCategoryIndex的变化
watch(currentCategoryIndex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect();
  sliderStyle.value = {
    // 滑块位置 = ul横向滚动距离 + 当前元素的left - ul的padding
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  };
  // const { width: w } = ulTarget.value.getBoundingClientRect();
  // const x = left - w + width + 80;
  // if (left > w / 2) {
  //   console.log(x);
  //   // console.log(ulTarget.value.scrollTo);
  //   const ele = document.getElementById('ulTarget');
  //   console.log(ele);
  //   ele.scrollTo(ulScrollLeft.value + x, 0);
  // }else {

  // }
  // ulScrollLeft.value =
});

const onItemClick = (index) => {
  currentCategoryIndex.value = index;
};

// 控制popup展示
const isVisable = ref(false);

const onShowPopup = () => {
  isVisable.value = true;
};
</script>

<style lang="scss" scoped></style>
