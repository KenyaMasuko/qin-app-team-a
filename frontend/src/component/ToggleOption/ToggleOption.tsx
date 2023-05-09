import { forwardRef } from "react";
import { Chip, createPolymorphicComponent, rem } from "@mantine/core";

type ToggleOptionProps = {
  /**
   * label
   */
  children: string;
  /**
   * checked
   */
  checked: boolean;
};

const _ToggleOption = forwardRef<HTMLInputElement, ToggleOptionProps>(
  ({ children, checked, ...others }, ref) => (
    <Chip
      ref={ref}
      color="brand.2"
      checked={checked}
      styles={(theme) => ({
        label: {
          paddingLeft: rem(16),
          paddingRight: rem(16),
          color: theme.colors.text[1],
          fontWeight: 600,
          borderRadius: rem(21),
          borderColor: theme.colors.border[0],
          "&[data-checked]": {
            paddingLeft: rem(16),
            paddingRight: rem(16),
            color: theme.colors.text[2],
          },
        },
      })}
      {...others}
    >
      {children}
    </Chip>
  )
);

export const ToggleOption = createPolymorphicComponent<
  "input",
  ToggleOptionProps
>(_ToggleOption);
