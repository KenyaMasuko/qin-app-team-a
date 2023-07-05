import type { Meta, StoryObj } from "@storybook/react";

import { ActionButton } from "./ActionButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ActionButton> = {
  title: "Component/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Enabled: Story = {
  args: {
    children: "Button",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};
