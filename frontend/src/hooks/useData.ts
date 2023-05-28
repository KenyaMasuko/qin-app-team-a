import useSWR from "swr";
import { type Recipe } from "@/types";

type FetchRecipeReturnType = {
  data: Recipe | undefined;
  isLoading: boolean;
  error: Error | undefined;
};

/**
 * @function encodeQueryParam
 * @param keywords - Array of keywords to be encoded
 * @returns Encoded query parameter
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
 */
export const encodeQueryParam = (keywords: string[]): string => {
  const splitKeywords = keywords.join(" ");

  return encodeURI(splitKeywords);
};

export const useFetchRecipe = (selected: string[]): FetchRecipeReturnType => {
  const { data, isLoading, error } = useSWR<Recipe, Error>(
    `/api/recipe?keywords=${encodeQueryParam(selected)}`
  );

  return { data, isLoading, error };
};
