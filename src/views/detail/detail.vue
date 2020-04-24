<template>
  <div class="detail-wrap hui-container">
    <div>  <router-link :to="{path:'/evaluationSystem',query: {id:medical_detail.id,comName:medical_detail.comName}}">评测</router-link> <el-button type="primary" plain>下载</el-button></div>
    <div>  </div>
    <h1>{{medical_detail.comName}}</h1>
    <p v-html="medical_detail.adverseReactions"></p>
    <p v-html="medical_detail.dosage"></p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>
    {{medical_detail}}</p>
  </div>
</template>

<script lang="ts" src="./detail.ts"></script>

<style lang="scss">
  @import './detail.scss'
</style>

