import React from "react";
import {A11yListItem} from "./A11yListItem";

interface ListProps {
  /**
   * Kiểu dữ liệu của các item trong list.
   */
  items: any[];

  /**
   * Liệu list là có thứ tự hay không.
   */
  ordered?: boolean;

  /**
   * Label mô tả nội dung của list.
   */
  ariaLabel?: string;

  /**
   * ID của element chứa label cho list.
   */
  ariaLabelledby?: string;
}

export const A11yList = React.forwardRef<HTMLOListElement|HTMLUListElement, ListProps>(({
  items,
  ordered = false,
  ariaLabel,
  ariaLabelledby,
  ...props
}) => {
  const ElementType = ordered ? "ol" : "ul";

  return (
    <ElementType
      {...props}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      role="list"
    >
      {items.map((item, index) => (
        <A11yListItem key={index} item={item} />
      ))}
    </ElementType>
  );
});
