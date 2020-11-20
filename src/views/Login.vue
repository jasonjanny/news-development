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
      :rule="/^.{3,12}$/"
      err_message="请输入正确的6-12位字符或数字密码"
      @send-user-msg="getPassword"
    />
    <!-- <AuthBtn btnText="马上登录" @sendajax="sendLogin" /> -->
    <!-- .native - 监听组件根元素的原生事件，主要是给自定义的组件添加原生事件 -->
    <!-- 如果想在某个组件的根元素上绑定事件，直接使用 @click=''function' 是不生效的，可以添加.native修饰符 @click.native=''function'' -->
    <AuthBtn btnText="马上登录" @click.native="sendLogin" />
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
            if (res.data.message === "登录成功") {
              // alert(res.data.message);
              const data = res.data;
              // console.log(data);
              // 保存token和id到本地
              localStorage.setItem("token", data.data.token);
              localStorage.setItem("id", data.data.user.id);
              // console.log(localStorage.getItem("token"));
              this.$toast.success({
                message: res.data.message,
                position: "bottom",
              });

              this.$router.push("/usercenter");
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