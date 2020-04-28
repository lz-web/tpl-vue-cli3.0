<template>
  <div class="evaRecord-wrap hui-container">
    <div class="title">我的评测({{record_list.length}})</div>
    <el-table :data="record_list" border style="width: 100%">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="medical_name" label="药物" width="180"></el-table-column>
      <el-table-column prop="personal_score" label="自测评分" width="180"></el-table-column>
      <el-table-column prop="industry_score" label="行业得分" width="180"></el-table-column>
      <el-table-column prop="download_count" label="下载次数" width="180"></el-table-column>
      <el-table-column prop="update_at" label="评测时间"></el-table-column>
      <el-table-column prop="industry_score" label="操作"></el-table-column>
    </el-table>
    <el-pagination @current-change="pageChange" background layout="prev, pager, next" :total="page_obj.count"></el-pagination>
  </div>
</template>

<script lang="ts" src="./evaRecord.ts"></script>

<style lang="scss">
@import "./evaRecord.scss";
</style>

