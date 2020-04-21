<template>
  <div class="evaRecord-wrap hui-container">
    <el-table :data="record_list" border style="width: 100%">
      <el-table-column prop="medical_name" label="药品名称" width="180"></el-table-column>
      <el-table-column prop="personal_score" label="个人评分" width="180"></el-table-column>
      <el-table-column prop="industry_score" label="行业得分" width="180"></el-table-column>
      <el-table-column prop="update_at" label="评测时间"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" src="./evaRecord.ts"></script>

<style lang="scss">
@import "./evaRecord.scss";
</style>

