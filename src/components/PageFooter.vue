<template>
  <div class="footerContainer">
    <div class="writeComment">
      <div class="content">写跟帖</div>
    </div>
    <div class="iconfont iconpinglun-"></div>
    <div class="iconfont iconshoucang"></div>
    <div class="iconfont iconfenxiang"></div>

    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style lang="less" scoped>
.footerContainer {
  display: flex;
  align-items: center;
  position: relative;
  padding: 20/360 * 100vw 20/360 * 100vw;
  margin-top: 80/360 * 100vw;
  border-top: 1px solid #ccc;
  .writeComment {
    width: 160/360 * 100vw;
    height: 30/360 * 100vw;
    background-color: #ddd;
    margin-right: 60/360 * 100vw;
    border-radius: 15/360 * 100vw;
    .content {
      height: 30/360 * 100vw;
      line-height: 30/360 * 100vw;
      margin-left: 20/360 * 100vw;
      font-size: 12/360 * 100vw;
    }
  }
  .iconpinglun- {
    margin-right: 15/360 * 100vw;
    font-size: 22/360 * 100vw;
  }
  .iconshoucang {
    margin-right: 15/360 * 100vw;
    font-size: 22/360 * 100vw;
  }
  .iconfenxiang {
    font-size: 22/360 * 100vw;
  }
  .message {
    position: absolute;
    top: 25/360 * 100vw;
    left: 246/360 * 100vw;
    width: 30/360 * 100vw;
    height: 16/360 * 100vw;
    line-height: 16/360 * 100vw;
    text-align: center;
    color: #fff;
    background-color: #f81414;
    font-size: 12/360 * 100vw;
    border-radius: 16/360 * 100vw;
  }
}
</style>