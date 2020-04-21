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
    api_url: 'http://192.168.70.5:5000' // 接口请求地址
}

export default CONST; 
