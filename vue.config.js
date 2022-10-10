/*
 * @Date: 2022-10-09 18:57:49
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-10 14:41:13
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   devServer: {
//     proxy: 'https://echarts.apache.org'
//   }
// }