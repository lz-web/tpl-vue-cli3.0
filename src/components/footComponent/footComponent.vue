<template>
  <div class="footComponent-wrap">
    <div class="font">copyright®2018-2020 中国药药药科技有线技术出品</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import CONST from "@/assets/ts/comm.const"; // 公共变量
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // prop
  @Prop({
    required: false,
    default: ""
  })
  name!: string;

  // Variablet Wrap   eg : private user_name : string = 'root';

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.footComponent-wrap {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 52px;
  .font {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(217, 195, 184, 1);
  }
}
</style>

