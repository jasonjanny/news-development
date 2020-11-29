<template>
  <div>
    <Main :mainlist="list" v-for="(list, index) in mainList" :key="index" />
  </div>
</template>

<script>
import Main from "../views/Main";
export default {
  data() {
    return {
      mainList: [
        {
          content: "123",
        },
        {
          content: "456",
        },
        {
          content: "789",
          parent: {
            content: "qwer",
          },
        },
        {
          content: "讲什么故事呢?",
          parent: {
            content: "庙里有个和尚在讲故事",
            parent: {
              content: "山上有座庙",
              // 被你回复的内容
              // 都会放在当前评论对象
              // 的 parent 属性里面
              parent: {
                content: "从前有座山",
              },
            },
          },
        },
      ],
    };
  },
  components: {
    Main,
  },
};
</script>

<style>
