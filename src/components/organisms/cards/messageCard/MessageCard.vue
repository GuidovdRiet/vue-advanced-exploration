<template>
  <div class="wrapper" v-on:click="router.push({ path: `/message/${message.id}` })">
    <template v-if="mainImage">
      <img class="img" :src="mainImageUrl" :alt="mainImage.name" />
    </template>
    <div class="contentWrapper">
      <h1 class="title">{{ message.title }}</h1>
      <div v-html="message.content"></div>
      <LikeButton @onLike="like" @onUnLike="unlike" :hasLiked="hasLiked" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import LikeButton from "../../../atoms/buttons/likeButton/LikeButton.vue";
import { Attachment, MessageInterface } from "./messageInterfaces";
import router from "../../../../router";

export default Vue.extend({
  name: "MessageCard",
  components: { LikeButton },
  props: {
    message: {
      type: Object as PropType<MessageInterface>,
      required: true
    }
  },
  methods: {
    like() {
      fetch(
        `https://demo.chainels.com/api/v2/messages/${this.message.id}/interested`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      ).then(() => {
        this.hasLiked = true;
      });
    },
    unlike() {
      fetch(
        `https://demo.chainels.com/api/v2/messages/${this.message.id}/interested`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      ).then(() => {
        this.hasLiked = false;
      });
    }
  },
  computed: {
    mainImage(): Attachment | undefined {
      return this.message.attachments.find((attach: Attachment) =>
        attach.mime_type.startsWith("image")
      );
    },
    mainImageUrl(): string | undefined {
      return this.mainImage ? this.mainImage.url : undefined;
    }
  },
  data() {
    return { hasLiked: this.message.is_interested, router };
  }
});
</script>

<style lang="scss" scoped>
@import "./messageCard.module.scss";
</style>
