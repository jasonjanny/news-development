<template>
  <div class="focusContainer">
    <UserHeader title="我的关注" />

    <div class="focusList">
      <div class="img">
        <img src="../../assets/1.jpg" alt="" />
      </div>
      <div class="info">
        <p class="content">火星新闻播报</p>
        <span class="time">2020-12-10</span>
      </div>
      <div class="cancel">取消关注</div>
    </div>
  </div>
</template>

<script>
import UserHeader from "../../components/UserHeader";
export default {
  components: {
    UserHeader,
  },
};
</script>

<style lang="less" scoped>
.focusContainer {
  min-height: 100vh;
  background-color: #fff;

  .focusList {
    display: flex;
    align-items: center;
    height: 70/360 * 100vw;
    padding: 0 20/360 * 100vw;
    border-bottom: 1px solid #ccc;

    .img {
      width: 40/360 * 100vw;
      height: 40/360 * 100vw;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .info {
      flex: 1;
      padding-right: 86/360 * 100vw;
      .content {
        margin-bottom: 4/360 * 100vw;
        font-size: 15/360 * 100vw;
        color: #000000dd;
      }
      .time {
        padding-right: 16/360 * 100vw;
        font-size: 14/360 * 100vw;
        color: #888;
      }
    }

    .cancel {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 73/360 * 100vw;
      height: 30/360 * 100vw;
      border-radius: 15/360 * 100vw;
      background-color: #ccc;
      color: #363636;
      font-size: 12/360 * 100vw;
    }
  }
}
</style>