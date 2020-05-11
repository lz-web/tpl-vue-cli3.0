<template>
  <div class="pdfExample-wrap hui-container">
    <div id="pdfWrap">
      标题 -->
    </div>
    <el-button @click="downloadPdf('pdfWrap')">下载</el-button>
  </div>
</template>

<script lang="ts" src="./pdfExample.ts"></script>

<style lang="scss">
  @import './pdfExample.scss'
</style>

