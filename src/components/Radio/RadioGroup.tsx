import React from 'react';
import {RadioButton} from './RadioButton';

export interface RadioGroupProps {
  /**
   * The name of the radio group.
   */
  name: string;

  /**
   * An array of options for the radio group.
   */
  options: Array<{ label: string; value: string }>;

  /**
   * The selected value of the radio group.
   */
  selectedValue?: string;

  /**
   * Callback function when the selected value changes.
   */
  onChange?: (value: string) => void;

  /**
   * Custom CSS class names for styling.
   */
  className?: string;
}

export const RadioGroup= React.forwardRef<HTMLElement, RadioGroupProps>(({
  name,
  options,
  selectedValue,
  onChange,
  className = '',
}) => {
  return (
    <div className={`radio-group ${className}`}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          isChecked={option.value === selectedValue}
          onChange={(event: { target: { value: string; }; }) => onChange && onChange(event.target.value)}
        />
      ))}
    </div>
  );
});
