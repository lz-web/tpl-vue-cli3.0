// 不需要登录接口
export default {
    postLogin: { url: "/eva/user/login",method:'post' }, // 用户登录
    postRegister: { url: "/eva/user/register",method:'post' }, // 用户注册
    getCheckPhone: { url: "/eva/user/checkPhone" }, // 手机号检查
    getMedicalSearch: { url: "/medical/search" }, // 获取药品列表数据
    getMedicalDetail: { url: "/medical/search" }, // 获取药品详情
    getEvaluation: { url: "/eva/evaluation" }, // 获取eva信息
    putfindPwd: { url: "/eva/user/findPwd",method:'put' }, // 修改密码
}