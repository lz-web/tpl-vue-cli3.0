# tpl-vue-cli3.0  
基于vue-cli3.0+TS+elementUI 搭建的一套基础完整框架, 集 组件/界面npm命令一键创建,路由/接口/公共函数/公共过滤器/公共样式...git走就能使用,方便就完事了!!!  

# npm i   
# npm run serve  

#script 命令使用
组件 : npm run com 组件名称            ==> 会在components下创建一个组件(.vue)  
一级目录: npm run tep 界面名称            ==> 会在views下创建一个界面(.vue/.ts/.scss)  
二级目录:npm run tep 文件夹 界面名称            ==> 会在 views/文件夹 下创建一个界面(.vue/.ts/.scss)  

# 不同环境打包(有相应的 .env.test(pro) 文件做配置)  
npm run build_test  
npm run build_pro   

vue.config.js  增加了打包优化的配置,cdn的引入,代码的压缩...  
axios.interface.ts 分装了axios, 实现登录与未登录可配置性接口  
注: 引用第三方插件,确实类型定义文件时,可在@types文件夹下添加!  
