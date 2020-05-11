import echarts from 'echarts'
import Vue from 'vue'
const install = (Vue: { prototype: any }) => {
    Object.defineProperties(Vue.prototype, {
        $echarts: {
            get(){
                return (class_name: string,options: any) => {
                    let class_ele: any = document.getElementsByClassName(class_name)
                    let id_ele: any = document.getElementById(class_name)
                    console.log(class_ele)
                    console.log(id_ele)
                    // this.chart = echarts.init(id_ele);
                    // this.chart.clear();
                    // this.chart.setOption(options);
                    class_ele.forEach((item: any) => {
                        console.log(item)
                        this.chart = echarts.init(item);
                        this.chart.clear();
                        this.chart.setOption(options);
                    });
                }
            }
        }
    })
}

export default {
    install
}