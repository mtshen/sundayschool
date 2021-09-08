<template>
  <div class="content">
    <div class="btns">
      <el-button size="mini" type="primary" @click="addItem">添加</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { queryBirthdayManage } from "@/api/birthday";

export default {
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  computed: {},

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
    addItem() {}
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
}
</style>
