import React from 'react';

export interface CheckboxProps {
  /**
   * The label text for the checkbox.
   */
  label: string;

  /**
   * The value of the checkbox.
   */
  value: string;

  /**
   * Whether the checkbox is checked.
   */
  isChecked?: boolean;

  /**
   * Whether the checkbox is disabled.
   */
  isDisabled?: boolean;

  /**
   * Callback function when the checkbox is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Custom CSS class names for styling.
   */
  className?: string;
}

export const Checkbox = React.forwardRef<HTMLElement, CheckboxProps>(({
  label,
  value,
  isChecked = false,
  isDisabled = false,
  onChange,
  className = '',
}) => {
  return (
    <label htmlFor={value} className={`checkbox-container ${className}`}>
      <input
        type="checkbox"
        id={value}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
        aria-labelledby={`${value}-label`}
      />
      <span id={`${value}-label`}>{label}</span>
    </label>
  );
});
