import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import CONST from "@/assets/ts/comm.const" // 公共变量
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // Variablet Wrap   eg : private user_name : string = 'root';
  isCollapse: boolean = false;
  editableTabsValue: any = '2'
  editableTabs: any = [{
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content'
  }, {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content'
  }]
  tabIndex: any = 2
  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
  handleOpen(v: any) {
    console.log(v)
  }
  handleClose(v: any) {
    console.log(v)
  }
  handleTabsEdit(targetName: any, action: string) {
    if (action === 'add') {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue = newTabName;
    }
    if (action === 'remove') {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab: { name: any; }, index: number) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab: { name: any; }) => tab.name !== targetName);
    }
  }

}
