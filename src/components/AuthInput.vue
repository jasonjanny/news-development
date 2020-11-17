<template>
  <div class="userInput">
    <!-- vue 2.x不支持对属性使用插值{{}}的方式赋值，所以要使用v-bind指令（或简写“:”）来指定属性 -->
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: ["type", "placeholder"],
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    sendLogin() {
      axios({
        method: "post",
        url: "http://157.122.54.189:9083/login",
        data: { username: this.username, password: this.password },
      }).then((res) => {
        console.log(res);
      });
    },
  },
  watch: {
    inputValue() {
      const reg = new RegExp(this.rule);
      console.log(reg);
      if (reg.test(this.inputValue)) {
        this.isValid = true;
        console.log("通过了校验");
      } else {
        this.isValid = false;
        console.log(this.err_message);
      }
    },
  },
};
</script>

<style lang='less'>
// 输入框
.userInput {
  padding-bottom: 16/360 * 100vw;

  input {
    width: 100%;
    height: 48/360 * 100vw;
    line-height: 48/360 * 100vw;
    font-size: 18/360 * 100vw;
    border: none;
    outline: none;
    border-bottom: 1px solid #333;
    background-color: #f2f2f2;
  }
}
</style>