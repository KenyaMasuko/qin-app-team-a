import { forwardRef } from "react";
import { Button, Text, createPolymorphicComponent, rem } from "@mantine/core";

type ActionButtonProps = {
  /**
   * label
   */
  children: React.ReactNode;
  /**
   * disabled
   */
  disabled: boolean;
};

const _ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ children, disabled, ...others }, ref) => (
    <Button
      ref={ref}
      color="brand.1"
      disabled={disabled}
      radius={49}
      styles={(theme) => ({
        root: {
          height: rem(48),
          "&[data-disabled]": {
            backgroundColor: theme.colors.brand[0],
            border: `1px solid ${theme.colors.border[1]}`,
          },
        },
      })}
      fullWidth
      {...others}
    >
      <Text color={disabled ? "text.0" : "text.2"} size={"md"}>
        {children}
      </Text>
    </Button>
  )
);

export const ActionButton = createPolymorphicComponent<
  "button",
  ActionButtonProps
>(_ActionButton);
