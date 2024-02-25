import React, { useState } from "react";

export interface FormInputProps {
  /**
   * Label text cho element input.
   */
  label: string;

  /**
   * Kiểu dữ liệu của input (e.g., text, email, password).
   */
  type?: string;

  /**
   * Giá trị mặc định cho input.
   */
  defaultValue?: string;

  /**
   * Placeholder
   */
  placeHolder?:string;

  /**
   * Callback khi giá trị input thay đổi.
   */
  onChange?: (value: string) => void;

  /**
   * Hiển thị label hay không.
   */
  hideLabel?: boolean;

  /**
   * Props ràng buộc cho input value.
   */
  required?: boolean;
  minLength?: number;
  email?: boolean;

  /**
   * Hiển thị thông báo lỗi hay không.
   */
  showError?: boolean;

  /**
   * Text thông báo lỗi.
   */
  errorMessage?: string;

  /**
   * ID của element input (bắt buộc).
   */
  id: string;

  /**
   * Các props bổ sung cho element input.
   */
  inputProps?: React.ComponentProps<"input">;

  /**
   * Các props bổ sung cho element label.
   */
  labelProps?: React.ComponentProps<"label">;
}

export const FormInput=React.forwardRef<HTMLInputElement, FormInputProps>(({
  label,
  type = "text",
  defaultValue = "",
  placeHolder="",
  onChange,
  hideLabel = false,
  required,
  minLength,
  email,
  showError = false,
  errorMessage,
  id,
  inputProps = {},
  labelProps = {},
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const isValid = () => {
    if (!required && !minLength && !email) return true;

    if (required && !value) return false;

    if (minLength && value.length < minLength) return false;

    if (email && !/\S+@\S+\.\S+/.test(value)) return false;

    return true;
  };

  return (
    <div>
      {!hideLabel && (
        <label htmlFor={id} {...labelProps}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        {...inputProps}
        aria-labelledby={!hideLabel ? id : undefined}
        aria-invalid={!isValid()}
      />
      {showError && !isValid() && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
});
