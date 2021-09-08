<template>
<div class="marageAdd">
  <mt-header title="multiple button">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
      <mt-button @click="handleClose">close</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {
    handleClose() {

    },
  },
  components: {

  },
};
</script>

<style scoped lang="scss">

</style>
