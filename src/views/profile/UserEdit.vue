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
    <UserHandle
      list="密码"
      about="******"
      @click.native="isShowPassword = true"
    />
    <UserHandle list="性别" :about="data.gender === 1 ? '男' : '女'" />

    <!-- 昵称弹窗 -->
    <van-dialog
      v-model="isShowNickname"
      title="修改昵称"
      show-cancel-button
      @confirm="editFile({ nickname: newNickname })"
    >
      <van-field
        v-model="newNickname"
        label="新昵称"
        placeholder="请输入新昵称"
      />
    </van-dialog>
    <!-- 密码弹窗 -->
    <van-dialog
      v-model="isShowPassword"
      title="修改密码"
      show-cancel-button
      @confirm="editFile({ password: newPassword })"
    >
      <van-field
        v-model="newPassword"
        label="新密码"
        placeholder="请输入新密码"
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
      isShowPassword: false,
      newPassword: "",
    };
  },
  components: {
    UserHandle,
    UserHeader,
    UserImg,
  },
  created() {
    // 页面挂载完之后就获取数据
    this.loadPage();
  },
  methods: {
    // 获取数据
    loadPage() {
      this.$axios({
        method: "get",
        url: "/user/" + localStorage.getItem("id"),
        headers: {
          // 鉴权，数据验证
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
        // console.log(res);
        this.data = res.data.data;
        // console.log(this.data);
      });
    },
    // 编辑昵称
    /*  setNewNickname() {
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
        if (res.data.message === "修改成功") {
          this.$toast.success("昵称修改成功");
        }
        // 重新获取一遍新数据
        this.loadPage();
      });
    }, */
    // 编辑密码
    /* setNewPassword() {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("id"),
        headers: {
          // 鉴权，数据验证
          Authorization: localStorage.getItem("token"),
        },
        data: {
          password: this.newPassword,
        },
      }).then((res) => {
        console.log(res);
        // 重新获取一遍新数据
        if (res.data.message === "修改成功") {
          this.$toast.success("密码修改成功");
        }
        this.loadPage();
      });
    }, */

    // 修改资料
    editFile(newData) {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("id"),
        headers: {
          // 鉴权，数据验证
          Authorization: localStorage.getItem("token"),
        },
        data: newData,
      }).then((res) => {
        console.log(res);
        // 重新获取一遍新数据
        if (res.data.message === "修改成功") {
          this.$toast.success("密码修改成功");
        }
        this.loadPage();
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