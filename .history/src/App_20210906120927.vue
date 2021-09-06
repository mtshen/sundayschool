<template>
  <div id="app" :class="{ isMobile }">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['isMobile']),
  },
  created() {},
  mounted() {
    // 实时监测宽度变化
    this.setBodyWidth(document.body.offsetWidth);
    setInterval(() => {
      this.setBodyWidth(document.body.offsetWidth);
    }, 2000);
    window.addEventListener('resize', () => {
      debugger;
      this.setBodyWidth(document.body.offsetWidth);
    });
  },
  watch: {},
  methods: {
    ...mapActions(['setBodyWidth']),
  },
  components: {},
};
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
