import { useState, type FC } from "react";
import { type Recipe } from "@/lib/types/recipe";
import { RecipeDetail } from "@/pages-component/RecipeDetail/RecipeDetail/RecipeDetail";
import { RecipeRecommender } from "@/pages-component/RecipeRecommender/RecipeRecommender/RecipeRecommender";

type ReicipesProps = Recipe;

type ViewState = "recommend" | "detail";

export const Recipes: FC<ReicipesProps> = ({ name, imageUrl, recipe }) => {
  const [viewState, setViewState] = useState<ViewState>("recommend");
  return (
    <>
      {viewState === "recommend" ? (
        <RecipeRecommender
          name={name}
          imageUrl={imageUrl}
          recipe={recipe}
          showDetailPage={() => {
            setViewState("detail");
          }}
        />
      ) : (
        <RecipeDetail
          name={name}
          imageUrl={imageUrl}
          recipe={recipe}
          returnToPreviousPage={() => {
            setViewState("recommend");
          }}
        />
      )}
    </>
  );
};
