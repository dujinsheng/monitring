/*
 * @Date: 2022-09-14 16:49:06
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 08:55:29
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\untils\request.js
 */
// 引入axios
import axios from 'axios';



// 新创建axios实例, 并且传入该实例的配置
const request = axios.create({
    // 设置BaseUrl
    baseURL: 'http://zhongkesanqing',
    // 设置延迟
    timeout: 1000 * 60,
    // 设置请求头
    header: { 'control-resourse-origin-sharing': '*' },
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {

    return config;
}, function (error) {

    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default request