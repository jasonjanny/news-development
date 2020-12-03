<template>
  <div class="programContainer">
    <UserHeader title="栏目管理" />

    <div class="delChannel">
      <p class="title">点击删除以下频道</p>
      <div class="channel">
        <span
          class="category"
          v-for="(list, index) in categoryList"
          :key="list.id"
          @click="delChannel(index)"
          >{{ list.name }}</span
        >
      </div>
    </div>
    <div class="addChannel">
      <p class="title">点击添加以下频道</p>
      <div class="channel">
        <span
          class="category"
          v-for="(list, index) in addList"
          :key="list.id"
          @click="addChannel(index)"
          >{{ list.name }}</span
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
      categoryList: [],
      addList: [],
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
      // 如果本地已经有数据
      if (localStorage.getItem("activeList")) {
        this.categoryList = JSON.parse(localStorage.getItem("activeList"));
        if (localStorage.getItem("deactiveList")) {
          this.addList = JSON.parse(localStorage.getItem("deactiveList"));
        }
      } else {
        this.$axios({
          url: "/category",
        }).then((res) => {
          //   console.log(res);
          this.categoryList = res.data.data;
        });
      }
    },

    // 实现栏目的添加和删除
    delChannel(index) {
      this.addList.push(this.categoryList[index]);
      this.categoryList.splice(index, 1);
    },

    addChannel(index) {
      this.categoryList.push(this.addList[index]);
      this.addList.splice(index, 1);
    },
  },

  watch: {
    categoryList(newVal) {
      localStorage.setItem("activeList", JSON.stringify(this.categoryList));
    },
    addList() {
      localStorage.setItem("deactiveList", JSON.stringify(this.addList));
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