<template>
  <div class="commentContainer">
    <UserHeader title="我的跟帖" />
    <div class="list">
      <div class="item">
        <div class="date">2020-12-01</div>
        <div class="parent">
          <div class="nickname">回复：123</div>
          <div class="content">阿信是？</div>
        </div>
        <div class="mainContent">不是</div>
        <div class="post">
          <div class="text">原文：123456</div>
          <span class="iconfont iconjiantou1"></span>
        </div>
      </div>
    </div>

    <div class="moreComment">
      <span class="more">更多跟帖</span>
      <span class="iconfont iconjiantou1"></span>
      <span class="iconfont iconjiantou1"></span>
    </div>
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader";
export default {
  components: {
    UserHeader,
  },
};
</script>

<style lang="less" scoped>
.commentContainer {
  padding: 0 20/360 * 100vw;
  .list {
    .item {
      padding: 15/360 * 100vw 0;
      border-bottom: 1px solid #ccc;
      .date {
        font-size: 15/360 * 100vw;
        color: #888;
      }
      .parent {
        margin: 15/360 * 100vw 0;
        padding: 15/360 * 100vw;
        color: #888;
        background-color: #e4e4e4;
        font-size: 16/360 * 100vw;
        .content {
          margin-top: 8/360 * 100vw;
        }
      }
      .mainContent {
        font-size: 16/360 * 100vw;
        color: #333;
      }
      .post {
        display: flex;
        align-items: center;
        margin-top: 15/360 * 100vw;
        font-size: 16/360 * 100vw;
        color: #888;
        .text {
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .iconjiantou1 {
          font-size: 16/360 * 100vw;
          color: #ccc;
        }
      }
    }
  }
  .moreComment {
    margin-top: 50/360 * 100vw;
    text-align: center;
    font-size: 16/360 * 100vw;
    color: #888;
    .more {
      margin-right: 8/360 * 100vw;
    }
    .iconjiantou1 {
      font-size: 16/360 * 100vw;
      color: #ccc;
    }
  }
}
</style>