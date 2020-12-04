<template>
  <div class="vr-wrap">
    <div id="pano" style="width: 100%; height: 100%"></div>
    <div class="vr-c">
      <div class="top">
        <img @click="musicImg" src="../../assets/img/vr/music.png" alt="" />
        <audio id="mp3Audio" class="hui_hidden" :src="vr_info.musicUrl"></audio>
      </div>
      <div class="right">
        <img
          v-if="!stars_share.isStar"
          @click="zanImg"
          src="../../assets/img/vr/zan.png"
          alt=""
        />
        <img
          v-if="stars_share.isStar"
          @click="zanImg"
          src="../../assets/img/vr/zaned.png"
          alt=""
        />
        <div class="des">{{ stars_share.stars }}</div>
        <img @click="shareImg" src="../../assets/img/vr/share.png" alt="" />
        <div class="des">{{ stars_share.shares }}</div>
        <img @click="menuImg" src="../../assets/img/vr/menu.png" alt="" />
        <div class="des">场景</div>
      </div>
      <div class="bottom" v-if="show_menu && !show_detail">
        <div class="b-top">
          <div class="title">{{ vr_info.title }}</div>
          <img
            @click="showDetail(true)"
            src="../../assets/img/vr/up.png"
            alt=""
          />
        </div>
        <div class="desc hui_text_point3">
          旅行过程中须经过景区、博物馆等衍生设置的购物店，请您特别注意商品的价格合理性及品质…
        </div>
        <div class="scene-wrap">
          <div
            v-for="(item, i) in scene_list"
            :key="i"
            @click="changeScene(item.name, i)"
            class="scene-item"
          >
            <img class="s-img" :src="item.thumburl" alt="" />
            <div class="s-title">{{ item.name }}</div>
          </div>
        </div>
        <div class="b-white"></div>
      </div>
    </div>
    <div v-if="show_detail" class="detail-dialog">
      <img
        class="img-up"
        @click="showDetail(false)"
        src="../../assets/img/vr/down.png"
        alt=""
      />
      <div class="d-c">
        <div class="d-title">
          <img class="img-t" src="../../assets/img/vr/title.png" alt="" />
          {{ vr_info.title }}
        </div>
        <div class="d-desc" v-html="rich_text[0] && rich_text[0].cont">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./vr.ts"></script>

<style lang="scss">
@import "./vr.scss";
</style>
