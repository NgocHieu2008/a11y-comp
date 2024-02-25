import React, { useEffect, useState } from "react";
import { getContrastRatio } from "../../hooks/getContrastRatio";

export interface ButtonProps extends React.ComponentProps<"button"> {
  /**
   * Whether this button is in a disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Background color of button in HEX format (#F0F0F0)
   * @default "#F0F0F0"
   */
  backgroundColor?: string;
  /**
   * Color of button's content in HEX format (#000000)
   * @default "#000000"
   */
  color?: string;
  /**
   * The text to displlay on the button
   */
  text: string;
  /**
   * aria-label to more information for button
   */
  ariaLabel?: string;
  /**
   * fontSize
   * @default "16px"
   */
  fontSize?: string;
  /**
   * Tab index of the button
   * @default 0
   */
  tabIndex?: number;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled,
      backgroundColor,
      color,
      text,
      ariaLabel,
      fontSize,
      tabIndex,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isContrastValid, setIsContrastValid] = useState(true);
    useEffect(() => {
      setIsContrastValid(getContrastRatio(backgroundColor, color) >= 4.5);
    }, [backgroundColor, color]);
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={{
          backgroundColor: isContrastValid ? backgroundColor : "#F0F0F0",
          color: isContrastValid ? color : "#000000",
          minWidth: "44px",
          fontSize: fontSize,
        }}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
        ref={ref}
        {...props}
      >
        {text}
      </button>
    );
  }
);
