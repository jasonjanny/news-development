<template>
  <div>
    <div class="mainContainer">
      <div class="commentContainer">
        <div class="commentContent">
          <img :src="$axios.defaults.baseURL + mainlist.user.head_img" alt="" />
          <div class="info">
            <p class="nickname">{{ mainlist.user.nickname }}</p>
            <p class="date">{{ date }}</p>
          </div>
          <div class="reply">回复</div>
        </div>
        <Parent :parentlist="mainlist.parent" v-if="mainlist.parent" />
        <div class="main" v-else></div>
        <div class="comment">{{ mainlist.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Parent from "../comment/Parent";
export default {
  data() {
    return {
      date:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
    };
  },
  props: ["mainlist"],
  components: {
    Parent,
  },
};
</script>
<style lang="less" scoped>
.mainContainer {
  margin: 25/360 * 100vw 15/360 * 100vw 0;
  padding: 5/360 * 100vw 15/360 * 100vw 10/360 * 100vw;
  border: 1px solid #ccc;
}
.commentContainer {
  margin-top: 10/360 * 100vw;
  .commentContent {
    display: flex;
    align-items: center;
    margin: 10/360 * 100vw 0;
    img {
      width: 40/360 * 100vw;
      height: 40/360 * 100vw;
      border-radius: 50%;
      object-fit: cover;
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
    padding: 15/360 * 100vw 0;
    font-size: 16/360 * 100vw;
    border-bottom: 1px solid #ccc;
  }
}
.main {
  margin: 15/360 * 100vw;
}
</style>