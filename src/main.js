/*
 * @Date: 2022-10-09 18:57:49
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-10 13:15:58
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss'
// 全局导入一下 echart 
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
