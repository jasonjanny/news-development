<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="iconfont iconnew"></div>
      <div class="search" @click="$router.push('/search')">
        <span class="iconfont iconsearch"></span>
        <span class="title">搜索新闻</span>
      </div>
      <div class="iconfont iconwode" @click="$router.push('/usercenter')"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 50/360 * 100vw;
  padding: 0 20/360 * 100vw;
  background-color: #ff0000;
  .iconnew {
    font-size: 58/360 * 100vw;
    color: #fff;
  }
  .iconwode {
    color: #fff;
    font-size: 28/360 * 100vw;
    opacity: 0.8;
  }
  .search {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 210/360 * 100vw;
    height: 34/360 * 100vw;
    margin: 0 15/360 * 100vw;
    background: #fff;
    opacity: 0.5;
    border-radius: 17/360 * 100vw;
    .iconsearch {
      margin-right: 4/360 * 100vw;
      font-size: 18/360 * 100vw;
    }
    .title {
      font-size: 14/360 * 100vw;
      color: #000;
    }
  }
}
</style>