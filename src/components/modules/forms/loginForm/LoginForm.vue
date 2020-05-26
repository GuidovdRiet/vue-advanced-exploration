<template>
  <div class="container">
    <div class="wrapper">
      <form id="demo" v-on:submit.prevent="onSubmit">
        <input type="email" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" autocomplete="off" v-model="password" />
        <button type="submit" class="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    onSubmit() {
      this.$emit("handleLogin", this.email, this.password);
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  }
});
</script>

<style style='scss' scoped>
@import "./loginForm.module.scss";
</style>
