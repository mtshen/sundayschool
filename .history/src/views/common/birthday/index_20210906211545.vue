<template>
  <div>
    <template>
      <el-row class="rowItem" :gutter="20">
        <el-col class="startItem" :xs="24" :md="12" :lg="8"><BirthdayCred title="本月生日" value="1" color="#cad9fd" /></el-col>
        <el-col :xs="24" :md="12" :lg="8"><BirthdayCred title="本周生日" value="1" color="#ba9dde" /></el-col>
        <el-col class="endItem" :xs="24" :md="12" :lg="8"><BirthdayCred title="本日生日" value="1" color="#eb746e" /></el-col>
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
import BirthdayCred from '@/components/birthdayCred/index.vue';

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
  components: { BirthdayCred },
};
</script>

<style scoped lang="scss">
.rowItem {
  margin-left: 0px !important;
  margin-right: 0px !important;
  .startItem {
    padding-left: 20px !important;
  }
  .endItem {
    padding-right: 20px !important;
  }
}
</style>
