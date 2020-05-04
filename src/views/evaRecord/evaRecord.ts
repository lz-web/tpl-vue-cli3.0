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
  page_obj: object = {};
  created() {
    //
    this.getEvaRecord(1)
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
  getEvaRecord(page:number){
    Api.getEvaRecord({
      page_no:page
    }).then((res: any) => {
      if (res.code == 10000) {
        console.log('getEvaRecord _ res')
        console.log(res)
        this.page_obj = res.result
        this.record_list = res.result.rows
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
  // 分页点击事件
  pageChange(page:number){
    this.getEvaRecord(page)
  }
  // 评测详情
  handleDetail(v:any){
    console.log(v)
    this.$router.push({ path:`/evaResult/${v.id}`})
  }
  // 下载
  handleDownload(){

  }
}
