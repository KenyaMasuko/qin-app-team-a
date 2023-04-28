import { forwardRef } from "react";
import { Button, createPolymorphicComponent } from "@mantine/core";

type ActionButtonProps = {
  /**
   * label
   */
  children: React.ReactNode;
  /**
   * label
   */
  disabled: boolean;
};

const _ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ children, disabled, ...others }, ref) => (
    <Button ref={ref} disabled={disabled} {...others}>
      {children}
    </Button>
  )
);

export const ActionButton = createPolymorphicComponent<
  "button",
  ActionButtonProps
>(_ActionButton);
