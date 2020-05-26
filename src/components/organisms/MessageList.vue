<template>
  <div class="wrapper">
    <template v-if="isLoading">
      <p v-show="isLoading">Loading messages...</p>
    </template>
    <template v-else>
      <MessageCard v-for="message in messages" :key="message.id" v-bind:message="message" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MessageCard from "./cards/messageCard/MessageCard.vue";

export default Vue.extend({
  name: "MessageList",
  components: { MessageCard },
  props: {
    channel: {
      type: String,
      default: "mytimeline"
    }
  },
  methods: {
    async getMessages() {
      this.isLoading = true;

      const response = await fetch(
        `https://demo.chainels.com/api/v2/companies/111582115204735825/timeline?channel=${this.channel}&count=10&include=latest_replies`,
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
      this.messages = data;
    }
  },
  created() {
    this.getMessages();
  },
  data() {
    return {
      messages: [],
      isLoading: false
    };
  }
});
</script>

<style scoped>
</style>
