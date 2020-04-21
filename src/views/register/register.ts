import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
import Api from '@/interface/axios.interface';
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  user_phone: any = '18851179151';
  user_pwd: string = 'li123456';
  user_pwd2: string = 'li123456';
  step_stu: number = 0;
  user_name: string = 'user_name';
  user_company: string = 'user_company';
  user_class: string = 'user_class';
  company_phone: string = '13135';
  applay_reason: string = 'applay_reason';
  user_question: string = '您的出生日期?';
  user_question_ret: any = '';
  wx_id: any = '';
  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
    console.log(this.$route.params.id)
    this.wx_id = this.$route.params.id;
  }

  // 初始化函数
  init() {
    //
  }
  // 下一步
  nextBtn() {
    // 效验
    if (!this.user_phone) {
      this.$message({
        type: 'error',
        message: '手机号格式有误!'
      })
    } else if (!this.user_pwd) {
      this.$message({
        type: 'error',
        message: '密码不能为空!'
      })
    } else if (!this.user_pwd2) {
      this.$message({
        type: 'error',
        message: '确认密码不能为空!'
      })
    } else if (this.user_pwd != this.user_pwd2) {
      this.$message({
        type: 'error',
        message: '两次密码不一致!'
      })
    } else if (!this.user_question_ret) {
      this.$message({
        type: 'error',
        message: '密保问题答案不能为空!'
      })
    } else {
      Api.getCheckPhone({
        user_phone: this.user_phone
      }).then((res: any) => {
        console.log(res)
        if(res.code == 200 && !res.has_phone){
          this.step_stu = 1;
        }else{
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    }
  }
  // 提交注册
  submitBtn() {
    Api.postRegister({
      user_phone:this.user_phone,
      user_pwd:this.user_pwd,
      user_pwd2:this.user_pwd2,
      user_name:this.user_name,
      user_company:this.user_company,
      user_class:this.user_class,
      company_phone:this.company_phone,
      applay_reason:this.applay_reason,
      user_question:this.user_question,
      user_question_ret:this.user_question_ret,
    }).then((res: any) => {
      console.log(res)
      if (res.code == 10000) {
        this.$message({
          type: 'success',
          message: res.msg
        })
        setTimeout(() => {
          this.$router.push({ path: '/login' })
        },1500)
      } else {

      }
    })
  }
}
