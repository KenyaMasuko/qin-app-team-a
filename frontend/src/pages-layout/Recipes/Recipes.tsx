import { useState, type FC } from "react";
import { Loader } from "@mantine/core";
import { useRouter } from "next/router";
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
    <Loader />
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
    <p>{error.message}</p>
  ) : (
    <p>test</p>
  );
};
