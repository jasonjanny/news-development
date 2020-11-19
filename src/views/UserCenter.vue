<template>
  <div class="container">
    <!-- 用户信息 -->
    <div class="user">
      <!-- 用户头像 -->
      <div class="userImg">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 用户信息 -->
      <div class="userDetail">
        <span class="iconfont iconxingbienan"></span>
        <span class="nickname">火星网友</span>
        <p>
          <span class="time">2019-10-10</span>
        </p>
      </div>
      <!-- 更多信息 -->
      <div class="userMore">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <!-- 装饰边框 -->
    <div class="border"></div>
    <!-- 用户操作信息 -->
    <div class="userInfo">
      <span>我的关注</span>
      <p>
        关注的用户
        <span class="iconfont iconjiantou1"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  height: 600/360 * 100vw;
  background-color: #f2f2f2;
}
// 用户信息
.user {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90/360 * 100vw;
  padding: 24/360 * 100vw;
  .userImg {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    background-color: #6cf;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .userDetail {
    width: 100/360 * 100vw;
    margin-left: 16/360 * 100vw;
    margin-right: 110/360 * 100vw;
    .iconxingbienan {
      font-size: 18/360 * 100vw;
    }
    .nickname {
      margin-left: 8/360 * 100vw;
      color: #333;
      font-size: 16/360 * 100vw;
    }
    p {
      margin-top: 8/360 * 100vw;
    }
    .time {
      color: #949494dd;
      font-size: 16/360 * 100vw;
    }
  }

  .userMore {
    width: 17/360 * 100vw;
    height: 17/360 * 100vw;
    .iconjiantou1 {
      font-size: 16/360 * 100vw;
    }
  }
}
// 装饰边框
.border {
  height: 10/360 * 100vw;
  background-color: #ccc;
}
// 用户操作信息
.userInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50/360 * 100vw;
  margin: 0 16/360 * 100vw;
  border-bottom: 1px solid #ccc;
  p {
    color: #949494dd;
    font-size: 15/360 * 100vw;
  }
  span {
    font-size: 16/360 * 100vw;
  }
}
</style>