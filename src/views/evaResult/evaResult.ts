import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
import Api from '@/interface/axios.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
    // Getter
    // @Getter author

    // Action
    // @Action GET_DATA_ASYN

    // Variablet Wrap   eg : private user_name : string = 'root';
    medical_detail: any = {} // 药品详情
    eva_detail: any = {} // 评测详情
    radar_arr: number[] = [] // 雷达数据
    created() {
        //
    }

    activated() {
        //
    }

    mounted() {
        //
        this.getMedicalDetail()
        this.getEvaRecord()
    }

    // 初始化函数
    init() {
        // 雷达图
        let option = {
            title: null,
            tooltip: {},
            radar: {
                indicator: [
                    { name: '商业性', max: 10 },
                    { name: '可行性', max: 10 },
                    { name: '仿制药进度与壁垒', max: 10 },
                    { name: '科学性', max: 10 },
                ],
                shape: 'circle', // 背景图形
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: '#666666' // 文字颜色
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            '#F1C9CE', '#F1C9CE', // 线型颜色  单/双
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false // 区域阴影
                },
                axisLine: {
                    lineStyle: {
                        color: '#FFA6A6' // 坐标轴颜色
                    }
                }
            },
            series: [{
                type: 'radar',
                name: '药品',
                data: [
                    {
                        value: this.radar_arr,
                        //这里的配置显示数值
                        label: {
                            normal: {
                                show: true,
                                formatter: function (params: { value: any }) {
                                    return params.value;
                                }
                            }
                        }
                    }
                ],
                // 设置区域边框和区域的颜色
                itemStyle: {
                    color: '#E4203A',
                },
                areaStyle: {
                    opacity: 0.05
                }
            }]
        };
        // 散点折线图

        var user_phone = 18851179151;


        let option2 = {

            title: null,
            tooltip: {
                formatter: function (params: { seriesName: string; value: any[]; name: any }) {
                    if (params.seriesName == '历史个人评分') {
                        return `用户:${user_phone} <br> 时间:${params.value[0]}<br> 评分:${params.value[1]}`
                    } else {
                        return `时间:${params.name}<br> 评分:${params.value}`
                    }
                }
            },
            legend: {
                right: 10,
                bottom: 80,
                orient: 'vertical',
                data: ['历史个人评分', '历史平均评分'],
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                type: 'category',
                boundaryGap: false,
                data: ['2019/01/01', '2019/01/02', '2019/01/03', '2019/01/04', '2019/01/05', '2019/01/06', '2019/01/07']

            },
            yAxis: {
                type: 'category',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [
                {
                    name: '历史个人评分',
                    data:
                        [
                            ['2019/01/07', 8.1],
                            ['2019/01/05', 9],
                            ['2019/01/05', 4],
                            ['2019/01/05', 5],
                            ['2019/01/06', 0],
                        ],
                    type: 'scatter',
                    symbolSize: '8',
                    itemStyle: {
                    }
                },
                {
                    name: '历史平均评分',
                    data: [8, 6, 5, 3, 9, 6, 6],
                    type: 'line',
                    smooth: true
                }
            ]
        };
        this.$echarts('radarChart', option)
        this.$echarts('scatterChart', option2)
    }
    // 获取药品详情
    getMedicalDetail() {
        Api.getMedicalDetail({
            get_scl_s: this.$route.params.id
        }).then((res: any) => {
            if (res.code == 10000) {
                this.medical_detail = res.result;
            }
            console.log(res)
        })
    }
    // 获取评测详情
    getEvaRecord() {
        Api.getEvaRecord({
            get_scl_s: this.$route.params.id
        }).then((res: any) => {
            if (res.code == 10000) {
                console.log(res)
                this.eva_detail = res.result;
                this.radar_arr = [this.eva_detail.score_obj.syx, this.eva_detail.score_obj.kxx, this.eva_detail.score_obj.fzy, this.eva_detail.score_obj.kxix]
                this.init()
            } else {
                this.$message({
                    type: 'error',
                    message: res.msg
                })
            }
            console.log(res)
        })
    }
    // 重新测评
    reEva() {
        this.$router.push({ path: `/evaluationSystem/${this.$route.params.id}` })
    }

    // 下载测评结果
    downloadEvaResult() {

    }

}
