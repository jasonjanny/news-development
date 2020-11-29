<template>
  <div>
    <Parent v-if="mainlist.parent" :parentlist="mainlist.parent" />
    <div>{{ mainlist.content }}</div>
  </div>
</template>

<script>
import Parent from "../views/Parent";
export default {
  props: ["mainlist"],
  components: {
    Parent,
  },
};
</script>

<style>
</style>