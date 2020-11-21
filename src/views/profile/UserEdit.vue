<template>
  <div class="editContainer">
    <!-- 头部 -->
    <UserHeader title="编辑资料" />
    <!-- 头像 -->
    <div class="iconImg">
      <UserImg :data="data" />
    </div>

    <UserHandle
      list="昵称"
      :about="data.nickname"
      @click.native="isShowNickname = true"
    />
    <UserHandle list="密码" about="******" />
    <UserHandle list="性别" :about="data.gender === 1 ? '男' : '女'" />

    <!-- 弹窗 -->
    <van-dialog
      v-model="isShowNickname"
      title="修改昵称"
      show-cancel-button
      @confirm="setNewNickname"
    >
      <van-field
        v-model="newNickname"
        label="新昵称"
        placeholder="请输入新昵称"
      />
    </van-dialog>
  </div>
</template>

<script>
import UserHandle from "../../components/UserHandle";
import UserHeader from "../../components/UserHeader";
import UserImg from "../../components/UserImg";
export default {
  data() {
    return {
      data: "",
      isShowNickname: false,
      newNickname: "",
    };
  },
  components: {
    UserHandle,
    UserHeader,
    UserImg,
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
    setNewNickname() {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("id"),
        headers: {
          // 鉴权，数据验证
          Authorization: localStorage.getItem("token"),
        },
        data: {
          nickname: this.newNickname,
        },
      }).then((res) => {
        console.log(res);
      });
    },
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
    border-radius: 50%;
  }
}
</style>