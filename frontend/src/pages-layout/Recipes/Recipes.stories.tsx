import type { Meta, StoryObj } from "@storybook/react";
import { SPStory } from "@/lib/storybook/SPStory";
import { handlers } from "@/lib/storybook/recipeArgs";
import { Recipes } from "./Recipes";

const meta: Meta<typeof Recipes> = {
  title: "Page-layout/Recipes",
  component: Recipes,
  tags: ["autodocs"],
  parameters: {
    ...SPStory.parameters,
    msw: { handlers },
  },
};

export default meta;
type Story = StoryObj<typeof Recipes>;

export const Default: Story = {
  parameters: {
    ...SPStory.parameters,
  },
};
export const PCDefault: Story = {};
