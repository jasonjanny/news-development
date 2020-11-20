<template>
  <div class="editContainer">
    <!-- 头部 -->
    <div class="editHeader">
      <span class="iconfont iconjiantou"></span>
      <p>编辑资料</p>
    </div>
    <!-- 头像 -->
    <div class="iconImg">
      <img src="" alt="" />
    </div>

    <UserHandle list="昵称" about="关注的用户" />
    <UserHandle list="密码" about="关注的用户" />
    <UserHandle list="性别" about="关注的用户" />
  </div>
</template>

<script>
import UserHandle from "../../components/UserHandle";
export default {
  components: {
    UserHandle,
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
      border-radius: 50%;
    }
  }
}
</style>