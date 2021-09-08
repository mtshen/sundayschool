<template>
  <div class="credItem" :style="{ background: color }" @click="changeDetails">
    <template v-if="isDetails && value.length">

    </template>
    <template v-else>
      <span class="title">{{ title }}</span>
      <span class="value">{{ value.length }}</span>
      <span class="company">人</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: Array,
    color: String
  },
  data() {
    return {
      isDetails: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    changeDetails() {
      this.isDetails = !this.isDetails;
    },
  },
  components: {}
};
</script>

<style scoped lang="scss">
.credItem {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #FFF;
  transition: 0.3s;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  user-select: none;
  cursor: pointer;

  .title {
    font-size: 30px;
    position: absolute;
    left: 3%;
    top: 3%;
  }

  .value {
    font-size: 70px;
    position: absolute;
    left: 50%;
    top: 50%;
    color: #FFF;
    transform: translate(-50%, -50%);
  }

  .company {
    position: absolute;
    font-size: 30px;
    right: 3%;
    bottom: 3%;
  }
}
</style>
