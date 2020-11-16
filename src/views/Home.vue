<template>
  <div>
    <router-link to="/login">登录</router-link><br />
    <router-link to="/register">注册</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>