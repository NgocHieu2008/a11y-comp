import React, { useState, useRef } from 'react';
import { StyledSelectContainer, StyledSelectList, StyledSelectTrigger } from './SelectStyled.style';

export interface SelectProps {
  /**
   * Array of options for the select.
   */
  options: Array<{ label: string; value: string }>;

  /**
   * Selected value of the select.
   */
  selectedValue?: string;

  /**
   * Callback function when the selected value changes.
   */
  onChange?: (value: string) => void;

  /**
   * Aria label for the select component.
   */
  ariaLabel?: string;

  /**
   * Custom CSS class names for styling.
   */
  className?: string;
}

export const Select= React.forwardRef<HTMLElement, SelectProps>(({
  options,
  selectedValue,
  onChange,
  ariaLabel,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
    triggerRef.current?.focus();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleListItemClick = (value: string) => {
    onChange && onChange(value);
    handleClose();
  };

  return (
    <StyledSelectContainer className={className}>
      <StyledSelectTrigger onClick={handleOpen} ref={triggerRef} aria-label={ariaLabel}>
        {selectedValue || 'Select an option'}
      </StyledSelectTrigger>
      {isOpen && (
        <StyledSelectList>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleListItemClick(option.value)}>
              {option.label}
            </li>
          ))}
        </StyledSelectList>
      )}
    </StyledSelectContainer>
  );
});

