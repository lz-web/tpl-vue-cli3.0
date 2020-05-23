import { Component, Vue } from "vue-property-decorator"
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

    // Action
    // @Action GET_DATA_ASYN

    // Variablet Wrap   eg : private user_name : string = 'root';
    is_download: boolean = false;
    is_show_pdf: boolean = false;
    created() {
        //
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
        },1000)
    }

}
