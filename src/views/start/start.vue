<template>
  <div class="start-wrap">
    <div class="title">{{ vr_info.title }}</div>
    <img
      @click="turnInto"
      src="../../assets/img/vr/start-btn.png"
      alt=""
      class="img-start"
    />
    <div class="bottom">
      <div class="text">©全景通 同程旅行提供技术支持</div>
      <div class="white"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./start.ts"></script>

<style lang="scss">
@import "./start.scss";
</style>

