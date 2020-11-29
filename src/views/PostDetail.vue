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
        <div class="info">{{ detailList.user.nickname }} {{ date }}</div>
      </div>
      <div class="content" v-html="detailList.content"></div>
    </div>

    <!-- 视频文章 -->
    <div v-if="detailList.type === 2">
      <div>
        <video
          ref="playVideo"
          @click="pause"
          v-if="detailList.cover[0].url.indexOf('http') > -1"
          controls
          :poster="detailList.cover[0].url"
          src="https://video.pearvideo.com/mp4/third/20200313/cont-1660972-10399095-120705-hd.mp4"
        ></video>

        <video
          ref="playVideo"
          @click="pause"
          v-else
          :poster="$axios.defaults.baseURL + detailList.cover[0].url"
          src="https://video.pearvideo.com/mp4/third/20200313/cont-1660972-10399095-120705-hd.mp4"
        ></video>
        <span
          class="iconfont iconshipin"
          :class="{
            videoButtonStyle: !videoButton,
          }"
          @click="play"
        ></span>
      </div>
      <div class="videoContainer">
        <img :src="$axios.defaults.baseURL + detailList.user.head_img" alt="" />
        <div class="info">{{ detailList.user.nickname }} {{ date }}</div>
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

    <!-- 公共按钮 -->
    <div class="footer">
      <div
        class="like btnFocus"
        @click="like"
        :class="{
          red: detailList.has_like,
        }"
      >
        <span class="iconfont icondianzan"></span>
        {{ detailList.like_length }}
      </div>
      <div class="weixin btnFocus">
        <span class="iconfont iconweixin"></span>
        微信
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate(),
      detailList: {},
      videoButton: true,
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      // console.log(res);
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
          // console.log(res);
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

    like() {
      this.$axios({
        url: "/post_like/" + this.$route.params.id,
      }).then((res) => {
        // console.log(res.data);
        if (res.data.message === "点赞成功") {
          this.detailList.has_like = true;
          this.detailList.like_length += 1;
          this.$toast.success("点赞成功");
        }
        if (res.data.message === "取消成功") {
          this.detailList.has_like = false;
          this.detailList.like_length -= 1;
          this.$toast("取消点赞成功");
        }
      });
    },

    play() {
      this.$refs.playVideo.play();
      this.videoButton = false;
    },

    pause() {
      this.$refs.playVideo.pause();
      this.videoButton = true;
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
.iconshipin {
  position: fixed;
  top: 70/360 * 100vw;
  left: 140/360 * 100vw;
  font-size: 60/360 * 100vw;
  color: #fff;
  background-color: #ffffff62;
  border-radius: 50%;
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

.btnFocus {
  width: 70/360 * 100vw;
  height: 30/360 * 100vw;
  line-height: 30/360 * 100vw;
  text-align: center;
  font-size: 16/360 * 100vw;
  border: 1px solid #888;
  border-radius: 15/360 * 100vw;
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

.red {
  color: #ff0000;
}

.videoButtonStyle {
  display: none;
}
// 底部
.footer {
  display: flex;
  justify-content: space-evenly;
  margin-top: 40/360 * 100vw;
  .icondianzan {
    padding-right: 4/360 * 100vw;
  }
  .weixin {
    font-size: 14/360 * 100vw;
    .iconweixin {
      padding-right: 4/360 * 100vw;
      color: #00c800;
    }
  }
}
</style>