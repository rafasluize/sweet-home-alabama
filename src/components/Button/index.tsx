import React, { FC } from 'react';
import add from '../../assets/icons/ic-add.png';
import remove from '../../assets/icons/ic-delete.png';
import * as Styled from './styled';
import { TVariant } from './type';

const Button: FC<{ variant: TVariant; onClick: () => void }> = ({ variant, onClick }) => (
  <Styled.Button variant={variant} type="button" onClick={onClick}>
    {variant === 'add' && <img src={add} alt="Adicionar item" />}
    {variant === 'remove' && <img src={remove} alt="Remover item" />}
  </Styled.Button>
);

export default Button;
