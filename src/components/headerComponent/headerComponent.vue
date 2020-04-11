<template>
  <div class="headerComponent-wrap">
    <div class="hui-container container-c">
      <div class="header-left">
        <h1>病药智能评测系统</h1>
        <p>----科学专业精准</p>
      </div>
      <div class="header-right">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import CONST from "@/assets/ts/comm.const" // 公共变量
  // import {  } from "@/components" // 组件

  @Component({})
  export default class About extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string
    
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

  .headerComponent-wrap {
    width: 100%;
    padding: 30px 0 0 0;
    height: 55px;
    .container-c{
      display:flex;
      justify-content: space-between;
    }
    .header-left{
      
    }
  }
</style>

