import type { Meta, StoryObj } from "@storybook/react";
import { RecipeCard } from "./RecipeCard";
import { SPStory } from "@/lib/storybook/SPStory";

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
  args: {
    name: "カレーライス",
    imageUrl: "https://source.unsplash.com/featured/?curry",
    recipe: {
      ingredients: [
        {
          name: "玉ねぎ",
          amount: "1個",
        },
        {
          name: "にんじん",
          amount: "1本",
        },
        {
          name: "カレールー",
          amount: "大さじ2",
        },
        {
          name: "牛肉",
          amount: "200g",
        },
        {
          name: "米",
          amount: "200g",
        },
        {
          name: "水",
          amount: "400ml",
        },
        {
          name: "砂糖",
          amount: "小さじ1",
        },
        {
          name: "塩",
          amount: "小さじ1",
        },
      ],
      steps: [
        "玉ねぎをみじん切りにする。",
        "にんじんを1cm角に切る。",
        "牛肉を小さく切る。",
        "鍋に玉ねぎ、にんじん、カレールーを入れ、炒める。",
        "牛肉を加え、炒める。",
        "米を加え、炒める。",
        "水を加え、砂糖と塩を入れて煮立てる。",
        "火を弱め、蓋をして15分程度煮込む。",
        "カレールーの量は好みで調整してください。",
        "火の強さを変えながら煮込むことで、米がふっくら煮えるようにしましょう。",
        "砂糖と塩の量は、好みに合わせて調整してください。",
      ],
      tips: [
        "カレールーの量は好みで調整してください。",
        "火の強さを変えながら煮込むことで、米がふっくら煮えるようにしましょう。",
        "砂糖と塩の量は、好みに合わせて調整してください。",
      ],
    },
    onClick: () => {},
  },
};
export const PCDefault: Story = {
  args: {
    name: "カレーライス",
    imageUrl: "https://source.unsplash.com/featured/?curry",
    recipe: {
      ingredients: [
        {
          name: "玉ねぎ",
          amount: "1個",
        },
        {
          name: "にんじん",
          amount: "1本",
        },
        {
          name: "カレールー",
          amount: "大さじ2",
        },
        {
          name: "牛肉",
          amount: "200g",
        },
        {
          name: "米",
          amount: "200g",
        },
        {
          name: "水",
          amount: "400ml",
        },
        {
          name: "砂糖",
          amount: "小さじ1",
        },
        {
          name: "塩",
          amount: "小さじ1",
        },
      ],
      steps: [
        "玉ねぎをみじん切りにする。",
        "にんじんを1cm角に切る。",
        "牛肉を小さく切る。",
        "鍋に玉ねぎ、にんじん、カレールーを入れ、炒める。",
        "牛肉を加え、炒める。",
        "米を加え、炒める。",
        "水を加え、砂糖と塩を入れて煮立てる。",
        "火を弱め、蓋をして15分程度煮込む。",
        "カレールーの量は好みで調整してください。",
        "火の強さを変えながら煮込むことで、米がふっくら煮えるようにしましょう。",
        "砂糖と塩の量は、好みに合わせて調整してください。",
      ],
      tips: [
        "カレールーの量は好みで調整してください。",
        "火の強さを変えながら煮込むことで、米がふっくら煮えるようにしましょう。",
        "砂糖と塩の量は、好みに合わせて調整してください。",
      ],
    },
    onClick: () => {},
  },
};
