import React from "react";
import { MantineProvider } from "@mantine/core";
import { GlobalStyleProvider, customTheme } from "../src/lib/mantine";

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <GlobalStyleProvider>
      {/* FIXME normaliseCSSが効かない */}
      <MantineProvider theme={customTheme} withGlobalStyles withNormalizeCSS>
        <Center>
          <Center maw={390} h={"100vh"}>
            {props.children}
          </Center>
        </Center>
      </MantineProvider>
    </GlobalStyleProvider>
  );
}

// export default preview;

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
