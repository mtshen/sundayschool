<template>
  <!-- 遮罩层 -->
  <div class="marageAdd">
    <!-- <div class="dialogMask"></div> -->
    <div class="addBox" :class="{ notAdd: !addDialogVis }">
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
    <el-button v-if="!addDialogVis" size="mini" class="addBtn" type="primary" @click="addItem"
      >新增</el-button
    >
    <el-row v-if="addDialogVis">
      <el-col :span="12">
        <el-button size="mini" class="addBtn" type="primary" @click="updateItem">
          {{ initVal ? "更新" : "新增" }}
        </el-button>
      </el-col>
      <el-col :span="12">
        <el-button size="mini" class="addBtn" @click="cancel">
          取消
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { addBirthdayManage, updateBirthdayManage } from "@/api/birthday";
import { rule } from "@/common/formValidate";
import dayjs from "dayjs";

export default {
  props: {
    initVal: Object
  },
  data() {
    return {
      ruleForm: {
        name: (this.initVal || {}).name || "",
        nickName: (this.initVal || {}).nickName || "",
        gender: (this.initVal || {}).gender || "",
        birthdayTime: (this.initVal || {}).birthdayTime || ""
      },
      rules: {
        name: rule.required,
        birthdayTime: rule.required
      },
      addDialogVis: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {
    initVal(data) {
      this.ruleForm.name = data.name || "";
      this.ruleForm.nickName = data.nickName || "";
      this.ruleForm.gender = data.gender || "";
      this.ruleForm.birthdayTime = data.birthdayTime || "";
    }
  },
  methods: {
    addItem() {
      this.addDialogVis = true;
    },
    handleClose() {},
    updateItem() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          let request;
          const birthdayTime = dayjs(this.ruleForm.birthdayTime).format("YYYY-MM-DD");
          if (this.initVal) {
            request = updateBirthdayManage({ ...this.initVal, ...this.ruleForm, birthdayTime });
          } else {
            request = addBirthdayManage({ ...this.ruleForm, birthdayTime });
          }
          request.then(({ code, data }) => {
            if (!code) {
              this.$emit("save");
              this.cancel();
            }
          });
        }
      });
    },
    cancel() {
      this.addDialogVis = false;
      this.ruleForm.name = "";
      this.ruleForm.nickName = "";
      this.ruleForm.gender = "";
      this.ruleForm.birthdayTime = "";
    }
  }
};
</script>

<style scoped lang="scss">
.marageAdd {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  background: #fff;
  z-index: 999;
  border-top: 1px solid #eee;
  overflow: hidden;

  .addBox {
    padding-top: 20px;
    height: 250px;
    transition: all 0.5s;
    overflow: hidden;

    &.notAdd {
      padding-top: 0px;
      height: 0px;
    }
  }

  .dialogMask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
  }
}
.addBtn {
  width: 100%;
  height: 40px;
  border-radius: 0px;
}
</style>
