<!--
 * @Date: 2022-10-12 00:26:07
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 17:35:24
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
              format="yyyy年MM月dd日 HH时"
              value-format="yyyy年MM月dd日 HH时"
              placeholder="选择日期时间"
            >
            </el-date-picker>
            <el-date-picker
              v-model="time.hour.endHour"
              type="datetime"
              picker-options="yyyy-MM-dd HH"
              format="yyyy年MM月dd日 HH时"
              value-format="yyyy年MM月dd日 HH时"
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
        <el-button
          @click="searchData"
          type="primary"
          icon="el-icon-search"
          class="searchButton"
          >搜索</el-button
        >
      </el-collapse-item>
      <el-collapse-item title="污染指标" name="2">
        <!-- 第二个区域 -->
        <div class="mainContaminants" v-bind:click="translateContaminants()">
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
        <div class="one" disabled @click="showChangePassTime">
          <i class="iconfont icon-shangyishou"></i>上一时刻
        </div>
        <div class="two" @click="showContinuesTime">
          <i class="iconfont icon-bofang"></i>
        </div>
        <div class="three" @click="showFutureTime">
          下一时刻<i class="iconfont icon-xiayishou"></i>
        </div>
      </div>
      <div class="onlyTime" v-bind:click="translateOnlyTime()">
        <el-radio
          style="width: 100%"
          v-model="onlyTime"
          :label="item"
          :border="true"
          v-for="(item, index) in onlyTimeOption"
          :key="index"
          >{{ item }}</el-radio
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
      onlyTime: "",
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
      onlyTimeOption: [],
      play: false,
      timer: null
    };
  },
  props: {
    lineChartData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  watch: {
    lineChartData: {
      // eslint-disable-next-line
      handler(n, o) {
        this.time.hour.startHour = n.xAxis.data[0];
        this.time.hour.endHour = n.xAxis.data[n.xAxis.data.length - 1];
        this.onlyTimeOption = n.xAxis.data;
        this.onlyTime = n.xAxis.data[0];
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    // eslint-disable-next-line
    handleChange(val) {
      // console.log(val);
    },
    // eslint-disable-next-line
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    quaterChange() {},
    // 点击上一时刻触发
    showChangePassTime() {
      let idx;
      this.onlyTimeOption.forEach((element, index) => {
        if (this.onlyTime === element) {
          idx = index;
        }
      });
      if (idx !== 0) {
        this.onlyTime = this.onlyTimeOption[idx - 1];
      }
    },
    // 点击播放触发
    showContinuesTime() {
      /* eslint-disable */ 
      this.play = !this.play
      if (this.play) {
          this.timer = setInterval(() => {
          let idx;
          this.onlyTimeOption.forEach((element, index) => {
            if (this.onlyTime === element) {
              idx = index;
            }
          });
          if (idx < this.onlyTimeOption.length - 1) {
            this.onlyTime = this.onlyTimeOption[idx + 1];
          }
        }, 1000);
      } else {
        clearInterval(this.timer)
      }
    },
    // 点击下一时刻触发
    showFutureTime() {
      let idx;
      this.onlyTimeOption.forEach((element, index) => {
        if (this.onlyTime === element) {
          idx = index;
        }
      });
      if (idx < this.onlyTimeOption.length - 1) {
        this.onlyTime = this.onlyTimeOption[idx + 1];
      }
    },
    translateContaminants() {
      this.$bus.$emit("translategetContaminants", this.mainContaminants);
    },
    translateOnlyTime() {
      this.$bus.$emit("translategetOnlyTime", this.onlyTime);
    },
    // 点击搜索按钮分五种情况进行查询地图，表格，折线图，以及时刻表的数据
    searchData() {
      switch (this.activeName) {
        case "hour":
          // 需要在这里对输入框进行逻辑校验
          this.$bus.$emit("translateHourTime", this.time.hour);
          // 还需要在这里更新我们的时刻列表
          break;
        case "day":
          // 需要在这里对输入框进行逻辑校验
          this.$bus.$emit("translateDayTime", this.time.day);
          // 还需要在这里更新我们的时刻列表
          break;
        case "month":
          // 需要在这里对输入框进行逻辑校验
          this.$bus.$emit("translateMonthTime", this.time.month);
          // 还需要在这里更新我们的时刻列表
          break;
        case "quater":
          // 需要在这里对输入框进行逻辑校验
          this.$bus.$emit("translateQuaterTime", this.time.quater);
          // 还需要在这里更新我们的时刻列表
          break;
        case "year":
          // 需要在这里对输入框进行逻辑校验
          this.$bus.$emit("translateYearTime", this.time.year);
          // 还需要在这里更新我们的时刻列表
          break;
      }
    },
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