<template>
  <div>
    <div class="mainContainer" v-if="mainlist.parent">
      <Parent :parentlist="mainlist.parent" />
    </div>

    <div class="main"></div>
  </div>
</template>

<script>
import Parent from "../comment/Parent";
export default {
  props: ["mainlist"],
  components: {
    Parent,
  },
};
</script>
<style lang="less" scoped>
.mainContainer {
  margin: 15/360 * 100vw;
  padding: 5/360 * 100vw 15/360 * 100vw 10/360 * 100vw;
  border: 1px solid #ccc;
}
.main {
  margin: 15/360 * 100vw;
}
</style>