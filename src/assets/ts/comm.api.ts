// 公用api函数_____by lz on 20201207
import Api from '../../interface/axios.interface';

export default {
  // 注册微信sdk
  registerWXSDK: () => {
    const params = {
      miniprogramId: 5,
      // url: location.href.split("#")[0],
      url: location.href.split("#")[0],
    };
    Api.registerWXSDK(params).then((res: any) => {
      window.wx.config({
        debug: false,
        appId: res.AppId,
        timestamp: res.TimeStamp,
        nonceStr: res.NonceStr,
        signature: res.Signature,
        jsApiList: [
          'getLocation',
          'openLocation',
          'checkJsApi',//判断当前客户端版本是否支持指定JS接口 
          'updateTimelineShareData', // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
          'updateAppMessageShareData',// 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
        ]
      });
    })
  }
}