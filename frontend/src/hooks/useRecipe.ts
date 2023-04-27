import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  console.log(url, response);
  if (!response.ok) {
    throw new Error("エラーが発生しました");
  }

  return response.json();
};

export const useRecipe = () => {
  const { data, error } = useSWR(`/api/recipe`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
