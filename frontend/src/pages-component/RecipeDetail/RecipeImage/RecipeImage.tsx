import type { FC } from "react";
import { Text, Box, createStyles } from "@mantine/core";
import { type Recipe } from "@/types/recipe";

const useStyles = createStyles<string, { imageUrl: string }>(
  (theme, params) => ({
    card: {
      backgroundImage: `url(${params.imageUrl})`,
      backgroundSize: "cover",
      borderRadius: 8,
      overflow: "hidden",
      height: 298,
      minWidth: 340,
      width: "100%",
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
      height: 72,
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
  })
);

export type RecipeImageProps = Omit<Recipe, "recipe">;

export const RecipeImage: FC<RecipeImageProps> = ({ name, imageUrl }) => {
  const { classes } = useStyles({ imageUrl });
  return (
    <Box className={classes.card}>
      <Box className={classes.filter}>
        <Box className={classes.textContainer}>
          <Text className={classes.nameText}>{name}</Text>
        </Box>
      </Box>
    </Box>
  );
};
