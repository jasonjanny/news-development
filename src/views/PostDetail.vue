<template>
  <div>
    <!-- 普通文章 -->
    <div v-if="detailList.type === 1">
      <div class="header">
        <span class="iconfont iconjiantou2"></span>
        <span class="iconfont iconnew"></span>
        <div
          @click="focus"
          :class="{
            focus: detailList.has_follow,
            btnFocus: !detailList.has_follow,
          }"
        >
          {{ detailList.has_follow ? "已关注" : "关注" }}
        </div>
      </div>
      <div class="mainContainer">
        <div class="title">{{ detailList.title }}</div>
        <div class="info">{{ detailList.user.nickname }} 2020-11-20</div>
      </div>
      <div class="content" v-html="detailList.content"></div>
    </div>

    <!-- 视频文章 -->
    <div v-if="detailList.type === 2">
      <div>
        <video
          v-if="detailList.cover[0].url.indexOf('http') > -1"
          controls
          :poster="detailList.cover[0].url"
          src="https://video.pearvideo.com/mp4/third/20200313/cont-1660972-10399095-120705-hd.mp4"
        ></video>

        <video
          v-else
          controls
          :poster="$axios.defaults.baseURL + detailList.cover[0].url"
          src="https://video.pearvideo.com/mp4/third/20200313/cont-1660972-10399095-120705-hd.mp4"
        ></video>
      </div>
      <div class="videoContainer">
        <img :src="$axios.defaults.baseURL + detailList.user.head_img" alt="" />
        <div class="info">{{ detailList.user.nickname }}</div>
        <div
          @click="focus"
          :class="{
            focus: detailList.has_follow,
            btnFocus: !detailList.has_follow,
          }"
        >
          {{ detailList.has_follow ? "已关注" : "关注" }}
        </div>
      </div>
      <div class="videoContent">{{ detailList.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailList: {},
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      console.log(res);
      this.detailList = res.data.data;
    });
  },

  methods: {
    focus() {
      // 关注用户
      if (!this.detailList.has_follow) {
        this.$axios({
          url: "/user_follows/" + this.detailList.user.id,
        }).then((res) => {
          console.log(res);
          if (res.data.message === "关注成功") {
            this.detailList.has_follow = true;
          }
        });
      }

      // 取消关注
      if (this.detailList.has_follow) {
        this.$axios({
          url: "/user_unfollow/" + this.detailList.user.id,
        }).then((res) => {
          console.log(res);
          if (res.data.message === "取消关注成功") {
            this.detailList.has_follow = false;
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 普通文章
.header {
  display: flex;
  align-items: center;
  padding: 0 16/360 * 100vw;
  .iconnew {
    flex: 1;
    font-size: 54/360 * 100vw;
    padding-left: 8/360 * 100vw;
  }
  .btnFocus {
    width: 70/360 * 100vw;
    height: 30/360 * 100vw;
    line-height: 30/360 * 100vw;
    text-align: center;
    font-size: 16/360 * 100vw;
    border: 1px solid #888;
    border-radius: 15/360 * 100vw;
  }
}
.mainContainer {
  padding: 15/360 * 100vw 15/360 * 100vw;
  .title {
    font-size: 18/360 * 100vw;
    font-weight: 700;
  }
  .info {
    padding-top: 10/360 * 100vw;
    font-size: 14/360 * 100vw;
    color: #888;
  }
}
.content {
  padding: 10/360 * 100vw 15/360 * 100vw;
  /deep/ img {
    max-width: 100%;
  }
}

// 视频文章
video {
  max-width: 100%;
}
.videoContainer {
  display: flex;
  align-items: center;
  padding: 10/360 * 100vw 20/360 * 100vw;
  img {
    width: 40/360 * 100vw;
    height: 40/360 * 100vw;
    background-color: #6cf;
    border-radius: 50%;
  }
  .info {
    flex: 1;
    padding-top: 10/360 * 100vw;
    padding-left: 10/360 * 100vw;
    font-size: 14/360 * 100vw;
    color: #888;
  }
  .btnFocus {
    width: 70/360 * 100vw;
    height: 30/360 * 100vw;
    line-height: 30/360 * 100vw;
    text-align: center;
    font-size: 16/360 * 100vw;
    border: 1px solid #888;
    border-radius: 15/360 * 100vw;
  }
}

.focus {
  width: 70/360 * 100vw;
  height: 30/360 * 100vw;
  line-height: 30/360 * 100vw;
  text-align: center;
  font-size: 16/360 * 100vw;
  color: #fff;
  background-color: #ff0000;
  border-radius: 15/360 * 100vw;
}
</style>