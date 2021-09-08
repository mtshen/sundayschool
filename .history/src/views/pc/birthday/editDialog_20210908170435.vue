<template>
  <el-dialog title="提示" :visible="visible" width="50%" :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: Boolean,
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss"></style>
