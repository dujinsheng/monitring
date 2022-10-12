<!--
 * @Date: 2022-10-10 11:24:16
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 12:34:27
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\components\map\GansuMap.vue
-->
<template>
  <div id="main"></div>
</template>

<script>
// 引入甘肃省各市的genJson数据
import geoJson from "@/assets/GanSu";
export default {
  name: "GansuMap",
  props: {
    mapData: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  data() {
    return {
      // 该数据用来展现地图的层级
      mapChart: {},
    };
  },
  created() {
  },
  mounted() {
    this.showMap();
  },
  watch: {
    mapData: {
       // eslint-disable-next-line 
      handler(n, o) {
        this.mapChart = n
        this.showMap();
      }
    }
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
            min: this.mapChart.min ? this.mapChart.min : 10,
            max: this.mapChart.max ? this.mapChart.max : 80,
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
              data: this.mapChart.data ? this.mapChart.data : [],
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