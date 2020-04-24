<template>
  <div class="login-bg">
    <div class="hui-container flex-col-end">
      <!-- <div class="tab-wrap">
        <el-tabs v-model="active_name" @tab-click="handleClick">
          <el-tab-pane label="手机号" name="first"></el-tab-pane>
          <el-tab-pane label="微信扫码" name="second"></el-tab-pane>
        </el-tabs>
      </div>-->
      <div class="login-wrap">
        <div class="login-inner flex-col-between">
            <div class="login-cont">
                <div class="login-title">{{account ? '账号登录' : '微信登录'}}</div>
                <!-- 账号登录 -->
                <div v-show="account">
                  <div class="main-item">
                      <el-input
                          class="ts-input"
                          autocomplete="new-password"
                          v-model="user_name"
                          placeholder="请输入用户名"
                          ></el-input>
                  </div>
                  <div class="main-item">
                      <el-input
                          class="ts-input"
                          autocomplete="new-password"
                          placeholder="请输入密码"
                          v-model="user_pwd"
                          show-password
                          ></el-input>
                  </div>
                  <div class="main-item">
                      <el-input
                          class="ts-input"
                          autocomplete="new-password"
                          v-model="user_verify_code"
                          placeholder="请输入验证码"
                          ></el-input>
                  </div>
                  <div class="row-pwd flex-between">
                    <el-radio class="remember-pwd" v-model="remember_pwd" label="">记住密码</el-radio>
                    <!-- <el-checkbox class="remember-pwd" v-model="remember_pwd">记住密码</el-checkbox> -->
                    <span class="forget-pwd">忘记密码</span>
                  </div>
                  <div class="main-item">
                      <el-button class="ts-input" @click="loginSubmit" type="primary">登录</el-button>
                  </div>
                </div>
                <!-- 微信扫码登录 -->
                <div v-show="!account" class="flex-center">
                  <span>支持微信扫码登录</span>
                </div>
            </div>
            <div class="login-buttons flex-around">
                <div class="login-way" @click="changeLoginWay">{{account ? '微信登录' : '账号登录'}}</div>
                <router-link to="/register">注册</router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.login-bg {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/img/register.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  .login-wrap {
    width: 460px;
    height: 520px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(146, 145, 145, 0.2);
    border-radius: 2px;
    // .tab-wrap{
    //   width:156px;
    //   margin: 0 auto;
    // }
    .login-inner {
      width: 460px;
      height: 100%;
      .login-cont {
          padding: 40px 55px 0;
            .login-title {
                height: 20px;
                font-size: 20px;
                text-align: center;
            }
            .main-item {
                display: flex;
                height: 48px;
                margin: 20px 0;
                .ts-input {
                    width: 100%;
                    height: 48px;
                }
            }
            .row-pwd {
              margin-top: 40px;
              padding: 0 10px 0 13px;
              .remember-pwd {
                color: #999;
              }
              .forget-pwd {
                color: $main_color;
                cursor: pointer;
              }
            }
            // input {
            //     margin: 20px 0;
            // }
            button {
                width: 350px;
            }
      }
      .login-buttons {
        box-sizing: border-box;
        height: 65px;
        border-top: 1px solid #EEE;
        color: #999;
        .login-way {
          cursor: pointer;
        }
      }
    }
  }
}
@import "./login.scss";
</style>
