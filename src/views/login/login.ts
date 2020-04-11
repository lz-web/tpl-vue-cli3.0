import { Component, Vue } from "vue-property-decorator"
import CONST from "@/assets/ts/comm.const" // 公共变量
import { Getter, Action } from "vuex-class"
// import {  } from "@/components" // 组件
import Api from '../../interface/axios.interface';

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author
  
  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  loading:boolean = false // 加载动画
  wait:number = 2000 // 2000ms之内不能重复发起请求
  throttleLogin:any = null// 节流登录
  form:any =  {
    username: 'root',
    password: '123456',
  }
  created() {
    //
    Api.getGeetest().then((res: any) => {
      console.log(res)
    })
    console.log()
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
  async login() {
    const { username, password } = this.form
    try {
      this.loading = true
      // await User.getToken(username, password)
      await this.getInformation()
      this.loading = false
      this.$router.push('/about')
      // this.$message.success('登录成功')
    } catch (e) {
      this.loading = false
      console.log(e)
    }
  }
  async getInformation() {
    try {
      // 尝试获取当前用户信息
      // const user = await User.getPermissions()
      // this.setUserAndState(user)
      // this.setUserPermissions(user.permissions)
    } catch (e) {
      console.log(e)
    }
  }

  // 登录按钮
  throttle(){
    this.$router.push('/user')
  }
} 
