<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="iconfont iconnew"></div>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <span class="title">搜索新闻</span>
      </div>
      <div class="iconfont iconwode"></div>
    </div>
    <!-- 导航栏 -->
    <div class="navContainer">
      <div class="nav" :class="navFixed === true ? 'isFixed' : ''">
        <ul>
          <li>关注</li>
          <li>头条</li>
          <li>娱乐</li>
          <li>体育</li>
          <li>汽车</li>
          <li>房产</li>
        </ul>
        <div class="iconfont iconjiantou1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navFixed: false,
    };
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset;
      let offsetHeight = document.querySelector(".header").offsetHeight;
      // console.log(scrollTop);
      // console.log(offsetHeight);
      if (scrollTop > offsetHeight) {
        this.navFixed = true;
      } else {
        this.navFixed = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 50/360 * 100vw;
  padding: 0 20/360 * 100vw;
  background-color: #ff0000;
  .iconnew {
    font-size: 58/360 * 100vw;
    color: #fff;
  }
  .iconwode {
    color: #fff;
    font-size: 24/360 * 100vw;
  }
  .search {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 210/360 * 100vw;
    height: 34/360 * 100vw;
    margin-left: 10/360 * 100vw;
    margin-right: 30/360 * 100vw;
    background: #fff;
    opacity: 0.5;
    border-radius: 17/360 * 100vw;
    .iconsearch {
      margin-right: 4/360 * 100vw;
      font-size: 18/360 * 100vw;
    }
    .title {
      font-size: 14/360 * 100vw;
      color: #000;
    }
  }
}

.navContainer {
  height: 43/360 * 100vw;
  .nav {
    display: flex;
    align-items: center;
    height: 43/360 * 100vw;
    background-color: #f2f2f2;
    ul {
      flex: 1;
      display: flex;
      justify-content: space-evenly;
    }
    .iconjiantou1 {
      padding: 0 15/360 * 100vw;
      font-size: 21/360 * 100vw;
      font-weight: 700;
      transform: rotate(90deg);
    }
  }
}

.isFixed {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
</style>