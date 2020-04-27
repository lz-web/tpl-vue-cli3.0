import echarts from 'echarts'
import Vue from 'vue'
const install = (Vue: { prototype: any }) => {
    Object.defineProperties(Vue.prototype, {
        $echarts: {
            get(){
                return (id: string,options: any) => {
                    let id_ele: any = document.getElementById(id)
                    this.chart = echarts.init(id_ele);
                    this.chart.clear();
                    this.chart.setOption(options);
                }
            }
        }
    })
}

export default {
    install
}