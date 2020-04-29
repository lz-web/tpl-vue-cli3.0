import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
    evaId: string | number = ''
    // Getter
    // @Getter author

    // Action
    // @Action GET_DATA_ASYN

    // Variablet Wrap   eg : private user_name : string = 'root';

    created() {
        //
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

    // 重新测评
    reEva() {
        this.$router.push({ path: `/evaluationSystem?id=${this.evaId}` })
    }

    // 下载测评结果
    downloadEvaResult() {

    }

}
