// 需要登录接口
export default {
    postEvaScore: { url: '/medical/data/evaScore',method:'post' }, // eva 评分
    getEvaRecord: { url: '/medical/data/evaRecord' }, // eva 记录 及详情
    getRefresh: { url: '/medical/user/refresh' }, // eva 刷新token
    putDownloadCount: { url: '/medical/data/downloadCount',method:'put' }, // 下载次数记录
    getIndustryScoreRecord: { url: '/medical/data/industryScoreRecord'}, //历史行业评测分数
}