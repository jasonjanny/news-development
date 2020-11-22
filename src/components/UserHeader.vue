<template>
  <!-- 头部 -->
  <div class="editHeader">
    <span class="iconfont iconjiantou" @click="$router.back()"></span>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less">
// 头部
.editHeader {
  display: flex;
  align-items: center;
  height: 40/360 * 100vw;
  padding-top: 10/360 * 100vw;
  margin-bottom: 20/360 * 100vw;
  font-weight: 700;
  .iconjiantou {
    color: #888;
    font-size: 16/360 * 100vw;
  }
  p {
    flex: 1;
    color: #333;
    margin-right: 10/360 * 100vw;
    font-size: 14/360 * 100vw;
  }
}
</style>