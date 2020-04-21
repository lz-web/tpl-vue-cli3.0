// 不需要登录接口
export default {
    postLogin: { url: "/medical/user/login",method:'post' }, // 用户登录
    postRegister: { url: "/medical/user/register",method:'post' }, // 用户注册
    getCheckPhone: { url: "/medical/user/checkPhone" }, // 手机号检查
    getMedicalSearch: { url: "/medical/data/search" }, // 获取药品列表数据
    getMedicalDetail: { url: "/medical/data/search" }, // 获取药品详情
    getEvaluation: { url: "/medical/data/evaluation" }, // 获取eva信息
}