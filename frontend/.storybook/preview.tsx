import React from "react";
import { MantineProvider } from "@mantine/core";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { GlobalStyleProvider, customTheme } from "../src/lib/mantine";

// Initialize MSW
initialize();

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <GlobalStyleProvider>
      <MantineProvider theme={customTheme} withGlobalStyles withNormalizeCSS>
        {props.children}
      </MantineProvider>
    </GlobalStyleProvider>
  );
}

export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
  mswDecorator,
];
