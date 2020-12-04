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

  created() {
    //
    // Api.getGeetest().then((res: any) => {
    //   console.log(res)
    // })
    // console.log()
  }
  
  activated() {
    //
  }

  mounted() {
    //
      // 获取XML 数据生成VR场景
			window.axios.get('http://tcmobileapi.qa.17usoft.com/manageassistant/api/vr/sceneXml/7')
      .then(function (response: { data: any; }) {
        console.log(response);
        window.embedpano({
          xml: null,
          target: "pano",
          html5: "webgl+only",
          onready: function (krpanoJSinterface: { get: (arg0: string) => any; }) {
            var krpano = krpanoJSinterface.get("global");
            krpano.actions.loadxml(response.data);
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
  }
    
}
