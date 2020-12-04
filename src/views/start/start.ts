import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';

  vr_info: any = {} // vr 作品信息
  vr_obj: any = {} // vr 
  created() {
    //
    this.vr_obj = this.$route.query || {}
  }

  activated() {
    //
  }

  mounted() {
    //
    // 获取VR数据详情
    window.axios.get('https://tcmobileapi.qa.17usoft.com/manageassistant/api/vr/product/' + this.vr_obj.sceneResourceId)
      .then((response: any) => {

        this.vr_info = response.data.body || {}
        console.log('response');
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  // 初始化函数
  init() {
    //
  }
  turnInto() {
    let query = this.vr_obj;
    this.$router.push({
      path: '/vr',
      query
    })
  }
}
