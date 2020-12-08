// 不需要登录接口
export default {
    registerWXSDK: { url: "/holistictourism/get_wxjsapi/",method: "POST"}, // 注册微信SDK
    getGeetest: { url: "/pc/v2/geetest" }, // 获取极验
    addShare: { url: "/manageassistant/api/miniProgram/vr/product/addShare", method: "POST"}, // 添加一次收藏,转发 VR
    giveLike: { url: "/manageassistant/api/miniProgram/article/collection", method: "POST"}, // 点赞 VR
    getShare: { url: "/manageassistant/api/miniProgram/vr/product/starsAndShares", method: "POST"}, // 查询收藏分享次数 VR
    getVrProduct: { url: "/manageassistant/api/vr/product"}, // 查询收藏分享次数 VR
    getVrDetail: { url: "/manageassistant/api/vr/product"}, // 获取VR数据详情
    getVrXml: { url: "/manageassistant/api/vr/sceneXml"}, // 获取VR数据 Xml
}