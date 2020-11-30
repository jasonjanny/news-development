<template>
  <div class="focusContainer">
    <UserHeader title="我的关注" />

    <div class="focusList" v-for="user in focusList" :key="user.id">
      <div class="img">
        <img
          v-if="user.head_img"
          :src="$axios.defaults.baseURL + user.head_img"
          alt=""
        />
        <img v-else src="@/assets/1.jpg" alt="" />
      </div>
      <div class="info">
        <p class="content">{{ user.nickname }}</p>
        <span class="time">2020-12-10</span>
      </div>
      <div class="cancel" @click="userCancel(user.id)">取消关注</div>
    </div>
  </div>
</template>

<script>
import UserHeader from "../../components/UserHeader";
export default {
  data() {
    return {
      focusList: [],
    };
  },

  components: {
    UserHeader,
  },

  // 发送关注请求
  mounted() {
    this.loadPage();
  },

  methods: {
    loadPage() {
      this.$axios({
        method: "get",
        url: "/user_follows/",
      }).then((res) => {
        // console.log(res);
        const { data } = res.data;
        this.focusList = data;
      });
    },
    userCancel(id) {
      this.$axios({
        url: "/user_unfollow/" + id,
      }).then((res) => {
        // console.log(res);
        this.loadPage();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.focusContainer {
  min-height: 100vh;
  padding: 0 20/360 * 100vw;
  background-color: #fff;

  .focusList {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 20/360 * 100vw 0;

    .img {
      width: 40/360 * 100vw;
      height: 40/360 * 100vw;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    .info {
      flex: 1;
      padding-left: 10/360 * 100vw;
      padding-right: 20/360 * 100vw;
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