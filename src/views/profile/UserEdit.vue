<template>
  <div class="editContainer">
    <!-- 头部 -->
    <UserHeader title="编辑资料" />
    <!-- 头像 -->
    <div class="iconImg">
      <UserImg :data="data" />
      <!-- 头像上传 -->
      <van-uploader :after-read="afterRead" />
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
    <UserHandle
      list="性别"
      :about="data.gender === 1 ? '男' : '女'"
      @click.native="isShowGender = true"
    />

    <!-- 昵称弹窗 -->
    <van-dialog
      v-model="isShowNickname"
      title="修改昵称"
      show-cancel-button
      @confirm="editNickname"
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
      @confirm="editNickname"
    >
      <van-field
        v-model="newPassword"
        label="新密码"
        placeholder="请输入新密码"
      />
    </van-dialog>
    <!-- 性别编辑弹窗 -->
    <van-action-sheet
      v-model="isShowGender"
      :actions="genderList"
      cancel-text="取消"
      description="请选择性别"
      @select="genderSelect"
    />
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
      isShowGender: false,
      newGender: "",
      genderList: [
        { name: "男", gender: 1 },
        { name: "女", gender: 0 },
      ],
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
        /* headers: {
          // 鉴权，数据验证
          Authorization: localStorage.getItem("token"),
        }, */
      }).then((res) => {
        // console.log(res);
        this.data = res.data.data;
        // console.log(this.data);
      });
    },

    // 修改资料
    editFile(newData) {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("id"),
        /* headers: {
          // 鉴权，数据验证
          Authorization: localStorage.getItem("token"),
        }, */
        data: newData,
      }).then((res) => {
        // console.log(res);
        // 重新获取一遍新数据
        if (res.data.message === "修改成功") {
          this.$toast.success(res.data.message);
        }
        this.loadPage();
      });
    },

    // 编辑昵称
    editNickname() {
      this.editFile({ nickname: this.newNickname });
      this.newNickname = "";
    },

    // 编辑密码
    editPassword() {
      this.editFile({ password: this.newPassword });
      this.newPassword = "";
    },

    // 编辑性别
    genderSelect(sex) {
      // console.log(sex);
      const gender = sex.gender;
      this.editFile({ gender: gender });
      this.isShowGender = false;
    },

    // 编辑头像
    afterRead(fileObj) {
      // console.log(fileObj);

      // 使用formdata对象
      const data = new FormData();
      data.append("file", fileObj.file);
      // 头像上传至服务器
      this.$axios({
        method: "post",
        url: "/upload",
        data,
      }).then((res) => {
        // console.log(res);
        const { message, data } = res.data;
        if (message === "文件上传成功") {
          // 发送数据编辑头像
          this.editFile({ head_img: data.url });
        }
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
    position: relative;
    display: flex;
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    margin: 15/360 * 100vw auto 25/360 * 100vw;
    border-radius: 50%;
    .van-uploader {
      position: absolute;
      opacity: 0;
    }
  }
}
</style>