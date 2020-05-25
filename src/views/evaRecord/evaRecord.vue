<template>
  <div class="evaRecord-wrap hui-container">
    <div class="title">我的评测({{record_list.length}})</div>
    <el-table :data="record_list" border style="width: 100%">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="medical_name" label="药物"></el-table-column>
      <el-table-column prop="personal_score" label="自测评分" width="180"></el-table-column>
      <el-table-column prop="eva_score.industry_score" label="行业得分" width="180"></el-table-column>
      <el-table-column prop="download_count_f" label="下载次数" width="180"></el-table-column>
      <el-table-column prop="create_at" label="评测时间">
         <template slot-scope="scope">
          {{scope.row.create_at | dateFilter}}
        </template>
      </el-table-column>
      <el-table-column prop="industry_score" label="操作" width="180">
        <template slot-scope="scope">
          <span @click="handleDetail(scope.row)" class="hui-text-btn">评测详情</span>
          <!-- 一期先不做, 可以实现但没必要 -->
          <!-- <span @click="handleDownload(scope.row)" class="hui-text-btn">下载</span> -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="pageChange"
      background
      layout="prev, pager, next"
      :total="page_obj.count"
    ></el-pagination>
  </div>
</template>

<script lang="ts" src="./evaRecord.ts"></script>

<style lang="scss">
@import "./evaRecord.scss";
</style>

