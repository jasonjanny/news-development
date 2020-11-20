<template>
  <div class="editContainer">
    <!-- 头部 -->
    <UserHeader title="编辑资料" />
    <!-- 头像 -->
    <div class="iconImg">
      <img :src="this.$axios.defaults.baseURL + data.head_img" alt="" />
    </div>

    <UserHandle list="昵称" :about="data.nickname" />
    <UserHandle list="密码" :about="data.password" />
    <UserHandle list="性别" :about="data.gender === 1 ? '男' : '女'" />
  </div>
</template>

<script>
import UserHandle from "../../components/UserHandle";
import UserHeader from "../../components/UserHeader";
export default {
  data() {
    return {
      data: "",
    };
  },
  components: {
    UserHandle,
    UserHeader,
  },
  created() {
    this.$axios({
      method: "get",
      url: "/user/" + localStorage.getItem("id"),
      headers: {
        // 鉴权，数据验证
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
      this.data = res.data.data;
      console.log(this.data);
    });
  },
};
</script>

<style lang="less" scoped>
.editContainer {
  min-height: 100vh;
  padding: 0 20/360 * 100vw;
  background-color: #fff;

  // 头像
  .iconImg {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    margin: 15/360 * 100vw auto 25/360 * 100vw;
    background-color: #6cf;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>