import React, { type FC, type ReactNode } from "react";
import { Center } from "@mantine/core";

export const CenterChildren: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Center>
      <Center maw={390} w="100%">
        {children}
      </Center>
    </Center>
  );
};
