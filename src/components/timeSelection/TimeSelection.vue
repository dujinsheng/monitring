<!--
 * @Date: 2022-10-12 00:26:07
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 06:24:25
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\components\timeSelection\TimeSelection.vue
-->
<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="时间选择器" name="1">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="小时" name="hour">
            <!-- 在这里放选择时的 -->
            <el-date-picker
              v-model="time.hour.startHour"
              type="datetime"
              picker-options="yyyy-MM-dd HH"
              format="yyyy-MM-dd HH"
              placeholder="选择日期时间"
            >
            </el-date-picker>
            <el-date-picker
              v-model="time.hour.endHour"
              type="datetime"
              picker-options="yyyy-MM-dd HH"
              format="yyyy-MM-dd HH"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-tab-pane>
          <el-tab-pane label="滚动" disabled></el-tab-pane>
          <el-tab-pane label="日" name="day">
            <!-- 在这里放选择日的 -->
            <el-date-picker
              v-model="time.day.startDay"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
            <el-date-picker
              v-model="time.day.endDay"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-tab-pane>
          <el-tab-pane label="月" name="month">
            <!-- 在这里放选择月的 -->
            <el-date-picker
              v-model="time.month.startMonth"
              type="month"
              placeholder="选择月"
            >
            </el-date-picker>
            <el-date-picker
              v-model="time.month.endMonth"
              type="month"
              placeholder="选择月"
            >
            </el-date-picker>
          </el-tab-pane>
          <el-tab-pane label="季" name="quater">
            <!-- 在这里放选择季的 -->
            <!-- <DefineQuater></DefineQuater> -->
            <div style="width: 198px !important">
              <el-cascader
                v-model="time.quater.startQuater"
                :options="quaterOptions"
                @change="quaterChange"
              ></el-cascader>
              <el-cascader
                v-model="time.quater.endQuater"
                :options="quaterOptions"
                @change="quaterChange"
              ></el-cascader>
            </div>
          </el-tab-pane>
          <el-tab-pane label="年" name="year">
            <!-- 在这里放选择年的 -->
            <el-date-picker
              v-model="time.year.startYear"
              type="year"
              placeholder="选择年"
            >
            </el-date-picker>
            <el-date-picker
              v-model="time.year.endYear"
              type="year"
              placeholder="选择年"
            >
            </el-date-picker>
          </el-tab-pane>
        </el-tabs>
        <!-- 搜索按钮 -->
        <el-button type="primary" icon="el-icon-search" class="searchButton"
          >搜索</el-button
        >
      </el-collapse-item>
      <el-collapse-item title="污染指标" name="2">
        <!-- 第二个区域 -->
        <div class="mainContaminants">
          <el-radio v-model="mainContaminants" label="AQI" :border="true"
            >AQI</el-radio
          >
          <el-radio v-model="mainContaminants" label="PM2.5" :border="true"
            >PM2.5</el-radio
          >
          <el-radio v-model="mainContaminants" label="PM10" :border="true"
            >PM10</el-radio
          >
          <el-radio v-model="mainContaminants" label="O2" :border="true"
            >O2</el-radio
          >
          <el-radio v-model="mainContaminants" label="NO2" :border="true"
            >NO2</el-radio
          >
          <el-radio v-model="mainContaminants" label="CO" :border="true"
            >CO</el-radio
          >
          <el-radio v-model="mainContaminants" label="SO2" :border="true"
            >SO2</el-radio
          >
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="timeBox">
      <div class="time">
        <div class="one" @click="showChangePassTime">
          <i class="iconfont icon-shangyishou"></i>上一时刻
        </div>
        <div class="two" @click="showContinuesTime">
          <i class="iconfont icon-bofang"></i>
        </div>
        <div class="three" @click="showFutureTime">
          下一时刻<i class="iconfont icon-xiayishou"></i>
        </div>
      </div>
      <div class="onlyTime">
        <el-radio
          style="width: 100%"
          v-model="onlyTime"
          :label="item"
          :border="true"
          v-for="item, index in onlyTimeOption"
          :key="index"
          >{{item}}</el-radio
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeSelection",
  data() {
    return {
      // 用于折叠两个区域
      activeNames: ["1", "2"],
      // 用于第一个区域初始选项
      activeName: "hour",
      // 第一个区域数据收集
      time: {
        hour: {
          startHour: "",
          endHour: "",
        },
        day: {
          startDay: "",
          endDay: "",
        },
        month: {
          startMonth: "",
          endMonth: "",
        },
        quater: {
          startQuater: "",
          endQuater: "",
        },
        year: {
          startYear: "",
          endYear: "",
        },
      },
      // 第二个区域数据收集
      mainContaminants: "AQI",
      // 第三个区域
      onlyTime: '',
      // 季选择器的选项
      quaterOptions: [
        {
          value: "2019",
          label: "2019",
          children: [
            {
              value: "第一季度",
              label: "第一季度",
            },
            {
              value: "第二季度",
              label: "第二季度",
            },
            {
              value: "第三季度",
              label: "第三季度",
            },
            {
              value: "第四季度",
              label: "第四季度",
            },
          ],
        },
        {
          value: "2020",
          label: "2020",
          children: [
            {
              value: "第一季度",
              label: "第一季度",
            },
            {
              value: "第二季度",
              label: "第二季度",
            },
            {
              value: "第三季度",
              label: "第三季度",
            },
            {
              value: "第四季度",
              label: "第四季度",
            },
          ],
        },
        {
          value: "2021",
          label: "2021",
          children: [
            {
              value: "第一季度",
              label: "第一季度",
            },
            {
              value: "第二季度",
              label: "第二季度",
            },
            {
              value: "第三季度",
              label: "第三季度",
            },
            {
              value: "第四季度",
              label: "第四季度",
            },
          ],
        },
        {
          value: "2022",
          label: "2022",
          children: [
            {
              value: "第一季度",
              label: "第一季度",
            },
            {
              value: "第二季度",
              label: "第二季度",
            },
            {
              value: "第三季度",
              label: "第三季度",
            },
            {
              value: "第四季度",
              label: "第四季度",
            },
          ],
        },
        {
          value: "2022",
          label: "2022",
          children: [
            {
              value: "第一季度",
              label: "第一季度",
            },
            {
              value: "第二季度",
              label: "第二季度",
            },
            {
              value: "第三季度",
              label: "第三季度",
            },
            {
              value: "第四季度",
              label: "第四季度",
            },
          ],
        },
      ],
      // onlyTime选择器选项
      onlyTimeOption: [
        '2021年8月',
        "2021年9月",
        "2021年10月",
        "2021年11月",
        "2021年12月",
        "2022年8月",
        "2022年9月",
        "2022年10月"
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    quaterChange() {},
    // 点击上一时刻触发
    showChangePassTime() {
      
    },
    // 点击播放触发
    showContinuesTime() {

    },
    // 点击下一时刻触发
    showFutureTime() {
      
    }
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-collapse-item__header,
.el-collapse-item__heade .is-active {
  background-color: #e3e8eb;
  height: 30px;
}
::v-deep .el-collapse-item__content {
  padding: 0px;
}
::v-deep .el-collapse-item {
  width: 100%;
}
::v-deep .el-tabs__nav-wrap.is-scrollable {
  padding: 0px;
}
::v-deep .el-tabs__item {
  padding: 0px !important;
}
::v-deep .el-tabs__nav-scroll {
  border: 1px solid grey;
  width: 94%;
  margin: auto;
  margin-top: 5px;
}
::v-deep .el-tabs--card > .el-tabs__header .el-tabs__nav {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
::v-deep .el-tabs--card > .el-tabs__header .el-tabs__item {
  height: 30px;
  line-height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
}
::v-deep .el-tabs__item.is-disabled {
  color: black;
}
.searchButton {
  height: 25px;
  width: 60px;
  font-size: 15px;
  line-height: 25px;
  padding: 0px;
  background-color: #00a7d0;
  color: white;
  margin-left: 127px;
}
.mainContaminants {
  margin: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
::v-deep .el-radio.is-bordered {
  margin: 5px 0 0 0 !important;
  padding: 0px;
  height: 30px;
  width: 60px;
  line-height: 30px;
  text-align: center;
}
::v-deep .el-radio__label {
  padding: 0px;
}
::v-deep .el-input--suffix .el-input__inner {
  width: 90% !important;
  margin-left: 5px !important;
}
.timeBox {
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  .time {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid grey;
    background-color: #e3e8eb;
    i {
      color: #00a7d0;
    }
    div {
      height: 20px;
      font-size: 5px;
      line-height: 20px;
    }
    div:nth-child(1) {
      border-right: 1px solid grey;
    }
    div:nth-child(2) {
      border-right: 1px solid grey;
    }
  }
}
.timeBox .time div[data-v-49717aef] {
  width: 100px;
}
.onlyTime {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 161px;
  .el-radio .is-bordered {
    width: 100%;
    margin: 0px;
  }
}
</style>