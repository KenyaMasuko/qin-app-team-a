import { type Meta, type StoryObj } from "@storybook/react";
import { SPStory } from "@/lib/storybook/SPStory";
import { recipeDetailArgs } from "@/lib/storybook/recipeArgs";
import { RecipeDetail } from "@/pages-layout/RecipeDetail/RecipeDetail";

const meta: Meta<typeof RecipeDetail> = {
  title: "Page-layout/RecipeDetail",
  component: RecipeDetail,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RecipeDetail>;

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
  args: recipeDetailArgs,
};
export const PCDefault: Story = {
  args: recipeDetailArgs,
};
