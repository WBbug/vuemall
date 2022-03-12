<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //优化，SPA中只发一次请求   获取数据存储到仓库中
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>