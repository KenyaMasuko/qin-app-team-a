import { type FC } from "react";
import { ActionIcon, Box, Header, Space } from "@mantine/core";
import { ArrowLeft } from "tabler-icons-react";
import { type Recipe } from "@/lib/types/recipe";
import { RecipeImage } from "@/pages-component/RecipeDetail/RecipeImage/RecipeImage";
import { RecipeText } from "@/pages-component/RecipeDetail/RecipeText/RecipeText";

type RecipeDetailProps = Recipe & {
  returnToPreviousPage: () => void;
};

export const RecipeDetail: FC<RecipeDetailProps> = ({
  name,
  imageUrl,
  recipe,
  returnToPreviousPage,
}) => {
  return (
    <main>
      <Box pt={48} px="xs" pb={56}>
        <Header height="2rem" withBorder={false}>
          <ActionIcon size="2rem" onClick={returnToPreviousPage}>
            <ArrowLeft size="2rem" />
          </ActionIcon>
        </Header>
        <Space h="lg" />
        <RecipeImage name={name} imageUrl={imageUrl} />
        <Space h="lg" />
        <RecipeText {...recipe} />
      </Box>
    </main>
  );
};
