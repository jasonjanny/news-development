<template>
  <div>
    {{ detailList.title }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailList: {},
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      //   console.log(res);
      this.detailList = res.data.data;
    });
  },
};
</script>

<style>
</style>