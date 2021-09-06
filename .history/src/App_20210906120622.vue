<template>
  <div id="app" :class="{ isMobile }">
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['isMobile']),
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
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
