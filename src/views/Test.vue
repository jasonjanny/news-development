<template>
  <div>
    <Main :mainlist="list" v-for="(list, index) in mainList" :key="index" />
  </div>
</template>

<script>
import Main from "../comment/Main";
export default {
  data() {
    return {
      mainList: [],
    };
  },

  components: {
    Main,
  },

  created() {
    this.$axios({
      url: "/post_comment/" + 1,
    }).then((res) => {
      console.log(res.data);
      this.mainList = res.data;
    });
  },
};
</script>

<style>
