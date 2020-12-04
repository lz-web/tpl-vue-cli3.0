import { Component, Vue } from "vue-property-decorator"
import CONST from "@/assets/ts/comm.const" // 公共变量
import { Getter, Action } from "vuex-class"
// import {  } from "@/components" // 组件
import Api from '../../interface/axios.interface';

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
  created() {
    this.vr_obj = this.$route.query || {}
    this.getShare()
  }

  activated() {
    //
  }

  mounted() {
    this.doc_id = document.getElementById('pano')
    this.init()
    //
    // 获取XML 数据生成VR场景
    window.axios.get('https://tcmobileapi.qa.17usoft.com/manageassistant/api/vr/sceneXml/' + this.vr_obj.sceneResourceId)
      .then((response: { data: any; }) => {
        console.log(response);
        window.embedpano({
          xml: null,
          target: "pano",
          html5: "webgl+only",
          onready: (krpanoJSinterface: { get: (arg0: string) => any; }) => {
            let krpano = krpanoJSinterface.get("global");
            krpano.actions.loadxml(response.data);
            this.krpanoDoc = krpano.actions
          }
        });
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  // 初始化函数
  init() {
    //
    // 获取VR数据详情
    window.axios.get('https://tcmobileapi.qa.17usoft.com/manageassistant/api/vr/product/' + this.vr_obj.sceneResourceId)
      .then((response: any) => {

        this.scene_list = response.data.body.krpanoSceneList
        this.vr_info = response.data.body || {}
        let arr = JSON.parse(response.data.body.summaryContent)
        this.rich_text = arr.filter((item: { type: number; }) => item.type == 2)
        if(!this.rich_text.length){
          this.rich_text = [{"type":2,"cont":"<p>无数据</p>"}]
        }
        let is_init = true
        //  手机端交互
        // document.getElementById("pano").addEventListener("touchend", () => {
        //   console.log('touchend' + is_init)
        //   if (is_init) {
        //     let mp3Audio = document.getElementById('mp3Audio')
        //     mp3Audio.src = response.data.body.musicUrl || ''
        //     setTimeout(() => {
        //       mp3Audio.play();

        //     }, 200)
        //     is_init = false
        //   }
        // });
        //  pc交互
        // document.getElementById("pano").addEventListener("click", () => {
        //   console.log('click')
        //   if (is_init) {
        //     let mp3Audio = document.getElementById('mp3Audio')
        //     mp3Audio.src = response.data.body.musicUrl || ''
        //     mp3Audio.play();
        //     is_init = false
        //   }
        // });
        // setTimeout(() => {
        // 	mp3Audio.play();

        // }, 1000)
        // 播放音乐
        // var audio = document.createElement('audio')
        // audio.src = response.data.body.musicUrl || ''
        // // audio.src = 'https://krpano.com/panos/xmas/ding_dong_merrily_on_high.mp3'
        // audio.autoplay = true
        // audio.controls = true
        // audio.loop = true
        // audio.id = 'audio'
        // setTimeout(() => {
        // 	audio.play();
        // }, 1000)
        console.log('response');
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
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
    Api.addShare(this.vr_obj).then((res: any) => {
      console.log(res)
      this.getShare()
    })
    alert('界面待对接!')
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
    this.current_scene = current_scene
    this.krpanoDoc.loadscene(name);
  }
  // 展示详情
  showDetail(stu: boolean) {
    this.show_detail = stu;
  }
  musicImg(){
    let mp3Audio:any = document.getElementById('mp3Audio')
    mp3Audio.play()
  }
}
