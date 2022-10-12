/*
 * @Date: 2022-10-09 18:57:49
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 12:15:58
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.scss'
// 全局导入一下 echart 
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import '@/mock/initData'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: h => h(App)
}).$mount('#app')
