<template>
  <div class="box">
    {{ num }}
    <Digui v-if="num > 0" :num="num - 1" />
  </div>
</template>

<script>
export default {
  name: "Digui",
  props: ["num"],
};
</script>

<style lang="less" scoped>
.box {
  margin: 3/360 * 100vw;
  padding: 3/360 * 100vw;
  border: 1px solid pink;
}
</style>