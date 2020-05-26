<template>
  <div id="appRoot" :class="`theme${API_THEME.brand} style${API_THEME.style}`">
    <div class="appWrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
// Set Theme
// const API_THEME = { brand: "White", style: "Dark" };
const API_THEME = { brand: "Chainels", style: "Light" };

export default {
  name: "App",
  data() {
    return {
      API_THEME
    };
  }
};
</script>

<style lang="scss">
@import "./app.module.scss";
</style>
