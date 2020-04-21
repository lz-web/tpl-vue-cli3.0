<template>
  <div class="evaluationSystem-wrap hui-container">
    <h3>立项评测系统</h3>
    <p>说明:三大sad撒大所多撒所大所多大撒多所无大所无多撒大所大所所大奥所多</p>
    <p>
      <b>待评药物:</b>
      <span>{{$route.query.comName}}</span>
      <span>已有3205人进行了科学评测</span>
    </p>
    <div class="main-wrap">
      <el-tabs v-model="active_tab" @tab-click="handleClick">
        <el-tab-pane v-for="(item,i) in eva_arr" :key="i" :label="item.key" :name="i.toString()"></el-tab-pane>
      </el-tabs>
      <div v-show="i == active_tab" v-for="(item,i) in eva_arr" :key="i" class="list-wrap">
        <div v-for="(item_2,i_2) in eva_arr[i].children" :key="i_2">
          <h2>{{item_2.key}}</h2>
          <div v-for="(item_3,i_3) in item_2.children" :key="i_3">{{(i_3+1) +'.'+item_3.key}}
            <div  v-for="(radio,i_4) in item_3.grade_standard"  :key="i_4">
              <el-radio @change='radioChange' v-model="item_3.score" :label="radio.val">{{radio.key}}</el-radio>
            </div>
          </div>
        </div>
      </div>
      <div class="sumbit-wrap">
         <el-button @click="submitBtn" type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./evaluationSystem.ts"></script>

<style lang="scss">
@import "./evaluationSystem.scss";
</style>

