import commFnc from '@/assets/ts/comm.fnc'
import Api from '@/interface/axios.interface'
import { Component, Vue, Prop } from "vue-property-decorator"
@Component({})
export default class EvaData extends Vue {
    // Getter
    // @Getter author

    // Action
    // @Action GET_DATA_ASYN
    // Variablet Wrap   eg : private user_name : string = 'root';
    medical_type_all: any[] = []; // 全部类型
    medical_type2: any[] = [
        {
            zh: '性状',
            en: 'character'
        },
        {
            zh: '注意事项',
            en: 'note'
        },
        {
            zh: '孕妇及哺乳期...',
            en: 'gravida_note'
        },
        {
            zh: '药物相互作用',
            en: 'drug_interactions'
        },
        {
            zh: '贮藏',
            en: 'store_up'
        },
        {
            zh: '包装',
            en: 'packaging'
        },
        {
            zh: '有效期',
            en: 'effective_date'
        },
    ]  // 非重要
    medical_type: any[] = [
        {
            zh: '所属类别',
            en: 'class'
        },
        {
            zh: '适应症',
            en: 'adaptation_disease'
        },
        {
            zh: '规格',
            en: 'specification'
        },
        {
            zh: '用法用量',
            en: 'usage_dosage'
        },
        {
            zh: '不良反应',
            en: 'untoward_effect'
        },
        {
            zh: '药理毒理',
            en: 'pharmacology_toxicology'
        },
        {
            zh: '批准文号',
            en: 'approval_no'
        },
        {
            zh: '生产企业',
            en: 'production_enterprise'
        },
    ] // 重要
    medical_detail: any = {} // 药品详情
    eva_detail: any = {} // 评测详情
    radar_arr: number[] = [] // 雷达数据
    radar_option: any = {}; // 雷达 配置数据
    line_option: any = {}; // 折线 配置数据
    created() {
        //
        this.medical_type_all = [...this.medical_type, ...this.medical_type2]
        this.getMedicalDetail()
        this.getEvaRecord()
    }

    activated() {
        //
    }

    mounted() {
        //
    }

    // 初始化函数
    init() {
        console.log('初始化')
        console.log(this.radar_arr)
        // 雷达图
        this.radar_option = {
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


        this.line_option = {

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
        this.$echarts('radarChart', this.radar_option)
        this.$echarts('scatterChart', this.line_option)
    }
    // 获取药品详情
    async getMedicalDetail() {
        await Api.getMedicalDetail({
            get_scl_s: this.$route.params.id
        }).then((res: any) => {
            if (res.code == 10000) {
                this.medical_detail = res.result;
            }
            console.log(res)
        })
    }
    // 获取评测详情
    async getEvaRecord() {
        await Api.getEvaRecord({
            get_scl_s: this.$route.params.id
        }).then((res: any) => {
            if (res.code == 10000) {
                console.log(res)
                this.eva_detail = res.result;
                this.radar_arr = [this.eva_detail.score_obj.syx, this.eva_detail.score_obj.kxx, this.eva_detail.score_obj.fzy, this.eva_detail.score_obj.kxix]
                // 初始化 echarts 图表
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
    downloadEvaResult(ele: string, name: string) {
        commFnc.downloadPdf(ele, name)
    }

}