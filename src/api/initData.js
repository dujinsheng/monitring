/*
 * @Date: 2022-10-12 08:52:35
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 09:04:56
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\api\initData.js
 */
import request from '@/untils/request'
// 该接口用于页面初始化的时候，获取地图，表格，折线图，选择器数据
export function initMapAndTableAndChartAndSelection() {
  return request({
    url: '/get/initData',
    method: 'Get'
  })
}