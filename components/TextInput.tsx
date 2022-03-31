import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface TextInputProps extends FieldRenderProps<string, HTMLElement> {
  label: string;
  type: string;
  isTextArea?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  input,
  meta,
  isTextArea = false,
}) => {
  const { invalid, error, touched } = meta;
  const hasLocalError = !!invalid && !!touched;

  return (
    <div>
      <div>
        <label>{label}</label>
        {hasLocalError && <span className="error">{error}</span>}
      </div>
      {isTextArea ? <textarea {...input} /> : <input type={type} {...input} />}
    </div>
  );
};
