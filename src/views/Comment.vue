<template>
  <div class="commentContainer">
    <UserHeader title="我的跟帖" />
    <div class="list">
      <div class="item" v-for="(comment, index) in commentList" :key="index">
        <div class="date">2020-12-01</div>
        <div class="parent" v-if="comment.parent">
          <div class="nickname">回复：{{ comment.parent.user.nickname }}</div>
          <div class="content">{{ comment.parent.content }}</div>
        </div>
        <div class="mainContent" v-if="comment.content">
          {{ comment.content }}
        </div>
        <div class="post">
          <div class="text" v-if="comment.post.content">
            原文：{{ comment.post.title }}
          </div>
          <div v-else class="text">该帖已经被删除</div>
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
  data() {
    return {
      commentList: "",
    };
  },
  components: {
    UserHeader,
  },
  created() {
    this.$axios({
      url: "user_comments",
    }).then((res) => {
      console.log(res);
      this.commentList = res.data.data;
    });
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
        margin-top: 8/360 * 100vw;
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