<template>
  <div id="app">
    <div>
      <NavPar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavPar from "@/components/NavPar.vue";
export default {
  name: "App",
  components: {
    NavPar,
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
