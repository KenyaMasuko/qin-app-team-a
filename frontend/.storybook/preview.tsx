import React from "react";
import { MantineProvider } from "@mantine/core";
// import theme object you've exported in previous step
import { customTheme } from "../src/lib/mantine/";

// Create a wrapper component that will contain all your providers.
// Usually you should render all providers in this component:
// MantineProvider, DatesProvider, Notifications, Spotlight, etc.
function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={customTheme} withGlobalStyles withNormalizeCSS>
      {props.children}
    </MantineProvider>
  );
}

const themeDecorator: (renderStory: () => JSX.Element) => JSX.Element = (
  renderStory
) => <ThemeWrapper>{renderStory()}</ThemeWrapper>;

export const decorators = [themeDecorator];
