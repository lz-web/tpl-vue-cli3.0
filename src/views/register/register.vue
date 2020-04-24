<template>
    <div class="register-bg">
        <div class="hui-container flex-col-end">
            <div class="register-wrap">
                <!-- 步骤条 -->
                <div class="steps flex-center">

                </div>
                <!-- 注册内容框 -->
                <div class="register-inner">
                    <div class="register-title">
                        <span>注册</span>
                        <router-link class="to-login" to="/login">已有账号，去登录></router-link>
                        <!-- <div>
                            <span>已有账号，去登录</span>
                            <el-image
                                style="width: 100px; height: 100px"
                                :src="url"
                                :fit="fit"></el-image>
                        </div> -->
                    </div>
                    <!-- 第一步 微信扫码绑定 -->
                    <div v-show="step_stu == 0" class="main-wrap">
                        <div class="main-item">
                            <span class="qrcode-title">支持微信扫码登录</span>
                            <el-image
                                class="qrcode"
                                :src="qrcode"
                                ></el-image>
                            <div class="btn-wrap">
                                <el-button class="ts-input" @click="nextBtn()" type="primary">下一步</el-button>
                            </div>
                        </div>
                    </div>
                    <!-- 第二步 基础信息 -->
                    <div v-show="step_stu == 1" class="main-wrap">
                        <div class="main-item">
                            <el-input class="ts-input" v-model="user_phone" placeholder="请输入手机号"></el-input>
                        </div>
                        <div class="main-item">
                            <el-input class="ts-input" v-model="user_pwd" placeholder="请输入至少6位密码，不能包含特殊字符"></el-input>
                        </div>
                        <div class="main-item">
                            <el-input class="ts-input" v-model="user_pwd2" placeholder="请再次输入密码"></el-input>
                        </div>
                        <div class="main-item">
                            <el-select class="ts-input" v-model="user_question_select" placeholder="请选择密保问题">
                                <el-option
                                    v-for="item in user_question_list"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="main-item">
                            <el-date-picker
                                class="ts-input"
                                v-model="user_question_ret"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                ></el-date-picker>
                        </div>
                        <div class="btn-wrap">
                            <el-button class="ts-input" @click="nextBtn()" type="primary">下一步</el-button>
                        </div>
                    </div>
                    <!-- 第三步 详细信息 -->
                    <div v-show="step_stu == 2" class="main-wrap">
                        <div class="main-item">
                            <el-input class="ts-input" v-model="user_name" placeholder="请输入姓名"></el-input>
                        </div>
                        <div class="main-item">
                            <el-input class="ts-input" v-model="user_industry" placeholder="行业类型"></el-input>
                        </div>
                        <div class="main-item">
                            <el-input class="ts-input" v-model="user_company" placeholder="公司/单位名称"></el-input>
                        </div>
                        <div class="main-item">
                            <el-input class="ts-input" v-model="user_class" placeholder="请输入职位"></el-input>
                        </div>
                        <div class="main-item">
                            <el-input class="ts-input" v-model="company_phone" placeholder="请输入公司电话?"></el-input>
                        </div>
                        <!-- <div class="main-item">
                            <el-input type="textarea" :rows="2" placeholder="请输入申请理由" v-model="applay_reason"></el-input>
                        </div> -->
                        <div class="btn-wrap">
                            <el-button class="ts-input" @click="submitBtn()" type="primary">提交</el-button>
                        </div>
                    </div>
                    <!-- 协议 -->
                    <div class="register-checkbox">
                        <el-checkbox v-model="user_checked">同意《用户隐私协议》</el-checkbox>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./register.ts"></script>

<style lang="scss">

    @import "./register.scss";
</style>

