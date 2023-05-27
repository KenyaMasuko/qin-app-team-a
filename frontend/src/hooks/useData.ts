import useSWR from "swr";
import { useEncodeURI } from "@/hooks/useEncodeURI";
import { type Recipe } from "@/types/recipe";

type FetchRecipeReturnType = {
  data: Recipe | undefined;
  isLoading: boolean;
  error: Error | undefined;
};

export const useFetchRecipe = (selected: string[]): FetchRecipeReturnType => {
  const { data, isLoading, error } = useSWR<Recipe, Error>(
    `/api/recipe?keywords=${useEncodeURI(selected)}`
  );

  return { data, isLoading, error };
};
