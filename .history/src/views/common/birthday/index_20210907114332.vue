<template>
  <div>
    <template>
      <el-row class="rowItem" :gutter="20">
        <el-col class="item startItem" :xs="24" :md="12" :lg="8"><BirthdayCred title="本月生日" value="1" color="#cad9fd" /></el-col>
        <el-col class="item" :xs="24" :md="12" :lg="8"><BirthdayCred title="本周生日" value="1" color="#ba9dde" /></el-col>
        <el-col class="item endItem" :xs="24" :md="12" :lg="8"><BirthdayCred title="本日生日" value="1" color="#eb746e" /></el-col>
      </el-row>
      <el-table size="mini" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" sortable>
          <template slot-scope="scope">
            <el-button type="text" size="mini">{{ getNameItem(scope.row) }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="birthdayTime" label="生日" sortable></el-table-column>
        <el-table-column prop="address" label="性别"></el-table-column>
        <el-table-column prop="address" label="年龄" sortable></el-table-column>
        <el-table-column prop="address" label="星座"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import BirthdayCred from '@/components/birthdayCred/index.vue';
import day from "dayjs";

export default {
  props: {},
  data() {
    return {
      tableData: [
        {
          name: '贺佳勒',
          nickName: '乐乐',
          birthdayTime: '1630980629489',
          gender: '0',
        },
        {
          name: '贺佳勒1',
          nickName: '乐乐1',
          birthdayTime: '1630980629489',
          gender: '1',
        },
        {
          name: '贺佳勒2',
          nickName: '乐乐2',
          birthdayTime: '1630980629489',
          gender: '2',
        },
      ],
    };
  },
  computed: {
    curTableData() {
      const { tableData } = this;
      return tableData.map(item => {
        const itemData = { ...item };
        const curItemDay = day(item.birthdayTime);
        itemData.constellation = getConstellation(curItemDay.month(), curItemDay.day());
        return itemData;
      });
    },
    monthValue() {
      // 当前时间 + 1月 是否大于出生日期 + 当前岁 + 1
      day().add(1, 'month')
    },
  },
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
    // 查询星座
    getConstellation(m, d){ 
      const s="魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
      const arr=[20,19,21,21,21,22,23,23,23,23,22,22];
      return s.substr(m*2-(d<arr[m-1]?2:0),2);
    }
  },
  components: { BirthdayCred },
};
</script>

<style scoped lang="scss">
.rowItem {
  margin-left: 0px !important;
  margin-right: 0px !important;

  .item {
    transition: all .5s;
  }
  .startItem {
    padding-left: 20px !important;
  }
  .endItem {
    padding-right: 20px !important;
  }
}
</style>

<style lang="scss">
.isMobile {
  .rowItem {
    .startItem {
      padding-left: 10px !important;
    }
    .endItem {
      padding-right: 10px !important;
    }
  }
}
</style>
