import { Component, Vue } from "vue-property-decorator"
import CONST from "@/assets/ts/comm.const" // 公共变量
import { Getter, Action } from "vuex-class"
// import {  } from "@/components" // 组件
import Api from '../../interface/axios.interface';

@Component({})
export default class LoginVue extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  user_name: string = ''; // 用户名
  user_pwd: string = ''; // 密码
  active_name: any = ''; // 当前点击tab
  created() {
    //
    console.log(this.$echarts) 
    this.$message({
      message:'asd',
      type:'error'
    })
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
    this.$message({
      type: 'error',
      message: '用户名密码格式不正确'
    })
    Api.postLogin({
      name: this.user_name,
      pwd: this.user_pwd
    }).then((res: any) => {
      console.log(res)
      if(res.data.status == 10000){
        this.$router.push({path:'/index'})
      }else{

      }
    })
  }

}
