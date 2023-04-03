import { type ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { type AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
