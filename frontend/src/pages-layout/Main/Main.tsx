import React, { type FC } from "react";
import { Container, type MantineTheme } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { ActionButton } from "@/component/ActionButton/ActionButton";
import { Logo } from "@/component/Logo/Logo";

export const Main: FC = () => {
  return (
    <>
      <Head>
        <title>Qin App Team A</title>
        <meta
          name="description"
          content="Qin Salonのチーム開発で作成したレシピアプリ"
        />
      </Head>
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
      <div>
        <Container
          sx={(theme: MantineTheme) => ({
            position: "absolute",
            bottom: theme.spacing.xl,
            left: "50%",
            transform: "translateX(-50%)",
          })}
        >
          <Link href={""}>
            <ActionButton disabled={false}>料理を見つける</ActionButton>
          </Link>
        </Container>
      </div>
    </>
  );
};
