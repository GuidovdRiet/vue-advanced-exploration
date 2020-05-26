<template>
  <PageTemplate>
    <LoginForm @handleLogin="handleLogin" />
  </PageTemplate>
</template>

<script lang="ts">
import Vue from "vue";
import router from "../../../router";

// Components
import LoginForm from "../../modules/forms/loginForm/LoginForm.vue";
import PageTemplate from "../../templates/PageTemplate.vue";

export default Vue.extend({
  components: {
    LoginForm,
    PageTemplate
  },
  methods: {
    handleLogin: async function(email: string, password: string) {
      const form = new URLSearchParams();
      form.append("grant_type", "password");
      form.append("username", email);
      form.append("password", password);
      form.append("client_id", process.env.VUE_APP_CLIENT_ID);
      form.append("client_secret", process.env.VUE_APP_CLIENT_SECRET);
      form.append("scope", "basic write.messages");

      const response = await fetch(
        "https://demo.chainels.com/oauth/access_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: form
        }
      );

      const data = await response.json();

      // Check if the request returns an error
      if (data.error) {
        router.push({ path: "/login" });
        // TODO: set and display error
        return;
      }

      // Save the access token in local storage, only for dev purposes
      if (data) {
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("expiresIn", data.expires_in);
        localStorage.setItem("refreshToken", data.refresh_token);
      }

      // User is logged in without any errors redirect to protected page
      await router.push("/").catch(err => console.log(err));
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./login.module.scss";
</style>
