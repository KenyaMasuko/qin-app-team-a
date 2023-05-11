import React, { type FC } from "react";
import { Container, useMantineTheme, type MantineTheme } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { ActionButton } from "@/component/ActionButton/ActionButton";
import { Logo } from "@/component/Logo/Logo";
import { CenterChildren } from "@/pages-component/CenterChildren";

export const Main: FC = () => {
  const theme: MantineTheme = useMantineTheme();

  return (
    <>
      <Head>
        <title>コレシピ - 気分にあった料理のレシピを提案</title>
        <meta
          name="description"
          content="コレシピは、気分にあった料理のレシピを提案するサービスです。"
        />
      </Head>
      <CenterChildren>
        <Container
          sx={{
            position: "relative",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <Container
            sx={() => ({
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            })}
          >
            <Logo size="large" />
          </Container>

          <Link
            href="#"
            style={{
              width: "100%",
              textDecoration: "none",
              position: "absolute",
              left: "50%",
              bottom: theme.spacing.xl,
              transform: "translateX(-50%)",
            }}
          >
            <ActionButton disabled={false}>料理を見つける</ActionButton>
          </Link>
        </Container>
      </CenterChildren>
    </>
  );
};
