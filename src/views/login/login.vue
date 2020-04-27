<template>
    <div class="login-bg">
        <div class="hui-container flex-col-end">
            <div class="login-wrap">
                <div class="login-inner flex-col-between">
                    <div class="login-cont">
                        <div class="login-title">{{account ? '账号登录' : '微信登录'}}</div>
                            <!-- 账号登录 -->
                            <div v-show="account" class="account-login">
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
                                    <el-radio class="remember-pwd" v-model="remember_pwd" label>记住密码</el-radio>
                                    <span class="forget-pwd">忘记密码</span>
                            </div>
                                <div class="main-item">
                                    <el-button class="ts-input" @click="loginSubmit" type="primary">登录</el-button>
                                </div>
                            </div>
                            <!-- 微信扫码登录 -->
                            <div v-show="!account" class="flex-col-center wx-login">
                            <span class="wx-login-title">支持微信扫码登录</span>
                            <div class="wx-login-inner flex-center">
                                <el-image class="wx-login-cont" :src="qrcode"></el-image>
                            </div>
                        </div>
                    </div>
                    <div class="login-buttons flex-around">
                        <div class="login-way" @click="changeLoginWay">{{account ? '微信登录' : '账号登录'}}</div>
                        <router-link active-class to="/register">注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
@import "./login.scss";
</style>
