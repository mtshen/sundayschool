<template>
  <div class="credItem">
    <span>{{ title }}</span>
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.credItem {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
