<template>
  <div class="container">
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo iconfont iconnew"></div>
    <!-- 用户名 -->
    <AuthInput
      type="text"
      placeholder="用户名/手机号码"
      :rule="/^.{6,12}$/"
      err_message="请输入正确的用户名/手机号"
      @send-user-msg="getUsername"
    />
    <!-- 密码 -->
    <AuthInput
      type="password"
      placeholder="密码"
      :rule="/^.{6,12}$/"
      err_message="请输入正确的6-12位字符或数字密码"
      @send-user-msg="getPassword"
    />
    <AuthBtn btnText="马上登录" @sendajax="sendLogin" />
  </div>
</template>

<script>
// 引入子组件
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/AuthBtn";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  // 注册子组件
  components: {
    AuthInput,
    AuthBtn,
  },
  methods: {
    getUsername(userVal) {
      this.username = userVal;
      // console.log(this.username);
    },
    getPassword(pwdVal) {
      this.password = pwdVal;
      // console.log(this.password);
    },

    // 发送登录请求
    sendLogin() {
      if (this.username && this.password) {
        this.$axios({
          method: "post",
          url: "http://157.122.54.189:9083/login",
          data: { username: this.username, password: this.password },
        })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              // alert(res.data.message);
              this.$toast.success(res.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$toast.fail("请输入信息");
      }
    },
  },
};
</script>

<style lang='less' scoped>
.container {
  height: 600/360 * 100vw;
  padding: 24/360 * 100vw;
  background-color: #f2f2f2;
}
// 关闭按钮
.closeBtn {
  display: flex;

  .iconicon-test {
    font-size: 27/360 * 100vw;
  }
}

// logo
.logo {
  text-align: center;
}
.iconnew {
  font-size: 126/360 * 100vw;
  color: #d81e06;
}
</style>