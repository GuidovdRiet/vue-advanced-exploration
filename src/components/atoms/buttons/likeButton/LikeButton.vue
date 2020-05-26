<template>
  <button v-if="hasLiked" class="button" v-on:click="unLike">
    <span>👍</span> You liked this
  </button>
  <button v-else class="button" v-on:click="like">
    <span>👍</span> Like
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LikeButton",
  props: {
    hasLiked: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    like() {
      this.$emit("onLike");
    },
    unLike() {
      this.$emit("onUnLike");
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./likeButton.module.scss";
</style>
