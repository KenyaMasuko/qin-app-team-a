import { type MantineThemeOverride } from "@mantine/core";

export const customTheme: MantineThemeOverride = {
  colors: {
    brand: ["#FFFFFF", "#FFEE7D", "#F49C2D", "#C4D700"],
    text: ["#CECECE", "#999999", "#333333", "#FFFFFF"],
    border: ["#CCCCCC", "#DDDDDD"],
    success: ["#4CAF50", "#00C853"],
    error: ["#FF5722", "#D50000"],
  },
  fontFamily: "Hiragino Kaku Gothic Pro, ヒラギノ角ゴ Pro, sans-serif",
  fontSizes: {
    xxs: "0.75rem",
    xs: "0.875rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "3rem",
  },
  spacing: {
    xxs: "4px",
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
  },
};
