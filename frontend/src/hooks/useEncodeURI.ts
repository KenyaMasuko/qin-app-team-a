// query parameterをエンコードするhook

export const useEncodeURI = (keywords: string[]): string => {
  const splitKeywords = keywords.join(" ");

  return encodeURI(splitKeywords);
};
