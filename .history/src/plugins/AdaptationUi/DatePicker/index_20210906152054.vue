<template>
  <div>
    <el-date-picker v-if="isMobile"
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {

  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['isMobile']),
  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {

  },
  components: {

  },
};
</script>

<style scoped lang="scss">

</style>
