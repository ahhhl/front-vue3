<template>
  <!-- 一级路由出口 -->
  <div>
    <router-view :class="classNames"></router-view>
    <!-- <m-transition-router-view
      mainComponentName="home"
      :routerType="$store.getters.routerType"
    ></m-transition-router-view> -->
  </div>
</template>

<script setup>
import { isMobileTerminal } from './utils/flexible';

const classNames = isMobileTerminal.value
  ? 'h-screen w-screen fixed top-0 left-0'
  : '';
</script>

<style lang="scss" scoped></style>
