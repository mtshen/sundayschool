<template>
  <el-dialog :visible="visible" width="400px" :before-close="handleClose">
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
        <el-input size="mini" style="width: 220px" clearable v-model="ruleForm.nickName"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select size="mini" style="width: 220px" v-model="ruleForm.gender" placeholder="请选择">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="生日" prop="birthdayTime">
        <el-date-picker size="mini"
          v-model="ruleForm.birthdayTime"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
    </el-form>

    <p class="btns">
      <el-button size="mini" type="primary" @click="create">{{ initVal ? "更新" : "创建" }}</el-button>
      <el-button size="mini" @click="handleClose()">取消</el-button>
    </p>
  </el-dialog>
</template>

<script>
import { addBirthdayManage, updateBirthdayManage } from "@/api/birthday";
import { rule } from "@/common/formValidate";
import dayjs from 'dayjs';

export default {
  props: {
    visible: Boolean,
    initVal: Object,
  },
  data() {
    return {
      ruleForm: {
        name: (this.initVal || {}).name || "",
        nickName: (this.initVal || {}).nickName || "",
        gender:  (this.initVal || {}).gender || "",
        birthdayTime:  (this.initVal || {}).birthdayTime || ""
      },
      rules: {
        name: rule.required,
        birthdayTime: rule.required,
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },

    create() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let request;
          if (this.initVal) {
            const birthdayTime = dayjs(this.ruleForm.birthdayTime).format("yyyy-mm-dd");
            request = updateBirthdayManage({ ...this.initVal, ...this.ruleForm, birthdayTime });
          } else {
            request = addBirthdayManage({ ...this.ruleForm, birthdayTime });
          }
          request.then(({ code, data }) => {
            if (!code) {
              this.$emit("save");
              this.handleClose();
            }
          });
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.addFrom {
  text-align: left;
}
</style>
