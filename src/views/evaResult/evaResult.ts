import { Component, Vue, Watch } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
import Api from '@/interface/axios.interface'
import commFnc from '@/assets/ts/comm.fnc'
// import {  } from "@/components" // 组件
import evaTemplate from '@v/evaTemplate/evaTemplate.vue'
import EvaData from '@/components/commClass/EvaData'

@Component({
    components: {
        evaTemplate
    }
})
export default class EvaResult extends EvaData {
    // Getter
    // @Getter author

    @Watch('eva_detail')
    onChildChanged(val: boolean, oldVal: boolean) {
        if (val) {
            this.getCommentList()
        }
    }
    // Action
    // @Action GET_DATA_ASYN

    // Variablet Wrap   eg : private user_name : string = 'root';
    is_download: boolean = false;
    is_show_pdf: boolean = false;
    comment_list: any[] = [];
    comment: any = '';
    is_first: boolean = true;
    created() {
    }

    activated() {
        //
    }

    mounted() {
        //
    }
    // 重新测评
    reEva() {
        this.$router.push({ path: `/evaluationSystem/${this.eva_detail.medical_id}` })
    }

    // 下载测评结果
    downloadEvaResult() {
        this.is_show_pdf = true
        this.is_download = true
        // this.is_download = false
        console.log(this.is_download)
        setTimeout(() => {
            this.is_show_pdf = false
            this.is_download = false
        }, 1000)
    }
    // 发送评论
    sendComment() {
        if (!this.comment) {
            this.$message({
                type: 'error',
                message: '评论内容不能为空!'
            })
            return
        }
        if (!this.is_first) {
            return
        }
        Api.postSendComment({
            medical_id: this.eva_detail.medical_id,
            medical_name: this.eva_detail.medical_name,
            comment: this.comment
        }).then((res: any) => {
            this.is_first = true
            if (res.code == 10000) {
                this.comment = '';
                this.$message({
                    type: 'success',
                    message: res.message
                })

            } else {
                this.$message({
                    type: 'error',
                    message: res.message
                })
            }
            console.log(res)
        })
    }
    // 获取评论列表
    getCommentList() {
        Api.getCommentList({
            medical_id: this.eva_detail.medical_id,
        }).then((res: any) => {
            if (res.code == 10000) {
                this.comment_list = res.result
            } else {
                this.$message({
                    type: 'error',
                    message: res.message
                })
            }
        })
    }
}
