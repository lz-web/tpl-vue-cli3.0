import { Component, Vue, Watch } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
import Api from '@/interface/axios.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author
  @Watch('$route')
  onChildChanged(val: string, oldVal: string) {
    this.init()
  }

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  medical_detail : any = {}; // 药品详情 
  medical_type_all: any[] = [];
  medical_type2 : any[] = [
    {
      zh:'性状',
      en: 'character'
    },
    {
      zh:'注意事项',
      en: 'note'
    },
    {
      zh:'孕妇及哺乳期...',
      en: 'gravida_note'
    },
    {
      zh:'药物相互作用',
      en: 'drug_interactions'
    },
    {
      zh:'贮藏',
      en: 'store_up'
    },
    {
      zh:'包装',
      en: 'packaging'
    },
    {
      zh:'有效期',
      en: 'effective_date'
    },
  ]
  medical_type : any[] = [
    {
      zh:'所属类别',
      en: 'class'
    },
    {
      zh:'适应症',
      en: 'adaptation_disease'
    },
    {
      zh:'规格',
      en: 'specification'
    },
    {
      zh:'用法用量',
      en: 'usage_dosage'
    },
    {
      zh:'不良反应',
      en: 'untoward_effect'
    },
    {
      zh:'药理毒理',
      en: 'pharmacology_toxicology'
    },
    {
      zh:'批准文号',
      en: 'approval_no'
    },
    {
      zh:'生产企业',
      en: 'production_enterprise'
    },
  ]

  created() {
    //
  }
  
  activated() {
    //
  }

  mounted() {
    //
    this.init()
  }

  // 初始化函数
  init() {
    //
    this.getMedicalDetail();
    this.medical_type_all = [...this.medical_type,...this.medical_type2]
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
  goScroll(ele: any){
    let id:any = document.getElementById(ele);
    let scroll: any = this.$refs[ele];
    // id.scrollIntoView(250)
    document.documentElement.scrollTop = id.offsetTop - 33
  }
}
