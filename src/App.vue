<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <VueUploadFile /> -->
    <Demo />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import VueUploadFile from "./components/VueUploadFile.vue";
import Demo from "./components/Demo.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    // VueUploadFile,
    Demo,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
