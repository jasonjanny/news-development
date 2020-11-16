<template>
  <div>
    <h1>这是一个登录页面</h1>
    <p>{{ msg }}</p>
    <!-- 用标签渲染子组件 -->
    <!-- 父组件监听事件 -->
    <MyInput tixing="请您输入内容" @getVal="showVal"></MyInput>
    <MyInput tixing="请您输入内容" @getVal="showVal"></MyInput>
    <br />
    <p>输入的内容为：{{ content }}</p>
  </div>
</template>

<script>
// 引入子组件
import MyInput from "../components/MyInput.vue";
export default {
  data() {
    return {
      msg: 1234,
      content: "",
    };
  },
  // 注册子组件
  components: {
    MyInput,
  },
  methods: {
    // 显示数据
    showVal(val) {
      this.content = val;
    },
  },
};
</script>

<style>
</style>