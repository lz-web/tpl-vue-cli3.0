<template>
  <div class="headerComponent-wrap">
    <div
      :class="[(need_login != 'login' && need_login != 'register') ? 'headerComponent-c' : 'headerComponent-c2']"
    >
      <div
        v-if="need_login != 'login' && need_login != 'register'"
        class="hui-container container-c"
      >
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
      <div v-if="need_login != 'login' && need_login != 'register'" class="ts-rigth">
        <div class="ts-c">
          <div>
            <userComponent></userComponent>
          </div>
        </div>
      </div>
      <img class="bar-right" src="../../assets/img/bar/bar_right.png" alt />
    </div>
    <div class="headerComponent-img hui-container">
      <router-link :to="{path:'/index'}">
        <img
          v-if="need_login != 'login' && need_login != 'register'"
          src="../../assets/img/bar/white_bar.png"
          alt
        />
        <img
          v-if="need_login == 'login' || need_login == 'register'"
          src="../../assets/img/public/header_right.png"
          alt
        />
      </router-link>
    </div>
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
  need_login!: any;

  // Variablet Wrap   eg : private user_name : string = 'root';
  user_info: object = {}; // 用户信息
  restaurants: any[] = []; // 列表数据
  state: any = ""; // 输入框绑定值
  timeout: any = null; // 定时器
  is_need_login: boolean = false; // 是否需要登录的界面
  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
    // this.is_need_login = (this.$route.name != 'login' && this.$route.name != 'register')
    console.log(this.need_login);
  }
  // 搜索按钮
  async querySearchAsync(v: any, cb: any) {
    if (v) {
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
    }else{
      cb([]);
    }
  }
  handleSelect(item: any) {
    console.log(item);
    this.$router.push({ path: `/detail/${item.id}` });
    this.state = "";
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.headerComponent-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 66;
  .headerComponent-c {
    background-color: #242428;
  }
  .headerComponent-c2 {
    height: 100%;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 10px 0px rgba(97, 95, 95, 0.22);
    opacity: 0.11;
  }
  .bar-right {
    position: absolute;
    top: -6px;
    right: -7px;
  }
  .headerComponent-img {
    position: relative;
    text-align: right;
    top: -51px;
  }
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

