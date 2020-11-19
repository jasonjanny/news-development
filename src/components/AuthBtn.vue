<template>
  <!-- <button class="Btn" @click="$emit('sendajax')"> -->
  <!-- 另一种方式 -->
  <button class="Btn">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  props: ["btnText"],
};
</script>

<style lang="less" scoped>
// 登录按钮
.Btn {
  width: 100%;
  height: 48/360 * 100vw;
  margin-top: 48/360 * 100vw;
  border: none;
  color: #f8e4dd;
  font-size: 24/360 * 100vw;
  background-color: #cc3300;
  border-radius: 24/360 * 100vw;
}
</style>