import React from "react"

import "./Button.css";

export const Button = React.forwardRef(
  ({ kind = "primary", ...props }, ref) => {
      return <button data-button={`kind:${kind}`} ref={ref} {...props} />;
  },
);