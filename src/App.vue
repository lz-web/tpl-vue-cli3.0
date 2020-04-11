<template>
  <div id="app">
      <headerComponent></headerComponent>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">login</router-link>
      <router-link to="/echartsExample">echartsExample</router-link> -->
      <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view/>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { headerComponent } from "@/components"; // 组件
@Component({
  components: {
    headerComponent,
  }
})
export default class App extends Vue {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
