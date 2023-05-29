import type { Meta, StoryObj } from "@storybook/react";

import { SPStory } from "@/lib/storybook/SPStory";
import { imageUrl, recipe, name } from "@/lib/storybook/recipeArgs";
import { RecipeRecommender } from "@/pages-component/RecipeRecommender/RecipeRecommender/RecipeRecommender";

const meta: Meta<typeof RecipeRecommender> = {
  title: "Component/RecipeRecommender",
  component: RecipeRecommender,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RecipeRecommender>;

const RecipeRecommenderArgs = {
  ...name,
  ...imageUrl,
  recipe,
  showDetailPage: (): void => {
    console.log("Show detail page function called");
  },
  nextRecipeLink: "#",
};

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
  args: RecipeRecommenderArgs,
};
export const PCDefault: Story = {
  args: RecipeRecommenderArgs,
};
