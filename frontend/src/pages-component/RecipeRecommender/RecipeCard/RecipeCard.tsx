import type { FC } from "react";
import { Text, Box, createStyles } from "@mantine/core";
import { type Recipe } from "@/types/recipe";

const useStyles = createStyles<
  string,
  { imageUrl: string; onClick?: () => void }
>((theme, params) => ({
  card: {
    aspectRatio: "374 / 596",
    backgroundImage: `url(${params.imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    cursor: params.onClick != null ? "pointer" : "",
  },
  filter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
    background:
      "linear-gradient(180deg, rgba(217, 217, 217, 0) -12.75%, rgba(137, 137, 137, 0) 3.92%, rgba(0, 0, 0, 0) 22.15%, rgba(0, 0, 0, 0) 37.25%, rgba(0, 0, 0, 0) 67.14%, rgba(0, 0, 0, 0) 73.19%, #000000 87.25%)",
  },
  textContainer: {
    height: 134,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.sm,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: theme.spacing.xxs,
  },
  nameText: {
    color: theme.colors.text[3],
    fontSize: theme.fontSizes.md,
    fontWeight: 700,
  },
  ingredientsText: {
    color: theme.colors.text[3],
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
  },
}));

export type RecipeCardProps = Recipe & {
  onClick?: () => void;
};

export const RecipeCard: FC<RecipeCardProps> = ({
  name,
  imageUrl,
  recipe,
  onClick,
}) => {
  const { classes } = useStyles({ imageUrl, onClick });
  const ingredients = recipe.ingredients
    .map((ingredient) => ingredient.name)
    .join("、");
  return (
    <Box className={classes.card} onClick={onClick}>
      <Box className={classes.filter}>
        <Box className={classes.textContainer}>
          <Text className={classes.nameText}>{name}</Text>
          <Text className={classes.ingredientsText}>{ingredients}</Text>
        </Box>
      </Box>
    </Box>
  );
};
