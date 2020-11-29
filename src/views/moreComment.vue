<template>
  <div class="commentContainer">
    <UserHeader title="精彩跟帖" />
    <div v-for="comment in commentList" :key="comment.id">
      <div class="commentContent">
        <img :src="$axios.defaults.baseURL + comment.user.head_img" alt="" />
        <div class="info">
          <p class="nickname">{{ comment.user.nickname }}</p>
          <p class="date">{{ date }}</p>
        </div>
        <div class="reply">回复</div>
      </div>

      <Main :mainlist="comment" />
      <div class="comment">{{ comment.content }}</div>
    </div>

    <div class="boottomLine">我也是有底线的</div>
  </div>
</template>

<script>
import Main from "../comment/Main";
import UserHeader from "../components/UserHeader";
export default {
  data() {
    return {
      date:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      commentList: [],
    };
  },
  components: {
    Main,
    UserHeader,
  },
  created() {
    this.$axios({
      url: "post_comment/" + this.$route.params.id,
    }).then((res) => {
      this.commentList = res.data.data;
      console.log(this.commentList);
    });
  },
};
</script>

<style lang="less" scoped>
// 跟帖
.commentContainer {
  margin: 10/360 * 100vw 20/360 * 100vw 0;
  .title {
    margin-top: 20/360 * 100vw;
    margin-bottom: 30/360 * 100vw;
    font-size: 18/360 * 100vw;
    text-align: center;
  }
  .commentContent {
    display: flex;
    align-items: center;
    margin-top: 20/360 * 100vw;
    padding: 0 15/360 * 100vw;
    img {
      width: 40/360 * 100vw;
      height: 40/360 * 100vw;
      border-radius: 50%;
    }
    .info {
      flex-grow: 1;
      padding-left: 8/360 * 100vw;
      .nickname {
        font-size: 16/360 * 100vw;
      }
      .date {
        padding-top: 4/360 * 100vw;
        font-size: 14/360 * 100vw;
        color: #888;
      }
    }
    .reply {
      font-size: 15/360 * 100vw;
      color: #888;
    }
  }
  .comment {
    word-break: break-all; // 设置换行
    padding: 0 15/360 * 100vw 15/360 * 100vw;
    border-bottom: 1px solid #ccc;
    font-size: 16/360 * 100vw;
  }
  .boottomLine {
    height: 30/360 * 100vw;
    margin-top: 30/360 * 100vw;
    text-align: center;
    color: #888;
    font-size: 12/360 * 100vw;
  }
}
</style>