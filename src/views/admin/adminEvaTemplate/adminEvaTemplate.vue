<template>
  <div id="evaTemplate" class="adminEvaTemplate-wrap hui-container">
    <div class="header-wrap">
      <div class="flex-content-between">
        <div>
          <span class="title">{{medical_detail.comm_name}}</span>
          <span v-if="eva_detail.eva_score" class="desc">已有 {{eva_detail.eva_score.eva_count}} 人进行评测</span>
        </div>
        <img src="../../../assets/img/bar/white_bar.png" alt />
      </div>
      <div class="time flex-content-between">
        <span>{{eva_detail.create_at | dateFilter}}</span>
        <span class="line"></span>
      </div>
    </div>
    <!-- echart 图表区域 -->
    <div id="pdfWrap" class="evaResult-cont flex-col">
      <div class="eva eva-self flex-col-between">
        <div class="eva-cont eva-self-cont flex1">
          <div id="radarChart"></div>
          <div class="radarChart"></div>
        </div>
        <div class="eva-bottom eva-self-bottom flex-end">
          <div class="eva-bottom-cont flex-end">
            <b class="eva-bottom-cont-number flex-center">{{eva_detail.personal_score}}</b>
            <span class="eva-bottom-cont-fen">分</span>
          </div>
          <span class="eva-bottom-title eva-self-bottom-title">自评综合得分</span>
        </div>
      </div>
      <div class="eva eva-industry flex-col-between">
        <div class="eva-cont eva-industry-cont flex1">
          <div id="scatterChart"></div>
          <div class="scatterChart"></div>
        </div>
        <div class="eva-bottom eva-industry-bottom flex-end">
          <div class="eva-bottom-cont flex-end">
            <b v-if="medical_detail.eva_score" class="eva-bottom-cont-number flex-center">{{medical_detail.eva_score.industry_score}}</b>
            <span class="eva-bottom-cont-fen">分</span>
          </div>
          <span class="eva-bottom-title eva-self-bottom-title">行业综合得分</span>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="detail-c" ref="class">
      <div
        v-for="(item,i) in medical_type_all"
        :key="i"
        class="detail-item"
        :ref="`${item.en}`"
        :id="`${item.en}`"
      >
        <div class="line"></div>
        <span class="line-left">
          <img src="../../../assets/img/detail/mark.png" alt s />
          <span class="title fz-18">{{item.zh || '--'}}</span>
        </span>
        <p class="item-des">{{medical_detail[item.en] || '--'}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./adminEvaTemplate.ts"></script>

<style lang="scss">
@import "./adminEvaTemplate.scss";
</style>

