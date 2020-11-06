<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">login</router-link> -->
      <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang='scss'>
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'PingFang-SC-Medium','Avenir', 'Helvetica', 'Arial', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background: white;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
}
</style>
