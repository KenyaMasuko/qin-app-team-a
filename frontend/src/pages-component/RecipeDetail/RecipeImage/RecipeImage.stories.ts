import { type StoryObj, type Meta } from "@storybook/react";
import { SPStory } from "@/lib/storybook/SPStory";
import { recipeImageArgs } from "@/lib/storybook/recipeArgs";
import { RecipeImage } from "@/pages-component/RecipeDetail/RecipeImage/RecipeImage";

const meta: Meta<typeof RecipeImage> = {
  title: "Component/RecipeImage",
  component: RecipeImage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RecipeImage>;

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
  args: recipeImageArgs,
};
export const PCDefault: Story = {
  args: recipeImageArgs,
};
