import styled, { css } from 'styled-components';
import { VariantType } from './type';

export const Button = styled.button<{ variant: VariantType }>`
  ${({ variant }) =>
    variant &&
    variant === 'add' &&
    css`
      background: #40d9b8;
      img {
        width: 24px;
        height: 24px;
      }
    `}
  border-radius: 100px;
  width: 48px;
  height: 48px;
  border: none;
`;

export default Button;
