<template>
  <div class="user-wrap">
    <aside class="aside">
      <div class="title">哈哈哈哈</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#192a5e"
        text-color="#fff"
        active-text-color="#3963bc"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <!-- <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>-->
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-s-tools"></i>
          <span slot="title">权重管理</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>评测记录</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </aside>
    <header class="header">
      <div class="left">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="tab-wrap">
          <el-tabs v-model="editableTabsValue" type="card" closable stretch @edit="handleTabsEdit">
            <el-tab-pane
              :key="item.name"
              v-for="(item) in editableTabs"
              :label="item.title"
              :name="item.name"
            ></el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="right">
        <el-dropdown>
          <span class="el-dropdown-link">
            yonghu123123
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
  </div>
</template>

<script lang="ts" src="./user.ts"></script>

<style lang="scss">
@import "./user.scss";
</style>

