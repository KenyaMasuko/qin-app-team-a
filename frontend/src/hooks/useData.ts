import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { type Recipe } from "@/types/recipe";

type FetchRecipeReturnType = {
  data: Recipe | undefined;
  isValidating: boolean;
  error: Error | undefined;
  getNextRecipe: (currentRecipeName: string) => void;
};

const isString = (value: unknown): value is string => typeof value === "string";

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === "string");

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = (await res.json()) as Recipe;
  return data;
};
export const useFetchRecipe = (): FetchRecipeReturnType => {
  const router = useRouter();
  // const { keywords, existingRecipeNames } = router.query;
  const query = router.query;
  const safeExistingRecipeNames = isStringArray(query.existingRecipeNames)
    ? query.existingRecipeNames
    : [];
  const [existingRecipeNames, setExistingRecipeNames] = useState(
    safeExistingRecipeNames
  );
  const safeKeywords = isString(query.keywords) ? query.keywords : "";

  const { data, isValidating, error } = useSWR<Recipe, Error>(
    `/api/recipe?keywords=${encodeURIComponent(
      safeKeywords
    )}&existingRecipeNames=${encodeURIComponent(
      JSON.stringify(existingRecipeNames)
    )}`,
    fetcher
  );

  const getNextRecipe = (currentRecipeName: string) => {
    setExistingRecipeNames([...existingRecipeNames, currentRecipeName]);
  };

  return {
    data,
    isValidating,
    error,
    getNextRecipe,
  };
};
