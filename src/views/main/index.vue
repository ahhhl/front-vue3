<template>
  <div
    class="h-full overflow-auto bg-white dark:bg-zinc-800 duration-500 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
    ref="containerTarget"
  >
    <navigation-vue></navigation-vue>
  </div>
</template>

<script>
export default {
  name: 'home'
};
</script>

<script setup>
import { isMobileTerminal } from '@/utils/flexible';
import navigationVue from './components/navigation/index.vue';
</script>
