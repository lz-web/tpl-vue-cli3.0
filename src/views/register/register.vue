<template>
  <div class="register-wrap hui-container">
    注册界面
    <div v-show="step_stu == 0" class="main-wrap">
      <div class="main-item">
        <span>手机号:</span>
        <el-input v-model="user_phone" placeholder="请输入手机号"></el-input>
      </div>
      <div class="main-item">
        <span>密码:</span>
        <el-input v-model="user_pwd" placeholder="请输入密码"></el-input>
      </div>
      <div class="main-item">
        <span>确认密码:</span>
        <el-input v-model="user_pwd2" placeholder="请输入确认密码"></el-input>
      </div>
      <div class="main-item">
        <span>密保问题:</span>
        <el-input class="ts-input" v-model="user_question" :placeholder="user_question" disabled="disabled"></el-input>
        <i>方便您将来找回</i>
      </div>
      <div>
        <el-date-picker
          v-model="user_question_ret"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
        ></el-date-picker>
      </div>
      <div class="btn-wrap">
        <el-button @click="nextBtn()" type="primary">下一步</el-button>
      </div>
    </div>
    <!-- 注册第二步骤 -->
    <div v-show="step_stu == 1" class="main-wrap">
      <div class="main-item">
        <span>姓名:</span>
        <el-input v-model="user_name" placeholder="请输入姓名"></el-input>
      </div>
      <div class="main-item">
        <span>公司/单位名称：:</span>
        <el-input v-model="user_company" placeholder="公司/单位名称"></el-input>
      </div>
      <div class="main-item">
        <span>职位:</span>
        <el-input v-model="user_class" placeholder="请输入职位"></el-input>
      </div>
      <div class="main-item">
        <span>电话:</span>
        <el-input v-model="company_phone" placeholder="请输入公司电话?"></el-input>
      </div>
      <div class="main-item">
        <span>申请理由:</span>
        <el-input type="textarea" :rows="2" placeholder="请输入申请理由" v-model="applay_reason"></el-input>
      </div>
      <div class="btn-wrap">
        <el-button @click="submitBtn()" type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./register.ts"></script>

<style lang="scss">
@import "./register.scss";
</style>

