import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MyButton from "./MyButton";

export default {
  title: "atoms/buttons/likeButton",
  component: MyButton,
};

export const Liked = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") },
});

export const Like = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") },
});

export const Emoji = () => ({
  components: { MyButton },
  methods: { action: action("clicked") },
});
