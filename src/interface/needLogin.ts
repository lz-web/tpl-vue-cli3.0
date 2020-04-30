// 需要登录接口
export default {
    postEvaScore: { url: "/medical/data/evaScore",method:'post' }, // eva 评分
    getEvaRecord: { url: "/medical/data/evaRecord" }, // eva 记录
    getRefresh: { url: "/medical/user/refresh" }, // eva 刷新token
}