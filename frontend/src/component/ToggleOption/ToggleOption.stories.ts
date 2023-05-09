import type { Meta, StoryObj } from "@storybook/react";

import { ToggleOption } from "./ToggleOption";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ToggleOption> = {
  title: "Component/ToggleOptions",
  component: ToggleOption,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleOption>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "肉料理",
  },
};
