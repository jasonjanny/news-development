<template>
  <div>
    <!-- 先递归到最深层再一层一层显示数据 -->
    <Parent v-if="parentlist.parent" :parentlist="parentlist.parent" />
    <div>{{ parentlist.content }}</div>
  </div>
</template>

<script>
export default {
  name: "Parent",
  props: ["parentlist"],
};
</script>

<style>
</style>