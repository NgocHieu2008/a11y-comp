import React, { useRef, useEffect, useState } from 'react';
import StarIcon from './StarIcon';

export interface RateProps {
  ariaLabel: string;
  value: number;
  maxRating: number;
  onChange: (value: number) => void;
  className?: string;
}

export const Rate: React.FC<RateProps> = ({ ariaLabel, value, maxRating, onChange, className }) => {
  const [rating, setRating] = useState(value > maxRating ? maxRating : value);
  const stars = useRef<HTMLButtonElement[]>([]);

  const handleClick = (index: number) => {
    setRating(index + 1);
    onChange(index + 1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick(index);
    }
  };

  useEffect(() => {
    stars.current.forEach((star, index) => {
      if (index < rating) {
        star.setAttribute('aria-checked', 'true');
      } else {
        star.setAttribute('aria-checked', 'false');
      }
    });
  }, [rating]);

  return (
    <div role="radiogroup" aria-label={ariaLabel} className={className}>
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          type="button"
          role="radio"
          tabIndex={index < rating ? 0 : -1}
          aria-checked={index < rating ? 'true' : 'false'}
          onClick={() => handleClick(index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          ref={(ref) => {
            if (ref) {
              stars.current[index] = ref;
            }
          }}
        >
          <StarIcon filled={index < rating} />
        </button>
      ))}
    </div>
  );
};