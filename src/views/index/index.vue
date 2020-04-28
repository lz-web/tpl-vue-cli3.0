<template>
  <div class="index-wrap">
    <div class="index-header">
      <div class="index-c">
        <userComponent></userComponent>
      </div>
    </div>
    <div class="hui-container theme-wrap">
      <div class="theme">
        <img src="../../assets/img/index/theme.png" alt />
      </div>
      <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        :clearable="true"
        placeholder="请尝试输入需要查询的药品名称"
        @select="handleSelect"
      >
        <!-- <i class="el-icon-search el-input__icon" slot="suffix" @click="handleIconClick"></i> -->
        <img src="../../assets/img/index/icon_search.png" alt slot="prefix" />
      </el-autocomplete>
    </div>
    <!-- <el-button type="primary" @click="searchBtn">搜索</el-button> -->
    <footComponent></footComponent>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
@import "./index.scss";
</style>

