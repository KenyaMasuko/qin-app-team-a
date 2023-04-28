import { type ReactNode } from "react";
import { Center, MantineProvider } from "@mantine/core";
import { type AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyleProvider, customTheme } from "@/lib/mantine";

export default function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyleProvider>
        <MantineProvider theme={customTheme} withGlobalStyles withNormalizeCSS>
          <Center>
            <Center maw={390} h={"100vh"}>
              <Component {...pageProps} />
            </Center>
          </Center>
        </MantineProvider>
      </GlobalStyleProvider>
    </>
  );
}
