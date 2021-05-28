<template>
  <!-- <router-view></router-view> -->
  <Welcome></Welcome>
  <Profiles></Profiles>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Profiles from "./components/Profiles.vue";
export default {
  name: "App",
  components: {
    Welcome: Welcome,
    Profiles: Profiles,
  },
};
</script>

<style>
#app {
  font-family: Garamond;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 150px;
}
</style>
