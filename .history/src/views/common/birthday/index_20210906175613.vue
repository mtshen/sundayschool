<template>
  <div>
    <template>
      <el-row :gutter="20">
        <el-col :span="6">本月生日: X人</el-col>
        <el-col :span="6">
          本周生日: X人
        </el-col>
        <el-col :span="6">今日生日: X人</el-col>
      </el-row>
      <el-table size="mini" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" sortable>
          <template slot-scope="scope">
            <el-button type="text" size="mini">{{ getNameItem(scope.row) }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="birthdayTime" label="生日" sortable></el-table-column>
        <el-table-column prop="address" label="年龄" sortable></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      tableData: [
        {
          name: '贺佳勒',
          nickName: '乐乐',
          birthdayTime: '2020-09-06',
          gender: '0',
        },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    getNameItem({ name, nickName }) {
      let rtnName = name;
      if (nickName) {
        rtnName += `(${nickName})`;
      }
      return rtnName;
    },
  },
  components: {},
};
</script>

<style scoped lang="scss"></style>
