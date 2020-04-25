<template>
  <div class="headerComponent-wrap">
    <div class="hui-container container-c">
      <div class="header-left">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          :clearable="true"
          placeholder="请尝试输入需要查询的药品名称"
          @select="handleSelect"
        >
          <!-- <i class="el-icon-search el-input__icon" slot="suffix" @click="handleIconClick"></i> -->
          <img src="../../assets/img/bar/icon_search.png" alt slot="prefix" />
        </el-autocomplete>
      </div>
      <div class="header-right"></div>
    </div>
    <div class="ts-rigth">
      <div class="ts-c">
        <img src="../../assets/img/bar/white_bar.png" alt />
        <div>
          <userComponent></userComponent>
        </div>
      </div>
    </div>
    <img class="bar-right" src="../../assets/img/bar/bar_right.png" alt />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import CONST from "@/assets/ts/comm.const"; // 公共变量
import jsCookies from "js-cookie";
import Api from "@/interface/axios.interface";

import userComponent from "@c/userComponent/userComponent.vue";
@Component({
  components: {
    userComponent
  }
})
export default class HeaderComponent extends Vue {
  // prop
  @Prop({
    required: false,
    default: ""
  })
  name!: string;

  // Variablet Wrap   eg : private user_name : string = 'root';
  is_login: boolean = false;
  user_info: object = {};
  restaurants: any = [
    { value: "三全鲜食（北新泾店）", id: 12321 },
    { value: "Hot honey 首尔炸鸡（仙霞路）", id: 123 },
    { value: "新旺角茶餐厅", id: 123 },
    { value: "泷千家(天山西路店)", id: 123 }
  ];
  state: any = "";
  state1: any = "";
  timeout: any = null;
  created() {
    //
    this.is_login = jsCookies.get("token") ? true : false;
    this.user_info = localStorage.user_info
      ? JSON.parse(localStorage.user_info)
      : {};
    console.log();
  }

  activated() {
    //
  }

  mounted() {
    //
    console.log(this.$route);
  }
  // 退出登录
  exitLogin() {
    console.log("退出登录");
    jsCookies.set("token", "");
    localStorage.removeItem("user_info");
    location.href = "/login";
  }
  // 搜索按钮
  async querySearchAsync(v: any, cb: any) {
    await Api.getMedicalSearch({
      value: v
    }).then((res: any) => {
      this.restaurants = [];
      res.result.rows.forEach((item: any) => {
        this.restaurants.push({
          value: item.comm_name,
          id: item.order_id
        });
      });
    });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      cb(this.restaurants);
    }, 222);
  }
  handleSelect(item: any) {
    console.log(item);
    this.$router.push({ path: `/detail/${item.id}` });
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.headerComponent-wrap {
  .bar-right {
    position: absolute;
    right: -8px;
    top: -6px;
  }
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #242428;
  .container-c {
    display: flex;
    justify-content: space-between;
  }
  .header-left {
    z-index: 36;
    .el-autocomplete {
      margin-top: 20px;
      border-radius: 3px;
      .el-input__inner {
        color: #a5a5a5;
        width: 400px;
        border-radius: 4px 0 0 4px;
        background: #3a3a41;
        padding-left: 48px;
        border: 0;
      }
      img {
        margin: 12px 14px;
      }
    }
  }
  .ts-rigth {
    position: relative;
    top: -30px;
    text-align: right;
    padding-right: 90px;
    .ts-c {
      display: flex;
      justify-content: flex-end;
      img {
        margin-right: 100px;
      }
    }
    .el-dropdown {
      color: #fffef8;
    }
  }
}
</style>

