<template>
  <div>
    <teleport to="body">
      <transition name="fade">
        <div
          v-if="isVisable"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
          @click="isVisable = false"
        ></div>
      </transition>
      <transition name="popup-down-up">
        <div
          v-if="isVisable"
          v-bind="$attrs"
          class="w-screen bg-white dark:bg-zinc-800 z-50 fixed bottom-0"
        >
          <slot></slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { watch } from '@vue/runtime-core';
import { useScrollLock, useVModel } from '@vueuse/core';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});

defineEmits(['update:modelValue']);

const isLocked = useScrollLock(document.body);

// 是一个响应式数据, 当isVisable值发生变化时,会自动触发 emit 修改 modelValue
const isVisable = useVModel(props);
watch(
  isVisable,
  (val) => {
    isLocked.value = val;
  },
  {
    immediate: true
  }
);
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.5s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
