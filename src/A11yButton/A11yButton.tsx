import React, { useState } from "react";

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
   * @default "A button"
   */
  text?: string;
  /**
   * aria-label to more information for button
   * @default "A button"
   */
  ariaLabel?:string;
  /**
   * fontSize
   * @default "16px"
   */
  fontSize?:string;
  /**
   * Tab index of the button
   * @default 0
   */
  tabIndex?: number;
}

export const getContrastRatio = (backgroundColor: any, color: any) => {
  const lumA = getRelativeLuminance(backgroundColor);
  const lumB = getRelativeLuminance(color);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
};

export const getRelativeLuminance = (color: any) => {
  const hexColor = color.replace("#", "");
  const red = parseInt(hexColor.substr(0, 2), 16) / 255;
  const green = parseInt(hexColor.substr(2, 2), 16) / 255;
  const blue = parseInt(hexColor.substr(4, 2), 16) / 255;

  const gammaCorrectedRed =
    red <= 0.03928 ? red / 12.92 : ((red + 0.055) / 1.055) ** 2.4;
  const gammaCorrectedGreen =
    green <= 0.03928 ? green / 12.92 : ((green + 0.055) / 1.055) ** 2.4;
  const gammaCorrectedBlue =
    blue <= 0.03928 ? blue / 12.92 : ((blue + 0.055) / 1.055) ** 2.4;

  return (
    0.2126 * gammaCorrectedRed +
    0.7152 * gammaCorrectedGreen +
    0.0722 * gammaCorrectedBlue
  );
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({disabled, backgroundColor,color, text, ariaLabel,fontSize,tabIndex, onClick, ...props }, ref) => {
    const [isContrastValid, setIsContrastValid] = useState(true);

    const contrastRatio = getContrastRatio(backgroundColor, color);
    setIsContrastValid(contrastRatio>=4.5)
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={{
          backgroundColor: isContrastValid ? backgroundColor : "#F0F0F0",
          color: isContrastValid ? color : "#000000",
          minWidth: "44px",
          minHeight: "44px",
          fontSize: fontSize
        }}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
        ref={ref}
        {...props}
      >
        {text}
      </button>
    )
  }
);
