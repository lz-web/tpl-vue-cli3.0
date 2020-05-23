import { Component, Vue, Watch } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
import Api from '@/interface/axios.interface'
import EvaData from '@/components/commClass/EvaData'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends EvaData {
  // Getter
  // @Getter author
  @Watch('$route')
  onChildChanged(val: string, oldVal: string) {
    this.init()
  }

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  scroll_top: number = 0

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
    this.init()
    window.addEventListener('scroll', this.handleScroll, true);  // 监听滚轮事件
  }

  // 初始化函数
  init() {
    //
  }
  goScroll(ele: any) {
    let id: any = document.getElementById(ele);
    let scroll: any = this.$refs[ele];
    // id.scrollIntoView(250)
    document.documentElement.scrollTop = id.offsetTop - 100
  }
  goTop() {
    document.documentElement.scrollTop = 0
  }
  // 鼠标滚轮事件
  handleScroll() {
    this.scroll_top = window.pageYOffset || document.documentElement.scrollTop ||
      document.body.scrollTop
      // console.log(this.scroll_top)
  }
}
