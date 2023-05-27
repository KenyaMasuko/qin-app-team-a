import type { Meta, StoryObj } from "@storybook/react";
import { SPStory } from "@/lib/storybook/SPStory";
import { imageUrl, recipe, name } from "@/lib/storybook/recipeArgs";
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

const recipeCardArgs = {
  ...name,
  ...imageUrl,
  recipe,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-module-boundary-types
  onClick: () => {},
};

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
  args: recipeCardArgs,
};
export const PCDefault: Story = {
  args: recipeCardArgs,
};
