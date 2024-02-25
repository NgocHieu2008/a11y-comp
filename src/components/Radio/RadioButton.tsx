import React from 'react';

 export interface RadioButtonProps {
  /**
   * The label text for the radio button.
   */
  label: string;

  /**
   * The name of the radio button group.
   */
  name: string;

  /**
   * The value of the radio button.
   */
  value: string;

  /**
   * Whether the radio button is checked.
   */
  isChecked?: boolean;

  /**
   * Callback function when the radio button is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Custom CSS class names for styling.
   */
  className?: string;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(({
  label,
  name,
  value,
  isChecked = false,
  onChange,
  className = '',
}) => {
  return (
    <label htmlFor={name + '-' + value} className={`radio-button ${className}`}>
      <input
        type="radio"
        id={name + '-' + value}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        aria-labelledby={name + '-' + value + '-label'}
      />
      <span id={name + '-' + value + '-label'}>{label}</span>
    </label>
  );
});
