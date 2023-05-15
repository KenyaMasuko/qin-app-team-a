import { type FC } from "react";
import { List, Text, Title, useMantineTheme } from "@mantine/core";

type RecipeDetailsProps = {
  /**
   * 材料
   */

  ingredients: Array<{
    name: string;
    amount: string;
  }>;
  /**
   * 料理手順
   */
  steps: string[];
  /**
   * tips
   */
  tips: string[];
};

export const RecipeDetails: FC<RecipeDetailsProps> = ({
  ingredients,
  steps,
  tips,
}) => {
  const theme = useMantineTheme();
  return (
    <>
      <Title order={2} size={theme.fontSizes.xs} mb={4}>
        【材料】
      </Title>
      <List
        spacing={4}
        mb={24}
        icon={"・"}
        styles={(_) => ({
          itemIcon: {
            fontSize: theme.fontSizes.xs,
            fontWeight: 600,
            marginRight: 0,
          },
        })}
      >
        {ingredients.map((ingredient) => (
          <List.Item key={ingredient.name}>
            <Text size={theme.fontSizes.xs} fw={600}>
              {ingredient.name}({ingredient.amount})
            </Text>
          </List.Item>
        ))}
      </List>
      <Title order={2} size={theme.fontSizes.xs} mb={4}>
        【作り方】
      </Title>
      <List
        spacing={4}
        mb={24}
        type={"ordered"}
        styles={(_) => ({
          item: {
            "&::marker": {
              fontSize: theme.fontSizes.xs,
              fontWeight: 600,
            },
          },
        })}
      >
        {steps.map((step) => (
          <List.Item key={step}>
            <Text size={theme.fontSizes.xs} fw={600}>
              {step}
            </Text>
          </List.Item>
        ))}
      </List>
      <Title order={2} size={theme.fontSizes.xs}>
        【tips】
      </Title>
      <Text size={theme.fontSizes.xs} fw={600}>
        {tips.join("")}
      </Text>
    </>
  );
};
