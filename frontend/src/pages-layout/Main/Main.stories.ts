import type { Meta, StoryObj } from "@storybook/react";

import { Main } from "./Main";

const meta: Meta<typeof Main> = {
  title: "Page-layout/Main",
  component: Main,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Main>;

export const MainPage: Story = {};
