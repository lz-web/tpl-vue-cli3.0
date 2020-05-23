import { Component, Vue, Prop, Watch } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
import commFnc from '@/assets/ts/comm.fnc';
import EvaData from '@/components/commClass/EvaData';
// import {  } from "@/components" // 组件
import Api from '@/interface/axios.interface';

@Component({})
export default class EvaTemplate extends EvaData {
  @Prop({
    required: false,
    default: ''
  }) is_download!: boolean

  @Watch('is_download')
  onChildChanged(val: boolean, oldVal: boolean) {
    console.log('is_download')
    if (val) {
      this.downloadPdf();
    }
  }
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  created() {
    //
    console.log(this)
  }

  activated() {
    // 
  }

  mounted() {

    document.documentElement.scrollTop = 0
    // setInterval(() => {
    let name = `${this.medical_detail.comm_name}_评测详情-${this.medical_detail.user_name}`
    // commFnc.downloadPdf('evaTemplate', name )
    console.log(this.radar_option)
    // },1888) // 初始化 echarts 图表
    console.log('evaTemplate mounted')
  }
  downloadPdf() {
    // setTimeout(() => {
    let name = `${this.medical_detail.comm_name}_评测详情-${this.eva_detail.user_name}`
    console.log(this.medical_detail)
    console.log(name)
    //  接口记录下载次数
    Api.putDownloadCount({
      id: this.eva_detail.id
    }).then((res: any) => {
      if (res.code == 10000) {
        commFnc.downloadPdf('evaTemplate', name)
      }
    })

    // },2000)
  }
}
