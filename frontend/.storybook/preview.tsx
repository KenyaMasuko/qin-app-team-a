import React from "react";
import { MantineProvider } from "@mantine/core";
import { GlobalStyleProvider, customTheme } from "../src/lib/mantine";

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <GlobalStyleProvider>
      <MantineProvider theme={customTheme}>{props.children}</MantineProvider>
    </GlobalStyleProvider>
  );
}

// export default preview;

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
