<template>
  <button
    class="loginBtn"
    :username="username"
    :password="password"
    @click="sendLogin"
  >
    {{ btnText }}
  </button>
</template>

<script>
export default {
  props: ["btnText", "username", "password"],
  methods: {
    sendLogin() {
      this.$axios({
        method: "post",
        url: "http://157.122.54.189:9083/login",
        data: { username: this.username, password: this.password },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
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