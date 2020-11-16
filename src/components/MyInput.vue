<template>
  <!-- 子组件使用v-bind声明接收父组件数据 -->
  <input type="text" :placeholder="tixing" />
</template>

<script>
export default {
  // 获取外部参数
  props: ["tixing"],
};
</script>

<style>
</style>