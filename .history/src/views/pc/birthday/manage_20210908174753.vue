<template>
  <div class="content">
    <div class="btns">
      <el-button size="mini" type="primary" @click="addItem">添加成员</el-button>
    </div>
    <div class="table">
      <el-table :data="curTableData" style="width: 100%">
        <!-- 名称 -->
        <el-table-column label="名字" prop="name">
          <template slot-scope="scope">
            {{ getItemName(scope.row) }}
          </template>
        </el-table-column>

        <!-- 年龄 -->
        <el-table-column label="年龄">
          <template slot-scope="scope">
            {{ ["", "男", "女"][scope.row.gender] }}
          </template>
        </el-table-column>

        <!-- 性别 -->
        <el-table-column label="性别">
          <template slot-scope="scope">
            {{ ["", "男", "女"][scope.row.gender] }}
          </template>
        </el-table-column>

        <!-- 菜单 -->
        <el-table-column align="right">
          <template slot="header">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>

          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <EditDialog :visible.sync="dialogVisible" :initVal="curVal" v-if="dialogVisible" @save="save" />
  </div>
</template>

<script>
import { queryBirthdayManage, removeBirthdayManage } from "@/api/birthday";
import EditDialog from "./editDialog.vue";

export default {
  props: {},
  data() {
    return {
      search: "",
      tableData: [],
      curVal: null,
      dialogVisible: false,
    };
  },
  computed: {
    curTableData() {
      const { tableData, search } = this;
      return tableData.filter(item => {
        const { nickName, name } = item;
        return (nickName || '').includes(search) || name.includes(search);
      });
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
      this.curVal = null;
      this.dialogVisible = true;
    },
    handleEdit(row) {
      this.curVal = row;
      this.dialogVisible = true;
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
    save() {
      this.queryBirthdayManage();
    },
  },
  components: { EditDialog }
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
