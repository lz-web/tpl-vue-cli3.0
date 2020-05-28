<template>
  <div class="userComponent-wrap">
    <el-dropdown v-if="is_login">
      <span class="el-dropdown-link">
        {{user_info.user_phone}}
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link :to="{path:'/evaRecord'}">历史评测</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <span @click="exitLogin">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="not-login" v-else>
      <router-link :to="{path:'/login'}">登录</router-link>丨
      <router-link :to="{path:'/register'}">注册</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import CONST from "@/assets/ts/comm.const"; // 公共变量
import jsCookies from "js-cookie";
import Api from "@/interface/axios.interface";
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // prop
  @Prop({
    required: false,
    default: ""
  })
  name!: string;

  // Variablet Wrap   eg : private user_name : string = 'root';
  is_login: boolean = false;
  user_info: object = {};

  created() {
    //
    this.is_login = (jsCookies.get("token") && jsCookies.get("token") != 'is_admin') ? true : false;
    this.user_info = localStorage.user_info
      ? JSON.parse(localStorage.user_info)
      : {};
  }

  mounted() {
    //
  }
  // 退出登录
  exitLogin() {
    console.log("退出登录");
    jsCookies.set("token", "");
    localStorage.removeItem("user_info");
    location.href = "/#/login";
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.userComponent-wrap {
  width: 100%;
  .not-login {
    a {
      color: #666;
    }
  }
}
</style>

