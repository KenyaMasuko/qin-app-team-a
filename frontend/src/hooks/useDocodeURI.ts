// query parameterをデコードするhook

export const useDecodeURI = (keywords: string): string[] => {
  console.log(keywords);
  return decodeURI(keywords).split(" ");
};
