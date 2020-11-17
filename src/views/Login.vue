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
      err_message="请输入正确的用户名/手机号"
    />
    <!-- 密码 -->
    <AuthInput
      type="password"
      placeholder="密码"
      err_message="请输入正确的密码"
    />
    <button class="loginBtn" @click="sendLogin">登录</button>
  </div>
</template>

<script>
// 引入子组件
import AuthInput from "../components/AuthInput";

export default {
  components: {
    AuthInput,
  },
};
</script>

<style lang='less'>
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

// 登录按钮
.loginBtn {
  width: 100%;
  height: 48/360 * 100vw;
  margin-top: 48/360 * 100vw;
  border: none;
  color: #f8e4dd;
  font-size: 24/360 * 100vw;
  background-color: #cc3300;
  border-radius: 24/360 * 100vw;
}
</style>