<template>
  <div class="birthdayManage">
    <div class="content" v-show="!popupVisible">
      <el-table size="mini" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="birthdayTime" label="生日"></el-table-column>
        <el-table-column prop="address" label="性别"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
    </div>
    <el-button v-show="!popupVisible" size="mini" class="addBtn" type="primary" @click="addItem">新增</el-button>
    <AddDialog v-show="popupVisible" />
  </div>
</template>

<script>
import AddDialog from "./add.vue";

export default {
  props: {},
  data() {
    return {
      tableData: [],
      popupVisible: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    addItem() {
      this.popupVisible = true;
    }
  },
  components: { AddDialog }
};
</script>

<style scoped lang="scss">
.addBtn {
  width: 100%;
  height: 40px;
  border-radius: 0px;
}

.content {
  flex: 1;
  overflow: auto;
}

.birthdayManage {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
