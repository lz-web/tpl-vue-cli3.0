<template>
  <div class="index-wrap hui-container">
    首页
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      :clearable="true"
      placeholder="请输入内容"
      @select="handleSelect"
    >
      <i
    class="el-icon-edit el-input__icon"
    slot="suffix"
    @click="handleIconClick">
  </i>
    </el-autocomplete>
    <el-button type="primary" @click="searchBtn">搜索</el-button>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
@import "./index.scss";
</style>

