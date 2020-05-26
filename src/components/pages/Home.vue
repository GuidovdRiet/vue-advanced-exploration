<template>
  <PageTemplate>
    <Header />
    <MessageList />
  </PageTemplate>
</template>

<script lang="ts">
import Vue from "vue";
import MessageList from "../../organisms/MessageList.vue";
import PageTemplate from "../../templates/PageTemplate.vue";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    MessageList,
    PageTemplate
  },
  data() {
    return {
      msg: "This is the Vue app"
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./home.module.scss";
</style>
