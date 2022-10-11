<!--
 * @Date: 2022-10-11 09:55:29
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 06:44:06
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\components\table\SortTable.vue
-->
<template>
  <div class="sortTable">
    <div class="tableTitle">
      <i class="iconfont icon-biaoge"></i>甘肃省2022-10-07日PM2.5变化趋势
      <el-popover
        placement="top-start"
        title="小时/滚动24小时"
        width="200"
        trigger="hover"
        :content="tipInformation"
      >
        <el-button slot="reference"
          ><i class="iconfont icon-tishi"></i
        ></el-button>
      </el-popover>
    </div>
    <el-table
      :data="tableData"
      tooltip-effect="dark"
      :border="true"
      style="width: 100%"
      @row-click="singleElection"
    >
      <el-table-column label="" width="65">
        <template slot-scope="scope">
          <el-radio
            class="radio"
            v-model="templateSelection"
            :label="scope.row.city"
            >&nbsp;</el-radio
          >
        </template>
      </el-table-column>
      <el-table-column
        :prop="this.tableInitData[0].prop"
        :label="this.tableInitData[0].label"
      ></el-table-column>
      <el-table-column :label="this.tableInitData[1].label">
        <template slot-scope="scope"
          ><div :class="defineFunctionClassName(scope.row)">
            {{ scope.row.city }}
          </div></template
        >
      </el-table-column>
      <el-table-column
        :prop="this.tableInitData[2].prop"
        :label="this.tableInitData[2].prop"
      ></el-table-column>
      <el-table-column
        :prop="this.tableInitData[3].prop"
        :label="this.tableInitData[3].label"
      ></el-table-column>
      <el-table-column :label="this.tableInitData[4].label">
        <template slot-scope="scope"
          ><div>
            <i
              class="iconfont icon-xiangxiajiantoucuxiao"
              v-if="scope.row.compareOne < 0"
            ></i
            ><i
              class="iconfont icon-xiangshangjiantoucuxiao"
              v-if="scope.row.compareOne > 0"
            ></i
            >{{ scope.row.compareOne }}
          </div></template
        >
      </el-table-column>
      <el-table-column :label="this.tableInitData[5].label">
        <template slot-scope="scope"
          ><div>
            <i
              class="iconfont icon-xiangxiajiantoucuxiao"
              v-if="scope.row.compareTwo < 0"
            ></i
            ><i
              class="iconfont icon-xiangshangjiantoucuxiao"
              v-if="scope.row.compareTwo > 0"
            ></i
            >{{ scope.row.compareTwo }}
          </div></template
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "SortTable",
  data() {
    return {
      // 表格数据
      tableData: [
        {
          sort: 1,
          city: "陇南市",
          PM: 10,
          mainContaminants: "PM2.5",
          compareOne: 2,
          compareTwo: -1,
        },
        {
          sort: 2,
          city: "甘南州",
          PM: 12,
          mainContaminants: "PM2.5",
          compareOne: 2,
          compareTwo: -1,
        },
        {
          sort: 3,
          city: "兰州",
          PM: 8,
          mainContaminants: "PM2.5",
          compareOne: 5,
          compareTwo: 0,
        },
        {
          sort: 4,
          city: "平凉",
          PM: 25,
          mainContaminants: "无",
          compareOne: 0,
          compareTwo: 8,
        },
        {
          sort: 5,
          city: "武威",
          PM: 8,
          mainContaminants: "PM2.5",
          compareOne: 5,
          compareTwo: 0,
        },
        {
          sort: 6,
          city: "张掖",
          PM: 25,
          mainContaminants: "PM2.5",
          compareOne: 0,
          compareTwo: 8,
        },
        {
          sort: 7,
          city: "嘉峪关",
          PM: 8,
          mainContaminants: "PM2.5",
          compareOne: 5,
          compareTwo: 0,
        },
        {
          sort: 8,
          city: "庆阳",
          PM: 25,
          mainContaminants: "PM2.5",
          compareOne: 0,
          compareTwo: 8,
        },
        {
          sort: 9,
          city: "天水",
          PM: 8,
          mainContaminants: "PM2.5",
          compareOne: 5,
          compareTwo: 0,
        },
        {
          sort: 10,
          city: "金昌",
          PM: 25,
          mainContaminants: "PM2.5",
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
          prop: "PM",
          label: "PM2.5",
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
      // 提示信息
      tipInformation: "",
    };
  },
  mounted() {},
  methods: {
    // 表格单选功能
    singleElection(row) {
      this.templateSelection = row.city;
    },
    // 定义一个函数，用来设置表格数据得背景颜色
    defineFunctionClassName(row) {
      if (row.PM <= 10) {
        return "hierarchyOne";
      }
      return "hierarchyTwo";
    },
  },
};
</script>

<style lang="scss" scoped>
.sortTable {
  height: 90%;
  width: 100%;
}
::v-deep .el-table {
  height: 100%;
}
::v-deep .el-table__header-wrapper {
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  table {
    border-color: red;
  }
}
::v-deep .el-table--border th.el-table__cell {
  padding: 0px;
  background-color: #deedfb;
  text-align: center;
  .cell {
    color: black;
  }
}
::v-deep .el-table td.el-table__cell {
  padding: 0px;
}
::v-deep .el-table td.el-table__cell div {
  text-align: center;
}
.hierarchyOne {
  background-color: #009300;
  color: black;
}
.hierarchyTwo {
  background-color: #e9dc0f;
  color: black;
}
.icon-xiangxiajiantoucuxiao {
  color: #189bc6;
}
.icon-xiangshangjiantoucuxiao {
  color: red;
}
::v-deep .el-checkbox__inner {
  border-radius: 100% !important;
}
::v-deep .el-table__header-wrapper .el-checkbox {
  display: none;
}
.headCheckNone {
  display: none !important;
}
.tableTitle {
  height: 10%;
  line-height: 28px;
  color: black;
  font-weight: 700;
  position: relative;
  .icon-biaoge {
    margin-right: 10px;
    color: #189bc6;
  }
  .icon-tishi {
    position: absolute;
    right: 0px;
    top: 5px;
    color: #189bc6;
  }
}
.el-popover__reference-wrapper .el-button {
  position: absolute;
  right: 0px;
  top: 5px;
  border: none !important;
}
</style>