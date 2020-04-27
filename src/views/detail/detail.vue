<template>
  <div class="detail-wrap hui-container">
    <!-- <div>  <router-link :to="{path:'/evaluationSystem',query: {id:medical_detail.id,comName:medical_detail.comName}}">评测</router-link> <el-button type="primary" plain>下载</el-button></div>
    <div>  </div>-->
    <div class="title-wrap">
      <span class="title">{{medical_detail.medical_name}}</span>
      <span class="title-des">已有3212人&nbsp;&nbsp;&nbsp;进行测评</span>
    </div>
    <div class="info-wrap">
      <p>
        <span class="info-label">通用名称</span>
        <span class="info-value">{{medical_detail.comm_name}}</span>
      </p>
      <p>
        <span class="info-label">英文名称</span>
        <span class="info-value">{{medical_detail.medical_name_en}}</span>
      </p>
      <p>
        <span class="info-label">汉语拼音</span>
        <span class="info-value">{{medical_detail.name_pingyin}}</span>
      </p>
      <p>
        <span
          class="info-label letter-spacing2"
          v-html="'成&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分'"
        ></span>
        <span class="info-value">{{medical_detail.ingredient}}</span>
      </p>
    </div>

    <div class="catelog-wrap">
      <div class="left-title">
        <div class="middle">目</div>
        <div>录</div>
      </div>
      <div class="right-wrap">
        <div class="right-list">
          <a
            v-for="(item,i) in medical_type"
            :key="i"
            class="import-a"
            :href="'#' + item.en"
          >{{item.zh}}</a>
        </div>
        <div class="right-list">
          <a v-for="(item,i) in medical_type2" :key="i" :href="'#' + item.en">{{item.zh}}</a>
        </div>
      </div>
    </div>
    <div class="detail-c">
      <div  v-for="(item,i) in medical_type_all" :key="i" :id="`#${item.en}`" class="detail-item"> 
        <div class="line"></div>
        <span class="line-left">
          <img src="../../assets/img/detail/mark.png" alt s />
            <span class="title fz-18">{{item.zh}}</span>
        </span>
        <p class="item-des">
          {{medical_detail[item.en] || '无'}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./detail.ts"></script>

<style lang="scss">
@import "./detail.scss";
</style>

