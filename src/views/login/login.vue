<template>
  <div class="login-wrap hui-container">
    <h1>梦想之城用户登录</h1>
    <div class="login-c">
      <el-input autocomplete="new-password" v-model="user_name" placeholder="用户名"></el-input>
      <el-input autocomplete="new-password"  placeholder="密码" v-model="user_pwd" show-password></el-input>
       <el-button @click="loginSubmit" type="primary">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
@import "./login.scss";
</style>
