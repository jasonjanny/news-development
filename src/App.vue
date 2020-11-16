<template>
  <div id="app">
    <router-view />
    <!-- 使用字体图标 -->
    <span class="iconfont iconwode">123456</span>
  </div>
</template>

<style lang="less">
/* 在 style 当中引入字体图标文件 */
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

ul,
li,
ol {
  list-style: none;
}

// 设置字体图标样式
.iconwode {
  font-size: 50px;
  color: #bc9ee5;
}
</style>
