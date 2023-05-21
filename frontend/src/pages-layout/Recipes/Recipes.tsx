import { type FC } from "react";
import { Anchor, Box, Flex, Header, Space } from "@mantine/core";
import { ActionButton } from "@/component/ActionButton/ActionButton";
import {
  RecipeCard,
  type RecipeCardProps,
} from "@/pages-component/Recipes/RecipeCard/RecipeCard";

type RecipeProps = RecipeCardProps;

export const Recipes: FC<RecipeProps> = ({
  name,
  imageUrl,
  recipe,
  onClick,
}) => {
  return (
    <main>
      <Box pt={48} px="xs" pb={56}>
        <Header height="2rem" withBorder={false}>
          <Flex justify="flex-end">
            <Anchor color="text.1">気分を入れ直す</Anchor>
          </Flex>
        </Header>
        <Space h="lg" />
        <RecipeCard
          name={name}
          imageUrl={imageUrl}
          recipe={recipe}
          onClick={onClick}
        />
        <Space h="xl" />
        <Flex gap="xs">
          <ActionButton>レシピを見る</ActionButton>
          <ActionButton>別の料理を見る</ActionButton>
        </Flex>
      </Box>
    </main>
  );
};
