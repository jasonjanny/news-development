<template>
  <div class="searchContainer">
    <div class="header">
      <span class="iconfont iconjiantou"></span>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <input type="text" placeholder="搜索你想要的内容" />
      </div>
      <div class="searchBtn">搜索</div>
    </div>

    <div class="historyList">
      <h2>历史记录</h2>
      <div class="list">
        <div class="item">美女</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.searchContainer {
  .header {
    display: flex;
    align-items: center;
    padding: 0 15/360 * 100vw;
    padding-top: 10/360 * 100vw;
    .search {
      flex: 1;
      display: flex;
      align-items: center;
      height: 40/360 * 100vw;
      margin: 0 8/360 * 100vw;
      border: 1px solid #ccc;
      border-radius: 20/360 * 100vw;
      input {
        border: none;
        outline: none;
        font-size: 16/360 * 100vw;
      }
      .iconsearch {
        margin: 0 10/360 * 100vw;
        font-size: 18/360 * 100vw;
        font-weight: 700;
        color: #bbb;
      }
    }
    .iconjiantou {
      font-weight: 700;
      color: #777;
    }
    .searchBtn {
      font-size: 16/360 * 100vw;
    }
  }
  .historyList {
    margin: 0 15/360 * 100vw;
    padding: 25/360 * 100vw 0;
    border-bottom: 1px solid #ccc;
    h2 {
      font-size: 16/360 * 100vw;
      margin-bottom: 15/360 * 100vw;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      font-size: 16/360 * 100vw;
      .item {
        padding: 5/360 * 100vw 0;
        padding-right: 20/360 * 100vw;
      }
    }
  }
}
</style>