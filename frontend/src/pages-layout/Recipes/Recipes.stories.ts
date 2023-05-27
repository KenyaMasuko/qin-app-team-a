import type { Meta, StoryObj } from "@storybook/react";

import { SPStory } from "@/lib/storybook/SPStory";
import { imageUrl, recipe, name } from "@/lib/storybook/recipeArgs";
import { Recipes } from "./Recipes";

const meta: Meta<typeof Recipes> = {
  title: "Page-layout/Recipes",
  component: Recipes,
  tags: ["autodocs"],
};

const recipesArgs = {
  ...name,
  ...imageUrl,
  recipe,
};

export default meta;
type Story = StoryObj<typeof Recipes>;

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
  args: recipesArgs,
};
export const PCDefault: Story = {
  args: recipesArgs,
};
