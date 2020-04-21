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
  record_list: any[] = [];
  created() {
    //
    this.getEvaRecord()
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
  getEvaRecord(){
    Api.getEvaRecord().then((res: any) => {
      if (res.code == 10000) {
        this.record_list = res.result.rows;
        this.$message({
          type: 'success',
          message: res.msg
        })
      } else {
        this.$message({
          type: 'error',
          message: res.msg
        })
      }
      console.log(res)
    })
  }
}
