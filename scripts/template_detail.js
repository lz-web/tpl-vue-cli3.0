/*
 * @Description: 页面快速生成脚本  ____二级目录
 * @Date: 2018-12-06 10:28:08
 * @LastEditTime: 2013-03-11 16:09:40 by lz on 2019-03-11
 */
const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2]
const dirName2 = process.argv[3]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
let dir_dl_name;
if(dirName2.split('_').length > 1){
   dir_dl_name = dirName2.split('_')[0] + dirName2.split('_')[1].substring(0,1).toUpperCase() + dirName2.split('_')[1].substring(1);
}else{
  dir_dl_name = dirName2;
}
const capPirName2 = dir_dl_name.substring(0, 1).toUpperCase() + dir_dl_name.substring(1);
if (!dirName || !dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tep ${capPirName}')
  process.exit(0)
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-${dirName2}-wrap">
  
  </div>
</template>

<script lang="ts" src="./${dirName2}.ts"></script>

<style lang="scss">
  @import './${dirName2}.scss'
</style>

`

// ts 模版
const tsTep = `import { Component, Vue } from "vue-property-decorator"
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
    
}
`

// scss 模版
const scssTep = `@import "@/assets/scss/variables.scss";

.${dirName}-${dirName2}-wrap {
  width: 100%;
}
`

fs.mkdirSync(`${basePath}/views/${dirName}/${dirName2}`) // mkdir

process.chdir(`${basePath}/views/${dirName}/${dirName2}`) // cd views
fs.writeFileSync(`${dirName2}.vue`, VueTep) // vue 
fs.writeFileSync(`${dirName2}.ts`, tsTep) // ts
fs.writeFileSync(`${dirName2}.scss`, scssTep) // scss




process.exit(0)