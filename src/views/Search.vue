<template>
  <div class="searchContainer">
    <div class="header">
      <span class="iconfont iconjiantou" @click="goback()"></span>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <input type="text" placeholder="搜索你想要的内容" v-model="keyword" />
      </div>
      <div class="searchBtn" @click="postSearch(keyword)">搜索</div>
    </div>

    <PostItem :postData="list" v-for="list in postList" :key="list.id" />

    <div class="historyList" v-if="postList.length == 0">
      <h2>历史记录</h2>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in history"
          :key="index"
          @click="postSearch(history[index])"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from "../components/IndexPostItem";
export default {
  data() {
    return {
      keyword: "",
      postList: "",
      history: [],
    };
  },
  components: {
    PostItem,
  },

  mounted() {
    // 如果本地存储有搜索记录
    if (localStorage.getItem("history")) {
      this.history = JSON.parse(localStorage.getItem("history"));
    }
  },

  methods: {
    //  文章搜索
    postSearch(keyword) {
      // 判断搜索词是否已经被记录
      if (this.history.indexOf(this.keyword) > -1) {
      } else {
        this.history.push(this.keyword);
      }

      this.$axios({
        url: "/post_search",
        params: {
          keyword,
        },
      }).then((res) => {
        // console.log(res.data);
        this.postList = res.data.data;
      });
    },
    goback() {
      if (this.postList.length > 0) {
        this.postList = "";
        this.keyword = "";
      } else {
        this.$router.back();
      }
    },
  },

  watch: {
    history() {
      localStorage.setItem("history", JSON.stringify(this.history));
    },
  },
};
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