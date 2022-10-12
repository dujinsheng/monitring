<!--
 * @Date: 2022-10-11 09:55:29
 * @LastEditors: 顾森
 * @LastEditTime: 2022-10-12 18:03:09
 * @FilePath: \22年10月9日中科三清面试demo\monitoring\src\components\table\SortTable.vue
-->
<template>
  <div class="sortTable">
    <div class="tableTitle">
      <i class="iconfont icon-biaoge"></i>甘肃省{{ pastTime }}日{{
        contaminants
      }}变化趋势
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
    >
      <el-table-column label="" width="65">
        <template slot-scope="scope">
          <el-radio
            class="radio"
            v-model="templateSelection"
            :label="scope.row.city"
            @change="singleElection(scope.row.city)"
            >&nbsp;</el-radio
          >
        </template>
      </el-table-column>
      <el-table-column
        :prop="tableInitData.length ? tableInitData[0].prop : ''"
        :label="tableInitData.length ? tableInitData[0].label : ''"
      ></el-table-column>
      <el-table-column
        :label="tableInitData.length ? tableInitData[1].label : ''"
      >
        <template slot-scope="scope"
          ><div :class="defineFunctionClassName(scope.row)">
            {{ scope.row.city }}
          </div></template
        >
      </el-table-column>
      <el-table-column
        :prop="tableInitData.length ? tableInitData[2].prop : ''"
        :label="tableInitData.length ? tableInitData[2].label : ''"
      ></el-table-column>
      <el-table-column
        :prop="tableInitData.length ? tableInitData[3].prop : ''"
        :label="tableInitData.length ? tableInitData[3].label : ''"
      ></el-table-column>
      <el-table-column
        :label="tableInitData.length ? tableInitData[4].label : ''"
      >
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
      <el-table-column
        :label="tableInitData.length ? tableInitData[5].label : ''"
      >
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
  props: {
    tableDataFromTotal: {
      type: Object,
      default: () => {
        return null;
      },
    },
    pastTime: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // 表格数据
      tableData: [],
      // 这项数据用于配置表格的表头
      tableInitData: [],
      // 表格被选中的行
      templateSelection: "",
      // 提示信息
      tipInformation: "",
      // 下面两个变量用于表格标题
      contaminants: "",
    };
  },
  computed: {},
  watch: {
    tableDataFromTotal: {
      // eslint-disable-next-line
      handler(n, o) {
        this.contaminants = n.tableData[0].mainContaminants;
        this.templateSelection = n.templateSelection;
        this.tableData = n.tableData;
        this.tableInitData = n.tableInitData;
      },
    },
  },
  created() {
    this.$bus.$on("translategetContaminants", this.getContaminants);
  },
  mounted() {},
  methods: {
    // 表格单选功能
    singleElection(city) {
      this.templateSelection = city;
      this.$bus.$emit("translategetCity", city);
    },
    // 定义一个函数，用来设置表格数据得背景颜色
    defineFunctionClassName(row) {
      console.log(row)
      let data = row.AQI;
      if (data < 30) {
        return "hierarchyOne";
      } else if (data < 50) {
        return "hierarchyTwo";
      } else {
        return "hierarchythree";
      }
    },
    getContaminants(mainContaminants) {
      // 根据全局事件总线接受数据
      this.contaminants = mainContaminants;
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
.hierarchythree {
  background-color: #f87914;
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