import { type DefaultMantineColor } from "@mantine/core";

type CustomColors = "brand" | "text" | "border" | "success" | "error";
type ExtendedCustomColors = CustomColors | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
