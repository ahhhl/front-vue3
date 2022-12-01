<template>
  <m-popover class="flex items-center">
    <template #reference>
      <div
        class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
      >
        <img
          v-lazy
          class="w-3 h-3 rounded-sm"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F0c%2Fef%2Fa0%2F0cefa0f17b83255217eddc20b15395f9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651074011&t=ba5d64079381425813e4c269bcac1a1b"
          alt=""
        />
        <!-- 下箭头 -->
        <m-svg-icon
          class="h-1.5 w-1.5 ml-0.5"
          name="down-arrow"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <!-- vip -->
        <m-svg-icon
          class="absolute bottom-0 right-[16px] h-1.5 w-1.5"
          name="vip"
        ></m-svg-icon>
      </div>
    </template>
    <!-- 气泡 -->
    <div class="w-[140px] overflow-hidden">
      <div
        v-for="menu in menuArr"
        :key="menu.id"
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
      >
        <m-svg-icon
          :name="menu.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <span class="text-zinc-900 text-sm dark:text-zinc-300">{{
          menu.title
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
// 构建menu 数据源
const menuArr = [
  {
    id: 0,
    title: '个人资料',
    icon: 'profile',
    path: '/profile'
  },
  {
    id: 1,
    title: '升级VIP',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    id: 2,
    title: '退出',
    icon: 'logout',
    path: ''
  }
];
</script>

<style lang="scss" scoped></style>
