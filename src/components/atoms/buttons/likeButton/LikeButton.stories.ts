import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import LikeButton from "./LikeButton.vue";

export default {
  title: "atoms/buttons/likeButton",
  component: LikeButton,
};

export const Default = () => ({
  components: { LikeButton },
  template:
    '<LikeButton :is-interested="false" :message-id="141582115416981628">Hello Button</LikeButton>',
});

export const Liked = () => ({
  components: { LikeButton },
  template:
    '<LikeButton :is-interested="true" :message-id="141582115416981628">Hello Button</LikeButton>',
});
