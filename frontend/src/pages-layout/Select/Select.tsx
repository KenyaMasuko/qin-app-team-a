import React, { useState, type FC } from "react";
import { Container, Space, Text, Title, useMantineTheme } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { ArrowNarrowLeft } from "tabler-icons-react";
import { ActionButton } from "@/component/ActionButton/ActionButton";
import { ToggleOptionGroup } from "@/component/ToggleOptionGroup/ToggleOptionGroup";
import { encodeQueryParam } from "@/hooks/useData";
import { CenterChildren } from "@/pages-component/CenterChildren";
import { SearchLink } from "@/pages-component/SearchLink";

export const Select: FC = () => {
  const theme = useMantineTheme();

  const [selected, setSelected] = useState<string[]>([]);

  const encodedKeywords = encodeQueryParam(selected);

  const options = [
    "肉料理",
    "魚料理",
    "サラダ",
    "麺",
    "米",
    "パン",
    "野菜たっぷり",
    "ヘルシー",
    "タンパク質多め",
    "パーティー料理",
    "和食",
    "韓国料理",
    "中華料理",
    "イタリアン",
    "揚げ物",
  ];

  return (
    <>
      <Head>
        <title>コレシピ - 今の気分を入力</title>
        <meta
          name="description"
          content="コレシピは、気分にあった料理のレシピを提案するサービスです。"
        />
      </Head>
      <CenterChildren>
        <Container
          px={0}
          mt={theme.spacing.xl}
          sx={{
            minHeight: "100vh",
            width: "100%",
            position: "relative",
          }}
        >
          <Link href="/">
            <ArrowNarrowLeft />
          </Link>
          <Container mt="md">
            <Title
              order={1}
              sx={(theme) => ({
                fontSize: theme.fontSizes.xl,
              })}
            >
              今の気分は？
            </Title>
            <Space h="sm" />
            <Text fz="sm" c="text.0" fw="bold">
              当てはまるものを5つまで選んでね
            </Text>

            <Space h="lg" />
            <ToggleOptionGroup onChange={setSelected}>
              {options.map((option) => option)}
            </ToggleOptionGroup>
            {selected.length === 0 || selected.length >= 6 ? (
              <div
                style={{
                  width: "100%",
                  textDecoration: "none",
                  position: "absolute",
                  left: "50%",
                  bottom: theme.spacing.xl,
                  transform: "translateX(-50%)",
                }}
              >
                <ActionButton disabled>探す</ActionButton>
              </div>
            ) : (
              <SearchLink
                query={encodedKeywords}
                isSelect={selected.length === 0}
              />
            )}
          </Container>
        </Container>
      </CenterChildren>
    </>
  );
};
