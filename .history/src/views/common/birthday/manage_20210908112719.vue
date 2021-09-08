<template>
  <div class="">
    <el-table size="mini" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="birthdayTime" label="生日"></el-table-column>
      <el-table-column prop="address" label="性别"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
    <el-button size="mini" class="addBtn" type="primary">新增</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.addBtn {
  width: 100%;
  height: 30px;
}
</style>
