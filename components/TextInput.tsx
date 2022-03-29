import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface TextInputProps extends FieldRenderProps<string, HTMLElement> {
  label: string;
  type: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  input,
  meta,
}) => {
  const { invalid, error, touched } = meta;
  const hasLocalError = !!invalid && !!touched;

  return (
    <div>
      <label>{label}</label>
      <input type={type} {...input} />
      {hasLocalError && <span>{error}</span>}
    </div>
  );
};
