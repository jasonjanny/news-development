<template>
  <div class="userInfo">
    <span>{{ list }}</span>
    <p>
      {{ about }}
      <span class="iconfont iconjiantou1"></span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["list", "about"],
};
</script>

<style lang="less" scoped>
// 用户操作信息
.userInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54/360 * 100vw;
  margin: 0 16/360 * 100vw;
  border-bottom: 1px solid #ccc;
  p {
    color: #949494dd;
    font-size: 15/360 * 100vw;
  }
  span {
    font-size: 16/360 * 100vw;
  }
}
</style>