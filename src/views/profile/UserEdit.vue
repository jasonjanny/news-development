<template>
  <div class="editContainer">
    <!-- 头部 -->
    <div class="editHeader">
      <span class="iconfont iconjiantou" @click="back"></span>
      <p>编辑资料</p>
    </div>
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
export default {
  data() {
    return {
      data: "",
    };
  },
  components: {
    UserHandle,
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
  methods: {
    back() {
      this.$router.push("/usercenter");
    },
  },
};
</script>

<style lang="less" scoped>
.editContainer {
  min-height: 100vh;
  padding: 0 20/360 * 100vw;
  background-color: #fff;
  // 头部
  .editHeader {
    display: flex;
    align-items: center;
    height: 40/360 * 100vw;
    padding-top: 10/360 * 100vw;
    font-weight: 700;
    .iconjiantou {
      color: #888;
      font-size: 16/360 * 100vw;
    }
    p {
      flex: 1;
      color: #333;
      margin-right: 10/360 * 100vw;
      font-size: 14/360 * 100vw;
    }
  }
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