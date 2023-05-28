import { useState, type FC } from "react";
import { Alert, Center, Loader } from "@mantine/core";
import { useRouter } from "next/router";
import { AlertCircle } from "tabler-icons-react";
import { useFetchRecipe } from "@/hooks/useData";
import { useDecodeURI } from "@/hooks/useDocodeURI";
import { RecipeDetail } from "@/pages-component/RecipeDetail/RecipeDetail/RecipeDetail";
import { RecipeRecommender } from "@/pages-component/RecipeRecommender/RecipeRecommender/RecipeRecommender";

type ViewState = "recommend" | "detail";

export const Recipes: FC = () => {
  const router = useRouter();
  const { keywords } = router.query;
  const keywordList = useDecodeURI(keywords as string);
  const { data: recipe, isLoading, error } = useFetchRecipe(keywordList);

  const [viewState, setViewState] = useState<ViewState>("recommend");
  return isLoading ? (
    <Center mih={"100vh"}>
      <Loader color={"brand.1"} size={"xl"} />
    </Center>
  ) : recipe != null ? (
    <>
      {viewState === "recommend" ? (
        <RecipeRecommender
          name={recipe.name}
          imageUrl={recipe.imageUrl}
          recipe={recipe.recipe}
          showDetailPage={() => {
            setViewState("detail");
          }}
        />
      ) : (
        <RecipeDetail
          name={recipe.name}
          imageUrl={recipe.imageUrl}
          recipe={recipe.recipe}
          returnToPreviousPage={() => {
            setViewState("recommend");
          }}
        />
      )}
    </>
  ) : error != null ? (
    <Alert
      icon={<AlertCircle size="1rem" />}
      title="データの取得に失敗しました"
      color="red"
    >
      リロードしてください
    </Alert>
  ) : null;
};
