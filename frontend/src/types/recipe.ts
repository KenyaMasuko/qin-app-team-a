export type Recipe = {
  name: string;
  imageUrl: string;
  recipe: {
    ingredients: Array<{
      name: string;
      amount: string;
    }>;
    steps: string[];
    tips: string[];
  };
}