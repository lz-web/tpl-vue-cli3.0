import { Component, Vue } from "vue-property-decorator"
import CONST from "@/assets/ts/comm.const" // 公共变量
import { Getter, Action } from "vuex-class"
// import {  } from "@/components" // 组件
import Api from '../../interface/axios.interface';

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author
  
  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';

  created() {
    //
    Api.getGeetest().then((res: any) => {
      console.log(res)
    })
    console.log()
  }
  
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
