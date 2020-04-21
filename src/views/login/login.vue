<template>
  <div class="login-wrap hui-container">
    <div class="tab-wrap">
      <el-tabs v-model="active_name" @tab-click="handleClick">
        <el-tab-pane label="手机号" name="first"></el-tab-pane>
        <el-tab-pane label="微信扫码" name="second"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="login-c">
      <el-input autocomplete="new-password" v-model="user_name" placeholder="用户名"></el-input>
      <el-input autocomplete="new-password" placeholder="密码" v-model="user_pwd" show-password></el-input>
      <el-button @click="loginSubmit" type="primary">登录</el-button>
      <div>
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
@import "./login.scss";
</style>
