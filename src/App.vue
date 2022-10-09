<!--
 * @Date: 2022-10-09 18:57:49
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-09 19:07:05
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\App.vue
-->
<template>
  <div id="app">
    <DataMonitoring></DataMonitoring>
  </div>
</template>
<script>
import DataMonitoring from '@/views/DataMonitoring.vue'
export default {
  components: {
    DataMonitoring
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
