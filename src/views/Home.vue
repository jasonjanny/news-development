<template>
  <div class="container">
    <!-- 头部 -->
    <Header />

    <!-- 导航栏 -->
    <van-tabs v-model="activeCategoryIndex" background="#f2f2f2" sticky>
      <van-tab
        :title="category.name"
        v-for="category in categoryList"
        :key="category.id"
      >
        <!-- 无限加载组件 -->
        <!-- 翻页请求immediate-check 禁止页面进来时马上发送 -->
        <van-list
          @load="loadMorePost"
          :immediate-check="false"
          v-model="category.loading"
          :finished="category.finished"
          finished-text="别拉了"
        >
          <!-- 文章列表 -->
          <PostItem
            :postData="list"
            v-for="list in category.postList"
            :key="list.id"
          />
        </van-list>
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

      this.$axios({
        url: "/post",
        params: {
          category: category.id,
          pageIndex: category.pageIndex,
          pageSize: category.pageSize,
        },
      }).then((res) => {
        // 保存文章列表
        // 这种方式获取数据时会覆盖旧数据
        // category.postList = res.data.data;

        // 获取到的新数据应该拼接在旧数据后面
        category.postList = [...category.postList, ...res.data.data];

        // 数据加载完毕后关闭加载函数的读取
        category.loading = false;

        // 判断是否已经全部加载完毕
        // 如果获取到的数据长度比要显示的数据条数长度小，说明页面到底了，不能再加载下一页了
        if (res.data.data.length < category.pageSize) {
          category.finished = true;
        }
      });
    },

    loadMorePost() {
      const category = this.categoryList[this.activeCategoryIndex];
      // 将当前分类页码+1
      category.pageIndex += 1;
      // 获取数据
      this.loadPost();
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
          pageSize: 6,
          // 当页面拉到底部，组件自动设置为true，就不会重复发送请求
          loading: false,
          // 是否已经全部加载完毕
          finished: false,
        };
      });

      // 在栏目后面添加一个选项
      this.categoryList.push({
        name: "+",
      });
      // 第一次获取文章列表
      this.loadPost();
    });
  },

  watch: {
    activeCategoryIndex(newVal) {
      const category = this.categoryList[this.activeCategoryIndex];

      if (newVal === this.categoryList.length - 1) {
        this.$router.push("/program");
      } else {
        if (category.postList.length === 0) {
          // 获取文章列表
          this.loadPost();
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;

  /deep/ .van-tab:nth-last-child(2) {
    background-color: #f2f2f2;
    position: sticky;
    right: -8px;
    line-height: 44px;
    width: 44px;
  }
}
</style>