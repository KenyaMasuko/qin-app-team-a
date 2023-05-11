import type { Meta, StoryObj } from "@storybook/react";

import { ToggleOptionGroup } from "./ToggleOptionGroup";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ToggleOptionGroup> = {
  title: "Component/ToggleOptionGroup",
  component: ToggleOptionGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleOptionGroup>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: [
      "肉料理",
      "魚料理",
      "サラダ",
      "麺",
      "米",
      "パン",
      "野菜たっぷり",
      "ヘルシー",
      "タンパク質多め",
      "パーティー料理",
      "和食",
      "韓国料理",
      "中華料理",
      "イタリアン",
      "揚げ物",
    ],
    value: ["肉料理", "サラダ", "ヘルシー"],
  },
};
