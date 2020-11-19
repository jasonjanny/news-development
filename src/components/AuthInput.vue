<template>
  <div class="userInput">
    <!-- vue 2.x不支持对属性使用插值{{}}的方式赋值，所以要使用v-bind指令（或简写“:”）来指定属性 -->
    <!-- 使用三元表达式实现动态class -->
    <!-- :class="isOk?'':'error'" -->
    <!-- 使用vue提供的对象形式声明 -->
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="value"
      :class="{ error: !isOk }"
      @blur="showErrMsg"
      @change="$emit('send-user-msg', value)"
    />
  </div>
</template>

<script>
export default {
  props: ["type", "placeholder", "rule", "err_message"],
  data() {
    return {
      value: "",
      isOk: "true",
    };
  },

  methods: {
    showErrMsg() {
      if (!this.isOk) {
        // alert(this.err_message);
        // 使用vant-ui
        this.$toast({
          message: this.err_message,
          position: "bottom",
        });
      }
    },
  },

  watch: {
    // 使用简单校验方法
    /* value(newValue) {
      if (newValue.length < 3) {
        console.log("不合法");
      } else {
        console.log("合格");
      }
    }, */

    // 使用正则表达式判断
    value(newValue) {
      if (this.rule.test(newValue)) {
        // console.log("合法");
        this.isOk = true;
      } else {
        // console.log("不合格");
        this.isOk = false;
      }
    },
  },
};
</script>

<style lang='less' scoped>
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

  .error {
    border-color: red;
  }
}
</style>