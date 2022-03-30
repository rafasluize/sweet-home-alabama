import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content: center;
  }
  body, input, button, html {
    font-size: 16px !important;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
  ::-moz-selection {
    color:#fff;
    background-color:#B72C2A
  }
  ::selection {
    color:#fff;
    background-color:#B72C2A
  }
  ul {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  a {
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;

export interface DflexProps {
  justifyContent?: string;
  alignItems?: string;
  flexDirecton?: string;
  gap?: string;
}
export const DFlex = styled.div<DflexProps>`
  display: flex;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'start')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'start')};
  flex-direction: ${(props) => (props.flexDirecton ? props.flexDirecton : 'row')};
  gap: ${(props) => (props.gap ? props.gap : '')};
`;

export const TextColor = styled.span<{ color: string }>`
  color: ${(props) => (props.color ? props.color : '#000')};
`;
