// 公用过滤器_____by lz on 20180307

// 码值___方式
let payTypeFilters = (value: string | number, code_obj: { [x: string]: any; }) => {
    return code_obj[value];
};
// 大小写转换
let toUpperCaseFilter = (v: string) => {
    return v ? v.toUpperCase() : '';
}
// 秒数 转换 时分秒
let secondToDateFilter = (second: number) => {
    if (second) {
        let data_str = '';
        let d = Math.floor(second / 60 / 60 / 24);
        let h = Math.floor(second / 3600 % 24);
        let m = Math.floor(second / 60 % 60);
        let s = Math.floor(second % 60);

        d != 0 ? data_str += d + '天'  : null;
        h != 0 ? data_str += h + '时' : null;
        m != 0 ? data_str += m + '分'  : null;
        s != 0 ? data_str += s + '秒'  : null;
        return data_str;
    }
}
// 数字  小数点格式化 value值  digit 小数点保留位数
let formatNumFilter = (value: string | number, digit: number) => {
    if (value) {
        value = String(value);
        // 先把非数字的都替换掉，除了数字和. 
        value = value.replace(/[^\d.]/g, "");
        // 必须保证第一个为数字而不是. 
        value = value.replace(/^\./g, "");
        // 保证只有出现一个.而没有多个. 
        value = value.replace(/\.{2,}/g, ".");
        // 保证.只出现一次，而不能出现两次以上 
        value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        if (digit && Number(digit)) {
            value = value.replace(RegExp(`^(\\-)*(\\d+)\\.(\\d{${digit}}).*$`), '$1$2.$3');
            Number(value) ? value = parseFloat(value) : ' 1';
        } else if (digit == 0) {
            // tslint:disable-next-line:radix
            Number(value) ? value = parseInt(value) : ' 1';
        }
    }
    return value;
}
// 日期格式过滤器
let dateServer = (value: string) => {
    return value.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");
};
// 小数位格式化过滤器
let decimalPlaceFilter = (num1: number, num2: number, digit: number) => {
    let pow = Math.pow(10, digit);
    return (num1 * pow - num2 * pow) / pow;
};
// 金额格式过滤器
let moneyFilter = (value: number, num: any, type: string) => {
    return "￥" + value.toFixed(num) + type;
};
// 时间格式过滤器
let dateFilter = (input: number | Date, format = "yyyy-MM-dd hh:mm:ss") => {
    if (typeof input === 'number') {
        input = new Date(input)
    }
    let o :any = {
        "M+": input.getMonth() + 1, // 月份
        "d+": input.getDate(), // 日
        "h+": input.getHours(), // 小时
        "m+": input.getMinutes(), // 分
        "s+": input.getSeconds(), // 秒
        "q+": Math.floor((input.getMonth() + 3) / 3), // 季度
        'S': input.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(format)) {
        format = format.replace(
            RegExp.$1,
            (input.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    }
    // 不够2位的前面补0
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
            );
        }
    }
    return format;
};
export {
    toUpperCaseFilter,
    payTypeFilters,
    dateServer,
    moneyFilter,
    dateFilter,
    secondToDateFilter,
    formatNumFilter,
    decimalPlaceFilter
};
