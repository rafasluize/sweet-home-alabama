import styled from 'styled-components';

export const Input = styled.div`
  margin-bottom: 24px;
  flex: 1;

  input {
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    padding: 15px;
    display: block;
    width: 100%;
    border: none;
    height: 48px;

    &::placeholder {
      color: #909090;
    }
  }
`;

export default Input;
