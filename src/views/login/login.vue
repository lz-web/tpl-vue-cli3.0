<template>
    <div class="login-bg">
        <div class="hui-container flex-col-end">
            <div class="login-wrap">
                <!-- 登录主体 -->
                <div v-show="!show_set_pwd" class="login-inner flex-col-between">
                    <div class="login-cont">
                        <!-- 登录标题 -->
                        <div class="login-title">{{account ? '账号登录' : '微信登录'}}</div>
                        <!-- 账号登录 -->
                        <div v-show="account" class="account-login">
                            <div class="main-item">
                                <el-input
                                class="ts-input"
                                autocomplete="new-password"
                                v-model="user_phone"
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
                            <!-- 暂时不要验证码 -->
                            <!-- <div class="main-item">
                                <el-input
                                class="ts-input"
                                autocomplete="new-password"
                                v-model="user_verify_code"
                                placeholder="请输入验证码"
                                ></el-input>
                            </div> -->
                            <div class="row-pwd flex-between">
                                <!-- <el-radio class="remember-pwd" v-model="remember_pwd" label>记住密码</el-radio> -->
                                <!-- <span class="forget-pwd" @click="forgetPwd">忘记密码</span> -->
                            </div>
                            <div class="main-item">
                                <el-button class="ts-input login" @click="loginSubmit" type="primary">登录</el-button>
                            </div>
                            <div class="login-tip flex-center">点击登录即表示已阅读并同意《用户隐私协议》《》</div>
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
                
                <!-- 忘记密码 重置密码 -->
                <div v-show="show_set_pwd" class="pwd-inner flex-col-between">
                    <div v-show="forget" class="pwd-cont flex-col-between">
                        <span class="pwd-title flex-center">忘记密码</span>
                        <div class="flex-col flex1">
                            <el-input
                                class="ts-input"
                                autocomplete="new-password"
                                v-model="user_phone"
                                placeholder="请输入用户名"
                                ></el-input>
                            <span class="question-title">密保问题：{{}}</span>
                            <el-date-picker
                                class="ts-input"
                                v-model="user_question_ret"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                ></el-date-picker>
                        </div>
                        <div class="flex-start">
                            <el-button class="cancel" @click="cancel()" type="primary">取消</el-button>
                            <el-button class="commit flex1" @click="commit()" type="primary">提交</el-button>
                        </div>
                    </div>
                    <div v-show="!forget" class="pwd-cont flex-col-between">
                        <span class="pwd-title flex-center">重置密码</span>
                        <div class="flex-col flex1">
                            <el-input class="ts-input" v-model="user_pwd_set" placeholder="请输入新密码，至少6位，不包含特殊字符"></el-input>
                            <el-input class="ts-input" v-model="user_pwd_set2" placeholder="请再次输入密码"></el-input>
                        </div>
                        <div>
                            <el-button class="confirm" @click="confirm()" type="primary">提交</el-button>
                        </div>
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
