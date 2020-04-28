<template>
  <div id="app">
    <headerComponent v-if="!$route.meta.no_header" :need_login="$route.name"></headerComponent>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">login</router-link>
    <router-link to="/echartsExample">echartsExample</router-link>-->
    <router-view />
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #333333;
}
</style>
