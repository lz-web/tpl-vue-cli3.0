// 需要登录接口
export default {
    postEvaScore: { url: '/eva/score', method: 'post' }, // eva 评分
    getEvaRecord: { url: '/eva/personalRecord' }, // eva 记录 及详情
    getRefresh: { url: '/medical/user/refresh' }, // eva 刷新token
    putDownloadCount: { url: '/eva/downloadCount', method: 'put' }, // 下载次数记录
    getIndustryScoreRecord: { url: '/eva/industryRecord' }, //历史行业评测分数
    postSendComment: { url: '/medical/comment', method: 'post' }, // 药品增加评论
    getCommentList: { url: '/medical/commentList' }, // 药品评论 列表
}