<template>
  <div class="collectContainer">
    <!-- 头部 -->
    <UserHeader title="我的收藏" />

    <!-- 文章列表 -->
    <PostItem :postData="list" v-for="list in collectList" :key="list.id" />
  </div>
</template>

<script>
import UserHeader from "../../components/UserHeader";
import PostItem from "../../components/IndexPostItem";
export default {
  data() {
    return {
      collectList: "",
    };
  },
  components: {
    UserHeader,
    PostItem,
  },

  created() {
    this.$axios({
      url: "/user_star",
    }).then((res) => {
      // console.log(res);
      if (res.statusText === "OK") {
        this.collectList = res.data.data;
        // console.log(this.collectList);
      }
    });
  },
};
</script>

<style lang="less" scoped>
.collectContainer {
  min-height: 100vh;
  padding: 0 20/360 * 100vw;
  background-color: #fff;
  .cover {
    width: 100/360 * 100vw;
  }
}
</style>