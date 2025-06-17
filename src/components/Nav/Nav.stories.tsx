import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";
import { Nav, NavProps } from "./Nav";

type Story = StoryObj<NavProps>;

export const Default: Story = {
  args: {},
};

export default {
  title: "Nav",
  tags: ["autodocs"],
  /**
   * Here you need to render JSX for HMR work!
   *
   * render: Counter won't trigger HMR updates
   */
  render: (props) => <Nav {...props} />,
  argTypes: {},
} as Meta<ComponentProps<typeof Nav>>;
