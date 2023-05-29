import { type FC } from "react";
import { useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { ActionButton } from "@/component/ActionButton/ActionButton";

type Props = {
  query: string;
  isSelect: boolean;
};

export const SearchLink: FC<Props> = (props) => {
  const theme = useMantineTheme();
  const { query, isSelect } = props;

  return (
    <Link
      href={{
        pathname: "/recipe",
        query: { keywords: query },
      }}
      style={{
        width: "100%",
        textDecoration: "none",
        position: "absolute",
        left: "50%",
        bottom: theme.spacing.xl,
        transform: "translateX(-50%)",
      }}
    >
      <ActionButton disabled={!isSelect}>探す</ActionButton>
    </Link>
  );
};
