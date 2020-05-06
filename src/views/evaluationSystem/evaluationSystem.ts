import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
import Api from '@/interface/axios.interface';
// import {  } from "@/components" // 组件
import commFnc from '@/assets/ts/comm.fnc';

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  active_tab: string = '0';
  current_i: string = '0'; // 当前标签index
  eva_arr: any[] = [];
  medical_detail: any = {} // 药品详情
  is_scroll: any = false; // 滚轮滚动事件
  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
    this.getEvaluation()
    this.getMedicalDetail()
    window.addEventListener('scroll', this.handleScroll, true);  // 监听滚轮事件
  }

  // 初始化函数
  init() {
    //
  }
  // 获取立项选项
  getEvaluation() {
    let arr: any[] = [];
    let arr2: any[] = [];
    Api.getEvaluation().then((res: any) => {
      res.result.forEach((item: any) => {
        // 处理评分标准
        let grade_arr: any[] = []
        let temp_arr = item.grade_standard.split(';')
        temp_arr.forEach((temp: any) => {
          let no = temp && temp.match(/\((.+?)\)/g)[0];
          let temp_l = temp.split('(')[0];
          temp ? grade_arr.push({
            key: temp,
            val: Number(no.substring(1, no.length - 2))
          }) : null
        })
        if (arr.indexOf(item.type_one) == -1) {
          arr.push(item.type_one)
          arr2.push(item.first_type)
          this.eva_arr.push({
            key: item.type_one,
            val: item.type_one_percent,
            children: [{
              key: item.first_type,
              val: item.first_type_percent,
              children: [{
                key: item.second_type,
                val: item.second_type_percent,
                grade_standard: grade_arr,
              }]
            }]
          })
        } else {
          if (arr2.indexOf(item.first_type) == -1) {
            arr2.push(item.first_type)
            this.eva_arr[this.eva_arr.length - 1]['children'].push({
              key: item.first_type,
              val: item.first_type_percent,
              children: [{
                key: item.second_type,
                val: item.second_type_percent,
                grade_standard: grade_arr,
              }]
            })
          } else {
            let temp = this.eva_arr[this.eva_arr.length - 1]['children'];
            temp[temp.length - 1]['children'].push({
              key: item.second_type,
              val: item.second_type_percent,
              grade_standard: grade_arr,
            })
          }
        }
      })
      console.log(this.eva_arr)
    })
  }
  // 获取药品详情
  getMedicalDetail() {
    Api.getMedicalDetail({
      get_scl_s: this.$route.params.id
    }).then((res: any) => {
      if (res.code == 10000) {
        this.medical_detail = res.result;
      }
      console.log(res)
    })
  }
  // tab 点击事件
  handleClick(v: any) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 20) {
      document.documentElement.scrollTop = 100
    }
    console.log(scrollTop)
    console.log(v)
    console.log(this.active_tab)
  }
  // radio 点击事件
  radioChange(v: any) {
    console.log(v)
  }

  // 评分提交
  submitBtn(v: any) {
    let message = '选项未评分!'
    let score_obj = {
      kxx: 0,
      syx: 0,
      kxix: 0,
      fzy: 0,
    }
    let all_score = 0;
    console.log(this.eva_arr)
    let stu = this.eva_arr.some(item => { // 一级
      return item.children.some((item_2: any) => { // 二级
        return item_2.children.some((item_3: any) => { // 三级
          if (item_3.score || item_3.score == 0) {
            let no_1 = commFnc.computData(item_3.score, item_3.val, '*')
            let no_2 = commFnc.computData(item_2.val, item.val, '*')
            if(item.key == '科学性'){
              score_obj.kxx = commFnc.computData(score_obj.kxx, commFnc.computData(no_1, no_2, '*'), '+')
              console.log('前:' + score_obj.kxx)
            }else if(item.key == '商业性'){
              score_obj.syx = commFnc.computData(score_obj.syx, commFnc.computData(no_1, no_2, '*'), '+')
            }else if(item.key == '可行性'){
              score_obj.kxix = commFnc.computData(score_obj.kxix, commFnc.computData(no_1, no_2, '*'), '+')
            }else if(item.key == '仿制药进度与壁垒'){
              score_obj.fzy = commFnc.computData(score_obj.fzy, commFnc.computData(no_1, no_2, '*'), '+')
            }
            all_score = commFnc.computData(all_score, commFnc.computData(no_1, no_2, '*'), '+')
            console.log(all_score && all_score)
          } else {
            message = item.key + '==>' + item_2.key + '==>' + item_3.key + message
            return true
          }
        });
      });
    })
    if (!stu) {
      // 计算 score_obj
      this.eva_arr.forEach(item => {
        if(item.key == '科学性'){
          score_obj.kxx = commFnc.computData(score_obj.kxx, item.val , '/') 
        }else if(item.key == '商业性'){
          score_obj.syx = commFnc.computData(score_obj.syx, item.val , '/') 
        }else if(item.key == '可行性'){
          score_obj.kxix = commFnc.computData(score_obj.kxix, item.val , '/') 
        }else if(item.key == '仿制药进度与壁垒'){
          score_obj.fzy = commFnc.computData(score_obj.fzy, item.val , '/') 
        } 
      })
      console.log(score_obj)
      // 满足条件开始提交咯
      let obj = {
        record_json: this.eva_arr,
        medical_id: Number(this.$route.params.id),
        medical_name: this.medical_detail.comm_name,
        personal_score: all_score, 
        score_obj
      }
      // [ 'record_json','medical_id','medical_name' ]
      Api.postEvaScore(obj).then((res: any) => {
        if (res.code == 10000) {
          this.$message({
            type: 'success',
            message: res.msg
          })
          // 评测成功之后跳转到详情界面
          setTimeout(() => {
            this.$router.push({ path:`/evaResult/${this.$route.params.id}`})
          },1500)
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
        console.log(res)
      })
    } else {
      this.$message({
        type: 'error',
        message: message
      })
    }
    console.log(all_score)
  }
  // 鼠标滚轮事件
  handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    console.log(this.is_scroll)
    if (scrollTop > 20) {
      this.is_scroll = true;
    } else {
      this.is_scroll = false;
    }
  }
}
