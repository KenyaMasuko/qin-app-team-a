import { type Dispatch, type SetStateAction, forwardRef } from "react";
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
  /**
   * onChange
   */
  onChange: Dispatch<SetStateAction<string[]>>;
};

const _ToggleOptionGroup = forwardRef<HTMLDivElement, ToggleOptionGroupProps>(
  ({ children, onClickOption = () => undefined, onChange, ...others }, ref) => (
    <Chip.Group multiple onChange={onChange} {...others}>
      <Group ref={ref} style={{ gap: "1rem 0.5rem" }}>
        {children.map((child) => (
          <ToggleOption
            key={child}
            value={child}
            onClick={() => {
              onClickOption(child);
            }}
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
