import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
import Api from '@/interface/axios.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author
  
  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  medical_detail : any = {}; // 药品详情 

  created() {
    //
  }
  
  activated() {
    //
  }

  mounted() {
    //
    this.getMedicalDetail()
  }

  // 初始化函数
  init() {
    //
  }
  getMedicalDetail(){
    Api.getMedicalDetail({
      get_scl_s:this.$route.params.id
    }).then((res: any) => {
      if(res.code == 10000){
        this.medical_detail = res.result;
      }
      console.log(res)
    })
  }
}
