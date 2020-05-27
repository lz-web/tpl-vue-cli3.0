import notLogin from './notLogin'
import needLogin from './needLogin'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import CONST from '@/assets/ts/comm.const'
import jsCookies from 'js-cookie'
import router from '@/router'
import { Message } from 'element-ui'


declare type Methods = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT"
declare interface Datas {
    method?: Methods
    [key: string]: any
}
class HttpRequest {
    public queue: any // 请求的url集合
    public constructor() {
        this.queue = {}
    }
    destroy(url: string) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // hide loading
        }
    }
    interceptors(instance: any, url?: string,options?: any) {
        // 请求拦截
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            return config
        }, (error: any) => {
            console.error(error)
        })
        // 响应拦截
        instance.interceptors.response.use((res: AxiosResponse) => {
            if (url) {
                this.destroy(url)
            }
            let { data, status } = res
            if ((status === 200 || status === 201) && data) { // 请求成功
                return data
            }
            return console.error(res)
        }, (error: any) => {
            if (url) {
                this.destroy(url)
            }
            let error_data = error.response.data;
            if (error.response.status == 400) { // 参数错误相关
                Message({
                    type: 'error',
                    message: error.response.data.message || '400'
                })
            } 
            // else if (error_data.code == 10050 && url != '/medical/user/refresh') { // 令牌 过期 
            //     Api.getRefresh().then((res: any) => { // 重新获取令牌
            //         jsCookies.set('token',res.access_token)
            //         this.request(options)
            //         console.log(res)
            //     })
            // } 
            else if (error_data.code == 10040) { // 令牌失效 
                Message({
                    type: 'error',
                    message: '您好,登录已失效,请重新登录!'
                })
                jsCookies.set('token', '')
                localStorage.removeItem('user_info')
                setTimeout(() => {
                    router.push({
                        path: '/login'
                    })
                },1000)
            } else {
                console.error(error)
            }
        })
    }
    async request(options: AxiosRequestConfig) {
        const instance = axios.create()
        await this.interceptors(instance, options.url,options)
        let headers = {
            Authorization: 'Bearer ' + jsCookies.get('token') || ''
        }
        if(options.url == '/medical/user/refresh'){
            headers = {
                Authorization: 'Bearer ' + jsCookies.get('refresh_token') || ''
            }
        }
        instance.defaults.headers = headers; // 请求头
        instance.defaults.timeout = 30000; // 请求超时时间
        return instance(options)
    }
}
// 合并axios参数
const conbineOptions = (_opts: any, data: Datas, method: Methods): AxiosRequestConfig => {
    let opts = _opts
    if (typeof opts === 'string') {
        opts = { url: opts }
    }
    let res_url = data.get_scl_s ? (opts.url + '/' + data.get_scl_s) : opts.url;

    let options = {
        method: opts.method || data.method || method || 'GET',
        url: res_url,
        header: { 'user-token': 'token' },
        dataType: 'jsonp',
        crossDomain: true,
        baseURL: data.ajax_scl_s || CONST.api_url
    }
    data.ajax_scl_s ? delete data.ajax_scl_s : null;
    data.get_scl_s ? delete data.get_scl_s : null;
    const _data = { ...opts.data, ...data };
    return options.method !== 'GET' ? Object.assign(options, { data: _data }) : Object.assign(options, { params: _data })
}
const HTTP = new HttpRequest()

const Api = (() => {
    const api_obj: any = {}
    const requestList: any = notLogin
    const fun = (opts: any, nedd_token: boolean) => {
        return async (data = {}, method: Methods = "GET", responseType: String) => {
            if (!jsCookies.get('token') && nedd_token) {
                console.error('No Token')
                console.log(opts)
                router.push({
                    path: '/login'
                })
            }
            const newOpts = conbineOptions(opts, data, method)
            const res = await HTTP.request(newOpts)
            return res
        }
    }
    let need_login: any = needLogin
    let not_login: any = notLogin
    Object.keys(needLogin).forEach(key => {
        api_obj[key] = fun(need_login[key], true)
    })
    Object.keys(notLogin).forEach(key => {
        api_obj[key] = fun(not_login[key], false)
    })

    return api_obj
})()

export default Api 