<template>
  <div>
    <!-- 第1种文章模式 -->
    <div
      class="articlePattern1"
      v-if="
        postData.type === 1 &&
        postData.cover.length > 0 &&
        postData.cover.length < 3
      "
    >
      <div class="left">
        <p>{{ postData.title }}</p>
        <p class="from">
          <span
            >{{ postData.user.nickname }}&nbsp;&nbsp;{{
              postData.comment_length
            }}跟帖</span
          >
        </p>
      </div>
      <div class="right">
        <img :src="postData.cover[0].url | fixImgUrl" alt="" />
      </div>
    </div>

    <!-- 第2种文章模式 -->
    <div
      class="articlePattern2"
      v-if="postData.type === 1 && postData.cover.length >= 3"
    >
      <p>
        {{ postData.title }}
      </p>
      <div class="picture">
        <img :src="postData.cover[0].url | fixImgUrl" alt="" />
        <img :src="postData.cover[1].url | fixImgUrl" alt="" />
        <img :src="postData.cover[2].url | fixImgUrl" alt="" />
      </div>
      <p class="from">
        <span
          >{{ postData.user.nickname }}&nbsp;&nbsp;{{
            postData.comment_length
          }}跟帖</span
        >
      </p>
    </div>

    <!-- 第3种文章模式 -->
    <div v-if="postData.type === 2 && postData.cover.length > 0">
      <div class="articlePattern3">
        <p>{{ postData.title }}</p>
        <div class="center">
          <img class="cover" :src="postData.cover[0].url | fixImgUrl" alt="" />
          <span class="iconfont iconshipin"></span>
        </div>
        <p class="from">
          <span
            >{{ postData.user.nickname }}&nbsp;&nbsp;{{
              postData.comment_length
            }}跟帖</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["postData"],
};
</script>

<style lang="less" scoped>
.from {
  margin: 12/360 * 100vw 0;
  font-size: 13/360 * 100vw;
  color: #868686;
}

.articlePattern1 {
  display: flex;
  padding: 18/360 * 100vw 10/360 * 100vw 0;
  border-bottom: 1px solid #ccc;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .right {
    width: 121/360 * 100vw;
    height: 75/360 * 100vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.articlePattern2 {
  padding: 18/360 * 100vw 10/360 * 100vw 0;
  border-bottom: 1px solid #ccc;
  .picture {
    display: flex;
    height: 74/360 * 100vw;
    margin-top: 8/360 * 100vw;
    img {
      width: 33%;
      height: 100%;
      margin-right: 2/360 * 100vw;
      object-fit: cover;
    }
  }
}

.articlePattern3 {
  padding: 18/360 * 100vw 10/360 * 100vw 0;
  border-bottom: 1px solid #ccc;
  .center {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 340/360 * 100vw;
    height: 170/360 * 100vw;
    background-color: #6cf;
    .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .iconshipin {
      position: absolute;
      color: #fff;
      font-size: 46/360 * 100vw;
      background-color: rgba(0, 0, 0, 0.205);
      border-radius: 50%;
    }
  }
}
</style>