import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  error?: string | undefined;
  labelPosition?: 'top' | 'left';
  required?: boolean;
  disabled?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
  const { label, type, name, value, onChange, onKeyDown, error, labelPosition, required, disabled } = props;

  const labelStyle = labelPosition === 'top' ? { marginBottom: '0.5rem' } : {};
  const labelTextAlignStyle: React.CSSProperties = labelPosition === 'left' ? { textAlign: 'right', marginRight: '0.5rem' } : {};

  const inputProps = {
    ref,
    type,
    name,
    value,
    onChange,
    onKeyDown,
    id: name,
    disabled,
    required,
  };

  return (
    <div>
      <label style={labelStyle} htmlFor={name}>
        <span style={labelTextAlignStyle}>{label}</span>
      </label>
      <input
        {...inputProps}
        aria-describedby={`${name}-error`}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && <ErrorMessage id={`${name}-error`} role="alert">{error}</ErrorMessage>}
    </div>
  );
});