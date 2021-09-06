<template>
  <div class="birthdayView">
    <el-form size="mini" ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input size="mini" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="代号">
        <el-input size="mini" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-switch v-model="value1" active-text="男生" inactive-text="女生"> </el-switch>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-switch v-model="value1" active-text="男生" inactive-text="女生"> </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.birthdayView {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
