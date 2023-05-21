import type { Meta, StoryObj } from "@storybook/react";

import { SPStory } from "@/lib/storybook/SPStory";
import { recipeCardArgs } from "@/lib/storybook/recipeArgs";
import { RecipeRecommender } from "@/pages-component/RecipeRecommender/RecipeRecommender/RecipeRecommender";

const meta: Meta<typeof RecipeRecommender> = {
  title: "Component/RecipeRecommender",
  component: RecipeRecommender,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RecipeRecommender>;

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
  args: recipeCardArgs,
};
export const PCDefault: Story = {
  args: recipeCardArgs,
};
