import React, { FC, FormEvent } from 'react';
import * as Styled from './styled';

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  type?: string;
  maxLength?: number;
  onChange(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>): void;
}

const Input: FC<InputProps> = ({ label, name, value, onChange, placeholder, maxLength, type }) => {
  function changeValue(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    onChange(e);
  }

  return (
    <Styled.Input>
      {label && <label htmlFor="name">{label}</label>}
      <input
        name={name}
        id={name}
        type={type}
        onChange={changeValue}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </Styled.Input>
  );
};

export default Input;
