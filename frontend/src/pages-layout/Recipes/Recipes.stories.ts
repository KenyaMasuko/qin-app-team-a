import type { Meta, StoryObj } from "@storybook/react";

import { SPStory } from "@/lib/storybook/SPStory";
import { recipeCardArgs } from "@/lib/storybook/recipeArgs";
import { Recipes } from "@/pages-layout/Recipes/Recipes";

const meta: Meta<typeof Recipes> = {
  title: "Page-layout/Recipes",
  component: Recipes,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Recipes>;

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
  args: recipeCardArgs,
};
export const PCDefault: Story = {
  args: recipeCardArgs,
};
