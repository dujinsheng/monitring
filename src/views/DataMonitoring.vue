<!--
 * @Date: 2022-10-09 19:07:35
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 16:33:52
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\views\DataMonitoring.vue
-->
<template>
  <div class="container">
    <!-- container-left -->
    <div class="container-left">
      <div class="mapAndTable">
        <div class="map">
          <GansuMap :mapData="mapData"></GansuMap>
        </div>
        <div class="table">
          <SortTable
            :tableDataFromTotal="tableData"
            :pastTime="pastTime"
          ></SortTable>
        </div>
      </div>
      <div class="lineChartTitle">
        <!-- 这个标题始终为 LLLL时至HHHH时 city item变化趋势 -->
        <h5>
          {{ pastTime }}至{{ fetureTime }} {{ city }} {{ contaminants }}变化趋势
        </h5>
        <el-radio-group
          v-model="compare"
          @change="updateLineChartDataByChangMode"
        >
          <el-radio-button label="同比"></el-radio-button>
          <el-radio-button label="环比" class="button-right"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="lineChart">
        <LineChart :lineChartData="lineChartData"></LineChart>
      </div>
    </div>
    <!-- container-right -->
    <div class="container-right">
      <TimeSelection :lineChartData="lineChartData"></TimeSelection>
    </div>
  </div>
</template>
  
<script>
import GansuMap from "@/components/map/GansuMap.vue";
import LineChart from "@/components/chart/LineChart.vue";
import SortTable from "@/components/table/SortTable.vue";
import TimeSelection from "@/components/timeSelection/TimeSelection.vue";
import { initMapAndTableAndChartAndSelection } from "@/api/initData";
/* eslint-disable */ 
import {
  updateThreeBycontaminants,
  updateTableByonlyTime,
  updateLineBycity,
  updateLineBychangeMode,
  updateThreeByhour,
  updateThreeByday,
  updateThreeBymonth,
  updateThreeByquater,
  updateThreeByyear,
} from "@/api/updateData";
export default {
  name: "DataMonitoring",
  components: {
    GansuMap,
    LineChart,
    SortTable,
    TimeSelection,
  },
  data() {
    return {
      array: [],
      compare: "同比",
      // 折线图标题变量
      pastTime: "",
      fetureTime: "",
      city: "",
      contaminants: "",
      // 传递给表格组件的数据
      tableData: null,
      // 传递给地图组件的数据
      mapData: null,
      // 传递给折线图组件的数据
      lineChartData: null,
    };
  },
  created() {
    // 切换时间，城市，污染类的时候需要在下面这三个回调函数中对于地图，表格，折线图数据进行更新
    this.$bus.$on("translategetContaminants", this.getContaminants);
    this.$bus.$on("translategetOnlyTime", this.getOnleTime);
    this.$bus.$on("translategetCity", this.getCity);
    // 当切换时间格式的时候需要在下面的这五个回调函数中对于地图，表格，折线图Title和数据进行更新
    this.$bus.$on("translateHourTime", this.updateDataByHour);
    this.$bus.$on("translateDayTime", this.updateDataByDay);
    this.$bus.$on("translateMonthTime", this.updateDataByMonth);
    this.$bus.$on("translateQuaterTime", this.updateDataByQuater);
    this.$bus.$on("translateYearTime", this.updateDataByYear);

    // 发送请求获取初始化数据
    initMapAndTableAndChartAndSelection()
      .then((res) => {
        if (res.status === 200) {
          this.mapData = res.data.map;
          this.lineChartData = res.data.lineChart.hourData;
          this.tableData = res.data.table;
          // 设置折线图标题
          this.pastTime = res.data.lineChart.hourData.xAxis.data[0];
          this.fetureTime =
            res.data.lineChart.hourData.xAxis.data[
              res.data.lineChart.hourData.xAxis.data.length - 1
            ];
          this.city = res.data.table.templateSelection;
          this.contaminants = res.data.table.tableData[0].mainContaminants;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
     
    getContaminants(Contaminants) {
      this.contaminants = Contaminants;
      // updateThreeBycontaminants(Contaminants)
      console.log('需要通过"Contaminants"发送请求更新地图，表格，折线图数据');
    },
    getOnleTime(onlyTime) {
      this.pastTime = onlyTime;
      // updateTableByonlyTime(onlyTime)
      console.log('需要通过"onlyTime"发送请求更新表格数据');
    },
    getCity(city) {
      this.city = city;
      // updateLineBycity(city)
      console.log('需要通过"city"发送请求更新折线图数据');
    },
    updateLineChartDataByChangMode() {
      // updateLineBychangeMode(this.compare)
      console.log(this.compare, "发送请求携带'比较方式'，更新折线图数据");
    },
    updateDataByHour(hour) {
      // updateThreeByhour(hour)
      console.log(hour, '需要通过"时"的选项发送请求更新数据');
    },
    updateDataByDay(day) {
      // updateThreeByday(day)
      console.log(day, '需要通过"天"的选项发送请求更新数据');
    },
    updateDataByMonth(month) {
      // updateThreeBymonth(month)
      console.log(month, '需要通过"月"的选项发送请求更新数据');
    },
    updateDataByQuater(quater) {
      // updateThreeByquater(quater)
      console.log(quater, '需要通过"季"的选项发送请求更新数据');
    },
    updateDataByYear(year) {
      // updateThreeByyear(year)
      console.log(year, '需要通过"年"的选项发送请求更新数据');
    },
  },
};
</script>

<style lang="scss" scoped>
$boxWidth: 1140px;
$boxRight: 200px;
.container {
  //   background-color: red;
  width: $boxWidth;
  height: 100%;
  margin-left: 50%;
  transform: translate(-50%);
  display: flex;
  .container-left {
    width: $boxWidth - $boxRight;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    .mapAndTable {
      display: flex;
      .map {
        width: ($boxWidth - $boxRight) * (34/100);
        height: ($boxWidth - $boxRight) * (34/100);
      }
      .table {
        height: ($boxWidth - $boxRight) * (34/100);
        margin-left: 5px;
        width: ($boxWidth - $boxRight) * (67/100) - 5px;
      }
    }
  }
  .container-right {
    height: 510px;
    width: $boxRight;
    background-color: #fefefe;
    border: 1px solid grey;
  }
}
.lineChartTitle {
  height: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  h5 {
    line-height: 30px;
  }
}
.lineChart {
  height: 200px;
}
.button-right {
  margin-left: 5px;
  border-left: 1px solid #dcdfe6;
  border-radius: 5px 5px 0 0;
}
::v-deep .el-radio-button {
  height: 20px;
  width: 50px;
}
::v-deep .el-radio-button__inner {
  height: 20px !important;
  width: 50px;
  text-align: center;
  padding: 0px;
  line-height: 20px !important;
}
</style>