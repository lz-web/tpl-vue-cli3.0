// 公用函数_____by lz on 20180307
import { JSEncrypt } from 'jsencrypt';
import Vue from 'vue';
import CryptoJS from 'crypto-js';
import CONST from './comm.const';
import BigNumber from 'bignumber.js';

export default {
  // 码值___转换
  codeTransform: (value: any, code_obj: { [x: string]: any; }) => {
    return code_obj[value];
  },
  // 对象转化  get路由传参格式
  objToKeyVal: (obj: { [x: string]: any; }) => {
    let arr_v: any = [];
    Object.keys(obj).forEach(key => {
      arr_v.push(`${key}=${obj[key]}`)
    });
    return arr_v.join('&'); // key1=val1&key2=val2
  },

  // signature生成规则
  objAscll: (obj: { [x: string]: any; }) => {
    let arr_v: any = [];
    Object.keys(obj).forEach(key => {
      obj[key] ? arr_v.push(`${key}=${obj[key]}`) : arr_v
    });
    arr_v = arr_v.sort()
    arr_v.push('key=TAW8ReS9nHnqNg6DewpRg')
    arr_v = arr_v.join('&')
    return CryptoJS.MD5(arr_v).toString().toUpperCase()
  },

  //    手机号验证
  checkPhone: (phone: string) => {
    return /^1[3456789]\d{9}$/.test(phone);
  },
  // 获取手机验证码成功后的倒计时
  countdown: (flag: boolean, e: { target: any; srcElement: any; }) => {
    if (flag) {
      flag = false
      let target_node = e.target || e.srcElement
      target_node.innerText = '60s后重新发送'
      let i = 59
      let timer = setInterval(() => {
        if (i > 0) {
          target_node.innerText = i + 's后重新发送'
          i--
        } else {
          clearInterval(timer)
          target_node.innerText = '获取验证码'
          flag = true
        }
      }, 1000)
    }
  },
  // JSEncrypt加密方法
  // 此函数使用方法：let data = commFnc.getJsencryptCode(this.user_pwd)
  getJsencryptCode: (password: any) => {
    // NEW 一个对象
    let encrypt = new JSEncrypt()
    // 后台给的公钥
    // tslint:disable-next-line:max-line-length
    encrypt.setPublicKey(CONST.public_key)
    // password是要加密的数据
    let data = encrypt.encrypt(password);
    return data;
  },

  // des 加密方法
  // 此函数使用方法：let data = commFnc.getCryptoJSCode(str)
  getCryptoJSCode: (message: any) => {
    let encrypt = CryptoJS.DES.encrypt(message, CryptoJS.enc.Utf8.parse(CONST.des_key), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    return encrypt;
  },

  // DES  ECB模式解密
  decCryptoJSCode: (encrypt: any) => {
    let decrypt = ''
    if (encrypt) {
      decrypt = CryptoJS.DES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(CONST.des_key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
    }
    return decrypt;
  },

  // 对象排序  
  // @arr  排序的数组  
  // @prop 需要排序的属性名
  // @is_number 是否数字类型 
  // @is_reverse   是否倒序 
  ObjSort: (arr: any[], prop: string, is_number?: boolean, is_reverse?: boolean) => {
    let result = arr.sort((a, b) => {
      if (is_number) {
        return a[prop] - b[prop];
      } else {
        return a[prop].localeCompare(b[prop], "zh");
      }
    });
    is_reverse ? result.reverse() : result;
    return result;
  },
  // 模糊搜索
  // @arr  搜索的数组  
  // @prop 需要搜索的属性名
  // @condition 条件
  // @market 市场名称 
  // @market_prop 市场属性 buyName
  fuzzySearch: (arr: any[], prop: string, condition: string, market?: any, market_prop?: string) => {
    let result: any[] = [];
    arr.forEach(item => {
      if (!condition || item[prop].toUpperCase().indexOf(condition.toUpperCase()) != -1) {
        if (market && market_prop && item[market_prop] != market) {
          Vue.set(item, 'search_show', true)
        } else {
          Vue.set(item, 'search_show', false)
        }
      } else {
        Vue.set(item, 'search_show', true)
      }
      // 特殊处理 用户输入vds 事项
      if (condition && (condition.toUpperCase() == 'VD' || condition.toUpperCase() == 'VDS') && item[prop].toUpperCase().indexOf('VOLLAR') != -1) {
        // console.log('用户输入vds')
        if ((market && market_prop && item[market_prop] == market) || (!market && market_prop && !item[market_prop])) {
          Vue.set(item, 'search_show', false)
        }
      }
      result.push(item);
    });
    return result;
  },
  // elementUI自定义模糊查询 (默认查询的字段不区分大小写)
  // @arr  搜索的数组  (必须为完整的原数组 )
  // @val 用户输入的值
  // @prop_arr  条件属性数组  ps : ['key1','key2','key3']   不传此值默认取数组里面对象的所有属性
  elFuzzySearch: (arr: any[], val: string, prop_arr?: string[]) => {
    let result: any[] = [];
    result = arr && arr.length && val ?
      arr.filter(item => {
        let arr_prop = prop_arr ? prop_arr : Object.keys(arr[0]);
        return arr_prop.some(prop => {
          return item[prop].toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) != -1;
        })
      }) : arr;
    return result;
  },
  // input输入框数字类型小数点限制
  // @val    用户输入的值
  // @digit  保留小数位数
  numberDigit: (val: any, digit: number) => {
    if (val.toString().indexOf('-') >= 0) {
      val = '0' + String(val + 1).substr(1)
    }
    let reg = new RegExp("^[0-9]\\d*(\\.?\\d{0," + digit + "})", "g")
    let ret = (val.toString().match(reg) && val.toString().match(reg)[0]) || '';
    if (ret.indexOf('-') >= 0) {
      ret = '0' + String(ret + 1).substr(1)
    }
    return ret;
  },
  // input 输入框 字符限制 (目前只针对数字)
  // @val    用户输入的值
  // @count  位数限制
  numberCount: (val: any, count: number) => {
    let ret = val.replace(/[^0-9]/g, '').substring(0, count)
    return ret;
  },

  // 解决精度差
  // @first  第一个数  
  // @second 第二个数
  // @method 条件
  computData: (first: number | string, second: number, method: string, is_string: boolean = false, len: number = 8) => {
    let result: any;
    if (method == '+') {
      result = new BigNumber(first).plus(second)
    }
    if (method == '-') {
      result = new BigNumber(first).minus(second)
    }
    if (method == '*') {
      result = new BigNumber(first).multipliedBy(second)
    }
    if (method == '/') {
      result = new BigNumber(first).dividedBy(new BigNumber(second))
    }
    result = result.toString();
    if (result.indexOf('-') > 0) {
      result = '0' + String(Number(result) + 1).substr(1);
    }
    if (result.indexOf('.') > -1 && result.split('.')[1].length > len) {
      if (len > 0) {
        result = result.split('.')[0] + '.' + result.split('.')[1].slice(0, len)
      } else {
        result = result.split('.')[0]
      }
    }
    return is_string ? result : Number(result);
  },

  scientificNumbertoString(num: number) {
    if (num.toString().indexOf('-') >= 0) {
      return '0' + String(num + 1).substr(1)
    }
    return num;
  },
  // 极验的初始化
  initGeetest(params: any, obj: any) {
    let gt = document.getElementById("gtjs")
    if (!gt) {
      let oss_origin = process.env.VUE_APP_assert_url.split('/PC30')[0];
      let scriptD = document.createElement("script")
      scriptD.id = 'gtjs'
      scriptD.src = oss_origin + '/PC30/static_cdn/gt.js'
      document.body.appendChild(scriptD);
      scriptD.onload = () => {
        let win: any = window
        win.initGeetest(params, obj)
      }
    } else {
      let win: any = window
      win.initGeetest(params, obj)
    }
  },

  // 获取当前日期
  timeForMat(count: number) {
    // 拼接时间
    let time1 = new Date()
    time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
    let Y1 = time1.getFullYear()
    let M1 = ((time1.getMonth() + 1) > 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
    let D1 = (time1.getDate() > 10 ? time1.getDate() : '0' + time1.getDate())
    let timer1 = Y1 + '-' + M1 + '-' + D1 // 当前时间
    let time2 = new Date()
    time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
    let Y2 = time2.getFullYear()
    let M2 = ((time2.getMonth() + 1) > 9 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
    let D2 = (time2.getDate() > 9 ? time2.getDate() : '0' + time2.getDate())
    return Y2 + '' + M2 + '' + D2;
  },

  // 小数位不足时，用0补全
  // @num 需要补全的数
  // @length 小数位长度 
  supplementZero(num: number, len: any) {
    let n;
    if (String(num).indexOf('.') > -1 && String(num).split('.')[1].length > len) {
      n = String(num).split('.')[0] + '.' + String(num).split('.')[1].substr(0, len)
    } else {
      n = len && new BigNumber(num).toFixed(Number(len))
    }
    return n
  },

  // 字符串截取指定字数，并在最后增加...
  // @txt 截取的字符串
  // @len 截取的长度
  limitWords(txt: any, len: any) {
    let str = txt;
    str = str.substr(0, len) + '...';
    return str;
  },
  // 获取是否为微信环境
  getIsWxClient() {
    let ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('micromessenger') != -1
  }
}