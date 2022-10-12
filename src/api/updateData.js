/*
 * @Date: 2022-10-12 16:18:25
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 16:27:04
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\api\updateData.js
 */
import request from '@/untils/request'
export function updateThreeBycontaminants(data) {
    return request({
        url: '/contaminants',
        method: 'Post',
        data
    })
}
export function updateTableByonlyTime(data) {
    return request({
        url: '/onlyTime',
        method: 'Post',
        data
    })
}
export function updateLineBycity(data) {
    return request({
        url: '/city',
        method: 'Post',
        data
    })
}
export function updateLineBychangeMode(data) {
    return request({
        url: '/changeMode',
        method: 'Post',
        data
    })
}
export function updateThreeByhour(data) {
    return request({
        url: '/hour',
        method: 'Post',
        data
    })
}
export function updateThreeByday(data) {
    return request({
        url: '/day',
        method: 'Post',
        data
    })
}
export function updateThreeBymonth(data) {
    return request({
        url: '/month',
        method: 'Post',
        data
    })
} export function updateThreeByquater(data) {
    return request({
        url: '/quater',
        method: 'Post',
        data
    })
}

export function updateThreeByyear(data) {
    return request({
        url: '/year',
        method: 'Post',
        data
    })
} 