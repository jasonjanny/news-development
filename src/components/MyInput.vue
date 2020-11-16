<template>
  <div>
    <input type="text" :placeholder="tixing" v-model="value" />
    <button @click="sendVal">点击发送</button>
  </div>
</template>

<script>
export default {
  // 获取外部参数
  props: ["tixing"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    sendVal() {
      // 子组件通过$emit向父组件发送数据
      this.$emit("getVal", this.value);
    },
  },
};
</script>

<style>
</style>