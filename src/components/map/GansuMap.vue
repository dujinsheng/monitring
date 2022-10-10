<!--
 * @Date: 2022-10-10 11:24:16
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-10 19:06:23
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\components\map\GansuMap.vue
-->
<template>
  <div id="main"></div>
</template>

<script>
// 引入甘肃省各市的genJson数据
import geoJson from "@/assets/gs";
export default {
  name: "GansuMap",
  props: {
    mapData: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.showMap();
  },
  methods: {
    showMap() {
      var chartDom = document.getElementById("main");
      var myChart = this.$echarts.init(chartDom);
      var option;
      myChart.showLoading();
      myChart.hideLoading();
      this.$echarts.registerMap("GS", geoJson);
      myChart.setOption(
        (option = {
          title: {
            // text: "Population Density of Hong Kong （2011）",
            // subtext: "Data from Wikipedia",
            // sublink:
            //   "http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12",
          },
          //   tooltip: {
          //     trigger: "item",
          //     formatter: "{b}<br/>{c} (p / km2)",
          //   },
          toolbox: {
            show: false,
            orient: "vertical",
            left: "right",
            top: "center",
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {},
            },
          },
          visualMap: {
            show: false,
            min: 10,
            max: 80,
            // text: ["High", "Low"],
            // realtime: false,
            // calculable: true,
            inRange: {
              color: ["#2ee62e", "#f3f62a", "#fc0200"],
            },
          },
          series: [
            {
              name: "甘肃省各市",
              type: "map",
              map: "GS",
              label: {
                // show: true,
              },
              //   后续响应式改变地图的颜色时，只需要修改这个位置的数据
              data: [
                { name: "兰州市", value: 12 },
                { name: "嘉峪关市", value: 11 },
                { name: "白银市", value: 40 },
                { name: "金昌市", value: 41 },
                { name: "天水市", value: 40 },
                { name: "武威市", value: 10 },
                { name: "张掖市", value: 15 },
                { name: "平凉市", value: 16 },
                { name: "酒泉市", value: 12 },
                { name: "庆阳市", value: 14 },
                { name: "定西市", value: 15 },
                { name: "陇南市", value: 12 },
                { name: "临夏回族自治州", value: 14 },
                { name: "甘南藏族自治州", value: 13 },
              ],
              // 自定义名称映射
              nameMap: {
                "Lan Zhou": "兰州市",
                "Jia Yu Guan": "嘉峪关市",
                "Bai Yin": "白银市",
                "Jin Chang": "金昌市",
                "Tian Shui": "天水市",
                "Wu Wei": "武威市",
                "Zhang Ye": "张掖市",
                "Ping Liang": "平凉市",
                "Jiu Quan": "酒泉市",
                "Qing Yang": "庆阳市",
                "Ding Xi": "定西市",
                "Long Nan": "陇南市",
                "Lin Xia": "临夏回族自治州",
                "Gan Nan": "甘南藏族自治州",
              },
            },
          ],
        })
      );
      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped >
#main {
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  background-color: #d5e6b2;
}
</style>