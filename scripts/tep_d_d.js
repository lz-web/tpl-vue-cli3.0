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
const dirName3 = process.argv[4]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
let dir_dl_name;
if(dirName2.split('_').length > 1){
   dir_dl_name = dirName2.split('_')[0] + dirName2.split('_')[1].substring(0,1).toUpperCase() + dirName2.split('_')[1].substring(1);
}else{
  dir_dl_name = dirName2;
}
const capPirName2 = dir_dl_name.substring(0, 1).toUpperCase() + dir_dl_name.substring(1);
const capPirName3 = dirName3.substring(0, 1).toUpperCase() + dirName3.substring(1);
if (!dirName || !dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tep ${capPirName}')
  process.exit(0)
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-${dirName2}-${dirName3}-wrap">
  
  </div>
</template>

<script lang="ts" src="./${dirName3}.ts"></script>

<style lang="scss">
  @import './${dirName3}.scss'
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

.${dirName}-${dirName2}-${dirName3}-wrap {
  width: 100%;
}
`

// interface 模版
const interfaceTep = `// ${dirName3}.Data 参数类型
export interface ${capPirName3}Data {
  pageName: string
}

// VUEX ${dirName3}.State 参数类型
export interface ${capPirName3}State {
  author?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

`

// vuex 模版
const vuexTep = `import { ${capPirName3}State } from '@/types/views/${dirName3}.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ${capPirName3}Api from '@/api/${dirName3}'

const state: ${capPirName3}State = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<${capPirName3}State, any> = {
  author: (state: ${capPirName3}State) => state.author
}

// 更改state
const mutations: MutationTree<${capPirName3}State> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ${capPirName3}State, data: ${capPirName3}State) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<${capPirName3}State, any> = {
  UPDATE_STATE_ASYN({ commit, state: ${capPirName3}State }, data: ${capPirName3}State) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   ${capPirName3}.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

`

// api 接口模版
const apiTep = `import Api from '@/utils/request'

export const getData = (data) => {
  return Api.getData(data)
}

`

fs.mkdirSync(`${basePath}/views/${dirName}/${dirName2}/${dirName3}`) // mkdir

process.chdir(`${basePath}/views/${dirName}/${dirName2}/${dirName3}`) // cd views
fs.writeFileSync(`${dirName3}.vue`, VueTep) // vue 
fs.writeFileSync(`${dirName3}.ts`, tsTep) // ts
fs.writeFileSync(`${dirName3}.scss`, scssTep) // scss

// process.chdir(`${basePath}/types/views`); // cd types

// fs.writeFileSync(`${dirName3}.interface.ts`, interfaceTep) // interface

// process.chdir(`${basePath}/store/module`); // cd store

// fs.writeFileSync(`${dirName3}.ts`, vuexTep) // vuex

// process.chdir(`${basePath}/api`); // cd api
// fs.writeFileSync(`${dirName3}.ts`, apiTep) // api

process.exit(0)