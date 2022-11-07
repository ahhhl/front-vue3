<template>
  <button
    class="text-sm text-center rounded duration-150 flex justify-center items-center"
    :class="[
      typeEnum[type],
      sizeEnum[sizeKey].button,
      {
        'active:scale-105': isActiveAnim
      }
    ]"
    @click.stop="onButtonClick"
  >
    <!-- loading -->
    <m-svg-icon
      v-if="loading"
      name="loading"
      class="w-2 h-2 animate-spin mr-1"
    ></m-svg-icon>
    <!-- icon 按钮 -->
    <m-svg-icon
      v-if="icon"
      :name="icon"
      class="m-auto"
      :class="sizeEnum[sizeKey].icon"
      :fillClass="iconClass"
      :color="iconColor"
    ></m-svg-icon>
    <!-- 文字按钮 -->
    <slot v-else></slot>
  </button>
</template>

<script>
// type 可选项: 表示按钮风格
const typeEnum = {
  primary:
    'text-white bg-zinc-800 dark:bg-zinc-900 hover:bg-zinc-900 dark:hover:bg-zinc-700 active:bg-zinc-800 dark:active:bg-zinc-700',
  main: 'text-white bg-main dark:bg-zinc-900 hover:bg-hover-main dark:hover:bg-zinc-700 active:bg-main dark:active:bg-zinc-700',
  info: 'text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 hover:bgzinc-300 dark:hover:bg-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-700'
};
// size 可选项: 表示按钮的大小, 区分文字按钮和icon按钮
const sizeEnum = {
  // 文字按钮
  default: {
    button: 'w-8 h-4 text-base',
    icon: ''
  },
  // icon 按钮
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5'
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: ''
  },
  'icon-small': {
    button: 'w-3 h-3 ',
    icon: 'w-1.5 h-1.5'
  }
};
const EMIT_CLICK = 'click';
</script>
<script setup>
import { computed } from '@vue/runtime-core';
/**
 * 1. 构建 type 风格可选项 和size 大小可选项
 * 2. 通过props 让开发这控制按钮
 * 3. 区分icon button 和 text button
 * 4. 依据当前的数据, 实现视图
 * 5. 处理点击事件
 */

const props = defineProps({
  // icon 图标
  icon: {
    type: String
  },
  // icon 颜色
  iconColor: {
    type: String
  },
  // icon 图标类名 (tailwind)
  iconClass: {
    type: String
  },
  // 按钮风格
  type: {
    type: String,
    default: 'main',
    validator(val) {
      // 1. 获取所有的可选项
      const keys = Object.keys(typeEnum);
      // 2. 开发者指定的风格在可选项中
      const result = keys.includes(val);
      if (!result) {
        throw new Error(`type 必须是 ${keys.join(', ')}中的一个`);
      }
      return result;
    }
  },
  // 大小风格
  size: {
    type: String,
    default: 'default',
    validator(val) {
      const keys = Object.keys(sizeEnum).filter((key) => !key.includes('icon'));
      const result = keys.includes(val);
      if (!result) {
        throw new Error(`size 必须是 ${keys.join(', ')}中的一个`);
      }
      return result;
    }
  },
  // 按钮点击时,是否需要动画
  isActiveAnim: {
    type: Boolean,
    default: true
  },
  // 加载状态
  loading: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits([EMIT_CLICK]);

// props.size
const sizeKey = computed(() => {
  return props.icon ? `icon-${props.size}` : props.size;
});

const onButtonClick = () => {
  if (props.loading) return;
  emits(EMIT_CLICK);
};
</script>

<style lang="scss" scoped></style>
