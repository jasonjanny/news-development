<template>
  <div class="container">
    <!-- 头部 -->
    <Header />

    <!-- 导航栏 -->
    <van-tabs v-model="activeCategoryIndex" background="#f2f2f2">
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
        >内容 1</van-tab
      >
    </van-tabs>

    <!-- 文章列表 -->
    <PostItem :postData="list" v-for="list in postList" :key="list.id" />
  </div>
</template>

<script>
import Header from "../components/IndexHeader";
import PostItem from "../components/IndexPostItem";
export default {
  data() {
    return {
      postList: [],
      categoryList: [],
      activeCategoryIndex: 0,
    };
  },
  components: {
    Header,
    PostItem,
  },

  created() {
    // 获取栏目列表
    this.$axios({
      url: "/category",
    }).then((res) => {
      console.log(res);
      this.categoryList = res.data.data;
      console.log(this.categoryList);
    });

    // 获取文章列表
    this.$axios({
      url: "/post",
    }).then((res) => {
      // console.log(res);
      this.postList = res.data.data;
      console.log(this.postList);
    });
  },
};
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
}
</style>