import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
import Api from '@/interface/axios.interface'
import { footComponent } from "@/components" // 组件

import userComponent from '@c/userComponent/userComponent.vue'
@Component({
  components: {
    userComponent,
    footComponent
  }
})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  restaurants: any = [
    { "value": "三全鲜食（北新泾店）", id: 12321 },
    { "value": "Hot honey 首尔炸鸡（仙霞路）", id: 123 },
    { "value": "新旺角茶餐厅", "id": 123 },
    { "value": "泷千家(天山西路店)", id: 123 }
  ]
  state: any = ''
  state1: any = ''
  timeout: any = null
  created() {
    //
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
  // 搜索按钮
  async querySearchAsync(v: any, cb: any) {
    await Api.getMedicalSearch({
      value: v
    }).then((res: any) => {
      this.restaurants = []
      res.result.rows.forEach((item: any) => {
        this.restaurants.push({
          value: item.comm_name,
          id: item.order_id,
        })
      })
    })
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      cb(this.restaurants);
    }, 222);
  }
  handleSelect(item: any) {
    console.log(item)
    this.$router.push({ path: `/detail/${item.id}`})
  }
  // 搜索按钮
  searchBtn() {
    this.$router.push({ path: '/result', query: { key: this.state } })
  }
}
