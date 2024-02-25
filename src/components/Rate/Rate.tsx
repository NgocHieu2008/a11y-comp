import React, { useState } from "react";

export interface RateProps {
  /**
   * The maximum number of ratings.
   */
  max: number;

  /**
   * The initial rating value.
   */
  initialValue?: number;

  /**
   * Callback function when the rating changes.
   */
  onChange?: (value: number) => void;

  /**
   * Aria label for the overall component.
   */
  ariaLabel?: string;

  /**
   * Custom CSS class names for styling.
   */
  className?: string;
}

export const Rate = React.forwardRef<HTMLElement, RateProps>(({
  max,
  initialValue = 0,
  onChange,
  ariaLabel = "Rating",
  className = "",
}) => {
  const [rating, setRating] = useState(initialValue);

  const handleRatingChange = (newRating: number) => {
    if (newRating < 0 || newRating > max) {
      return; // Prevent invalid ratings
    }
    setRating(newRating);
    onChange && onChange(newRating);
  };

  return (
    <div className={`rate-container ${className}`}>
      <span aria-label={`${ariaLabel}: ${rating} out of ${max}`} role="img">
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`${i + 1} star rating`}
            onClick={() => handleRatingChange(i + 1)}
            className={`rate-star ${rating >= i + 1 ? "active" : ""}`}
          >
            ★
          </span>
        ))}
      </span>
    </div>
  );
});
