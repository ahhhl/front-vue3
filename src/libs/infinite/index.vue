<template>
  <div>
    <!-- 内容 -->
    <slot />
    <div ref="loadingTarget" class="h-6 py-4">
      <!-- 加载更多 -->
      <m-svg-icon
        v-show="loading"
        class="w-4 h-4 mx-auto animate-spin"
        name="infinite-load"
      ></m-svg-icon>
      <!-- 没有更多数据 -->
      <p v-if="isFinished" class="text-center text-base text-zinc-400">
        已经没有更多数据了!
      </p>
    </div>
  </div>
</template>

<script setup>
import { useIntersectionObserver, useVModel } from '@vueuse/core';
import { ref, watch } from 'vue';

const props = defineProps({
  // 是否处于加载状态
  modelValue: {
    type: Boolean,
    required: true
  },
  // 数据是否全部加载完成
  isFinished: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['onLoad', 'update:modelValue']);
// 处理loading状态
const loading = useVModel(props);

// 滚动的元素
const loadingTarget = ref(null);
const targetIsintersecting = ref(false);
useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
  targetIsintersecting.value = isIntersecting;
  emitLoad();
});

/**
 * 触发 load事件
 */
const emitLoad = () => {
  // 当加载更多的视图可见时, 同时loading 为false, 同时数据尚未全部加载完, 处理加载更多的逻辑
  if (targetIsintersecting.value && !loading.value && !props.isFinished) {
    // 修改加载数据的标记
    loading.value = true;
    // 触发加载更多的行为
    emits('onLoad');
  }
};

/**
 * 监听loading 的变化, 解决数据加载完成之后, 首屏未铺满的问题
 */
watch(loading, () => {
  setTimeout(() => {
    emitLoad();
  }, 100);
});
</script>

<style lang="scss" scoped></style>
