<template>
  <div class="birthdayManage">
    <div class="content">
      <el-table :data="curTableData" style="width: 100%">
        <!-- 名称 -->
        <el-table-column label="名字" prop="name">
          <template slot-scope="scope">
            {{ getItemName(scope.row) }}
          </template>
        </el-table-column>

        <!-- 年龄 -->
        <el-table-column label="生日" width="120px">
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
        <el-table-column width="70px" label="操作" align="right">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <AddDialog @save="saveCallback" />
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
      let time = curDateItem.format("MM-DD");

      // 只要大于0, 即过了生日
      if (thatDay - curDay > 0) {
        time += `(${thatYear - curYear}岁)`;
      } else {
        time += `(${thatYear - curYear - 1}岁)`;
      }

      // 检查日期是否过了今日
      return time;
    },
    saveCallback() {
      this.queryBirthdayManage();
    },
  },
  components: { AddDialog }
};
</script>

<style scoped lang="scss">
.content {
  flex: 1;
  overflow: auto;
  padding-bottom: 40px;
}

.birthdayManage {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
