// 公用变量_____by lz on 20180307

import code_obj from './comm.code';
import commFnc from '@/assets/ts/comm.fnc';

const CONST = {
    node_env: process.env.NODE_ENV,
    code_obj, // 码值表
    el_duration: 1000, // elementUI  message提示时间
    is_debugger: true, // 是否开启debugger开发者模式
    public_key: '', // 公共key
    des_key: '', // des 加密公钥
    // api_url: process.env.VUE_APP_api_url // 接口请求地址
    api_url: process.env.VUE_APP_api_url // 接口请求地址
    // api_url: 'http://10.181.154.71:14270' // dt
}
let host = window.location.host;
if(host.indexOf('.qa.') != -1){
    CONST.api_url = 'https://tcmobileapi.qa.17usoft.com'
}else if(host.indexOf('.t.') != -1){
    CONST.api_url = 'https://tcmobileapi.t.17usoft.com'
}else if(host.indexOf(':808') != -1){ // 本地
    CONST.api_url = 'https://tcmobileapi.qa.17usoft.com'
}else{
    CONST.api_url = 'https://tcmobileapi.17usoft.com'
}

export default CONST; 
