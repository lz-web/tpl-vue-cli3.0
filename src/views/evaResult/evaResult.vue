<template>
  <div class="evaResult-wrap hui-container">
    <div class="evaResult-inner">
      <div class="evaResult-header flex-between">
        <div class="evaResult-header-left flex-col">
          <span class="med-name">{{medical_detail.comm_name}}</span>
          <span
            v-if="eva_detail.eva_score"
            class="med-eva-num"
          >已有 {{eva_detail.eva_score.eva_count}} 人进行测评</span>
          <router-link class="med-detail" :to="`/detail/${$route.params.id}`">查看详情 &gt;</router-link>
        </div>
        <div class="evaResult-header-right flex-end">
          <el-button class="reEva" @click="reEva()" type="primary">重新测评</el-button>
          <el-button class="download-evaResult" @click="downloadEvaResult()" type="primary">下载</el-button>
        </div>
      </div>

      <div id="pdfWrap" class="evaResult-cont flex-col">
        <div class="eva eva-self flex-col-between">
          <div class="eva-cont eva-self-cont flex1">
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
            <div class="scatterChart"></div>
          </div>
          <div class="eva-bottom eva-industry-bottom flex-end">
            <div class="eva-bottom-cont flex-end">
              <b
                v-if="medical_detail.eva_score"
                class="eva-bottom-cont-number flex-center"
              >{{medical_detail.eva_score.industry_score}}</b>
              <span class="eva-bottom-cont-fen">分</span>
            </div>
            <span class="eva-bottom-title eva-self-bottom-title">行业综合得分</span>
          </div>
        </div>
      </div>
      <div class="comment-wrap">
        <div class="title">评论</div>
        <div class="comment-c">
          <textarea v-model="comment" class="textarea" placeholder="我们需要您宝贵的意见"></textarea>
          <div @click="sendComment" class="send-comment">
            发表
            <br />评论
          </div>
        </div>
        <div v-if="comment_list.length">
          <div v-for="(item,i) in comment_list" :key="i" class="comment-list">
            <div class="left">
              <img src="../../assets/img/result/tx.png" alt />
            </div>
            <div class="right">
              <div class="name">{{item.user_name}}</div>
              <div class="container">{{item.comment}}</div>
              <div class="time">{{item.create_at | dateFilter}}</div>
            </div>
          </div>
        </div>
        <div class="null-wrap" v-else>
          <img src="../../assets/img/result/null.png" alt />
          <div class="desc">暂无评论，来抢C位吧！</div>
        </div>
      </div>
    </div>
    <!-- pdf 下載 -->
    <evaTemplate v-show="is_show_pdf" :is_download="is_download"></evaTemplate>
  </div>
</template>

<script lang="ts" src="./evaResult.ts"></script>

<style lang="scss">
@import "./evaResult.scss";
</style>

