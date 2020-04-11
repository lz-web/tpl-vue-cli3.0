<template>
  <div class="login-wrap">
    <div class="login">
      <div class="team-name hidden-sm-and-down">
        <img src="@/assets/img/login/team-name.png" alt="logo" />
      </div>
      <div class="form-box" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0)">
        <div class="title">
          <h1 title="Lin">Lin CMS</h1>
        </div>
        <form class="login-form" autocomplete="off" @submit.prevent="throttleLogin()">
          <div class="form-item nickname">
            <span class="icon account-icon"></span>
            <input type="text" v-model="form.username" autocomplete="off" placeholder="请填写用户名" />
          </div>
          <div class="form-item password">
            <span class="icon secret-icon"></span>
            <input
              type="password"
              v-model="form.password"
              autocomplete="off"
              placeholder="请填写用户登录密码"
            />
          </div>
          <button class="submit-btn" type="submit">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
@import "./login.scss";
</style>
