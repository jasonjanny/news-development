<template>
  <div id="app">
    <router-view />
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
</style>
