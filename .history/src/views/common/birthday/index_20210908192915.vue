<template>
  <div>
    <template>
      <el-row class="rowItem" :gutter="20" v-show="false">
        <el-col class="item startItem" :xs="24" :md="12" :lg="8"><BirthdayCred title="本月生日" :value="monthList" color="#F8A94A" /></el-col>
        <el-col class="item" :xs="24" :md="12" :lg="8"><BirthdayCred title="本周生日" :value="weekList" color="#ba9dde" /></el-col>
        <el-col class="item endItem" :xs="24" :md="12" :lg="8"><BirthdayCred title="本日生日" :value="dayList" color="#eb746e" /></el-col>
      </el-row>
      <el-table size="mini" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" sortable>
          <template slot-scope="scope">
            <el-button type="text" size="mini">{{ getNameItem(scope.row) }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="birthdayTime" label="生日" sortable>
          <template slot-scope="scope">
            {{ getBirthDayText(scope.row) }}
          </template>
        </el-table-column>

        <el-table-column label="性别">
          <template slot-scope="scope">
            {{ ["", "男", "女"][scope.row.gender] }}
          </template>
        </el-table-column>
        <el-table-column label="年龄" sortable>
          <template slot-scope="scope">
            {{ getAgeName(scope.row) }}
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import BirthdayCred from '@/components/birthdayCred/index.vue';
import dayjs from 'dayjs';
import { queryBirthdayManage } from "@/api/birthday";

export default {
  props: {},
  data() {
    return {
      curDay: dayjs().date(),
      curWeek: dayjs().day(),
      curMonth: dayjs().month(),
      tableData: [],
    };
  },
  computed: {
    curTableData() {
      const { tableData } = this;
      return tableData.map(item => {
        const itemData = { ...item };
        return itemData;
      });
    },
    monthList() {
      const { tableData, curMonth } = this;
      return tableData.filter(item => {
        const curItemMonth = dayjs(item.birthdayTime).month();
        return curItemMonth === curMonth;
      });
    },
    weekList() {
      const { tableData, curMonth, curWeek } = this;
      return tableData.filter(item => {
        const curItemMonth = dayjs(item.birthdayTime).month();
        const curItemWeek = dayjs(item.birthdayTime).day();
        debugger;
        return curItemMonth === curMonth && curItemWeek === curWeek;
      });
    },
    dayList() {
      const { tableData, curMonth, curDay } = this;
      return tableData.filter(item => {
        const curItemMonth = dayjs(item.birthdayTime).month();
        const curItemDay = dayjs(item.birthdayTime).date();
        return curItemMonth === curMonth && curItemDay === curDay;
      });
    },
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
    getNameItem({ name, nickName }) {
      let rtnName = name;
      if (nickName) {
        rtnName += `(${nickName})`;
      }
      return rtnName;
    },
    getBirthDayText(row) {
      return dayjs(row.birthdayTime).format("MM-DD");
    },
    getAgeName(row) {
      const curDateItem = dayjs(row.birthdayTime);
      const thatDateItem = dayjs();
      const curYear = curDateItem.year();
      const thatYear = thatDateItem.year();
      const curDay = curDateItem.dayOfYear();
      const thatDay = thatDateItem.dayOfYear();

      // 只要大于0, 即过了生日
      if (thatDay - curDay > 0) {
        return `${thatYear - curYear}岁`;
      } else {
        return `${thatYear - curYear - 1}岁`;
      }
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
