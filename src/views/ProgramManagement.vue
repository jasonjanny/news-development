<template>
  <div class="programContainer">
    <UserHeader title="栏目管理" />

    <div class="delChannel">
      <p class="title">点击删除以下频道</p>
      <div class="channel">
        <span class="category" v-for="list in categoryList" :key="list.id">{{
          list.name
        }}</span>
      </div>
    </div>
    <div class="addChannel">
      <p class="title">点击添加以下频道</p>
      <div class="channel">
        <span
          class="category"
          v-for="list in addList"
          :key="list.id"
          @click="addChannel(list)"
          >{{ list }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader";
export default {
  data() {
    return {
      categoryList: "",
      addList: ["社会", "游戏", "历史", "美文", "探索", "体育", "国际", "时尚"],
    };
  },
  components: {
    UserHeader,
  },

  created() {
    this.getChannel();
  },

  methods: {
    getChannel() {
      this.$axios({
        url: "/category",
      }).then((res) => {
        //   console.log(res);
        this.categoryList = res.data.data;
      });
    },

    addChannel(name) {
      this.$axios({
        method: "post",
        url: "category",
        data: {
          name,
        },
      }).then((res) => {
        // console.log(res.data);
        this.getChannel();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.programContainer {
  padding: 0 20/360 * 100vw;
  .title {
    margin-bottom: 20/360 * 100vw;
    font-size: 16/360 * 100vw;
    color: #888;
  }
  .channel {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .category {
    display: block;
    width: 65/360 * 100vw;
    height: 40/360 * 100vw;
    line-height: 40/360 * 100vw;
    text-align: center;
    color: #333;
    margin: 0 6/360 * 100vw 15/360 * 100vw;
    border: 1px solid #ccc;
  }

  .addChannel {
    margin-top: 20/360 * 100vw;
  }
}
</style>