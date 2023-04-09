import type { FC, ReactNode } from "react";
import { Global } from "@mantine/core";

export const GlobalStyleProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Global
        styles={{
          "*": { wordBreak: "break-all" },
          'button, *[type="button"]': { transform: "none !important" },
        }}
      />
      {children}
    </>
  );
};
