import { type Meta, type StoryObj } from "@storybook/react";
import { SPStory } from "@/lib/storybook/SPStory";
import { imageUrl, recipe, name } from "@/lib/storybook/recipeArgs";
import { RecipeDetail } from "@/pages-component/RecipeDetail/RecipeDetail/RecipeDetail";

const meta: Meta<typeof RecipeDetail> = {
  title: "Component/RecipeDetail",
  component: RecipeDetail,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RecipeDetail>;

const recipeDetailArgs = {
  ...name,
  ...imageUrl,
  recipe,
};

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
  args: recipeDetailArgs,
};
export const PCDefault: Story = {
  args: recipeDetailArgs,
};
