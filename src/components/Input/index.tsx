import React, { FC, FormEvent } from 'react';
import * as Styled from './styled';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  type?: string;
  maxLength?: number;
  onChange(e: string): void;
}

const Input: FC<InputProps> = ({ label, name, value, onChange, placeholder, maxLength, type }) => (
  <Styled.Input>
    {label && <label htmlFor="name">{label}</label>}
    <input
      name={name}
      id={name}
      type={type}
      data-testid="test-input"
      onChange={(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>) => onChange(e.currentTarget.value)}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  </Styled.Input>
);

export default Input;
