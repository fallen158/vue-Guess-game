<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
body {
  font-size: 23.4375px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: url("./images/1-1.jpg") no-repeat 100% 100%;
  background-size: cover;
  height: 100vh;
  width: 100%;
  overflow: auto;
}
</style>
