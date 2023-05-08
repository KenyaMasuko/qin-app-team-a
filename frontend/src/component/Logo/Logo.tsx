import { type FC } from "react";
import { createStyles } from "@mantine/core";

type LogoProps = {
  size?: "small" | "medium" | "large";
};

const useStyles = createStyles<string, { size: string }>((theme, params) => ({
  wrapper: {
    backgroundColor: theme.colors.brand[1],
    width: params.size === "small" ? 40 : params.size === "medium" ? 60 : 80,
    height: params.size === "small" ? 40 : params.size === "medium" ? 60 : 80,
    padding: params.size === "small" ? 10 : params.size === "medium" ? 15 : 20,
    fontSize:
      params.size === "small"
        ? theme.fontSizes.xs
        : params.size === "medium"
        ? theme.fontSizes.md
        : theme.fontSizes.lg,
    fontFamily: theme.fontFamily,
    display: "grid",
    placeContent: "center",
    borderRadius: "15%",
    lineHeight: 1,
  },
}));

export const Logo: FC<LogoProps> = ({ size = "medium" }) => {
  const { classes } = useStyles({ size });
  return (
    <h1 className={classes.wrapper}>
      コレ
      <br />
      シピ
    </h1>
  );
};
