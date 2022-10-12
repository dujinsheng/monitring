/*
 * @Date: 2022-10-12 08:46:45
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 17:42:14
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\mock\initData.js
 */
let Mock = require("mockjs")
Mock.mock('http://zhongkesanqing/get/initData', function () {
  return {
    map: {
      min: 10,
      max: 80,
      data: [{ name: "兰州市", value: 34 },
      { name: "嘉峪关市", value: 56 },
      { name: "白银市", value: 23 },
      { name: "金昌市", value: 17 },
      { name: "天水市", value: 55 },
      { name: "武威市", value: 22 },
      { name: "张掖市", value: 19 },
      { name: "平凉市", value: 34 },
      { name: "酒泉市", value: 63 },
      { name: "庆阳市", value: 55 },
      { name: "定西市", value: 23 },
      { name: "陇南市", value: 11 },
      { name: "临夏回族自治州", value: 28 },
      { name: "甘南藏族自治州", value: 40 },],
    },
    table: {
      tableData: [
        {
          sort: 1,
          city: "陇南市",
          AQI: 11,
          mainContaminants: "AQI",
          compareOne: 2,
          compareTwo: -1,
        },
        {
          sort: 2,
          city: "甘南州",
          AQI: 12,
          mainContaminants: "AQI",
          compareOne: 2,
          compareTwo: -1,
        },
        {
          sort: 3,
          city: "兰州",
          AQI: 34,
          mainContaminants: "AQI",
          compareOne: 5,
          compareTwo: 0,
        },
        {
          sort: 4,
          city: "平凉",
          AQI: 34,
          mainContaminants: "无",
          compareOne: 0,
          compareTwo: 8,
        },
        {
          sort: 5,
          city: "武威",
          AQI: 22,
          mainContaminants: "AQI",
          compareOne: 5,
          compareTwo: 0,
        },
        {
          sort: 6,
          city: "张掖",
          AQI: 19,
          mainContaminants: "AQI",
          compareOne: 0,
          compareTwo: 8,
        },
        {
          sort: 7,
          city: "嘉峪关",
          AQI: 56,
          mainContaminants: "AQI",
          compareOne: 5,
          compareTwo: 0,
        },
        {
          sort: 8,
          city: "庆阳",
          AQI: 55,
          mainContaminants: "AQI",
          compareOne: 0,
          compareTwo: 8,
        },
        {
          sort: 9,
          city: "天水",
          AQI: 55,
          mainContaminants: "AQI",
          compareOne: 5,
          compareTwo: 0,
        },
        {
          sort: 10,
          city: "金昌",
          AQI: 17,
          mainContaminants: "AQI",
          compareOne: 0,
          compareTwo: 8,
        },
      ],
      // 这项数据用于配置表格的表头
      tableInitData: [
        {
          prop: "sort",
          label: "排名",
        },
        {
          prop: "city",
          label: "城市",
        },
        {
          prop: "AQI",
          label: "AQI",
        },
        {
          prop: "mainContaminants",
          label: "主要污染物",
        },
        {
          prop: "compareOne",
          label: "环比",
        },
        {
          prop: "compareTwo",
          label: "同比",
        },
      ],
      // 表格被选中的行
      templateSelection: "兰州",
    },
    lineChart: {
      // 小时数据
      hourData: {
        xAxis: {
          axisLabel: {
            interval: 1,
            fontSize: "8px",
            padding: [0, 0, 0, 20],
            align: 'center',
            width: '50px',

          },
          // 改变图标X轴坐标
          data: [
            "2022年09月25日 09时",
            "2022年09月25日 10时",
            "2022年09月25日 11时",
            "2022年09月25日 12时",
            "2022年09月25日 13时",
            "2022年09月25日 14时",
            "2022年09月25日 15时",
            "2022年09月25日 16时",
            "2022年09月25日 17时",
            "2022年09月25日 18时",
            "2022年09月25日 19时",
            "2022年09月25日 20时",
            "2022年09月25日 21时",
            "2022年09月25日 22时",
            "2022年09月25日 23时",
            "2022年09月25日 24时",
            "2022年09月26日 01时",
            "2022年09月26日 02时",
            "2022年09月26日 03时",
            "2022年09月26日 04时",
            "2022年09月26日 05时",
            "2022年09月26日 06时",
            "2022年09月26日 07时",
            "2022年09月26日 08时",
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
    }
  }
})