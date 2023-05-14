import type { Meta, StoryObj } from "@storybook/react";
import { SPStory } from "@/lib/storybook/SPStory";
import { recipeCardArgs } from "@/lib/storybook/recipeCardArgs";
import { RecipeCard } from "./RecipeCard";

const meta: Meta<typeof RecipeCard> = {
  title: "Component/RecipeCard",
  component: RecipeCard,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof RecipeCard>;

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
  args: recipeCardArgs,
};
export const PCDefault: Story = {
  args: recipeCardArgs,
};
