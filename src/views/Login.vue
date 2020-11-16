<template>
  <div>
    <h1>这是一个登录页面</h1>
    <p>{{ msg }}</p>
    <!-- 用标签渲染子组件 -->
    <MyInput></MyInput>
  </div>
</template>

<script>
// 引入子组件
import MyInput from "../components/MyInput.vue";
export default {
  data() {
    return {
      msg: 1234,
    };
  },
  // 注册子组件
  components: {
    MyInput,
  },
};
</script>

<style>
</style>