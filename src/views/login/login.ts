import { Component, Vue } from "vue-property-decorator"
import CONST from "@/assets/ts/comm.const" // 公共变量
import { Getter, Action } from "vuex-class"
// import {  } from "@/components" // 组件
import Api from '../../interface/axios.interface';
import jsCookies from 'js-cookie'
import { dateFilter } from '@/assets/ts/comm.filter';

@Component({})
export default class LoginVue extends Vue {
    // Getter
    // @Getter author

    // Action
    // @Action GET_DATA_ASYN

    // Variablet Wrap   eg : private user_name : string = 'root';
    user_phone: string = '15751668553'; // 用户名
    user_pwd: string = 'hui123456'; // 密码
    user_verify_code: string | number = '1234'; // 验证码
    remember_pwd: boolean = false;
    account: boolean = true;
    active_name: any = 'first'; // 当前点击tab
    qrcode: string = '';

    show_set_pwd: boolean = false;
    user_question_ret: any = '';
    forget: boolean = true;
    user_pwd_set: string = '';
    user_pwd_set2: string = '';
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
    handleClick(v: any) {
        console.log(v.paneName)
    }

    // 切换登录方式
    changeLoginWay() {
        this.account = !this.account
    }

    // 用户登录按钮
    loginSubmit() {
        Api.postLogin({
            user_phone: this.user_phone,
            user_pwd: this.user_pwd
        }).then((res: any) => {
            console.log(res)
            if (res.code == 10000) {
                this.$message({
                    message: res.msg,
                    type: 'success'
                })
                jsCookies.set('token', res.access_token)
                localStorage.user_info = JSON.stringify(res.user_info)
                setTimeout(() => {
                    // this.$router.push({path:'/index'})
                    location.href = '/index'
                }, 1500)
                // this.$router.push({path:'/index'})
            } else {
                this.$message({
                    message: res.msg,
                    type: 'error'
                })
            }
        })
    }

    // 忘记密码
    forgetPwd() {
        this.show_set_pwd = true
    }

    // 取消(忘记密码)
    cancel() {
        this.show_set_pwd = false
        this.forget = true
    }

    // 提交(忘记密码)
    commit() {
        if (!this.user_question_ret) {
            this.$message({
                type: 'error',
                message: '密保问题答案不能为空!'
            })
            // return
        } else {

            Api.putfindPwd({
                user_phone: this.user_phone,
                user_question_ret: dateFilter(this.user_question_ret, 'yyyy-MM-dd'),
            }).then((res: any) => {
                if (res.code == 10000) {

                    this.forget = false
                    this.$message({
                        type: 'success',
                        message: res.msg
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: res.msg
                    })
                }
                console.log(res)
            })
        }
        // 验证密保答案
    }

    // 确定(重置密码)
    confirm() {
        if (!this.user_pwd_set) {
            this.$message({
                type: 'error',
                message: '新密码不能为空!'
            })
            return
        }
        if (!this.user_pwd_set2) {
            this.$message({
                type: 'error',
                message: '确认密码不能为空!'
            })
            return
        }
        if (this.user_pwd_set != this.user_pwd_set2) {
            this.$message({
                type: 'error',
                message: '两次密码不一致!'
            })
            return
        }
        Api.putfindPwd({
            user_phone: this.user_phone,
            user_pwd: this.user_pwd_set,
            user_question_ret: dateFilter(this.user_question_ret,'yyyy-MM-dd')
        }).then((res: any) => {
            console.log(res)
            if (res.code == 10000) {
                this.show_set_pwd = false
                this.forget = true
                this.$message({
                    type: 'success',
                    message: res.msg
                })
            } else {
                this.$message({
                    type: 'error',
                    message: res.msg
                })
            }
        })
    }

}
