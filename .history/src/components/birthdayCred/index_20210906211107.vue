<template>
  <div class="credItem" :style="{ background: color }">
    <span class="title">{{ title }}</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    color: String
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
  position: relative;

  .title {
    font-size: 40px;
    position: absolute;
    left: 3%;
    top: 3%;
  }
}
</style>
