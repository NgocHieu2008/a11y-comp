import React from "react";

export interface ListItemProps {
  /**
   * Dữ liệu của item trong list.
   */
  item: any;

  /**
   * Mô tả chi tiết cho từng item trong list.
   * 
   */
  ariaLabel?: string;

  /**
   * Vị trí tab index cho item.
   */
  tabIndex?: number;
}

export const A11yListItem = React.forwardRef<HTMLLIElement, ListItemProps>(({
  item,
  ariaLabel,
  tabIndex = 0,
  ...props
}) => {
  return (
    <li role="listitem" tabIndex={tabIndex} aria-label={ariaLabel} {...props}>
      {item}
    </li>
  );
});

