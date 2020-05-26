<template>
  <PageTemplate>
    <div class="message">
      <div v-if="isLoading" class="loading">Loading...</div>
      <div v-if="message" class="content">
        <h2>{{ message.title }}</h2>
        <p v-html="message.content"></p>
      </div>
    </div>
  </PageTemplate>
</template>

<script lang="ts">
import Vue from "vue";
import PageTemplate from "../templates/PageTemplate.vue";

export default Vue.extend({
  data() {
    return {
      isLoading: true,
      message: {}
    };
  },
  components: {
    PageTemplate
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(
        `https://demo.chainels.com/api/v2/messages/${this.$route.params.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      );

      const data = await response.json();
      this.isLoading = false;
      this.message = data;
    }
  }
});
</script>

<style lang="scss" scoped>
</style>