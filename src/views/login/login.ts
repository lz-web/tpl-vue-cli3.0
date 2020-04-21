import { Component, Vue } from "vue-property-decorator"
import CONST from "@/assets/ts/comm.const" // 公共变量
import { Getter, Action } from "vuex-class"
// import {  } from "@/components" // 组件
import Api from '../../interface/axios.interface';
import jsCookies from 'js-cookie'

@Component({})
export default class LoginVue extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  user_name: string = '18851179151'; // 用户名
  user_pwd: string = 'li123456'; // 密码
  active_name: any = 'first'; // 当前点击tab
  created() {
    //
    console.log(this.$echarts) 
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
  handleClick(v: any){
    console.log(v.paneName)
  }
  // 用户登录按钮
  loginSubmit(){
    Api.postLogin({
      user_phone: this.user_name,
      user_pwd: this.user_pwd
    }).then((res: any) => {
      console.log(res)
      if(res.code == 10000){
        this.$message({
          message:res.msg,
          type:'success'
        })
        jsCookies.set('token', res.access_token)
        localStorage.user_info = JSON.stringify(res.user_info)
        setTimeout(() => {
          // this.$router.push({path:'/index'})
          location.href = '/index'
        },1500)
        // this.$router.push({path:'/index'})
      }else{
        this.$message({
          message:res.msg,
          type:'error'
        })
      }
    })
  }

}
