import { type ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { type AppProps } from "next/app";
import Head from "next/head";
import { type Fetcher, SWRConfig } from "swr";
import { GlobalStyleProvider, customTheme } from "@/lib/mantine";
import { type Recipe } from "@/types";

const fetcher: Fetcher<Recipe, string> = async (url) => {
  const res = await fetch(url);
  const data = (await res.json()) as Recipe;
  return data;
};

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
          <SWRConfig
            value={{
              fetcher,
            }}
          >
            <Component {...pageProps} />
          </SWRConfig>
        </MantineProvider>
      </GlobalStyleProvider>
    </>
  );
}
