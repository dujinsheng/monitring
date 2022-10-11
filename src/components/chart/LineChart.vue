<!--
 * @Date: 2022-10-10 23:07:24
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-11 18:53:12
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\components\chart\LineChart.vue
-->
<template>
  <div id="lineChart"></div>
</template>

<script>
export default {
  name: "LineChart",
  data() {
    return {
      chartConfigData: null,
      // 小时数据
      hourData: {
        xAxis: {
          axisLabel: {
            interval: 1,
            fontSize: "8px",
            padding: [0, 0, 0, 45],
          },
          // 改变图标X轴坐标
          data: [
            "09月25日 09时",
            "09月25日 10时",
            "09月25日 11时",
            "09月25日 12时",
            "09月25日 13时",
            "09月25日 14时",
            "09月25日 15时",
            "09月25日 16时",
            "09月25日 17时",
            "09月25日 18时",
            "09月25日 19时",
            "09月25日 20时",
            "09月25日 21时",
            "09月25日 22时",
            "09月25日 23时",
            "09月25日 24时",
            "09月26日 01时",
            "09月26日 02时",
            "09月26日 03时",
            "09月26日 04时",
            "09月26日 05时",
            "09月26日 06时",
            "09月26日 07时",
            "09月26日 08时",
          ],
        },
        yAxis: {
          min: 0,
          max: 80,
        },
        series: [
          // 折线图纵轴折线图数据
          {
            name: "实测",
            type: "line",
            lineStyle: {
              color: "#4cdd4b",
            },
            itemStyle: {
              color: "#4cdd4b",
            },
            symbol: "circle",
            smooth: true,
            data: [
              21, 39, 48, 56, 42, 26, 35, 14, 27, 10, 11, 15, 21, 39, 48, 56,
              42, 26, 35, 14, 27, 10, 11, 15,
            ],
          },
          // 折线图上的柱状图起始位置配置数据
          {
            data: [
              21,
              39,
              48,
              56 - 4,
              42 - 8,
              26,
              35,
              14,
              27,
              10,
              11 - 3,
              15,
              21,
              39,
              48,
              56 - 4,
              42 - 8,
              26,
              35,
              14,
              27,
              10,
              11 - 3,
              15,
            ],
          },
          // 上升数据
          {
            data: [
              5,
              3,
              2,
              "-",
              "-",
              4,
              6,
              2,
              1,
              4,
              "-",
              3,
              5,
              3,
              2,
              "-",
              "-",
              4,
              6,
              2,
              1,
              4,
              "-",
              3,
            ],
          },
          // 下降数据
          {
            data: [
              "-",
              "-",
              "-",
              4,
              8,
              "-",
              "-",
              "-",
              "-",
              "-",
              3,
              "-",
              "-",
              "-",
              "-",
              4,
              8,
              "-",
              "-",
              "-",
              "-",
              "-",
              3,
              "-",
            ],
          },
        ],
      },
      // 天数据
      dayData: {
        xAxis: {
          axisLabel: {
            interval: 0,
            fontSize: "8px",
            padding: [0, 0, 0, 10],
          },
          // 改变图标X轴坐标
          data: [
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月25日",
            "09月26日",
            "09月26日",
            "09月26日",
            "09月26日",
          ],
        },
        yAxis: {
          min: 0,
          max: 100,
        },
        series: [
          // 折线图纵轴折线图数据
          {
            data: [
              21, 39, 48, 56, 42, 26, 35, 14, 27, 10, 11, 15, 21, 39, 48, 56,
              42, 26, 35, 14, 27,
            ],
          },
          // 折线图上的柱状图起始位置配置数据
          {
            data: [
              21,
              39,
              48,
              56 - 4,
              42 - 8,
              26,
              35,
              14,
              27,
              10,
              11 - 3,
              15,
              21,
              39,
              48,
              56 - 4,
              42 - 8,
              26,
              35,
              14,
              27,
            ],
          },
          // 上升数据
          {
            data: [
              5,
              3,
              2,
              "-",
              "-",
              4,
              6,
              2,
              1,
              4,
              "-",
              3,
              5,
              3,
              2,
              "-",
              "-",
              4,
              6,
              2,
              1,
            ],
          },
          // 下降数据
          {
            data: [
              "-",
              "-",
              "-",
              4,
              8,
              "-",
              "-",
              "-",
              "-",
              "-",
              3,
              "-",
              "-",
              "-",
              "-",
              4,
              8,
              "-",
              "-",
              "-",
              "-",
            ],
          },
        ],
      },
      // 月数据
      monthData: {
        xAxis: {
          axisLabel: {
            interval: 0,
            fontSize: "8px",
            padding: [0, 0, 0, 10],
          },
          // 改变图标X轴坐标
          data: [
            "2021年09月",
            "2021年10月",
            "2021年11月",
            "2021年12月",
            "2022年01月",
            "2022年02月",
            "2022年03月",
            "2022年04月",
            "2022年05月",
            "2022年06月",
            "2022年07月",
            "2022年08月",
          ],
        },
        yAxis: {
          min: -200,
          max: 400,
        },
        series: [
          // 折线图纵轴折线图数据
          {
            data: [100, 150, 110, 123, 140, 250, 125, 111, 222, 230, 140, 102],
          },
          // 折线图上的柱状图起始位置配置数据
          {
            data: [
              100,
              150,
              110,
              123 - 40,
              140 - 80,
              250,
              125,
              111,
              222,
              230,
              140 - 30,
              102,
            ],
          },
          // 上升数据
          {
            data: [50, 30, 20, "-", "-", 40, 60, 20, 10, 40, "-", 30],
          },
          // 下降数据
          {
            data: ["-", "-", "-", 40, 80, "-", "-", "-", "-", "-", 30, "-"],
          },
        ],
      },
      // 季度数据
      quaterData: {
        xAxis: {
          axisLabel: {
            interval: 0,
            fontSize: "8px",
            padding: [0, 0, 0, 45],
          },
          // 改变图标X轴坐标
          data: [
            "2021年第二季度",
            "2021年第三季度",
            "2021年第四季度",
            "2022年第一季度",
            "2022年第二季度",
            "2022年第三季度",
            "2022年第四季度",
          ],
        },
        yAxis: {
          min: 0,
          max: 210,
        },
        series: [
          // 折线图纵轴折线图数据
          {
            name: "实测",
            type: "line",
            lineStyle: {
              color: "#4cdd4b",
            },
            itemStyle: {
              color: "#4cdd4b",
            },
            symbol: "circle",
            smooth: true,
            data: [21, 39, 48, 56, 42, 26, 35],
          },
          // 折线图上的柱状图起始位置配置数据
          {
            data: [21, 39, 48, 56 - 4, 42 - 8, 26, 35],
          },
          // 上升数据
          {
            data: [5, 3, 2, "-", "-", 4, 6],
          },
          // 下降数据
          {
            data: ["-", "-", "-", 4, 8, "-", "-"],
          },
        ],
      },
      // 年数据
      yearData: {
        xAxis: {
          axisLabel: {
            interval: 0,
            fontSize: "8px",
            padding: [0, 0, 0, 45],
          },
          // 改变图标X轴坐标
          data: [
            "2014年",
            "2015年",
            "2016年",
            "2017年",
            "2018年",
            "2019年",
            "2020年",
          ],
        },
        yAxis: {
          min: 0,
          max: 80,
        },
        series: [
          // 折线图纵轴折线图数据
          {
            name: "实测",
            type: "line",
            lineStyle: {
              color: "#4cdd4b",
            },
            itemStyle: {
              color: "#4cdd4b",
            },
            symbol: "circle",
            smooth: true,
            data: [21, 39, 48, 56, 42, 26, 35],
          },
          // 折线图上的柱状图起始位置配置数据
          {
            data: [21, 39, 48, 56 - 4, 42 - 8, 26, 35],
          },
          // 上升数据
          {
            data: [5, 3, 2, "-", "-", 4, 6],
          },
          // 下降数据
          {
            data: ["-", "-", "-", 4, 8, "-", "-"],
          },
        ],
      },
    };
  },
  created() {
    this.chartConfigData = this.yearData;
    console.log("这是图表的配置数据", this.quaterData);
  },
  mounted() {
    this.showLineChart();
  },
  methods: {
    showLineChart() {
      var chartDom = document.getElementById("lineChart");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["实测", "环比上升", "环比下降"],
          show: true,
          left: "42%",
        },
        grid: {
          left: "3%",
          top: "10%",
          bottom: "20%",
          width: "97%",
          height: "70%",
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          // 改变图标X轴坐标
          data: this.chartConfigData.xAxis.data,
          axisLabel: this.chartConfigData.xAxis.axisLabel,
          itemStyle: {
            width: "10px",
          },
          textStyle: {
            fontSize: "5px",
          },
          axisLine: {
            lineStyle: {
              color: "black",
            },
          },
        },
        // 改变图标Y轴坐标的相关设置
        yAxis: {
          type: "value",
          show: true,
          boundaryGap: false,
          min: this.chartConfigData.yAxis.min,
          max: this.chartConfigData.yAxis.max,
          axisLine: {
            show: true,
            type: "line",
            lineStyle: {
              color: "black",
            },
          },
        },
        series: [
          // 折线图纵轴折线图数据
          {
            name: "实测",
            type: "line",
            lineStyle: {
              color: "#4cdd4b",
            },
            itemStyle: {
              color: "#4cdd4b",
            },
            symbol: "circle",
            smooth: true,
            data: this.chartConfigData.series[0].data,
          },
          // 折线图上的柱状图起始位置配置数据
          {
            name: "PlaceHolder",
            type: "bar",
            stack: "Total",
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
            emphasis: {
              itemStyle: {
                borderColor: "transparent",
                color: "transparent",
              },
            },
            data: this.chartConfigData.series[1].data,
          },
          // 上升数据
          {
            name: "环比上升",
            type: "bar",
            stack: "Total",
            barWidth: "10px",
            label: {
              show: true,
              position: "bottom",
            },
            itemStyle: {
              color: "red",
            },
            data: this.chartConfigData.series[2].data,
          },
          // 下降数据
          {
            name: "环比下降",
            type: "bar",
            stack: "Total",
            barWidth: "10px",
            label: {
              show: true,
              position: "top",
            },
            itemStyle: {
              color: "#37c6f8",
            },

            data: this.chartConfigData.series[3].data,
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
#lineChart {
  height: 100%;
  width: 100%;
}
</style>