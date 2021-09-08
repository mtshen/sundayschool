<template>
  <div class="marageAdd">
    <div>
      <el-form
        size="mini"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="addFrom"
      >
        <el-form-item label="姓名" prop="name">
          <el-input size="mini" style="width: 220px" clearable v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="代号" prop="nickName">
          <el-input
            size="mini"
            style="width: 220px"
            clearable
            v-model="ruleForm.nickName"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select
            size="mini"
            style="width: 220px"
            v-model="ruleForm.gender"
            placeholder="请选择"
          >
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" prop="birthdayTime">
          <el-date-picker
            size="mini"
            v-model="ruleForm.birthdayTime"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <el-button size="mini" class="addBtn" type="primary" @click="addItem">新增</el-button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      addDialogVis: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClose() {}
  },
  components: {}
};
</script>

<style scoped lang="scss"></style>
