import { forwardRef } from "react";
import { Chip, Group, createPolymorphicComponent } from "@mantine/core";
import { ToggleOption } from "../ToggleOption/ToggleOption";

type ToggleOptionGroupProps = {
  /**
   * label
   */
  children: string[];
  /**
   * onClick
   */
  onClickOption?: (value: string) => void;
};

const _ToggleOptionGroup = forwardRef<HTMLDivElement, ToggleOptionGroupProps>(
  (
    { children, onClickOption = (child) => console.log(child), ...others },
    ref
  ) => (
    <Chip.Group multiple {...others}>
      <Group ref={ref} style={{ gap: "1rem 0.5rem" }}>
        {children.map((child) => (
          <ToggleOption
            key={child}
            value={child}
            onClick={() => onClickOption(child)}
          >
            {child}
          </ToggleOption>
        ))}
      </Group>
    </Chip.Group>
  )
);

export const ToggleOptionGroup = createPolymorphicComponent<
  "div",
  ToggleOptionGroupProps
>(_ToggleOptionGroup);
