<template>
  <div class="headerComponent-wrap">
    <div class="hui-container container-c">
      <div class="header-left">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          :clearable="true"
          placeholder="请尝试输入需要查询的药品名称"
          @select="handleSelect"
        >
          <!-- <i class="el-icon-search el-input__icon" slot="suffix" @click="handleIconClick"></i> -->
        <!-- <img src="../../assets/img/public/icon_search.png" alt="" class="el-input__icon" slot="suffix"> -->
        </el-autocomplete>
      </div>
      <div class="header-right">
        <div v-if="is_login">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{user_info.user_phone}}
              <i class="el-icon-search el-icon--right"></i>
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
        </div>
        <div v-else>
          <router-link :to="{path:'/register'}">注册</router-link>
          <router-link :to="{path:'/login'}">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import CONST from "@/assets/ts/comm.const"; // 公共变量
import jsCookies from "js-cookie";
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
    this.is_login = jsCookies.get("token") ? true : false;
    this.user_info = localStorage.user_info
      ? JSON.parse(localStorage.user_info)
      : {};
    console.log();
  }

  activated() {
    //
  }

  mounted() {
    //
  }
  // 退出登录
  exitLogin() {
    console.log("退出登录");
    jsCookies.set("token", "");
    localStorage.removeItem("user_info");
    location.href = "/login";
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.headerComponent-wrap {
  width: 100%;
  height: 80px;
  background-color: #242428;
  .container-c {
    display: flex;
    justify-content: space-between;
  }
  .header-left {
    .el-autocomplete {
      margin-top:20px;
      border-radius: 3px;
      .el-input__inner {
        color: #A5A5A5;
        width:400px;
        border-radius: 3px;
        background: #3a3a41;
        border: 0;
      }
    }
  }
}
</style>

