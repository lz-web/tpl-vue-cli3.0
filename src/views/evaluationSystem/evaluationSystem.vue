<template>
  <div class="evaluationSystem-wrap">
    <div v-if="!is_scroll" class="eva-top">
      <div>
        <div class="hui-container">
          <img class="eva-btn" src="../../assets/img/eva/eva_btn.png" alt />
          <div class="eva-font">待评药物: {{medical_detail.comm_name || ''}}</div>
          <div class="eva-font2">已有{{(medical_detail.eva_score && medical_detail.eva_score.eva_count) || 0}}人进行了科学评测</div>
          <div class="earth-wrap">
            <img src="../../assets/img/eva/earth.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div v-if="is_scroll" class="eva-top eva-top2">
      <div>
        <div class="hui-container">
          <div class="eva-font">待评药物: {{medical_detail.comm_name || ''}}</div>
          <div class="eva-font2">已有{{(medical_detail.eva_score && medical_detail.eva_score.eva_count) || 0}}人进行了科学评测</div>
          <div class="t-r">
            <img class="eva-btn" src="../../assets/img/eva/eva_btn.png" alt />
          </div>
          <div class="earth-wrap">
            <img src="../../assets/img/eva/earth.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="hui-container">
      <div :class="['main-wrap',is_scroll ? 'main-wrap-scroll' : '']">
        <el-tabs type="border-card" v-model="active_tab" @tab-click="handleClick">
          <el-tab-pane v-for="(item,i) in eva_arr" :key="i" :label="item.key" :name="i.toString()">
            <div v-show="i == active_tab" v-for="(item,i) in eva_arr" :key="i" class="list-wrap">
              <!-- <div class="hui-des-color">这是说明</div> -->
              <div class="list-item" v-for="(item_2,i_2) in eva_arr[i].children" :key="i_2">
                <div class="dashed"></div>
                <span class="title">{{item_2.key}}</span>
                <div class="choose-wrap" v-for="(item_3,i_3) in item_2.children" :key="i_3">
                  {{(i_3+1) +'.'+item_3.key}}
                  <div v-for="(radio,i_4) in item_3.grade_standard" :key="i_4">
                    <el-radio
                      @change="() => item_3.score = radio.val"
                      v-model="item_3.choose"
                      :label="radio.key"
                    >{{radio.key}}</el-radio>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="sumbit-wrap">
          <el-button @click="submitBtn" class="hui-btn">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./evaluationSystem.ts"></script>

<style lang="scss">
@import "./evaluationSystem.scss";
</style>

