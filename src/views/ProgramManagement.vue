<template>
  <div class="programContainer">
    <UserHeader title="栏目管理" />
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader";
export default {
  components: {
    UserHeader,
  },
};
</script>

<style lang="less" scoped>
.programContainer {
  padding: 0 20/360 * 100vw;
}
</style>