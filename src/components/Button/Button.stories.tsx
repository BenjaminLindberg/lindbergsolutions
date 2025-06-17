import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";
import { Button, ButtonProps } from "./Button";

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: "primary",
    children: "Click on me!",
  },
};

export default {
  title: "Button",
  tags: ["autodocs"],
  /**
   * Here you need to render JSX for HMR work!
   *
   * render: Counter won't trigger HMR updates
   */
  render: (props) => <Button {...props} />,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "outline"],
      control: { type: "radio" },
    },
    children: [
      {
        control: { type: "text" },
      },
    ],
  },
} as Meta<ComponentProps<typeof Button>>;
