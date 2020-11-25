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
      >
        <!-- 文章列表 -->
        <PostItem
          :postData="list"
          v-for="list in categoryList[activeCategoryIndex].postList"
          :key="list.id"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Header from "../components/IndexHeader";
import PostItem from "../components/IndexPostItem";
export default {
  data() {
    return {
      categoryList: [],
      activeCategoryIndex: 0,
    };
  },
  components: {
    Header,
    PostItem,
  },

  methods: {
    loadPost() {
      const category = this.categoryList[this.activeCategoryIndex];

      if (category.postList.length === 0) {
        this.$axios({
          url: "/post",
          params: {
            category: category.id,
            pageIndex: category.pageIndex,
            pageSize: category.pageSize,
          },
        }).then((res) => {
          // console.log(res);
          // 保存文章列表
          category.postList = res.data.data;
          console.log(category);
        });
      }
    },
  },

  created() {
    // 获取栏目列表
    this.$axios({
      url: "/category",
    }).then((res) => {
      this.categoryList = res.data.data.map((category) => {
        return {
          // 展开语法
          // 之前服务器获取到的栏目数据，全部保留
          ...category,
          // 在每个栏目里都添加一个数组
          postList: [],
          // 当前页数
          pageIndex: 1,
          // 每页显示的数据条数
          pageSize: 3,
        };
      });
      // console.log(this.categoryList);

      // 第一次获取文章列表
      this.loadPost();
    });
  },

  watch: {
    activeCategoryIndex() {
      // 获取文章列表
      this.loadPost();
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
}
</style>