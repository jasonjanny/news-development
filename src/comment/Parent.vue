<template>
  <div class="parentContainer">
    <!-- 先递归到最深层再一层一层显示数据 -->
    <Parent v-if="parentlist.parent" :parentlist="parentlist.parent" />
    <div class="content">
      <div class="userInfo">
        <div class="number">1</div>
        <div class="nickname">{{ parentlist.user.id }}</div>
        <div class="date">2小时前</div>
        <div class="reply">回复</div>
      </div>
      <div class="userContent">{{ parentlist.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parent",
  props: ["parentlist"],
};
</script>

<style lang="less" scoped>
.parentContainer {
  padding: 4/360 * 100vw;
  border: 1px solid #ccc;
  .content {
    padding: 10/360 * 100vw;
    margin-top: 10/360 * 100vw;
    .userInfo {
      display: flex;
      align-items: center;
      margin-bottom: 10/360 * 100vw;
      .number {
        padding-right: 10/360 * 100vw;
      }
      .nickname {
        padding-right: 10/360 * 100vw;
      }
      .date {
        flex: 1;
        font-size: 12/360 * 100vw;
        color: #888;
      }
      .reply {
        font-size: 12/360 * 100vw;
        color: #888;
      }
    }
    .userContent {
      font-size: 14/360 * 100vw;
    }
  }
}
</style>