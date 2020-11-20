<template>
  <div class="container">
    <!-- 用户信息 -->
    <div class="user">
      <!-- 用户头像 -->
      <div class="userImg">
        <img
          v-if="data.head_img"
          :src="this.$axios.defaults.baseURL + data.head_img"
          alt=""
        />
        <img v-else src="@/assets/1.jpg" alt="" />
      </div>
      <!-- 用户信息 -->
      <div class="userDetail">
        <!-- <span class="iconfont iconxingbienan"></span> -->
        <span
          class="iconfont"
          :class="data.gender === 1 ? 'iconxingbienan' : 'iconxingbienv'"
        ></span>
        <span class="nickname">{{ data.nickname }}</span>
        <p>
          <span class="time">2020-10-10</span>
        </p>
      </div>
      <!-- 更多信息 -->
      <div class="userMore">
        <span class="iconfont iconjiantou1" @click="userEdit"></span>
      </div>
    </div>
    <!-- 装饰边框 -->
    <div class="border"></div>
    <!-- 用户操作信息 -->
    <UserHandle list="我的关注" about="关注的用户" />
    <UserHandle list="我的跟帖" about="跟帖/回复" />
    <UserHandle list="我的收藏" about="文章/视频" />
    <UserHandle list="设置" />
    <UserHandle list="退出" @click.native="logout" />
  </div>
</template>

<script>
import UserHandle from "../../components/UserHandle";
import UserEdit from "../profile/UserEdit";
export default {
  data() {
    return {
      data: "",
    };
  },
  components: {
    UserHandle,
  },
  mounted() {
    const id = localStorage.getItem("id");
    console.log(id);
    const token = localStorage.getItem("token");
    // console.log(token);

    this.$axios({
      method: "get",
      url: "/user/" + id,
      headers: {
        // 鉴权，数据验证
        Authorization: token,
      },
    }).then((res) => {
      // console.log(res);
      if (res.data.message === "用户信息验证失败") {
        // 跳转到登录页
        this.$router.push("/login");
      }
      // 将获取到的数据存储到data中，供渲染数据信息
      this.data = res.data.data;
      // console.log(this.data);
    });
  },

  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      this.$toast("退出成功");
      this.$router.replace("/login");
    },
    userEdit() {
      this.$router.push("/useredit");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 600/360 * 100vw;
  background-color: #fff;
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
      color: #6cf;
    }
    .iconxingbienv {
      font-size: 18/360 * 100vw;
      color: hotpink;
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
  height: 4/360 * 100vw;
  background-color: #ccc;
}
</style>