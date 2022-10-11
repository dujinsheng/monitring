<!--
 * @Date: 2022-10-09 19:07:35
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 00:48:43
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\views\DataMonitoring.vue
-->
<template>
  <div class="container">
    <!-- container-left -->
    <div class="container-left">
      <div class="mapAndTable">
        <div class="map">
          <GansuMap :mapData="[1, 2, 3]"></GansuMap>
        </div>
        <div class="table">
            <SortTable></SortTable>
        </div>
      </div>
      <div class="lineChartTitle">
        <h5>2022-09-25 09时至2022-09-26 08时 兰州市 AQI变化趋势</h5>
        <el-radio-group v-model="compare">
          <el-radio-button label="同比"></el-radio-button>
          <el-radio-button label="环比" class="button-right"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="lineChart">
        <LineChart></LineChart>
      </div>
    </div>
    <!-- container-right -->
    <div class="container-right">
      <TimeSelection></TimeSelection>
    </div>
  </div>
</template>

<script>
import GansuMap from "@/components/map/GansuMap.vue";
import LineChart from "@/components/chart/LineChart.vue";
import SortTable from '@/components/table/SortTable.vue'
import TimeSelection from '@/components/timeSelection/TimeSelection.vue'
export default {
  name: "DataMonitoring",
  components: {
    GansuMap,
    LineChart,
    SortTable,
    TimeSelection
  },
  data() {
    return {
      array: [],
      compare: "同比",
    };
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