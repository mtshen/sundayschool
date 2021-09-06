<template>
  <div>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="生日"></el-table-column>
        <el-table-column prop="address" label="年龄"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      tableData: [],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss"></style>
