import { Component, Vue } from "vue-property-decorator"
import CONST from "@/assets/ts/comm.const" // 公共变量
import { Getter, Action } from "vuex-class"
// import {  } from "@/components" // 组件
import Api from '../../interface/axios.interface';
import commFnc from '@/assets/ts/comm.fnc';
import Xml from '@/assets/temp/xml.vr';
import { Toast } from 'vant';

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  vr_obj: any = {}
  vr_info: any = {} // vr 作品信息
  rich_text: any[] = [] // 新富文本
  scene_list: any[] = []
  doc_id: any = ''
  krpanoDoc: any = '' // 全景对象函数集合
  show_menu: boolean = false;
  stars_share: any = {}; // 分享 点赞 数量
  show_detail: boolean = false;
  current_scene: number = 0; // 当前场景下标
  is_play: boolean = false; // 音乐是否播放
  is_ipx: boolean = false; // 是否iphonex
  mp3_init: boolean = true; // 是否iphonex
  created() {
    this.vr_obj = this.$route.query || {}
    this.is_ipx = this.vr_obj.is_ipx == 1
    this.getShare()
  }

  mp3Auto() {
    //  手机端交互
    let vr_id: any = document.getElementById("vrWrap")
    vr_id.addEventListener("touchend", () => {
      if (this.mp3_init) {
        this.musicImg()
      }
    });
    //  pc交互
    vr_id.addEventListener("click", () => {
      if (this.mp3_init) {
        this.musicImg()
      }
    });
  }

  mounted() {
    this.mp3Auto()
    this.doc_id = document.getElementById('pano')
    // 默认自动播放
    // let mp3Audio: any = document.getElementById('mp3Audio')
    // mp3Audio.play && mp3Audio.play()
    // this.is_play = true

    this.getVrDetail()
    this.getVrXml()
  }
  // 获取XML 数据生成VR场景
  getVrXml() {
    Api.getVrXml({ get_key: this.vr_obj.sceneResourceId }).then((res: any) => {
      window.embedpano({
        xml: null,
        target: "pano",
        html5: "webgl+only",
        onready: (krpanoJSinterface: { get: (arg0: string) => any; }) => {
          let krpano = krpanoJSinterface.get("global");

          krpano.actions.loadxml(Xml.xml2Temp(res));
          this.krpanoDoc = krpano.actions
          console.log(this.krpanoDoc)
        }
      });
    })
      .catch((error: any) => {
        console.log(error);
      });
  }
  getVrDetail() {
    Api.getVrDetail({ get_key: this.vr_obj.sceneResourceId }).then((res: any) => {
      res.body.krpanoSceneList.map((item: { is_clicked: boolean; }) => {item.is_clicked = false})
      this.scene_list = res.body.krpanoSceneList
      this.vr_info = res.body || {}
      let arr = JSON.parse(res.body.summaryContent)
      this.rich_text = arr.filter((item: { type: number; }) => item.type == 2)
      if (!this.rich_text.length) {
        this.rich_text = [{ "type": 2, "cont": "<p>无数据</p>" }]
      }
    })
      .catch((error: any) => {
        console.log(error);
      });
    // 设置分享相关
    let option = {
      title: this.vr_info.title, // 分享标题
      // desc: , // 分享描述
      link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: this.vr_info.cover, // 分享图标
    }
    window.wx.ready(() => {
      window.wx.updateTimelineShareData(option);
      window.wx.updateAppMessageShareData(option);
    });
  }
  //  点赞
  zanImg() {
    Api.giveLike({ type: 5, articleId: this.vr_obj.sceneResourceId, miniProgramId: this.vr_obj.miniprogramId, ...this.vr_obj }).then((res: any) => {
      console.log(res)
      this.getShare()
    })
  }
  //  分享
  shareImg() {
    if (!commFnc.getIsWxClient()) {
      Toast({
        duration: 1500,
        message: '您好,当前不在微信环境内!'
      });
      return
    }
    // window.wx && window.wx.updateAppMessageShareData({
    //   title: this.scene_list[this.current_scene].title, // 分享标题
    //   desc: this.scene_list[this.current_scene].name, // 分享描述
    //   link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //   imgUrl: this.scene_list[this.current_scene].thumburl, // 分享图标
    //   success: () => {
    //     // 设置成功
    //     Api.addShare(this.vr_obj).then((res: any) => {
    //       console.log(res)
    //       this.getShare()
    //     })
    //   }
    // })
  }
  //  查询收藏分享次数
  getShare() {
    Api.getShare(this.vr_obj).then((res: any) => {
      if (res.code == 1000) {
        this.stars_share = res.body
      }
    })
  }
  //  菜单
  menuImg() {
    this.show_menu = !this.show_menu;
  }
  // 场景切换
  changeScene(name: string, current_scene: number) {
    name = `scene_${name}_${current_scene}`
    console.log(name)
    this.scene_list[current_scene].is_clicked = true
    this.current_scene = current_scene
    this.krpanoDoc.loadscene(name);
  }
  // 展示详情
  showDetail(stu: boolean) {
    this.show_detail = stu;
  }
  musicImg() {
    this.mp3_init = false
    let mp3Audio: any = document.getElementById('mp3Audio')
    if (this.is_play) {
      mp3Audio.pause()
      this.is_play = false;
    } else {
      mp3Audio.play()
      this.is_play = true;
    }
  }
}
