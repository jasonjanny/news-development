<template>
  <div class="footerContainer">
    <div class="deactive" v-if="!isShowTextarea">
      <div class="writeComment">
        <input
          type="text"
          placeholder="写跟帖"
          @focus="showTextarea"
          v-model="content"
        />
      </div>
      <div class="iconfont iconpinglun-">
        <div class="nums">{{ message }}</div>
      </div>
      <div class="iconfont iconshoucang"></div>
      <div class="iconfont iconfenxiang"></div>
    </div>
    <div class="active" v-if="isShowTextarea">
      <textarea
        ref="aotoFocus"
        cols="30"
        rows="3"
        placeholder="回复"
        @blur="hiddenTextarea"
        v-model="content"
      ></textarea>
      <div class="btn" @click="sendComment">发送</div>
    </div>
  </div>
</template>

<script>
import eventBus from "../utils/eventBus";
export default {
  data() {
    return {
      isShowTextarea: false,
      content: "",
      parentId: "",
    };
  },
  props: ["message"],

  mounted() {
    eventBus.$on("reply", (parentId) => {
      this.showTextarea();
      this.parentId = parentId;
    });
  },

  destroyed() {
    eventBus.$off("reply");
  },

  methods: {
    showTextarea() {
      this.isShowTextarea = true;
      this.$nextTick(() => {
        this.$refs.aotoFocus.focus();
      });
    },
    hiddenTextarea() {
      setTimeout(() => {
        this.isShowTextarea = false;
      }, 100);
    },
    sendComment() {
      this.$axios({
        method: "post",
        url: "/post_comment/" + this.$route.params.id,
        data: {
          parent_id: this.parentId,
          content: this.content,
        },
      }).then((res) => {
        console.log(res.data);
        this.content = "";
      });
    },
  },
};
</script>

<style lang="less" scoped>
.footerContainer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10/360 * 100vw 0;
  background-color: #eee;
  .deactive {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .writeComment {
      input {
        width: 160/360 * 100vw;
        height: 28/360 * 100vw;
        padding: 0 10/360 * 100vw;
        border-radius: 15/360 * 100vw;
        font-size: 14/360 * 100vw;
        border: none;
        outline: none;
        background-color: #ddd;
        box-sizing: border-box;
      }
    }
    .iconpinglun- {
      position: relative;
      font-size: 22/360 * 100vw;
      .nums {
        position: absolute;
        top: -4/360 * 100vw;
        left: 10/360 * 100vw;
        width: 30/360 * 100vw;
        height: 16/360 * 100vw;
        line-height: 16/360 * 100vw;
        text-align: center;
        color: #fff;
        background-color: #f81414;
        font-size: 12/360 * 100vw;
        border-radius: 16/360 * 100vw;
      }
    }
    .iconshoucang {
      font-size: 22/360 * 100vw;
    }
    .iconfenxiang {
      font-size: 22/360 * 100vw;
    }
  }

  .active {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    textarea {
      border: none;
      outline: none;
      resize: none;
      background-color: #ddd;
      border-radius: 10/360 * 100vw;
      margin-right: 10/360 * 100vw;
      box-sizing: border-box;
      padding: 10/360 * 100vw;
      font-size: 14/360 * 100vw;
    }
    .btn {
      width: 50/360 * 100vw;
      height: 26/360 * 100vw;
      line-height: 26/360 * 100vw;
      text-align: center;
      color: #ffffffdf;
      background-color: #ff0000;
      font-size: 15/360 * 100vw;
      border-radius: 13/360 * 100vw;
    }
  }
}
</style>