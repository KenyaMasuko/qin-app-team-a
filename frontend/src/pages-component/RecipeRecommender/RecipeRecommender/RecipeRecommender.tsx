import { type FC } from "react";
import { Anchor, Box, Flex, Header, Space } from "@mantine/core";
import Link from "next/link";
import { ActionButton } from "@/component/ActionButton/ActionButton";
import { RecipeCard } from "@/pages-component/RecipeRecommender/RecipeCard/RecipeCard";
import { type Recipe } from "@/types/recipe";

type RecipeRecommenderProps = Recipe & {
  showDetailPage: () => void;
};

export const RecipeRecommender: FC<RecipeRecommenderProps> = ({
  name,
  imageUrl,
  recipe,
  showDetailPage,
}) => {
  return (
    <main>
      <Box pt={48} px="xs" pb={56}>
        <Header height="2rem" withBorder={false}>
          <Flex justify="flex-end">
            <Link
              href={{
                pathname: "/select",
              }}
              style={{
                textDecoration: "none",
              }}
            >
              <Anchor color="text.1">気分を入れ直す</Anchor>
            </Link>
          </Flex>
        </Header>
        <Space h="lg" />
        <RecipeCard
          name={name}
          imageUrl={imageUrl}
          recipe={recipe}
          onClick={showDetailPage}
        />
        <Space h="xl" />
        <Flex gap="xs">
          <ActionButton onClick={showDetailPage}>レシピを見る</ActionButton>
          <ActionButton>別の料理を見る</ActionButton>
        </Flex>
      </Box>
    </main>
  );
};
