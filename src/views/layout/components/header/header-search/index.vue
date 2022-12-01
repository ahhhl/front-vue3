<template>
  <div class="w-full">
    <m-search v-model="inputValue" @focus="handleFocus">
      <template #dropdown>
        <div>dropdown</div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const inputValue = ref('');
const handleFocus = () => {
  console.log('focus');
};
</script>

<style lang="scss" scoped></style>
