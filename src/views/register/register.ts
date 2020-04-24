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
  qrcode: string = '';
  user_phone: any = '15751668553';
  user_pwd: string = 'hui123456';
  user_pwd2: string = 'hui123456';
  step_stu: number = 1;
  user_name: string = 'user_name';
  user_industry: string = 'user_industry';
  user_company: string = 'user_company';
  user_class: string = 'user_class';
  company_phone: string = '025-83874089';
  applay_reason: string = 'applay_reason';
  user_question: string = ''; 
  user_question_select: string = '';
  user_question_list: object[] = [
    {
      value: '您的生日日期？',
      label: '您的生日日期？'
    }, {
      value: '您的小学班主任姓名？',
      label: '您的小学班主任姓名？'
    }, {
      value: '您的爱人生日日期？',
      label: '您的爱人生日日期？'
    }, {
      value: '您的父亲生日日期？',
      label: '您的父亲生日日期？'
    }
  ];
  user_question_ret: any = '';
  wx_id: any = '';
  user_checked: boolean = true;
  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
    console.log(this.$route.params.id || '')
    this.wx_id = this.$route.params.id || '';
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
        if(res.code == 200 && !res.has_phone) {
          this.step_stu = 2;
        } else {
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
      user_question_select:this.user_question_select,
      user_question_ret:this.user_question_ret,
      user_checked: this.user_checked
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
