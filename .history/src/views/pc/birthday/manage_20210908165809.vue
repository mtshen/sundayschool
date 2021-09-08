<template>
  <div class="content">
    <div class="btns">
      <el-button size="mini" type="primary" @click="addItem">添加成员</el-button>
    </div>
    <div class="table">
      <el-table :data="curTableData" style="width: 100%">
        <el-table-column label="名字" prop="name">
          <template slot-scope="scope">
            {{ getItemName(scope.row) }}
          </template>
        </el-table-column>
        <el-table-column label="年龄">1岁(2020-01-01)</el-table-column>
        <el-table-column label="性别">
          <template slot-scope="scope">
            {{ ["", "男", "女"][scope.row.gender] }}
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope>
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { queryBirthdayManage, removeBirthdayManage } from "@/api/birthday";
birthdayTime: "2019-06-26T16:00:00.000Z";
gender: 2;
export default {
  props: {},
  data() {
    return {
      search: "",
      tableData: []
    };
  },
  computed: {
    curTableData() {
      const { tableData } = this;
      return tableData.filter(item => {});
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
    addItem() {},
    handleEdit(row) {},
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
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .btns {
    text-align: left;
    padding: 10px;
  }
}
</style>
