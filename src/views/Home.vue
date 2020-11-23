<template>
  <div class="container">
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

    <!-- 第1种文章模式 -->
    <div class="articlePattern1">
      <div class="left">
        <p>如果希望在封装的开闭组件内使用</p>
        <p>一二三四五六七</p>
        <p class="from">
          <span>火星时报&nbsp;&nbsp;52跟帖</span>
        </p>
      </div>
      <div class="right">
        <img src="../assets/1.jpg" alt="" />
      </div>
    </div>

    <!-- 第2种文章模式 -->
    <div class="articlePattern2">
      <p>
        如果想要在父组件影响子组件样式，只需在父组件CSS中在样式的前面使用
        /deep/即可
      </p>
      <div class="picture">
        <img src="../assets/1.jpg" alt="" />
        <img src="../assets/1.jpg" alt="" />
        <img src="../assets/1.jpg" alt="" />
      </div>
      <p class="from">
        <span>火星时报&nbsp;&nbsp;52跟帖</span>
      </p>
    </div>

    <!-- 第3种文章模式 -->
    <div class="articlePattern3">
      <p>实现mvvm主要包含两个方面，数据变化更新视图，视图变化更新数据</p>
      <div class="radio">
        <img class="circle" src="../assets/2.png" alt="" />
        <img class="switch" src="../assets/switch.png" alt="" />
      </div>
      <p class="from">
        <span>火星时报&nbsp;&nbsp;52跟帖</span>
      </p>
    </div>

    <!-- 第1种文章模式 -->
    <div class="articlePattern1">
      <div class="left">
        <p>如果希望在封装的开闭组件内使用</p>
        <p>一二三四五六七</p>
        <p class="from">
          <span>火星时报&nbsp;&nbsp;52跟帖</span>
        </p>
      </div>
      <div class="right">
        <img src="../assets/1.jpg" alt="" />
      </div>
    </div>

    <!-- 第2种文章模式 -->
    <div class="articlePattern2">
      <p>
        如果想要在父组件影响子组件样式，只需在父组件CSS中在样式的前面使用
        /deep/即可
      </p>
      <div class="picture">
        <img src="../assets/1.jpg" alt="" />
        <img src="../assets/1.jpg" alt="" />
        <img src="../assets/1.jpg" alt="" />
      </div>
      <p class="from">
        <span>火星时报&nbsp;&nbsp;52跟帖</span>
      </p>
    </div>

    <!-- 第3种文章模式 -->
    <div class="articlePattern3">
      <p>实现mvvm主要包含两个方面，数据变化更新视图，视图变化更新数据</p>
      <div class="radio">
        <img class="circle" src="../assets/2.png" alt="" />
        <img class="switch" src="../assets/switch.png" alt="" />
      </div>
      <p class="from">
        <span>火星时报&nbsp;&nbsp;52跟帖</span>
      </p>
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
.container {
  min-height: 100vh;
  background-color: #fff;

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

  .from {
    margin: 12/360 * 100vw 0;
    font-size: 13/360 * 100vw;
    color: #868686;
  }

  .articlePattern1 {
    display: flex;
    padding: 18/360 * 100vw 10/360 * 100vw 0;
    border-bottom: 1px solid #ccc;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .right {
      width: 121/360 * 100vw;
      height: 75/360 * 100vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .articlePattern2 {
    padding: 18/360 * 100vw 10/360 * 100vw 0;
    border-bottom: 1px solid #ccc;
    .picture {
      display: flex;
      height: 74/360 * 100vw;
      margin-top: 8/360 * 100vw;
      img {
        flex: 1;
        height: 100%;
        margin-right: 2/360 * 100vw;
      }
    }
  }
  .articlePattern3 {
    padding: 18/360 * 100vw 10/360 * 100vw 0;
    border-bottom: 1px solid #ccc;
    .radio {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 340/360 * 100vw;
      height: 170/360 * 100vw;
      .circle {
        opacity: 0.2;
      }
      .switch {
        position: absolute;
        width: 55/360 * 100vw;
      }
    }
  }
  .isFixed {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
}
</style>