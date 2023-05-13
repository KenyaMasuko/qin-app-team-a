import React from "react";
import { MantineProvider } from "@mantine/core";
import { GlobalStyleProvider, customTheme } from "../src/lib/mantine";

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
];
