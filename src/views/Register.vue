<template>
  <div class="container">
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo iconfont iconnew"></div>
    <!-- 用户名 -->
    <AuthInput
      type="text"
      placeholder="手机号码"
      :rule="/^1[3456789]\d{9}$/"
      err_message="请输入正确的手机号码"
    />
    <!-- 昵称 -->
    <AuthInput
      type="text"
      placeholder="昵称"
      :rule="/^.{6,12}$/"
      err_message="请输入正确的6-12位字符或数字昵称"
    />
    <!-- 密码 -->
    <AuthInput
      type="password"
      placeholder="密码"
      :rule="/^.{6,12}$/"
      err_message="请输入正确的6-12位字符或数字密码"
    />
    <AuthBtn btnText="立即注册" />
  </div>
</template>

<script>
import AuthInput from "../components/AuthInput";
import AuthBtn from "../components/AuthBtn";
export default {
  components: {
    AuthInput,
    AuthBtn,
  },
};
</script>

<style lang="less" scoped>
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