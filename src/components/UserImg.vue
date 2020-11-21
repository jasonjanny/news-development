<template>
  <div class="userImg">
    <img
      v-if="data.head_img"
      :src="this.$axios.defaults.baseURL + data.head_img"
      alt=""
    />
    <img v-else src="@/assets/1.jpg" alt="" />
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="less">
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
</style>