<template>
  <div class="userDoc-wrap hui-container">
    <div class="hui-c" v-if="$route.params.id == 1">
      <h1>用户隐私协议</h1> 
    </div>
    <div v-if="$route.params.id == 2">
      <h1>用户隐私政策</h1> 
      
    </div>
  </div>
</template>

<script lang="ts" src="./userDoc.ts"></script>

<style lang="scss">
  @import './userDoc.scss'
</style>

