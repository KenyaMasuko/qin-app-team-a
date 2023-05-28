import useSWR from "swr";
import { type Recipe } from "@/types/recipe";

type FetchRecipeReturnType = {
  data: Recipe | undefined;
  isLoading: boolean;
  error: Error | undefined;
};

export const useFetchRecipe = (selected: string[]): FetchRecipeReturnType => {
  const { data, isLoading, error } = useSWR<Recipe, Error>(
    "recipe",
    async () => {
      const res = await fetch(
        `/api/recipe?keywords=${encodeURI(selected.join(" "))}`
      );
      const data = (await res.json()) as Recipe;
      return data;
    }
  );

  return { data, isLoading, error };
};
