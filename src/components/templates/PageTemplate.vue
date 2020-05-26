<template>
  <main class="wrapper">
    <Header />
    <slot />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../modules/header/Header.vue";

export default Vue.extend({
  name: "PageTemplate",
  components: {
    Header
  }
});
</script>

<style lang="scss" scoped>
@import "./pageTemplate.module.scss";
</style>