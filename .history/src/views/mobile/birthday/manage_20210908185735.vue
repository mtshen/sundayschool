<template>
  <div class="birthdayManage">
    <div class="content" v-show="!popupVisible">
      <el-table :data="curTableData" style="width: 100%">
        <!-- 名称 -->
        <el-table-column label="名字" prop="name">
          <template slot-scope="scope">
            {{ getItemName(scope.row) }}
          </template>
        </el-table-column>

        <!-- 年龄 -->
        <el-table-column label="年龄" width="150px">
          <template slot-scope="scope">
            {{ getAgeName(scope.row) }}
          </template>
        </el-table-column>

        <!-- 性别 -->
        <el-table-column label="性别">
          <template slot-scope="scope">
            {{ ["", "男", "女"][scope.row.gender] }}
          </template>
        </el-table-column>

        <!-- 菜单 -->
        <el-table-column width="150px" label="操作" align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div></div>
    <el-button v-show="!popupVisible" size="mini" class="addBtn" type="primary" @click="addItem"
      >新增</el-button
    >
    <AddDialog v-show="popupVisible" />
  </div>
</template>

<script>
import { queryBirthdayManage, removeBirthdayManage } from "@/api/birthday";
import AddDialog from "./add.vue";
import dayjs from "dayjs";

export default {
  props: {},
  data() {
    return {
      search: "",
      tableData: [],
      popupVisible: false
    };
  },
  computed: {
    curTableData() {
      const { tableData, search } = this;
      return search
        ? tableData.filter(item => {
            const { nickName, name } = item;
            return (nickName || "").includes(search) || name.includes(search);
          })
        : tableData;
    }
  },

  async created() {
    await this.queryBirthdayManage();
  },
  mounted() {},
  watch: {},
  methods: {
    async queryBirthdayManage() {
      const { data } = await queryBirthdayManage();
      this.tableData = data;
    },
    addItem() {
      this.popupVisible = true;
    },
    handleDelete(row) {
      removeBirthdayManage({ id: row.id }).then(({ code, data }) => {
        if (!code) {
          this.queryBirthdayManage();
        }
      });
    },

    getItemName(row) {
      let name = row.name;
      if (row.nickName) {
        name += `(${row.nickName})`;
      }
      return name;
    },
    getAgeName(row) {
      const curDateItem = dayjs(row.birthdayTime);
      const thatDateItem = dayjs();
      const curYear = curDateItem.year();
      const thatYear = thatDateItem.year();
      const curDay = curDateItem.dayOfYear();
      const thatDay = thatDateItem.dayOfYear();
      let time = curDateItem.format("YYYY-MM-DD");

      // 只要大于0, 即过了生日
      if (thatDay - curDay > 0) {
        time += `(${thatYear - curYear}岁)`;
      } else {
        time += `(${thatYear - curYear - 1}岁)`;
      }
      // 检查日期是否过了今日
      return time;
    }
  },
  components: { AddDialog }
};
</script>

<style scoped lang="scss">
.addBtn {
  width: 100%;
  height: 40px;
  border-radius: 0px;
}

.content {
  flex: 1;
  overflow: auto;
}

.birthdayManage {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
